import styles from "./App.module.css";
import logo from "./img/shop_logo.svg";
import { StorePage } from "./pages/StorePage/StorePage";
import { BookPage } from "./pages/BookPage/BookPage";

export const App = () => {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.span}>Магазин</span>
        <img src={logo} alt="Корзина" />
      </header>
      <StorePage />
    </>
  );
};
