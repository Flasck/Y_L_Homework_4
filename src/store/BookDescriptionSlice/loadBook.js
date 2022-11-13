import { startLoading, successLoading, failLoading } from "./BookDescriptionSlice"

export const loadBookDescription = (dispatch, getState, name) => {
	dispatch(startLoading())
	fetch(`http://localhost:3001/api/book/${name}`)
		.then((response) => response.json())
		.then((book) => {
			dispatch(successLoading(book))
		})
		.catch(() => {
			dispatch(failLoading())
		})
}
