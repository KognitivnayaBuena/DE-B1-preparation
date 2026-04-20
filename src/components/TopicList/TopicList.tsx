import { topics } from '../../data/cards';
import TopicCard from '../TopicCard/TopicCard';
import styles from './TopicList.module.css';

export default function TopicList() {
  return (
    <div>
      <p className={styles.subtitle}>Выберите тему для изучения</p>
      <div className={styles.grid}>
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
