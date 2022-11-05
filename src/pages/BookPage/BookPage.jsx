import styles from "./style.module.css";
import { books } from "../../constants/mock";
import { BookDescription } from "../../components/BookDescription/BookDescriprion";

export const BookPage = () => {
  return (
    <>
      <main className={styles.main}>
        <BookDescription el={books[0]} />
      </main>
    </>
  );
};
