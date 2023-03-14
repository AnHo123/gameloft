import classNames from "classnames";
import Icon from "../icon";
import styles from "./styles.module.scss";

function RatingStar({ point, className }) {
  if (!point) return null;

  let result = [];
  for (let i = 0; i < 5; i++) {
    if (i < point) {
      result.push("starFull");
    } else {
      result.push("starNormal");
    }
  }

  return (
    <div className={classNames(styles.container, className)}>
      {Array.isArray(result) &&
        result.length > 0 &&
        result.map((star) => <Icon name={star} className={styles.icon} />)}
    </div>
  );
}

export default RatingStar;
