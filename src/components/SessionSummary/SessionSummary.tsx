import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { endSession } from '../../store/sessionSlice';
import { resetTopicProgress } from '../../store/cardsSlice';
import { cards, topics } from '../../data/cards';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './SessionSummary.module.css';

export default function SessionSummary() {
  const dispatch = useAppDispatch();
  const { activeTopic, sessionRemembered, sessionForgotten, reviewOrder } =
    useAppSelector((s) => s.session);
  const progress = useAppSelector((s) => s.cards.progress);

  const topic = topics.find((t) => t.id === activeTopic);
  const topicCards = cards.filter((c) => c.topicId === activeTopic);
  const learnedCount = topicCards.filter(
    (c) => progress[c.id]?.rememberedCount >= 10
  ).length;
  const allLearned = learnedCount === topicCards.length;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Сессия завершена!</h2>

      {topic && <p className={styles.topicName}>{topic.name}</p>}

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{reviewOrder.length}</span>
          <span className={styles.statLabel}>Просмотрено</span>
        </div>
        <div className={`${styles.statCard} ${styles.green}`}>
          <span className={styles.statValue}>{sessionRemembered}</span>
          <span className={styles.statLabel}>Erinnert</span>
        </div>
        <div className={`${styles.statCard} ${styles.red}`}>
          <span className={styles.statValue}>{sessionForgotten}</span>
          <span className={styles.statLabel}>Nicht erinnert</span>
        </div>
      </div>

      <div className={styles.progressSection}>
        <p className={styles.progressLabel}>
          Общий прогресс: {learnedCount} из {topicCards.length}
        </p>
        <ProgressBar current={learnedCount} total={topicCards.length} />
        {allLearned && (
          <p className={styles.congrats}>Все карточки этой темы выучены!</p>
        )}
      </div>

      <div className={styles.actions}>
        <button className={styles.btnPrimary} onClick={() => dispatch(endSession())}>
          К списку тем
        </button>
        {activeTopic && (
          <button
            className={styles.btnSecondary}
            onClick={() => {
              dispatch(resetTopicProgress(activeTopic));
              dispatch(endSession());
            }}
          >
            Сбросить прогресс темы
          </button>
        )}
      </div>
    </div>
  );
}
