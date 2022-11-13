import styles from "./App.module.css"
import logo from "./img/shop_logo.svg"
import { MainPage } from "./pages/MainPage/MainPage"
import { BookPage } from "./pages/BookPage/BookPage"
import { StorePage } from "./pages/StorePage/StorePage"
import { store } from "./store/store"
import { Provider } from "react-redux"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<header className={styles.header}>
					<Link to="/" className={styles.span}>
						Магазин
					</Link>
					<Link to="/store" className={styles.span}>
						<img src={logo} alt="Корзина" />
					</Link>
				</header>
				<Routes>
					<Route index element={<MainPage />} />
					<Route path="/store" element={<StorePage />} />
					<Route path="/book/:name" element={<BookPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}
