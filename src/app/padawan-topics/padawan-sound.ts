import { DestroyRef, Injectable, inject, signal } from '@angular/core';

export type PadawanSoundName =
  | 'hover'
  | 'click'
  | 'topicReveal'
  | 'holocronOpen'
  | 'whoosh'
  | 'success'
  | 'error'
  | 'cardSelect'
  | 'muteToggle'
  | 'ambient';

export const PADAWAN_SOUND_VOLUME: Record<PadawanSoundName, number> = {
  hover: 0.18,
  click: 0.28,
  topicReveal: 0.34,
  holocronOpen: 0.3,
  whoosh: 0.22,
  success: 0.3,
  error: 0.22,
  cardSelect: 0.25,
  muteToggle: 0.24,
  ambient: 0.06,
};

const PADAWAN_SOUND_PATH: Record<PadawanSoundName, string> = {
  hover: '/music/padawan-hover.wav',
  click: '/music/kyber-click.wav',
  topicReveal: '/music/topic-reveal.wav',
  holocronOpen: '/music/holocron-open.wav',
  whoosh: '/music/force-whoosh.wav',
  success: '/music/force-success.wav',
  error: '/music/dark-side-error.wav',
  cardSelect: '/music/card-select.wav',
  muteToggle: '/music/mute-toggle.wav',
  ambient: '/music/ambient-force-hum-loop.wav',
};

const BACKGROUND_MUSIC_PATH = '/music/background.mp3';
const SOUND_STORAGE_KEY = 'padawan.sound.enabled';
const HOVER_DEBOUNCE_MS = 180;
const BACKGROUND_VOLUME = 0.045;

@Injectable({ providedIn: 'root' })
export class PadawanSound {
  private readonly destroyRef = inject(DestroyRef);
  private readonly enabledSignal = signal(this.readInitialEnabled());
  private readonly ambientSignal = signal(this.enabledSignal());
  private readonly audio = new Map<PadawanSoundName, HTMLAudioElement>();
  private backgroundAudio: HTMLAudioElement | null = null;
  private preloaded = false;
  private interacted = false;
  private lastHoverAt = 0;
  private readonly isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  private readonly mediaSupported =
    this.isBrowser && !window.navigator.userAgent.toLowerCase().includes('jsdom');

  readonly enabled = this.enabledSignal.asReadonly();
  readonly ambientEnabled = this.ambientSignal.asReadonly();

