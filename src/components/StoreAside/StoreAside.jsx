import styles from "./style.module.css"
import { BookPrice } from "../BookPrice/BookPrice"
import { useSelector } from "react-redux"

export const StoreAside = ({ arr }) => {
	const checkedBooks = useSelector((state) => state.counter)
	function summArrayElements(arr) {
		let x = 0
		return arr.map((i) => (x += i), x).reverse()[0]
	}
	const count_total = () => {
		if (Object.keys(checkedBooks) !== "") {
			return summArrayElements(
				arr.map((el) =>
					checkedBooks[el.name] !== undefined ? el.price * checkedBooks[el.name] : 0
				)
			)
		} else {
			return 0
		}
	}

	return (
		<>
			<aside className={styles.aside}>
				<h1 className={styles.h1}>Ваш заказ:</h1>
				<div className={styles.mid}>
					{Object.keys(checkedBooks).length > 0 ? (
						arr.map((el) =>
							checkedBooks[el.name] !== undefined ? (
								<BookPrice name={el.name} price={el.price} key={el.id} />
							) : (
								""
							)
						)
					) : (
						<div className={styles.empty}>Вы не выбрали книг</div>
					)}
				</div>
				<div className={styles.bot}>
					<p className={styles.p}>Итого:ㅤ{count_total()} ₽</p>
					<button className={styles.btn}>Купить</button>
				</div>
			</aside>
		</>
	)
}
