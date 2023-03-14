import Icon from "../ui/icon";

import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <a href="https://anho123.github.io/gameloft/">
          <Icon name="gameloftLogo" className={styles.iconLogo} />
        </a>
        <Icon
          name="menu"
          className={styles.icon}
          onClick={() => alert("click")}
        />
      </div>
    </header>
  );
}

export default Header;
