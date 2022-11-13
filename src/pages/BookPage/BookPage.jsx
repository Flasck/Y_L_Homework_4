import styles from "./style.module.css"
import { BookDescription } from "../../components/BookDescription/BookDescriprion"
import { useParams } from "react-router-dom"
import { loadBookDescription } from "../../store/BookDescriptionSlice/loadBook"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

export const BookPage = () => {
	const { name } = useParams()
	const dispatch = useDispatch()
	useEffect(() => loadBookDescription(dispatch, null, name), [])
	const book = useSelector((state) => state.bookDescription.entities)

	return (
		<>
			<main className={styles.main}>
				<BookDescription current_book={book} name={name} />
			</main>
		</>
	)
}
