import { cards } from '../../data/cards';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { startSession } from '../../store/sessionSlice';
import { buildReviewOrder } from '../../utils/shuffle';
import ProgressBar from '../ProgressBar/ProgressBar';
import type { Topic } from '../../types';
import styles from './TopicCard.module.css';

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  const dispatch = useAppDispatch();
  const progress = useAppSelector((s) => s.cards.progress);

  const topicCards = cards.filter((c) => c.topicId === topic.id);
  const learnedCount = topicCards.filter(
    (c) => progress[c.id]?.rememberedCount >= 10
  ).length;
  const allLearned = learnedCount === topicCards.length;

  const handleClick = () => {
    const reviewOrder = buildReviewOrder(topicCards, progress);
    if (reviewOrder.length === 0) return;
    dispatch(startSession({ topicId: topic.id, reviewOrder }));
  };

  return (
    <button
      className={`${styles.card} ${allLearned ? styles.completed : ''}`}
      onClick={handleClick}
      disabled={allLearned}
    >
      <h2 className={styles.name}>{topic.name}</h2>
      <ProgressBar current={learnedCount} total={topicCards.length} />
      <span className={styles.status}>
        {allLearned ? 'Все выучено!' : `Выучено: ${learnedCount} из ${topicCards.length}`}
      </span>
    </button>
  );
}
