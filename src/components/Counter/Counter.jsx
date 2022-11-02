import styles from './style.module.css'
import { useCount } from '../../hooks/useCount'

export const Counter = () => {
    let {count, decrement, increment} = useCount(0)

    return ( 
        <div className={styles.wrapper}>
            <button onClick={decrement} className={styles.btn_minus}>-</button>
            <span className={count === 0 ? styles.score : styles.score_black}>{count}</span>
            <button onClick={increment} className={styles.btn_plus}>+</button>
        </div>
    )
}