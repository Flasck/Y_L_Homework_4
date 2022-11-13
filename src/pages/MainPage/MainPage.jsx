import styles from "./style.module.css"
import { MainAside } from "../../components/MainAside/MainAside"
import { BooksList } from "../../components/BooksList/BooksList"
import { loadBooks } from "../../store/BooksSlice/loadBooksList"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

export const MainPage = () => {
	const dispatch = useDispatch()
	useEffect(() => loadBooks(dispatch), [])
	const arr = useSelector((state) => state.books.entities)

	return (
		<>
			<main className={styles.main}>
				<MainAside arr={arr} />
				<BooksList arr={arr} />
			</main>
		</>
	)
}
