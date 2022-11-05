import styles from "./style.module.css";
import { BookGenre } from "../BookGenre/BookGenre";
import { useState, useEffect } from "react";

export const Aside = ({ list, func }) => {
  function get_sp(arr) {
    let sp = [];
    for (let i = 0; i < arr.length; i++) {
      if (sp.indexOf(arr[i].genre) === -1) {
        sp.push(arr[i].genre);
      }
    }
    return sp.sort();
  }

  const [value, setValue] = useState("");

  const set = (genre) => (genre === value ? setValue("") : setValue(genre));
  useEffect(() => func(value));

  return (
    <>
      <aside className={styles.aside}>
        {get_sp(list).map((el) => (
          <BookGenre
            style={{ fontWeight: el === value ? "bold" : "normal" }}
            func={set}
            genre={el}
            key={Math.random()}
          />
        ))}
      </aside>
    </>
  );
};
