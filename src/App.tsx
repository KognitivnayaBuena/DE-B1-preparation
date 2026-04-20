import { useAppSelector } from './store/hooks';
import TopicList from './components/TopicList/TopicList';
import FlashcardView from './components/FlashcardView/FlashcardView';
import SessionSummary from './components/SessionSummary/SessionSummary';
import styles from './App.module.css';

export default function App() {
  const currentView = useAppSelector((s) => s.session.currentView);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>DE B1 Karteikarten</h1>
      </header>
      <main className={styles.main}>
        {currentView === 'topicSelection' && <TopicList />}
        {currentView === 'review' && <FlashcardView />}
        {currentView === 'sessionSummary' && <SessionSummary />}
      </main>
    </div>
  );
}
