import styles from './style.module.css'
import { books } from '../../constants/mock'
import { Layout } from '../../components/Layout/Layout'
import { BookDescription } from '../../components/BookDescription/BookDescriprion'
import { Reviews } from '../../components/Reviews/Reviews'

export const BookPage = () => {
    return (
        <>
            <Layout />
            <main className={styles.main}>
                <BookDescription el={books[0]} />
                <Reviews el={books[0]}/>
            </main>
        </>
    )
} 