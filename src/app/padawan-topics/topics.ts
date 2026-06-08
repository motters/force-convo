export type TopicCategory =
  | 'topical'
  | 'philosophy'
  | 'silly'
  | 'personal'
  | 'hypothetical'
  | 'star-wars';

export interface Topic {
  readonly id: string;
  readonly category: TopicCategory;
  readonly categoryLabel: string;
  readonly prompt: string;
}

export interface TopicSource {
  readonly topics: readonly Topic[];
}

export const TOPIC_CATEGORIES: Record<TopicCategory, string> = {
  topical: 'Topical-ish',
  philosophy: 'Deep Chat',
  silly: 'Silly Chaos',
  personal: 'Tiny Dating-App Intel',
  hypothetical: 'Would You Rather',
  'star-wars': 'Padawan Lore',
};

export const TOPIC_LIBRARY: TopicSource = {
  topics: [
    {
      id: 'topical-01',
      category: 'topical',
      categoryLabel: TOPIC_CATEGORIES.topical,
      prompt: 'What current invention do people overhype like it is a tiny metal prophet?',
    },
    {
      id: 'topical-02',
      category: 'topical',
      categoryLabel: TOPIC_CATEGORIES.topical,
      prompt: 'What trend deserves to disappear quietly into a dramatic fog machine?',
    },
    {
      id: 'topical-03',
      category: 'topical',
      categoryLabel: TOPIC_CATEGORIES.topical,
      prompt: 'What recent-ish cultural obsession confuses you, but you respect the commitment?',
    },
    {
      id: 'topical-04',
      category: 'topical',
      categoryLabel: TOPIC_CATEGORIES.topical,
      prompt: 'What app feature feels like it was designed by someone who has never met a human?',
    },
    {
      id: 'topical-05',
      category: 'topical',
      categoryLabel: TOPIC_CATEGORIES.topical,
      prompt: 'What modern convenience would make medieval peasants immediately nominate you as mayor?',
    },
    {
      id: 'topical-06',
      category: 'topical',
      categoryLabel: TOPIC_CATEGORIES.topical,
      prompt: 'What online debate has absolutely no winner but somehow returns every six months?',
    },
    {
      id: 'topical-07',
      category: 'topical',
      categoryLabel: TOPIC_CATEGORIES.topical,
      prompt: 'Which everyday thing needs a rebrand because the vibes are currently suspicious?',
    },
    {
      id: 'topical-08',
      category: 'topical',
      categoryLabel: TOPIC_CATEGORIES.topical,
      prompt: 'What piece of technology makes you feel powerful and mildly judged?',
    },
    {
      id: 'philosophy-01',
      category: 'philosophy',
      categoryLabel: TOPIC_CATEGORIES.philosophy,
      prompt: 'Is being chill a personality trait, a coping strategy, or a noble illusion?',
    },
    {
      id: 'philosophy-02',
      category: 'philosophy',
      categoryLabel: TOPIC_CATEGORIES.philosophy,
      prompt: 'Would you rather know the truth too early or the lesson exactly on time?',
    },
    {
      id: 'philosophy-03',
      category: 'philosophy',
      categoryLabel: TOPIC_CATEGORIES.philosophy,
      prompt: 'What tiny habit secretly reveals a lot about someone?',
    },
    {
      id: 'philosophy-04',
      category: 'philosophy',
      categoryLabel: TOPIC_CATEGORIES.philosophy,
      prompt: 'Do people become their taste in music, or does music just expose the plot?',
    },
    {
      id: 'philosophy-05',
      category: 'philosophy',
      categoryLabel: TOPIC_CATEGORIES.philosophy,
      prompt: 'What is the difference between confidence and simply having excellent lighting?',
    },
    {
      id: 'philosophy-06',
      category: 'philosophy',
      categoryLabel: TOPIC_CATEGORIES.philosophy,
      prompt: 'What is a harmless hill you would politely defend with alarming focus?',
    },
    {
      id: 'philosophy-07',
      category: 'philosophy',
      categoryLabel: TOPIC_CATEGORIES.philosophy,
      prompt: 'Are good first impressions skill, luck, or just strategic snack timing?',
    },
    {
      id: 'philosophy-08',
      category: 'philosophy',
      categoryLabel: TOPIC_CATEGORIES.philosophy,
      prompt: 'What makes a conversation feel instantly easy instead of like a group project?',
    },
    {
      id: 'silly-01',
      category: 'silly',
      categoryLabel: TOPIC_CATEGORIES.silly,
      prompt: 'Which household object would be the worst to discover has been secretly judging you?',
    },
    {
      id: 'silly-02',
      category: 'silly',
      categoryLabel: TOPIC_CATEGORIES.silly,
      prompt: 'If your sleep schedule had a Yelp review, what would the headline be?',
    },
    {
      id: 'silly-03',
      category: 'silly',
      categoryLabel: TOPIC_CATEGORIES.silly,
      prompt: 'What food has main character energy for no good reason?',
    },
    {
      id: 'silly-04',
      category: 'silly',
      categoryLabel: TOPIC_CATEGORIES.silly,
      prompt: 'What is the least intimidating animal that could still ruin your whole afternoon?',
    },
    {
      id: 'silly-05',
      category: 'silly',
      categoryLabel: TOPIC_CATEGORIES.silly,
      prompt: 'What normal phrase sounds like a spell if you say it with enough confidence?',
    },
    {
      id: 'silly-06',
      category: 'silly',
      categoryLabel: TOPIC_CATEGORIES.silly,
      prompt: 'What would your villain origin story be if the stakes were extremely low?',
    },
    {
      id: 'silly-07',
      category: 'silly',
      categoryLabel: TOPIC_CATEGORIES.silly,
      prompt: 'Which snack would survive best in a formal debate setting?',
    },
    {
      id: 'silly-08',
      category: 'silly',
      categoryLabel: TOPIC_CATEGORIES.silly,
      prompt: 'If your brain had a loading screen, what unhelpful tip would it show?',
    },
    {
      id: 'personal-01',
      category: 'personal',
      categoryLabel: TOPIC_CATEGORIES.personal,
      prompt: 'What is your green flag that sounds boring but is actually elite?',
    },
    {
      id: 'personal-02',
      category: 'personal',
      categoryLabel: TOPIC_CATEGORIES.personal,
      prompt: 'What is a date idea that is low effort but secretly very revealing?',
    },
    {
      id: 'personal-03',
      category: 'personal',
      categoryLabel: TOPIC_CATEGORIES.personal,
      prompt: 'What is your most specific comfort meal, and how dramatic is the backstory?',
    },
    {
      id: 'personal-04',
      category: 'personal',
      categoryLabel: TOPIC_CATEGORIES.personal,
      prompt: 'What tiny thing makes you instantly like someone more?',
    },
    {
      id: 'personal-05',
      category: 'personal',
      categoryLabel: TOPIC_CATEGORIES.personal,
      prompt: 'What is your ideal Sunday if nobody is trying to make you a better person?',
    },
    {
      id: 'personal-06',
      category: 'personal',
      categoryLabel: TOPIC_CATEGORIES.personal,
      prompt: 'What are you weirdly competitive about, even though no trophy exists?',
    },
    {
      id: 'personal-07',
      category: 'personal',
      categoryLabel: TOPIC_CATEGORIES.personal,
      prompt: 'What is the fastest way to improve a bad day by exactly 17 percent?',
    },
    {
      id: 'personal-08',
      category: 'personal',
      categoryLabel: TOPIC_CATEGORIES.personal,
      prompt: 'What is a small luxury you believe everyone should take more seriously?',
    },
    {
      id: 'hypothetical-01',
      category: 'hypothetical',
      categoryLabel: TOPIC_CATEGORIES.hypothetical,
      prompt: 'Would you rather always know when someone is lying or always know when dessert is nearby?',
    },
    {
      id: 'hypothetical-02',
      category: 'hypothetical',
      categoryLabel: TOPIC_CATEGORIES.hypothetical,
      prompt: 'Would you rather teleport once a week or have one perfect hair day every day?',
    },
    {
      id: 'hypothetical-03',
      category: 'hypothetical',
      categoryLabel: TOPIC_CATEGORIES.hypothetical,
      prompt: 'If you had to teach a masterclass in something deeply unserious, what would it be?',
    },
    {
      id: 'hypothetical-04',
      category: 'hypothetical',
      categoryLabel: TOPIC_CATEGORIES.hypothetical,
      prompt: 'Would you rather be famous for something cool or anonymously excellent at everything?',
    },
    {
      id: 'hypothetical-05',
      category: 'hypothetical',
      categoryLabel: TOPIC_CATEGORIES.hypothetical,
      prompt: 'If your future self sent one vague warning, what would be the funniest possible wording?',
    },
    {
      id: 'hypothetical-06',
      category: 'hypothetical',
      categoryLabel: TOPIC_CATEGORIES.hypothetical,
      prompt: 'Would you rather have a theme song when entering rooms or dramatic lighting on demand?',
    },
    {
      id: 'hypothetical-07',
      category: 'hypothetical',
      categoryLabel: TOPIC_CATEGORIES.hypothetical,
      prompt: 'If you could mildly improve one law of physics, what quality-of-life patch would you ship?',
    },
    {
      id: 'hypothetical-08',
      category: 'hypothetical',
      categoryLabel: TOPIC_CATEGORIES.hypothetical,
      prompt: 'Would you rather read minds for one hour or have everyone read your snack opinions for one day?',
    },
    {
      id: 'star-wars-01',
      category: 'star-wars',
      categoryLabel: TOPIC_CATEGORIES['star-wars'],
      prompt: 'What subject would you absolutely dominate if it were part of Padawan training?',
    },
    {
      id: 'star-wars-02',
      category: 'star-wars',
      categoryLabel: TOPIC_CATEGORIES['star-wars'],
      prompt: 'If your lightsaber color was based on your texting style, what color would it be?',
    },
    {
      id: 'star-wars-03',
      category: 'star-wars',
      categoryLabel: TOPIC_CATEGORIES['star-wars'],
      prompt: 'What everyday task would become instantly cooler with a tiny floating training droid?',
    },
    {
      id: 'star-wars-04',
      category: 'star-wars',
      categoryLabel: TOPIC_CATEGORIES['star-wars'],
      prompt: 'What would your Jedi council nickname be if they based it on your worst habit?',
    },
    {
      id: 'star-wars-05',
      category: 'star-wars',
      categoryLabel: TOPIC_CATEGORIES['star-wars'],
      prompt: 'What is your Force power if the Force only helps with minor inconveniences?',
    },
    {
      id: 'star-wars-06',
      category: 'star-wars',
      categoryLabel: TOPIC_CATEGORIES['star-wars'],
      prompt: 'Which random subject would cause you to say, "strong opinions, I have"?',
    },
    {
      id: 'star-wars-07',
      category: 'star-wars',
      categoryLabel: TOPIC_CATEGORIES['star-wars'],
      prompt: 'If the Holocron roasted your dating profile, what would be its most accurate comment?',
    },
    {
      id: 'star-wars-08',
      category: 'star-wars',
      categoryLabel: TOPIC_CATEGORIES['star-wars'],
      prompt: 'What is the most chaotic place to schedule a peaceful Jedi meditation retreat?',
    },
  ],
};

