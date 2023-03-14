import classNames from "classnames";
import styles from "./styles.module.scss";

export default function Button({ variant, type, title, onClick, className }) {
  return (
    <button
      className={classNames(
        styles.button,
        variant === "small" && styles.buttonSmall,
        variant === "normal" && styles.buttonNormal,
        variant === "large" && styles.buttonLarge,
        className
      )}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
