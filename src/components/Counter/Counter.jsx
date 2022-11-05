import styles from './style.module.css'
import { useCount } from '../../hooks/useCount'
const classnames = require('classnames')


export const Counter = () => {
    let {count, decrement, increment} = useCount(0)
    
    return ( 
        <div className={styles.wrapper}>
            <button onClick={decrement} className={classnames(styles.btn_minus, {[styles.btn_minus_act]: count !== 0})}>-</button>
            <span className={classnames(styles.score, count !== 0 ? styles.score_black: '')}>{count}</span>
            <button onClick={increment} className={classnames(styles.btn_plus,{[styles.btn_plus_dis]: count === 10})}>+</button>
        </div>
    )
}