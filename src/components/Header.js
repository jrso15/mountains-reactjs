import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <picture className={styles.header__banner}>
        <source media="(min-width: 600px)" srcSet="../images/header.png" />
        <img src="../images/header-mb.png" alt="header" />
      </picture>

      <div className={styles.header__texts}>
        <h2 className={styles.logo}>ADRENALIN</h2>

        <h2 className={styles.title}>Mountains</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
    </header>
  );
};

export default Header;
