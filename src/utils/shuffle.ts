import type { CardData, CardProgress } from '../types';

function fisherYatesShuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function buildReviewOrder(
  topicCards: CardData[],
  progress: Record<string, CardProgress>
): string[] {
  const unlearned = topicCards.filter(c => {
    const p = progress[c.id];
    return !p || p.rememberedCount < 10;
  });

  const forgotten: CardData[] = [];
  const rest: CardData[] = [];

  for (const card of unlearned) {
    const p = progress[card.id];
    if (p?.lastForgottenAt != null) {
      forgotten.push(card);
    } else {
      rest.push(card);
    }
  }

  forgotten.sort((a, b) => {
    const aTime = progress[a.id]?.lastForgottenAt ?? 0;
    const bTime = progress[b.id]?.lastForgottenAt ?? 0;
    return bTime - aTime;
  });

  const shuffledRest = fisherYatesShuffle(rest);

  return [...forgotten.map(c => c.id), ...shuffledRest.map(c => c.id)];
}
