import classNames from "classnames";

import { ICON } from "./constants/index";

import styles from "./styles.module.scss";

function Icon({ name, className, onClick }) {
  if (!ICON.hasOwnProperty(name)) return null;

  const IconSvg = ICON[name];

  return (
    <div className={classNames(styles.icon, className)} onClick={onClick}>
      <IconSvg />
    </div>
  );
}

export default Icon;
