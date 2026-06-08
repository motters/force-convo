import { selectRandomTopics, TOPIC_LIBRARY, TopicSource } from './topics';

describe('Padawan topic selection', () => {
  it('ships with at least 40 seed topics', () => {
    expect(TOPIC_LIBRARY.topics.length).toBeGreaterThanOrEqual(40);
  });

  it('selects exactly 3 distinct topics from mixed categories', () => {
    const selected = selectRandomTopics(TOPIC_LIBRARY, 3, () => 0.5);
    const ids = new Set(selected.map((topic) => topic.id));
    const categories = new Set(selected.map((topic) => topic.category));

    expect(selected).toHaveLength(3);
    expect(ids.size).toBe(3);
    expect(categories.size).toBe(3);
  });

  it('returns every available distinct topic when fewer than requested exist', () => {
    const smallSource: TopicSource = {
      topics: TOPIC_LIBRARY.topics.slice(0, 2),
    };

    const selected = selectRandomTopics(smallSource, 3, () => 0.5);

    expect(selected).toHaveLength(2);
    expect(new Set(selected.map((topic) => topic.id)).size).toBe(2);
  });
});
