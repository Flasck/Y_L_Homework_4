import styles from "./style.module.css";

export const Comment = ({ name, mark, message }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <span className={styles.title}>{name}</span>
        <span className={styles.title}>Оценка: {mark}</span>
      </div>
      <p>{message}</p>
    </div>
  );
};