export function selectRandomTopics(
  source: TopicSource = TOPIC_LIBRARY,
  count = 3,
  random: () => number = Math.random,
): Topic[] {
  if (count < 1) {
    return [];
  }

  const topicsByCategory = groupTopicsByCategory(source.topics);
  const categoryOrder = shuffle([...topicsByCategory.keys()], random);
  const selected: Topic[] = [];
  const usedIds = new Set<string>();

  for (const category of categoryOrder) {
    const options = topicsByCategory.get(category) ?? [];
    const topic = shuffle(options, random).find((candidate) => !usedIds.has(candidate.id));

    if (topic) {
      selected.push(topic);
      usedIds.add(topic.id);
    }

    if (selected.length === count) {
      return selected;
    }
  }

  for (const topic of shuffle(source.topics, random)) {
    if (!usedIds.has(topic.id)) {
      selected.push(topic);
      usedIds.add(topic.id);
    }

    if (selected.length === count) {
      return selected;
    }
  }

  return selected;
}

function groupTopicsByCategory(topics: readonly Topic[]): Map<TopicCategory, Topic[]> {
  return topics.reduce((groups, topic) => {
    const categoryTopics = groups.get(topic.category) ?? [];
    categoryTopics.push(topic);
    groups.set(topic.category, categoryTopics);

    return groups;
  }, new Map<TopicCategory, Topic[]>());
}

function shuffle<T>(items: readonly T[], random: () => number): T[] {
  return [...items]
    .map((item) => ({ item, sort: random() }))
    .sort((left, right) => left.sort - right.sort)
    .map(({ item }) => item);
}
