import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