  constructor() {
    if (!this.isBrowser) {
      return;
    }

    const markInteracted = (event: Event) => {
      if (this.isTypingTarget(event.target)) {
        return;
      }

      this.markInteracted();
      window.removeEventListener('pointerdown', markInteracted);
      window.removeEventListener('keydown', markInteracted);
    };

    window.addEventListener('pointerdown', markInteracted, { passive: true });
    window.addEventListener('keydown', markInteracted);

    window.setTimeout(() => {
      if (!this.enabledSignal()) {
        return;
      }

      this.startBackground();

      if (this.ambientSignal()) {
        this.startAmbient();
      }
    }, 0);

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('pointerdown', markInteracted);
      window.removeEventListener('keydown', markInteracted);
      this.stopAmbient();
      this.stopBackground();
    });
  }

  setEnabled(next: boolean): void {
    if (!this.isBrowser) {
      this.enabledSignal.set(next);
      return;
    }

    this.enabledSignal.set(next);
    this.storePreference(next);
    this.markInteracted();

    if (next) {
      this.ambientSignal.set(true);
      this.playDirect('muteToggle', true);
      this.startBackground();
      this.startAmbient();
      return;
    }

    this.stopAmbient();
    this.stopBackground();
    this.playDirect('muteToggle', true);
  }

  toggle(): void {
    this.setEnabled(!this.enabledSignal());
  }

  play(name: PadawanSoundName): void {
    if (!this.enabledSignal() || this.isActiveTyping()) {
      return;
    }

    if (name === 'hover') {
      const now = Date.now();
      if (now - this.lastHoverAt < HOVER_DEBOUNCE_MS) {
        return;
      }
      this.lastHoverAt = now;
    }

    this.playDirect(name);
  }

  startAmbient(): void {
    this.ambientSignal.set(true);

    if (!this.enabledSignal()) {
      return;
    }

    const ambient = this.getAudio('ambient');
    ambient.loop = true;
    ambient.volume = PADAWAN_SOUND_VOLUME.ambient;
    this.safePlay(ambient);
  }

  stopAmbient(): void {
    this.ambientSignal.set(false);
    const ambient = this.audio.get('ambient');

    if (!ambient) {
      return;
    }

    if (!this.mediaSupported) {
      return;
    }

    ambient.pause();
    ambient.currentTime = 0;
  }

  private readInitialEnabled(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    let stored: string | null = null;

    try {
      stored = window.localStorage.getItem(SOUND_STORAGE_KEY);
    } catch {
      stored = null;
    }

    if (stored !== null) {
      return stored === 'true';
    }

    return !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  }

  private storePreference(next: boolean): void {
    try {
      window.localStorage.setItem(SOUND_STORAGE_KEY, String(next));
    } catch {
      // Preference persistence should never block the page.
    }
  }

  private markInteracted(): void {
    this.interacted = true;
    this.preloadShortSounds();

    if (this.enabledSignal()) {
      this.startBackground();

      if (this.ambientSignal()) {
        this.startAmbient();
      }
    }
  }

  private preloadShortSounds(): void {
    if (this.preloaded) {
      return;
    }

    this.preloaded = true;

    for (const name of Object.keys(PADAWAN_SOUND_PATH) as PadawanSoundName[]) {
      if (name === 'ambient') {
        continue;
      }

      const sound = this.getAudio(name);
      sound.preload = 'auto';
      this.safeLoad(sound);
    }
  }

  private playDirect(name: PadawanSoundName, ignoreEnabled = false): void {
    if ((!ignoreEnabled && !this.enabledSignal()) || this.isActiveTyping()) {
      return;
    }

    if (!this.mediaSupported) {
      return;
    }

    const sound = this.getAudio(name);
    sound.volume = PADAWAN_SOUND_VOLUME[name];
    sound.loop = name === 'ambient';

    try {
      sound.pause();
      sound.currentTime = 0;
    } catch {
      return;
    }

    this.safePlay(sound);
  }

  private startBackground(): void {
    if (
      !this.enabledSignal() ||
      this.isActiveTyping() ||
      !this.mediaSupported
    ) {
      return;
    }

    const background = this.getBackgroundAudio();
    background.loop = true;
    background.volume = BACKGROUND_VOLUME;
    this.safePlay(background);
  }

  private stopBackground(): void {
    if (!this.backgroundAudio) {
      return;
    }

    if (!this.mediaSupported) {
      return;
    }

    this.backgroundAudio.pause();
    this.backgroundAudio.currentTime = 0;
  }

  private getAudio(name: PadawanSoundName): HTMLAudioElement {
    const cached = this.audio.get(name);

    if (cached) {
      return cached;
    }

    const sound = document.createElement('audio');
    sound.src = PADAWAN_SOUND_PATH[name];
    sound.volume = PADAWAN_SOUND_VOLUME[name];
    sound.preload = name === 'ambient' ? 'none' : 'metadata';
    this.audio.set(name, sound);
    return sound;
  }

  private getBackgroundAudio(): HTMLAudioElement {
    if (this.backgroundAudio) {
      return this.backgroundAudio;
    }

    const background = document.createElement('audio');
    background.src = BACKGROUND_MUSIC_PATH;
    background.volume = BACKGROUND_VOLUME;
    background.preload = 'metadata';
    this.backgroundAudio = background;
    return background;
  }

  private safePlay(sound: HTMLAudioElement): void {
    if (!this.mediaSupported) {
      return;
    }

    try {
      void sound.play()?.catch(() => undefined);
    } catch {
      // Browsers can reject audio before a trusted user gesture.
    }
  }

  private safeLoad(sound: HTMLAudioElement): void {
    if (!this.mediaSupported) {
      return;
    }

    try {
      sound.load();
    } catch {
      // Some test/browser environments do not implement media loading.
    }
  }

  private isActiveTyping(): boolean {
    return this.isBrowser && this.isTypingTarget(document.activeElement);
  }

  private isTypingTarget(target: EventTarget | Element | null): boolean {
    if (!(target instanceof HTMLElement)) {
      return false;
    }

    const tagName = target.tagName.toLowerCase();
    return (
      tagName === 'input' ||
      tagName === 'textarea' ||
      tagName === 'select' ||
      target.isContentEditable
    );
  }
}
