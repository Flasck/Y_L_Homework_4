import styles from "./style.module.css"
import { Book } from "../Book/Book"
import { useSelector } from "react-redux"

export const StoreBooksList = ({ arr }) => {
	const checkedBooks = useSelector((state) => state.counter)

	return (
		<>
			<div className={styles.article}>
				{Object.keys(checkedBooks).length > 0 ? (
					arr.map((el) =>
						checkedBooks[el.name] !== undefined ? (
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
					)
				) : (
					<div className={styles.empty}>Пусто</div>
				)}
			</div>
		</>
	)
}
