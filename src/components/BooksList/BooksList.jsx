import styles from './style.module.css'
import { Book } from '../Book/Book'

export const BooksList = ({ arr, need_genre=''}) => {

    return (
        <>
            <div className={styles.article}>
            { need_genre ===  '' ? 
                    arr.sort().map(el => 
                    <Book key={el.id}
                        name={el.name}
                        author={el.author}
                        genre={el.genre}
                        score={el.score}
                        price={el.price} 
                    />) 
                    : 
                    arr.sort().map(el => el.genre === need_genre  ? 
                    <Book key={el.id}
                        name={el.name}
                        author={el.author}
                        genre={el.genre}
                        score={el.score}
                        price={el.price} 
                    />  : '')}
            </div>
        </>
    )
} 