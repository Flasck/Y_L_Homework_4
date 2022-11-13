import styles from "./style.module.css"
import { Comment } from "../Comment/Comment"

export const Reviews = ({ reviews }) => {
	if (reviews) {
		return (
			<>
				<article className={styles.article}>
					{reviews.map((el) => (
						<Comment key={el.id} name={el.name} mark={el.mark} message={el.message} />
					))}
				</article>
			</>
		)
	}
}
