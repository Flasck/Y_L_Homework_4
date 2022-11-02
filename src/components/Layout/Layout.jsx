import styles from './style.module.css'
import logo from '../../img/shop_logo.svg'

export const Layout = () => {
    return (
        <> 
            <header className={styles.header}>
                <span className={styles.span}>Магазин</span>
                <img className={styles.img} src={logo} alt="Корзина"/>
            </header> 
        </>
    )
} 