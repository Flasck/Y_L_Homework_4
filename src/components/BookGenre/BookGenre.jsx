import styles from "./style.module.css"
import { useDispatch, useSelector } from "react-redux"
import { change } from "../../store/GenreSlice/GenreSlice"

export const BookGenre = ({ genre }) => {
	const current_genre = useSelector((state) => state.genre.current_genre)
	const dispatch = useDispatch()

	return (
		<a
			onClick={() => dispatch(change(genre))}
			style={{ fontWeight: current_genre === genre ? "bold" : "normal" }}
			className={styles.a}
			href="#"
		>
			{genre}
		</a>
	)
}
