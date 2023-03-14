import classNames from "classnames";
import Typography from "../typography";
import styles from "./styles.module.scss";

function InputField({ type, id, name, placeholder, label, className }) {
  return (
    <div
      className={classNames(
        styles.container,
        type === "checkbox" && styles.checkbox,
        className
      )}
    >
      {type !== "checkbox" && (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className={classNames(styles.inputField)}
        />
      )}

      {!!label && type === "checkbox" && (
        <label htmlFor={id} className={styles.label}>
          <Typography variant={"Body_text_2"}>{label}</Typography>
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={classNames(styles.inputField)}
          />
          <span className={styles.checkmark}></span>
        </label>
      )}
    </div>
  );
}

export default InputField;
