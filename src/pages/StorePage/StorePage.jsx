import styles from "./style.module.css"
import { StoreAside } from "../../components/StoreAside/StoreAside"
import { StoreBooksList } from "../../components/StoreBooksList/StoreBooksList"
import { loadBooks } from "../../store/BooksSlice/loadBooksList"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

export const StorePage = () => {
	const dispatch = useDispatch()
	useEffect(() => loadBooks(dispatch), [])
	const arr = useSelector((state) => state.books.entities)

	return (
		<>
			<main className={styles.main}>
				<StoreAside arr={arr} />
				<StoreBooksList arr={arr} />
			</main>
		</>
	)
}
