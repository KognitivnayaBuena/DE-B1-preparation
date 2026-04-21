import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { markRemembered, markForgotten } from '../../store/cardsSlice';
import { recordRemembered, recordForgotten, advanceCard, endSession } from '../../store/sessionSlice';
import { cards, topics } from '../../data/cards';
import Flashcard from '../Flashcard/Flashcard';
import styles from './FlashcardView.module.css';

export default function FlashcardView() {
  const dispatch = useAppDispatch();
  const { activeTopic, reviewOrder, currentIndex, sessionRemembered, sessionForgotten } =
    useAppSelector((s) => s.session);
  const progress = useAppSelector((s) => s.cards.progress);

  const topic = topics.find((t) => t.id === activeTopic);
  const cardId = reviewOrder[currentIndex];
  const cardData = cards.find((c) => c.id === cardId);

  if (!cardData || !topic) return null;

  const rememberedCount = progress[cardId]?.rememberedCount ?? 0;

  const handleRemember = () => {
    dispatch(markRemembered(cardId));
    dispatch(recordRemembered());
    dispatch(advanceCard());
  };

  const handleForgot = () => {
    dispatch(markForgotten(cardId));
    dispatch(recordForgotten());
    dispatch(advanceCard());
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => dispatch(endSession())}>
          &larr; К темам
        </button>
        <span className={styles.topicName}>{topic.name}</span>
      </div>

      <div className={styles.progress}>
        <span>
          Карточка {currentIndex + 1} из {reviewOrder.length}
        </span>
        <span className={styles.stats}>
          <span className={styles.statGreen}>{sessionRemembered}</span>
          {' / '}
          <span className={styles.statRed}>{sessionForgotten}</span>
        </span>
      </div>

      <Flashcard
        key={cardId}
        german={cardData.german}
        russian={cardData.russian}
        examples={cardData.examples}
        rememberedCount={rememberedCount}
        onRemember={handleRemember}
        onForgot={handleForgot}
        onSkip={() => dispatch(advanceCard())}
      />
    </div>
  );
}
