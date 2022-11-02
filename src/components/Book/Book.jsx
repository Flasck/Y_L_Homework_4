import styles from './style.module.css'
import { Counter } from '../Counter/Counter'


export const Book = ({name, author, genre, score, price}) => {
    return ( 
        <article className={styles.article}>
            <div className={styles.text}>
                <h2 className={styles.title}>{name}</h2>
                <h3 className={styles.subtitle}>{author}</h3>
                <h3 className={styles.subtitle}>{genre}</h3>
                <h3 className={styles.subtitle}>{score}</h3>
                <h2 className={styles.price}>{price} ₽</h2>
            </div>
            <Counter className={styles.count}/>
        </article>
    )
} 
