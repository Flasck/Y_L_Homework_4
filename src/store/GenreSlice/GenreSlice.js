import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	current_genre: "",
}

const genreSlice = createSlice({
	name: "genre",
	initialState,
	reducers: {
		change: (state, action) => {
			if (state.current_genre) {
				state.current_genre == action.payload
					? (state.current_genre = "")
					: (state.current_genre = action.payload)
			} else {
				state.current_genre = action.payload
			}
			return
		},
	},
})

export const { change } = genreSlice.actions
export default genreSlice.reducer
