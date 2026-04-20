import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>
      <span className={styles.label}>
        {current} / {total}
      </span>
    </div>
  );
}
