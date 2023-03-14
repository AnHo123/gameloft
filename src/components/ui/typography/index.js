import classNames from "classnames";

import styles from "./styles.module.scss";

function Typography({ variant, children, className }) {
  switch (variant) {
    case "Heading_1":
      return (
        <h2 className={classNames(styles.headingFirst, className)}>
          {children}
        </h2>
      );

    case "Heading_2":
      return (
        <h3 className={classNames(styles.headingSecond, className)}>
          {children}
        </h3>
      );

    case "Heading_3":
      return (
        <h4 className={classNames(styles.headingThird, className)}>
          {children}
        </h4>
      );
    case "Heading_4":
      return (
        <h5 className={classNames(styles.headingFourth, className)}>
          {children}
        </h5>
      );

    case "Heading_5":
      return (
        <h6 className={classNames(styles.headingFifth, className)}>
          {children}
        </h6>
      );

    case "Subtitle_1":
      return (
        <span className={classNames(styles.subtitleFirst, className)}>
          {children}
        </span>
      );
    case "Subtitle_2":
      return (
        <span className={classNames(styles.subtitleSecond, className)}>
          {children}
        </span>
      );
    case "Subtitle_3":
      return (
        <span className={classNames(styles.subtitleThird, className)}>
          {children}
        </span>
      );
    case "Subtitle_4":
      return (
        <span className={classNames(styles.subtitleFourth, className)}>
          {children}
        </span>
      );

    case "Body_text_1":
      return (
        <p className={classNames(styles.bodyTextFirst, className)}>
          {children}
        </p>
      );

    case "Body_text_2":
      return (
        <p className={classNames(styles.bodyTextSecond, className)}>
          {children}
        </p>
      );

    case "Caption_1":
      return (
        <span className={classNames(styles.captionFirst, className)}>
          {children}
        </span>
      );

    case "Caption_2":
      return (
        <span className={classNames(styles.captionSecond, className)}>
          {children}
        </span>
      );

    default:
      return <p>{children}</p>;
  }
}

export default Typography;
