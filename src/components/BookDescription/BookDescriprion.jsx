import styles from "./style.module.css"
import { Counter } from "../Counter/Counter"
import { Reviews } from "../Reviews/Reviews"
import React from "react"

export const BookDescription = ({ current_book, name }) => {
	return (
		<>
			<div className={styles.wrapper}>
				<article className={styles.name}>
					<div className={styles.text}>
						<h2 className={styles.title}>{current_book.name}</h2>
						<h3 className={styles.subtitle}>{current_book.author}</h3>
						<h3 className={styles.subtitle}>{current_book.genre}</h3>
						<h3 className={styles.subtitle}>{current_book.score}</h3>
						<h2 className={styles.price}>{current_book.price} ₽</h2>
					</div>
					<div className={styles.btns}>
						<Counter name={name} />
					</div>
				</article>
				<article className={styles.annotation}>
					<h2 className={styles.title}>Аннотация</h2>
					<p className={styles.title_2}>{current_book.annotation}</p>
				</article>
			</div>
			<Reviews reviews={current_book.reviews} />
		</>
	)
}
