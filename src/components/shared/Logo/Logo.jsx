import sprites from "../../../assets/icons/sprites.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <svg className={styles.icon}>
        <use href={`${sprites}#icon-TravelTrucks`} />
      </svg>
    </a>
  );
};

export default Logo;
