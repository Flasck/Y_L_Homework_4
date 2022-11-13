import styles from "./style.module.css"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../../store/CounterSlice/CounterSlice"
const classnames = require("classnames")

export const Counter = ({ name }) => {
	const dispatch = useDispatch()
	const score = useSelector((store) => store.counter[name] || 0)

	return (
		<div className={styles.wrapper}>
			<button
				onClick={() => dispatch(decrement(name))}
				className={classnames(styles.btn_minus, { [styles.btn_minus_act]: score !== 0 })}
			>
				-
			</button>
			<span className={classnames(styles.score, { [styles.score_black]: score !== 0 })}>
				{score}
			</span>
			<button
				onClick={() => dispatch(increment(name))}
				className={classnames(styles.btn_plus, { [styles.btn_plus_dis]: score === 10 })}
			>
				+
			</button>
		</div>
	)
}
