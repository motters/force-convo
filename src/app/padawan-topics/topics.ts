// Drop-in topic library generated for Codex.
// V2 tone pass: deeper, sharper, less goofy, with more intense non-explicit flirting.
// 400 topic starters across 10 categories.

export type TopicCategory =
  | 'flirty'
  | 'intimacy'
  | 'deep-thinking'
  | 'philosophy'
  | 'topical'
  | 'personal'
  | 'discovery'
  | 'hypothetical'
  | 'debate'
  | 'silly';

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
  flirty: "Intense Flirt",
  intimacy: "Emotional X-Ray",
  'deep-thinking': "Deep Thinking",
  philosophy: "Philosophy",
  topical: "Modern Life",
  personal: "Personal Truths",
  discovery: "Discovery Mode",
  hypothetical: "Hard Hypotheticals",
  debate: "Worth Debating",
  silly: "Sharp Silly",
};

export const TOPIC_LIBRARY: TopicSource = {
  topics: [

    {
      id: "flirty-01",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What kind of chemistry makes you forget what you were about to say?",
    },

    {
      id: "flirty-02",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What is the difference between attraction and danger pretending to be attraction?",
    },

    {
      id: "flirty-03",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What makes someone impossible to get out of your head?",
    },

    {
      id: "flirty-04",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What kind of first date would make you cancel the rest of your plans?",
    },

    {
      id: "flirty-05",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "When do you know a conversation has stopped being casual?",
    },

    {
      id: "flirty-06",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What kind of eye contact would make you lose the argument on purpose?",
    },

    {
      id: "flirty-07",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What compliment would actually stay with you?",
    },

    {
      id: "flirty-08",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What is your favourite kind of tension: slow, playful, direct, or impossible to ignore?",
    },

    {
      id: "flirty-09",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What makes someone feel magnetic before they have done anything obvious?",
    },

    {
      id: "flirty-10",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What is the most attractive form of self-control?",
    },

    {
      id: "flirty-11",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "Where is the line between mystery and emotional unavailability?",
    },

    {
      id: "flirty-12",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What would someone have to do to make you nervous in the best way?",
    },

    {
      id: "flirty-13",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What kind of confidence feels irresistible rather than performative?",
    },

    {
      id: "flirty-14",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What moment on a date tells you there is real chemistry?",
    },

    {
      id: "flirty-15",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "How direct is too direct, and how subtle is too subtle?",
    },

    {
      id: "flirty-16",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What small gesture would make you think about someone later?",
    },

    {
      id: "flirty-17",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What kind of message would make you read it twice?",
    },

    {
      id: "flirty-18",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What is the most seductive non-physical trait?",
    },

    {
      id: "flirty-19",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What makes flirting feel elegant instead of needy?",
    },

    {
      id: "flirty-20",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What do you wish people understood about desire?",
    },

    {
      id: "flirty-21",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What red flag are you embarrassingly vulnerable to?",
    },

    {
      id: "flirty-22",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What would make you lean in rather than pull back?",
    },

    {
      id: "flirty-23",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What kind of person makes silence feel charged?",
    },

    {
      id: "flirty-24",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "Is it better to be wanted loudly or understood quietly?",
    },

    {
      id: "flirty-25",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What kind of vulnerability is attractive to you?",
    },

    {
      id: "flirty-26",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What is the fastest way someone can ruin great chemistry?",
    },

    {
      id: "flirty-27",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "When does banter become something more?",
    },

    {
      id: "flirty-28",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What does intense but safe attraction feel like to you?",
    },

    {
      id: "flirty-29",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What kind of closeness scares you a little?",
    },

    {
      id: "flirty-30",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What is the most attractive way someone can disagree with you?",
    },

    {
      id: "flirty-31",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What would make a slow-burn connection worth the wait?",
    },

    {
      id: "flirty-32",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What makes a kiss feel inevitable before it happens?",
    },

    {
      id: "flirty-33",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "How do you know someone is flirting with your mind, not just your ego?",
    },

    {
      id: "flirty-34",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What kind of attention do you secretly crave?",
    },

    {
      id: "flirty-35",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What is more powerful: being desired or being chosen?",
    },

    {
      id: "flirty-36",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What is the most dangerous kind of charm?",
    },

    {
      id: "flirty-37",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What is your weakness in a person?",
    },

    {
      id: "flirty-38",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What kind of honesty feels intimate rather than blunt?",
    },

    {
      id: "flirty-39",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What type of date would make it hard to act normal afterwards?",
    },

    {
      id: "flirty-40",
      category: "flirty",
      categoryLabel: TOPIC_CATEGORIES["flirty"],
      prompt: "What would make you break one of your own rules?",
    },

    {
      id: "intimacy-01",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What does trust feel like before it has proof?",
    },

    {
      id: "intimacy-02",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What makes you feel genuinely seen rather than simply noticed?",
    },

    {
      id: "intimacy-03",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What part of you takes the longest to show someone?",
    },

    {
      id: "intimacy-04",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What is something small that makes you feel safe with a person?",
    },

    {
      id: "intimacy-05",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What kind of love do you respect more now than you used to?",
    },

    {
      id: "intimacy-06",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What is the difference between being loved and being understood?",
    },

    {
      id: "intimacy-07",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What do you think people often mistake for intimacy?",
    },

    {
      id: "intimacy-08",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What makes vulnerability feel worth the risk?",
    },

    {
      id: "intimacy-09",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What is a quiet form of loyalty that matters to you?",
    },

    {
      id: "intimacy-10",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What do you need from someone when you are not at your best?",
    },

    {
      id: "intimacy-11",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What kind of apology actually means something to you?",
    },

    {
      id: "intimacy-12",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What makes a person feel like home without becoming boring?",
    },

    {
      id: "intimacy-13",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What is the hardest truth to tell someone you care about?",
    },

    {
      id: "intimacy-14",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What emotional habit are you still trying to unlearn?",
    },

    {
      id: "intimacy-15",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What does consistency look like when it is not performative?",
    },

    {
      id: "intimacy-16",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What kind of closeness do you want but find difficult to ask for?",
    },

    {
      id: "intimacy-17",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What makes you trust someone with your softer side?",
    },

    {
      id: "intimacy-18",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What is a boundary you respect more as you get older?",
    },

    {
      id: "intimacy-19",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What is the difference between patience and tolerating too much?",
    },

    {
      id: "intimacy-20",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What part of love do people romanticise but rarely practise?",
    },

    {
      id: "intimacy-21",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What is a sign someone is emotionally brave?",
    },

    {
      id: "intimacy-22",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What does being chosen look like in ordinary life?",
    },

    {
      id: "intimacy-23",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What kind of silence feels peaceful rather than empty?",
    },

    {
      id: "intimacy-24",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What do you wish you could ask for without feeling needy?",
    },

    {
      id: "intimacy-25",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "When has someone changed your mind by how they treated you?",
    },

    {
      id: "intimacy-26",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What kind of reassurance actually works on you?",
    },

    {
      id: "intimacy-27",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What is your version of emotional luxury?",
    },

    {
      id: "intimacy-28",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What makes a connection feel rare?",
    },

    {
      id: "intimacy-29",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What would make you stay curious about someone for years?",
    },

    {
      id: "intimacy-30",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What does emotional maturity look like in a disagreement?",
    },

    {
      id: "intimacy-31",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What makes you feel protected without feeling controlled?",
    },

    {
      id: "intimacy-32",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What is something you only reveal when you really trust someone?",
    },

    {
      id: "intimacy-33",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What does a healthy obsession with someone look like, if that exists?",
    },

    {
      id: "intimacy-34",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What is harder for you: opening up, or believing someone means it?",
    },

    {
      id: "intimacy-35",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What kind of person makes you softer without making you weaker?",
    },

    {
      id: "intimacy-36",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What moment makes you realise you care more than you planned to?",
    },

    {
      id: "intimacy-37",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What is the difference between romance and emotional theatre?",
    },

    {
      id: "intimacy-38",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What part of your heart has high standards for a good reason?",
    },

    {
      id: "intimacy-39",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What does it mean to be easy to love but hard to know?",
    },

    {
      id: "intimacy-40",
      category: "intimacy",
      categoryLabel: TOPIC_CATEGORIES["intimacy"],
      prompt: "What would make emotional honesty feel exciting rather than heavy?",
    },

    {
      id: "deep-thinking-01",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What question have you avoided because the answer would require changing something?",
    },

    {
      id: "deep-thinking-02",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "Which belief would hurt most to discover was wrong?",
    },

    {
      id: "deep-thinking-03",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is something you understand logically but still cannot feel emotionally?",
    },

    {
      id: "deep-thinking-04",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What do you think you are becoming, slowly and almost invisibly?",
    },

    {
      id: "deep-thinking-05",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What part of your life looks successful from the outside but feels more complicated inside?",
    },

    {
      id: "deep-thinking-06",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What do people call a flaw when they do not understand its cause?",
    },

    {
      id: "deep-thinking-07",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What lesson did life teach you before you were ready for it?",
    },

    {
      id: "deep-thinking-08",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What truth became obvious only after you stopped wanting it to be false?",
    },

    {
      id: "deep-thinking-09",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is a comfort that quietly becomes a cage?",
    },

    {
      id: "deep-thinking-10",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What do you think most people are pretending not to know?",
    },

    {
      id: "deep-thinking-11",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What kind of intelligence is underrated because it is not loud?",
    },

    {
      id: "deep-thinking-12",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What does your attention reveal about what you worship?",
    },

    {
      id: "deep-thinking-13",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is a fear that disguises itself as good judgment?",
    },

    {
      id: "deep-thinking-14",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What do you think you would miss about your current life if it suddenly changed?",
    },

    {
      id: "deep-thinking-15",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What memory explains more about you than you usually admit?",
    },

    {
      id: "deep-thinking-16",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What part of adulthood feels most like improvising in public?",
    },

    {
      id: "deep-thinking-17",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is something people pursue because they do not know what they actually want?",
    },

    {
      id: "deep-thinking-18",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What does peace cost, and who usually pays for it?",
    },

    {
      id: "deep-thinking-19",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is one thing you used to judge that you now understand?",
    },

    {
      id: "deep-thinking-20",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What do you think people get wrong about healing?",
    },

    {
      id: "deep-thinking-21",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What kind of success would feel like failure to you?",
    },

    {
      id: "deep-thinking-22",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is an old version of you that deserves more compassion?",
    },

    {
      id: "deep-thinking-23",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What do you think your life is quietly asking you to notice?",
    },

    {
      id: "deep-thinking-24",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What does it mean to outgrow a dream without betraying it?",
    },

    {
      id: "deep-thinking-25",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is something you keep repeating until you understand it?",
    },

    {
      id: "deep-thinking-26",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What do you think loneliness is trying to tell people?",
    },

    {
      id: "deep-thinking-27",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is the difference between being difficult and being complex?",
    },

    {
      id: "deep-thinking-28",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What have you learned about yourself from what you envy?",
    },

    {
      id: "deep-thinking-29",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is the most expensive thing people get for free?",
    },

    {
      id: "deep-thinking-30",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What kind of freedom still scares people?",
    },

    {
      id: "deep-thinking-31",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What does your younger self not understand about who you are now?",
    },

    {
      id: "deep-thinking-32",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is something you believe only because you survived it?",
    },

    {
      id: "deep-thinking-33",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What part of modern life makes people feel rich and empty at the same time?",
    },

    {
      id: "deep-thinking-34",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What does it mean to know yourself without becoming fixed?",
    },

    {
      id: "deep-thinking-35",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What do you think you are still loyal to that no longer deserves it?",
    },

    {
      id: "deep-thinking-36",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What feeling do people mislabel because the real name would be too painful?",
    },

    {
      id: "deep-thinking-37",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What makes a life feel honest?",
    },

    {
      id: "deep-thinking-38",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is the difference between growth and simply becoming harder to impress?",
    },

    {
      id: "deep-thinking-39",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What have you stopped explaining because experience is the only proof?",
    },

    {
      id: "deep-thinking-40",
      category: "deep-thinking",
      categoryLabel: TOPIC_CATEGORIES["deep-thinking"],
      prompt: "What is something beautiful that only exists because it is temporary?",
    },

    {
      id: "philosophy-01",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is a good life built more from pleasure, purpose, or peace?",
    },

    {
      id: "philosophy-02",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Are people responsible for the harm caused by beliefs they never questioned?",
    },

    {
      id: "philosophy-03",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Can someone be truly free if they are terrified of disappointing others?",
    },

    {
      id: "philosophy-04",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is authenticity always a virtue, or can it become self-indulgence?",
    },

    {
      id: "philosophy-05",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Do we choose our values, or do we mostly inherit them and defend them later?",
    },

    {
      id: "philosophy-06",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "What makes a promise morally binding after the person who made it has changed?",
    },

    {
      id: "philosophy-07",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is forgiveness for the person who caused harm, or for the person carrying it?",
    },

    {
      id: "philosophy-08",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Can beauty be objective, or is it always a private agreement?",
    },

    {
      id: "philosophy-09",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is ambition noble, insecure, or both?",
    },

    {
      id: "philosophy-10",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Do people deserve happiness, or do they only get chances to build it?",
    },

    {
      id: "philosophy-11",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "What makes suffering meaningful rather than simply painful?",
    },

    {
      id: "philosophy-12",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is truth still valuable when it makes life worse?",
    },

    {
      id: "philosophy-13",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Can a person be good if they are only kind when it benefits them?",
    },

    {
      id: "philosophy-14",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is love a choice, a feeling, a discipline, or a temporary madness?",
    },

    {
      id: "philosophy-15",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Do humans need illusions to live well?",
    },

    {
      id: "philosophy-16",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is justice more important than mercy when both cannot fit?",
    },

    {
      id: "philosophy-17",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Can you owe loyalty to someone who keeps becoming worse?",
    },

    {
      id: "philosophy-18",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is privacy a right, a luxury, or an illusion now?",
    },

    {
      id: "philosophy-19",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "What makes a person the same person across time?",
    },

    {
      id: "philosophy-20",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is self-control freedom, or just a polite form of repression?",
    },

    {
      id: "philosophy-21",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Can a life be meaningful without being remembered?",
    },

    {
      id: "philosophy-22",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "What is the moral difference between doing harm and allowing harm?",
    },

    {
      id: "philosophy-23",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is hope rational, or is rationality sometimes overrated?",
    },

    {
      id: "philosophy-24",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Are we more shaped by what we love or what we fear?",
    },

    {
      id: "philosophy-25",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Can you truly know yourself without other people reflecting you back?",
    },

    {
      id: "philosophy-26",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "What does dignity mean when nobody is watching?",
    },

    {
      id: "philosophy-27",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is comfort the enemy of character?",
    },

    {
      id: "philosophy-28",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Can envy ever be useful as a moral signal?",
    },

    {
      id: "philosophy-29",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is identity something you discover, create, or perform?",
    },

    {
      id: "philosophy-30",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "What makes an opinion yours rather than borrowed?",
    },

    {
      id: "philosophy-31",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Can people change without losing something essential?",
    },

    {
      id: "philosophy-32",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is being misunderstood inevitable, or are we just bad at explaining ourselves?",
    },

    {
      id: "philosophy-33",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Should intentions matter if the outcome is damaging?",
    },

    {
      id: "philosophy-34",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is a peaceful lie better than a cruel truth?",
    },

    {
      id: "philosophy-35",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Do we admire sacrifice because it is good, or because it is useful to others?",
    },

    {
      id: "philosophy-36",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "What does courage look like in a life with no obvious battles?",
    },

    {
      id: "philosophy-37",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is boredom a problem to solve or a teacher to listen to?",
    },

    {
      id: "philosophy-38",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Can desire ever be innocent?",
    },

    {
      id: "philosophy-39",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "What does it mean to treat yourself as someone you are responsible for?",
    },

    {
      id: "philosophy-40",
      category: "philosophy",
      categoryLabel: TOPIC_CATEGORIES["philosophy"],
      prompt: "Is the meaning of life something to find, build, or stop demanding?",
    },

    {
      id: "topical-01",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What current technology is changing people faster than they are admitting?",
    },

    {
      id: "topical-02",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Is AI making people more creative, or just more comfortable outsourcing taste?",
    },

    {
      id: "topical-03",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What part of modern dating feels most broken but still oddly addictive?",
    },

    {
      id: "topical-04",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What everyday convenience has quietly made people less patient?",
    },

    {
      id: "topical-05",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What job do you think will look completely different in ten years?",
    },

    {
      id: "topical-06",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Are we over-informed and under-wise?",
    },

    {
      id: "topical-07",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What does social media reward that real life should not?",
    },

    {
      id: "topical-08",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What modern habit will future generations find bizarre?",
    },

    {
      id: "topical-09",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Has remote work made people freer, lonelier, or both?",
    },

    {
      id: "topical-10",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What product or service has turned into a subscription that never should have?",
    },

    {
      id: "topical-11",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Is everyone becoming a personal brand, whether they want to or not?",
    },

    {
      id: "topical-12",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What current trend feels like a symptom of exhaustion?",
    },

    {
      id: "topical-13",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Are people actually busier now, or just worse at being unavailable?",
    },

    {
      id: "topical-14",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What piece of modern etiquette is still being invented in real time?",
    },

    {
      id: "topical-15",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What does the internet make people unfairly confident about?",
    },

    {
      id: "topical-16",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Is the attention economy making personality more performative?",
    },

    {
      id: "topical-17",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What kind of content makes you feel worse even when it is technically harmless?",
    },

    {
      id: "topical-18",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What modern luxury do people mistake for a basic need?",
    },

    {
      id: "topical-19",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Are algorithms showing us what we want, or teaching us what to want?",
    },

    {
      id: "topical-20",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What part of modern life feels designed to keep adults mildly anxious?",
    },

    {
      id: "topical-21",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What social rule disappeared and probably should come back?",
    },

    {
      id: "topical-22",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What old-fashioned habit would improve modern relationships?",
    },

    {
      id: "topical-23",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Is constant optimisation making people less alive?",
    },

    {
      id: "topical-24",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What does modern success ask people to sacrifice too quietly?",
    },

    {
      id: "topical-25",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Are we becoming more emotionally literate or just better at naming problems?",
    },

    {
      id: "topical-26",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What topic gets talked about constantly but rarely honestly?",
    },

    {
      id: "topical-27",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What modern invention made life easier but conversations worse?",
    },

    {
      id: "topical-28",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What will be the next thing people pretend they always understood?",
    },

    {
      id: "topical-29",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What current fear do you think is exaggerated, and which one is underestimated?",
    },

    {
      id: "topical-30",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Is the world getting stranger, or are we just seeing more of it?",
    },

    {
      id: "topical-31",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What does modern friendship struggle with most?",
    },

    {
      id: "topical-32",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What technology feels useful but spiritually suspicious?",
    },

    {
      id: "topical-33",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Are people dating each other, or dating possibilities?",
    },

    {
      id: "topical-34",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What public debate has become too simplistic for the size of the issue?",
    },

    {
      id: "topical-35",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What is something society calls progress that may have a hidden cost?",
    },

    {
      id: "topical-36",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What everyday app has changed human behaviour the most?",
    },

    {
      id: "topical-37",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "Is convenience making people less resilient?",
    },

    {
      id: "topical-38",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What modern status symbol feels the most hollow?",
    },

    {
      id: "topical-39",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What cultural shift do you think people will regret?",
    },

    {
      id: "topical-40",
      category: "topical",
      categoryLabel: TOPIC_CATEGORIES["topical"],
      prompt: "What is a modern problem that is really an old human problem in new packaging?",
    },

    {
      id: "personal-01",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is something you are proud of that would not impress a stranger?",
    },

    {
      id: "personal-02",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is a private standard you hold yourself to?",
    },

    {
      id: "personal-03",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What kind of day brings out your best self?",
    },

    {
      id: "personal-04",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is a small thing that can instantly change your mood?",
    },

    {
      id: "personal-05",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What do you care about more than people would guess?",
    },

    {
      id: "personal-06",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is a compliment you struggle to believe?",
    },

    {
      id: "personal-07",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What did you used to want that no longer fits you?",
    },

    {
      id: "personal-08",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is something you are more sensitive about than you let on?",
    },

    {
      id: "personal-09",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What do you find attractive in a life, not just a person?",
    },

    {
      id: "personal-10",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What habit makes you feel most like yourself?",
    },

    {
      id: "personal-11",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is a version of success that would actually satisfy you?",
    },

    {
      id: "personal-12",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What do you need more of but rarely ask for?",
    },

    {
      id: "personal-13",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What kind of person brings out the worst version of you?",
    },

    {
      id: "personal-14",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is something you are still learning how to receive?",
    },

    {
      id: "personal-15",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What do you do when you are trying to feel in control?",
    },

    {
      id: "personal-16",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is a weakness you have made peace with?",
    },

    {
      id: "personal-17",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is a strength you sometimes use as armour?",
    },

    {
      id: "personal-18",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What kind of environment makes you feel most alive?",
    },

    {
      id: "personal-19",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What do you want to be known for by the people closest to you?",
    },

    {
      id: "personal-20",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is a small ritual that keeps you sane?",
    },

    {
      id: "personal-21",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is something you are trying to stop proving?",
    },

    {
      id: "personal-22",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What kind of conversation do you miss having?",
    },

    {
      id: "personal-23",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is one thing you would protect from becoming ordinary?",
    },

    {
      id: "personal-24",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What do you notice first when you walk into a room?",
    },

    {
      id: "personal-25",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is something you are better at than you admit?",
    },

    {
      id: "personal-26",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What kind of praise means the most to you?",
    },

    {
      id: "personal-27",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is the fastest way to make you lose respect for someone?",
    },

    {
      id: "personal-28",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is something you find easy that other people find hard?",
    },

    {
      id: "personal-29",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What do you want more of in the next year?",
    },

    {
      id: "personal-30",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What do you want less of in the next year?",
    },

    {
      id: "personal-31",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is a lesson you keep learning in different forms?",
    },

    {
      id: "personal-32",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is something you forgive in others but not in yourself?",
    },

    {
      id: "personal-33",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What are you drawn to even when it complicates things?",
    },

    {
      id: "personal-34",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What part of your personality feels older than your age?",
    },

    {
      id: "personal-35",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What part of your personality feels younger than your age?",
    },

    {
      id: "personal-36",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is an ordinary moment you secretly love?",
    },

    {
      id: "personal-37",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What is a decision you are glad your past self made?",
    },

    {
      id: "personal-38",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What makes you feel instantly disconnected from someone?",
    },

    {
      id: "personal-39",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What kind of honesty do you respect, even when it is uncomfortable?",
    },

    {
      id: "personal-40",
      category: "personal",
      categoryLabel: TOPIC_CATEGORIES["personal"],
      prompt: "What would someone understand about you after spending a whole weekend with you?",
    },

    {
      id: "discovery-01",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What could I ask that would tell me more about you than your job ever could?",
    },

    {
      id: "discovery-02",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What subject can you talk about for far longer than people expect?",
    },

    {
      id: "discovery-03",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a strangely specific thing you have strong taste about?",
    },

    {
      id: "discovery-04",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is one thing people assume about you that is slightly wrong?",
    },

    {
      id: "discovery-05",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is the most revealing question someone has ever asked you?",
    },

    {
      id: "discovery-06",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What do you think your friends would warn someone about before dating you?",
    },

    {
      id: "discovery-07",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What do you think your friends would quietly brag about on your behalf?",
    },

    {
      id: "discovery-08",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a scene from your life that explains your sense of humour?",
    },

    {
      id: "discovery-09",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is your tell when you are genuinely interested?",
    },

    {
      id: "discovery-10",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What are you curious about that most people ignore?",
    },

    {
      id: "discovery-11",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What kind of person do you become around people you trust?",
    },

    {
      id: "discovery-12",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a topic that makes your eyes light up?",
    },

    {
      id: "discovery-13",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What do you want someone to notice without being told?",
    },

    {
      id: "discovery-14",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What would be in the footnotes of your personality?",
    },

    {
      id: "discovery-15",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is your most accurate first-date disclaimer?",
    },

    {
      id: "discovery-16",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a small contradiction in you that makes perfect sense once explained?",
    },

    {
      id: "discovery-17",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What question would make you pause before answering?",
    },

    {
      id: "discovery-18",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is something you admire because you find it difficult?",
    },

    {
      id: "discovery-19",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a belief you hold more strongly than people realise?",
    },

    {
      id: "discovery-20",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a very specific kind of person you instantly understand?",
    },

    {
      id: "discovery-21",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a very specific kind of person you never understand?",
    },

    {
      id: "discovery-22",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What part of your taste is non-negotiable?",
    },

    {
      id: "discovery-23",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is something you would want a partner to be curious about?",
    },

    {
      id: "discovery-24",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a sign someone is paying real attention to you?",
    },

    {
      id: "discovery-25",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What do you reveal accidentally when you are comfortable?",
    },

    {
      id: "discovery-26",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is one thing you do not get tired of learning about?",
    },

    {
      id: "discovery-27",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What kind of story do you always want to hear from someone?",
    },

    {
      id: "discovery-28",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a question that separates interesting people from boring ones?",
    },

    {
      id: "discovery-29",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is something you have an unfairly good radar for?",
    },

    {
      id: "discovery-30",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is your most useful flaw?",
    },

    {
      id: "discovery-31",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is your most inconvenient standard?",
    },

    {
      id: "discovery-32",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What makes a person fascinating to you?",
    },

    {
      id: "discovery-33",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is something you want to understand about other people?",
    },

    {
      id: "discovery-34",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a harmless obsession you could defend in detail?",
    },

    {
      id: "discovery-35",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What would someone learn from your bookshelf, playlists, or saved posts?",
    },

    {
      id: "discovery-36",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a talent you respect because it cannot be faked?",
    },

    {
      id: "discovery-37",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What do you think makes someone quietly impressive?",
    },

    {
      id: "discovery-38",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is one thing you hope never becomes content?",
    },

    {
      id: "discovery-39",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What is a tiny detail that tells you a lot about someone?",
    },

    {
      id: "discovery-40",
      category: "discovery",
      categoryLabel: TOPIC_CATEGORIES["discovery"],
      prompt: "What question would you ask if small talk were banned?",
    },

    {
      id: "hypothetical-01",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could see one consequence of any decision before making it, what would you test first?",
    },

    {
      id: "hypothetical-02",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you had to relive one year of your life with your current mind, which year would you choose?",
    },

    {
      id: "hypothetical-03",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If everyone could hear one sentence of your inner monologue each day, what would change?",
    },

    {
      id: "hypothetical-04",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could remove one fear from your life, what would you risk doing next?",
    },

    {
      id: "hypothetical-05",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could know exactly how someone felt about you, would you want to know?",
    },

    {
      id: "hypothetical-06",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If a future version of you could ask you to stop doing one thing, what might it be?",
    },

    {
      id: "hypothetical-07",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could make one person understand you perfectly for ten minutes, who would you choose?",
    },

    {
      id: "hypothetical-08",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If your life had a central question right now, what would it be?",
    },

    {
      id: "hypothetical-09",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could trade comfort for meaning, how much comfort would you give up?",
    },

    {
      id: "hypothetical-10",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could know the truth behind one unresolved moment, would you open it?",
    },

    {
      id: "hypothetical-11",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you had to choose between a peaceful life and a remarkable one, which would you take?",
    },

    {
      id: "hypothetical-12",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could erase one memory but lose the lesson too, would you?",
    },

    {
      id: "hypothetical-13",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If your reputation could be based on only one repeated action, what would you want it to be?",
    },

    {
      id: "hypothetical-14",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could meet the person you might have become, what would you ask first?",
    },

    {
      id: "hypothetical-15",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If one private thought of yours became public, which one would be the most misunderstood?",
    },

    {
      id: "hypothetical-16",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you had to give up being right or being liked, which would hurt more?",
    },

    {
      id: "hypothetical-17",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could experience one ordinary day from someone else's life, whose would teach you most?",
    },

    {
      id: "hypothetical-18",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could guarantee one feeling for the rest of your life, which feeling would you choose?",
    },

    {
      id: "hypothetical-19",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you had to make a decision based only on desire, what would you do differently?",
    },

    {
      id: "hypothetical-20",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If every lie you told yourself appeared as a notification, what would show up most often?",
    },

    {
      id: "hypothetical-21",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could ask your subconscious one question and get a straight answer, what would you ask?",
    },

    {
      id: "hypothetical-22",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could only be loved for your strengths or understood through your flaws, which would you choose?",
    },

    {
      id: "hypothetical-23",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you had to lose one ambition to gain peace, which ambition would be hardest to release?",
    },

    {
      id: "hypothetical-24",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If a stranger could see your search history of emotions, what pattern would they notice?",
    },

    {
      id: "hypothetical-25",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could pause time for one hour a week, what would you do with the silence?",
    },

    {
      id: "hypothetical-26",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If the person you are becoming sent you a warning, what would it say?",
    },

    {
      id: "hypothetical-27",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could choose one relationship in your life to fully repair, would you?",
    },

    {
      id: "hypothetical-28",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could make one social norm disappear, which one would improve life most?",
    },

    {
      id: "hypothetical-29",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If attraction came with a warning label, what would yours say?",
    },

    {
      id: "hypothetical-30",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If your heart and your brain had to debate one decision live, who would win?",
    },

    {
      id: "hypothetical-31",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could spend one evening with your younger self, what would you avoid telling them?",
    },

    {
      id: "hypothetical-32",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you had to choose between certainty and possibility, which would you miss more?",
    },

    {
      id: "hypothetical-33",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If one room could reveal the truth of your personality, what would be inside it?",
    },

    {
      id: "hypothetical-34",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If your next five years were shaped by one habit, what habit would you choose carefully?",
    },

    {
      id: "hypothetical-35",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could know whether someone was good for you before falling for them, would that ruin the story?",
    },

    {
      id: "hypothetical-36",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you had to be famous for your worst habit or anonymous for your best trait, which would you choose?",
    },

    {
      id: "hypothetical-37",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could delete one modern invention from your daily life, what would you reclaim?",
    },

    {
      id: "hypothetical-38",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could make one difficult conversation unavoidable, which one would free you most?",
    },

    {
      id: "hypothetical-39",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If you could see the invisible cost of every choice, would you become braver or more cautious?",
    },

    {
      id: "hypothetical-40",
      category: "hypothetical",
      categoryLabel: TOPIC_CATEGORIES["hypothetical"],
      prompt: "If your life had a narrator for one day, what would they keep pointing out?",
    },

    {
      id: "debate-01",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is ambition attractive, exhausting, or only attractive when it is aimed well?",
    },

    {
      id: "debate-02",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is ghosting ever kinder than explaining?",
    },

    {
      id: "debate-03",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Are dating apps widening choice or weakening commitment?",
    },

    {
      id: "debate-04",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is being low-maintenance a virtue, or a sign someone has learned not to ask?",
    },

    {
      id: "debate-05",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is jealousy always insecurity, or can it sometimes reveal genuine care?",
    },

    {
      id: "debate-06",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Do people overvalue chemistry and undervalue character?",
    },

    {
      id: "debate-07",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is emotional availability attractive only after people have matured enough to handle it?",
    },

    {
      id: "debate-08",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is it better to be independent or deeply needed?",
    },

    {
      id: "debate-09",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Are people too quick to call discomfort a red flag?",
    },

    {
      id: "debate-10",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is self-improvement making people better, or just more marketable?",
    },

    {
      id: "debate-11",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Does modern culture confuse confidence with visibility?",
    },

    {
      id: "debate-12",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is privacy becoming more attractive than fame?",
    },

    {
      id: "debate-13",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Are people lonelier because they expect more, or because they tolerate less?",
    },

    {
      id: "debate-14",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is boredom one of the most underrated tests of compatibility?",
    },

    {
      id: "debate-15",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Can someone be too self-aware?",
    },

    {
      id: "debate-16",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is being mysterious attractive, or just poor communication with good lighting?",
    },

    {
      id: "debate-17",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Do people want honesty, or do they want honesty delivered painlessly?",
    },

    {
      id: "debate-18",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is it better to forgive too easily or too slowly?",
    },

    {
      id: "debate-19",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Are standards empowering, or can they become fear in designer clothes?",
    },

    {
      id: "debate-20",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is casual dating honest, or does it often hide emotional cowardice?",
    },

    {
      id: "debate-21",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Do people confuse peace with lack of passion?",
    },

    {
      id: "debate-22",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is comfort more dangerous than chaos?",
    },

    {
      id: "debate-23",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Can loyalty become a flaw?",
    },

    {
      id: "debate-24",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is vulnerability attractive only when the person is already attractive?",
    },

    {
      id: "debate-25",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Are people more afraid of rejection or of being truly known?",
    },

    {
      id: "debate-26",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is social media making everyone more interesting or more identical?",
    },

    {
      id: "debate-27",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Do people change because of insight or because consequences finally arrive?",
    },

    {
      id: "debate-28",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is romantic intensity a gift, a warning, or both?",
    },

    {
      id: "debate-29",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Should love feel easy, or is that an oversimplification?",
    },

    {
      id: "debate-30",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is timing real, or just a polite name for fear and logistics?",
    },

    {
      id: "debate-31",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Are people too obsessed with finding themselves before committing to anyone?",
    },

    {
      id: "debate-32",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is emotional independence sometimes just polished avoidance?",
    },

    {
      id: "debate-33",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Can a person be kind without being soft?",
    },

    {
      id: "debate-34",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is stability underrated because it does not photograph well?",
    },

    {
      id: "debate-35",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Are people too harsh on their younger selves?",
    },

    {
      id: "debate-36",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is nostalgia a form of wisdom or a beautiful liar?",
    },

    {
      id: "debate-37",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Does money reveal character or reshape it?",
    },

    {
      id: "debate-38",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is desire more honest than language?",
    },

    {
      id: "debate-39",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Can a relationship survive if two people are growing in opposite directions?",
    },

    {
      id: "debate-40",
      category: "debate",
      categoryLabel: TOPIC_CATEGORIES["debate"],
      prompt: "Is the best kind of love calm, intense, or somehow both?",
    },

    {
      id: "silly-01",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "If adults had warning labels, what would yours say?",
    },

    {
      id: "silly-02",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What minor inconvenience deserves a full public inquiry?",
    },

    {
      id: "silly-03",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What food has an ego problem?",
    },

    {
      id: "silly-04",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is the most suspiciously confident household appliance?",
    },

    {
      id: "silly-05",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "If your phone could roast one habit of yours, what would it choose?",
    },

    {
      id: "silly-06",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What animal looks like it knows something legally sensitive?",
    },

    {
      id: "silly-07",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What normal activity becomes ridiculous if you narrate it dramatically?",
    },

    {
      id: "silly-08",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is a deeply unserious thing you would still defend in court?",
    },

    {
      id: "silly-09",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "Which everyday object would become terrifying if it moved one inch by itself?",
    },

    {
      id: "silly-10",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is the most unreasonable thing to be competitive about?",
    },

    {
      id: "silly-11",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "If your sleep schedule had a legal defence, would it win?",
    },

    {
      id: "silly-12",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What snack feels like it has seen too much?",
    },

    {
      id: "silly-13",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is your most respectable bad habit?",
    },

    {
      id: "silly-14",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What phrase sounds profound until you actually think about it?",
    },

    {
      id: "silly-15",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What tiny decision makes you feel like a powerful executive?",
    },

    {
      id: "silly-16",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What harmless thing would you ban if given one day of absolute power?",
    },

    {
      id: "silly-17",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is a sign that someone has taken brunch too far?",
    },

    {
      id: "silly-18",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What would be the worst song to hear during a serious life decision?",
    },

    {
      id: "silly-19",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What object in your home would betray you first in a crisis?",
    },

    {
      id: "silly-20",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is a completely irrational hill you will still defend?",
    },

    {
      id: "silly-21",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is the most dramatic way to leave a boring conversation?",
    },

    {
      id: "silly-22",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What everyday task deserves entrance music?",
    },

    {
      id: "silly-23",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is something people do that makes them look like a background character in their own life?",
    },

    {
      id: "silly-24",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "If your personality had a loading screen tip, what would it say?",
    },

    {
      id: "silly-25",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What would your pet or plant complain about if it had one interview?",
    },

    {
      id: "silly-26",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is a very small luxury that makes you feel unreasonably superior?",
    },

    {
      id: "silly-27",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is the least serious thing that can ruin a whole day?",
    },

    {
      id: "silly-28",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What object has the energy of someone who sends long voice notes?",
    },

    {
      id: "silly-29",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is a social situation that should come with subtitles?",
    },

    {
      id: "silly-30",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is the most polite way to admit you were not listening?",
    },

    {
      id: "silly-31",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is a strange rule you would add to dinner parties?",
    },

    {
      id: "silly-32",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What harmless conspiracy theory about your friends could be true?",
    },

    {
      id: "silly-33",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is the most suspiciously specific skill to be good at?",
    },

    {
      id: "silly-34",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is your least impressive superpower?",
    },

    {
      id: "silly-35",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What would be the title of a documentary about your worst habit?",
    },

    {
      id: "silly-36",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What everyday sound feels personally targeted?",
    },

    {
      id: "silly-37",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is the most dramatic thing you have done for comfort?",
    },

    {
      id: "silly-38",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What is a sentence that only makes sense in modern life?",
    },

    {
      id: "silly-39",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What fictional villain would be improved by a stable sleep routine?",
    },

    {
      id: "silly-40",
      category: "silly",
      categoryLabel: TOPIC_CATEGORIES["silly"],
      prompt: "What small problem would you solve with an unnecessarily serious committee?",
    }
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
