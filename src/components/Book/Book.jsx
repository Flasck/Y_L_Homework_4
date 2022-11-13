import styles from "./style.module.css"
import { Counter } from "../Counter/Counter"
import { Link } from "react-router-dom"

export const Book = ({ name, author, genre, score, price }) => {
	return (
		<article className={styles.article}>
			<div className={styles.text}>
				<Link to={`/book/${name}`} className={styles.title}>
					{name}
				</Link>
				<h3 className={styles.subtitle}>{author}</h3>
				<h3 className={styles.subtitle}>{genre}</h3>
				<h3 className={styles.subtitle}>{score}</h3>
				<h2 className={styles.price}>{price} ₽</h2>
			</div>
			<Counter className={styles.count} name={name} />
		</article>
	)
}
