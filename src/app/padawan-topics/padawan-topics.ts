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
    label: 'Awaiting transmission',
    message: "Generate today's 3 random topics",
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

const CONSULT_EFFECT_DURATION = 760;

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
  protected readonly consulting = signal(false);
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
    if (this.consulting()) {
      return;
    }

    this.consulting.set(true);
    this.queueTimer(() => {
      this.topics.set(selectRandomTopics());
      this.consulting.set(false);
    }, CONSULT_EFFECT_DURATION);
  }

  protected trackTopic(_index: number, topic: Topic): string {
    return topic.id;
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
