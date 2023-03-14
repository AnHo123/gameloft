import classNames from "classnames";
import Icon from "../icon";
import styles from "./styles.module.scss";

function Select({ id, placeholder, options, className, classNameIcon }) {
  return (
    <div className={classNames(styles.container, className)}>
      <select id={id} className={styles.select}>
        {!!placeholder && (
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
        )}
        {Array.isArray(options) &&
          options.length > 0 &&
          options.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
      </select>
      <Icon
        name={"arrowDown"}
        className={classNames(styles.icon, classNameIcon)}
      />
    </div>
  );
}

export default Select;
