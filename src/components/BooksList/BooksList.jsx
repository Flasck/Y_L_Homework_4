import styles from "./style.module.css"
import { Book } from "../Book/Book"
import { useSelector } from "react-redux"

export const BooksList = ({ arr }) => {
	const current_genre = useSelector((state) => state.genre.current_genre)
	return (
		<>
			<div className={styles.article}>
				{current_genre === ""
					? arr.map((el) => (
							<Book
								key={el.id}
								name={el.name}
								author={el.author}
								genre={el.genre}
								score={el.score}
								price={el.price}
							/>
					  ))
					: arr.map((el) =>
							el.genre === current_genre ? (
								<Book
									key={el.id}
									name={el.name}
									author={el.author}
									genre={el.genre}
									score={el.score}
									price={el.price}
								/>
							) : (
								""
							)
					  )}
			</div>
		</>
	)
}
