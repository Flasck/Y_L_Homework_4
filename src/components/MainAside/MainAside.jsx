import styles from "./style.module.css"
import { BookGenre } from "../BookGenre/BookGenre"

export const MainAside = ({ arr }) => {
	function get_genre_list(arr) {
		let sp = []
		arr.map((el) => (sp.indexOf(el.genre) === -1 ? sp.push(el.genre) : ""))
		return sp.sort()
	}

	return (
		<>
			<aside className={styles.aside}>
				{get_genre_list(arr).map((el) => (
					<BookGenre genre={el} key={Math.random()} />
				))}
			</aside>
		</>
	)
}
