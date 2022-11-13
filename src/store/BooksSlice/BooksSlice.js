import { createSlice } from "@reduxjs/toolkit"
import { Statuses } from "../statuses"

const initialState = {
	entities: [],
	status: Statuses.idle,
}

export const booksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		startLoading: (state, action) => {
			state.status = Statuses.inProgress
			state.entities = []
		},
		successLoading: (state, action) => {
			state.status = Statuses.success
			state.entities = action.payload
		},
		failLoading: (state, action) => {
			state.status = Statuses.failed
			state.entities = []
		},
	},
})

export const { startLoading, successLoading, failLoading } = booksSlice.actions
export default booksSlice.reducer
