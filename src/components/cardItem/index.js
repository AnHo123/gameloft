import classNames from "classnames";
import Button from "../ui/button";
import Icon from "../ui/icon";
import Typography from "../ui/typography";
import styles from "./styles.module.scss";

function CartItem({
  title,
  imgSrc,
  description,
  active = false,
  className,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      className={classNames(
        styles.cardItem,
        active && styles.active,
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={imgSrc} alt="card" className={styles.cardImage} />
      <div className={styles.cardInfo}>
        <div className={styles.cardHeading}>
          <Typography variant={"Heading_2"} className={styles.cardTitle}>
            {title}
          </Typography>
          <div className={styles.roundIcon}>
            <Icon
              name={"share"}
              className={styles.icon}
              onClick={() => alert("click")}
            />
          </div>
          <div className={styles.line}></div>
          <Typography variant={"Subtitle_3"} className={styles.cardDescription}>
            {description}
          </Typography>
        </div>
        <Button
          title={"Read more"}
          variant={"large"}
          className={styles.button}
          onClick={() => alert("click")}
        />
      </div>
      <Typography variant={"Heading_2"} className={styles.cardTitleBottom}>
        {title}
      </Typography>
    </div>
  );
}

export default CartItem;
