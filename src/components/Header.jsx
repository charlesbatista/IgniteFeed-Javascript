import styles from "./Header.module.css";
import logo from '../assets/img/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" title="Logo" />
    </header>
  );
}
