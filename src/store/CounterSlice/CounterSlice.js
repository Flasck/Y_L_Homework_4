import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state, action) => {
			if (state[action.payload] !== 10) {
				state[action.payload] = (state[action.payload] || 0) + 1
			}
		},
		decrement: (state, action) => {
			if (state[action.payload]) {
				state[action.payload] = state[action.payload] - 1
			}

			if (state[action.payload] <= 0) {
				delete state[action.payload]
			}
		},
	},
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
