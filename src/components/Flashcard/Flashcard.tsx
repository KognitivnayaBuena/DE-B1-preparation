import { useState } from 'react';
import styles from './Flashcard.module.css';

interface FlashcardProps {
  german: string;
  russian: string;
  rememberedCount: number;
  onRemember: () => void;
  onForgot: () => void;
  onSkip: () => void;
}

type CheckResult = 'idle' | 'correct' | 'wrong';

export default function Flashcard({ german, russian, rememberedCount, onRemember, onForgot, onSkip }: FlashcardProps) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [input, setInput] = useState('');
  const [checkResult, setCheckResult] = useState<CheckResult>('idle');

  const handleCheck = () => {
    if (!input.trim()) return;
    if (input.trim() === german.trim()) {
      setCheckResult('correct');
    } else {
      setCheckResult('wrong');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCheck();
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.badge}>{rememberedCount} / 10</div>
      <p className={styles.text}>{german}</p>
      {showTranslation ? (
        <p className={styles.translation}>{russian}</p>
      ) : (
        <button className={styles.btnShow} onClick={() => setShowTranslation(true)}>
          Показать перевод
        </button>
      )}

      <div className={styles.inputSection}>
        <div className={styles.inputRow}>
          <input
            className={`${styles.input} ${checkResult === 'correct' ? styles.inputCorrect : ''} ${checkResult === 'wrong' ? styles.inputWrong : ''}`}
            type="text"
            value={input}
            onChange={(e) => { setInput(e.target.value); setCheckResult('idle'); }}
            onKeyDown={handleKeyDown}
            placeholder="Напишите предложение на немецком..."
            spellCheck={false}
            autoComplete="off"
          />
          <button className={styles.btnCheck} onClick={handleCheck} disabled={!input.trim()}>
            Проверить
          </button>
        </div>
        {checkResult === 'correct' && (
          <p className={styles.feedbackCorrect}>Правильно!</p>
        )}
        {checkResult === 'wrong' && (
          <div className={styles.feedbackWrong}>
            <p>Есть ошибки. Правильно:</p>
            <p className={styles.correctText}>{german}</p>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button className={styles.btnForgot} onClick={onForgot}>
          Не помню
        </button>
        <button className={styles.btnSkip} onClick={onSkip}>
          Далее
        </button>
        <button className={styles.btnRemember} onClick={onRemember}>
          Помню
        </button>
      </div>
    </div>
  );
}
