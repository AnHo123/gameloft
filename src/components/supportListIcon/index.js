import classNames from "classnames";
import Icon from "../ui/icon";
import styles from "./styles.module.scss";

function SupportListIcon() {
  return (
    <div className={styles.container}>
      <div className={styles.round}>
        <Icon
          name="share"
          className={classNames(styles.icon, styles.iconShare)}
          onClick={() => alert("click")}
        />
      </div>
      <div className={styles.round}>
        <Icon
          name="eMail"
          className={styles.icon}
          onClick={() => alert("click")}
        />
      </div>
      <div className={styles.round}>
        <Icon
          name="support"
          className={styles.icon}
          onClick={() => alert("click")}
        />
      </div>
    </div>
  );
}

export default SupportListIcon;
