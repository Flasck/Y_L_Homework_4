import { startLoading, successLoading, failLoading } from "./BooksSlice"

export const loadBooks = (dispatch, getState) => {
	dispatch(startLoading())
	fetch("http://localhost:3001/api/books")
		.then((response) => response.json())
		.then((books) => {
			dispatch(successLoading(books))
		})
		.catch(() => {
			dispatch(failLoading())
		})
}
