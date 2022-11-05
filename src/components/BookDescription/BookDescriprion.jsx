import styles from "./style.module.css";
import { Counter } from "../Counter/Counter";
import { Reviews } from "../Reviews/Reviews";

export const BookDescription = ({ el }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <article className={styles.name}>
          <div className={styles.text}>
            <h2 className={styles.title}>{el.name}</h2>
            <h3 className={styles.subtitle}>{el.author}</h3>
            <h3 className={styles.subtitle}>{el.genre}</h3>
            <h3 className={styles.subtitle}>{el.score}</h3>
            <h2 className={styles.price}>{el.price} ₽</h2>
          </div>
          <div className={styles.btns}>
            <Counter />
          </div>
        </article>
        <article className={styles.annotation}>
          <h2 className={styles.title}>Аннотация</h2>
          <p className={styles.title_2}>{el.annotation}</p>
        </article>
      </div>
      <Reviews el={el} />
    </>
  );
};
