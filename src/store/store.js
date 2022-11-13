import counterReducer from "./CounterSlice/CounterSlice"
import genreReducer from "./GenreSlice/GenreSlice"
import booksReducer from "./BooksSlice/BooksSlice"
import bookDescriptionReducer from "./BookDescriptionSlice/BookDescriptionSlice"

const { configureStore } = require("@reduxjs/toolkit")

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		genre: genreReducer,
		books: booksReducer,
		bookDescription: bookDescriptionReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
