import styles from "./style.module.css"

export const BookPrice = ({ name, price }) => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.name}>{name}</p>
			<p className={styles.price}>{price} ₽</p>
		</div>
	)
}
