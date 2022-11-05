import styles from "./style.module.css";
import { Comment } from "../Comment/Comment";

export const Reviews = ({ el }) => {
  if (el.reviews) {
    return (
      <>
        <article className={styles.article}>
          {el.reviews.map((el) => (
            <Comment
              key={el.id}
              name={el.name}
              mark={el.mark}
              message={el.message}
            />
          ))}
        </article>
      </>
    );
  }
};
