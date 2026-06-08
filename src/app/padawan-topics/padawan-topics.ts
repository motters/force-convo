import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { selectRandomTopics, Topic } from './topics';

interface MentorStage {
  readonly image: string;
  readonly label: string;
  readonly message: string;
}

const MENTOR_STAGES: readonly MentorStage[] = [
  {
    image: '/padawan-assets/stage-welcome.png',
    label: 'Loading transmission',
    message: 'Welcome young one, to the art of convo starting.',
  },
  {
    image: '/padawan-assets/stage-force-convo.png',
    label: 'Signal acquired',
    message: 'We have convo through the Force today.',
  },
  {
    image: '/padawan-assets/stage-pointing.png',
    label: 'Training instruction',
    message: 'Press the Holocron, Padawan.',
  },
];

const READY_STAGE: MentorStage = {
  image: '/padawan-assets/stage-ready.png',
  label: 'Topics unlocked',
  message: 'Ready to chat!',
};

@Component({
  selector: 'app-padawan-topics',
  imports: [],
  templateUrl: './padawan-topics.html',
  styleUrl: './padawan-topics.scss',
})
export class PadawanTopics implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly timers: number[] = [];

  protected readonly allMentorStages = [...MENTOR_STAGES, READY_STAGE];
  protected readonly introStep = signal(0);
  protected readonly topics = signal<readonly Topic[]>([]);
  protected readonly copied = signal(false);
  protected readonly generated = computed(() => this.topics().length === 3);
  protected readonly canConsult = computed(() => this.generated() || this.introStep() >= 2);
  protected readonly mentorStage = computed(() =>
    this.generated() ? READY_STAGE : MENTOR_STAGES[this.introStep()],
  );

  ngOnInit(): void {
    this.queueTimer(() => this.introStep.set(1), 3800);
    this.queueTimer(() => this.introStep.set(2), 8200);
    this.destroyRef.onDestroy(() => this.clearTimers());
  }

  generateTopics(): void {
    this.topics.set(selectRandomTopics());
    this.copied.set(false);
  }

  async copyTopics(): Promise<void> {
    const topicText = this.formatTopicsForClipboard();

    if (!topicText) {
      return;
    }

    try {
      await navigator.clipboard.writeText(topicText);
      this.showCopiedState();
    } catch {
      this.copyWithTextarea(topicText);
    }
  }

  protected trackTopic(_index: number, topic: Topic): string {
    return topic.id;
  }

  private formatTopicsForClipboard(): string {
    const topics = this.topics();

    if (!topics.length) {
      return '';
    }

    return [
      'The Holocron of Random Chat has selected:',
      ...topics.map((topic, index) => `${index + 1}. [${topic.categoryLabel}] ${topic.prompt}`),
      '',
      'No Jedi mind tricks. Just random chat fuel.',
    ].join('\n');
  }

  private copyWithTextarea(text: string): void {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.inset = '0 auto auto 0';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    this.showCopiedState();
  }

  private showCopiedState(): void {
    this.copied.set(true);
    this.queueTimer(() => this.copied.set(false), 1800);
  }

  private queueTimer(callback: () => void, delay: number): void {
    this.timers.push(window.setTimeout(callback, delay));
  }

  private clearTimers(): void {
    for (const timer of this.timers) {
      window.clearTimeout(timer);
    }

    this.timers.length = 0;
  }
}
