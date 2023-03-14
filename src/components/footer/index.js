import Icon from "../ui/icon";
import Select from "../ui/select";
import Typography from "../ui/typography";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.main}>
        {/* <div className={styles.mainWrap}> */}
        <div className={styles.info}>
          <Icon name="gameloftLogo" className={styles.iconLogo} />
          <div className={styles.follow}>
            <Typography variant={"Heading_4"} className={styles.title}>
              Follow Us
            </Typography>
            <div className={styles.socials}>
              <a href="/" target="_blank">
                <Icon name="socialFacebook" className={styles.iconFb} />
              </a>
              <a href="/" target="_blank">
                <Icon name="socialLinkedIn" className={styles.icon} />
              </a>
              <a href="/" target="_blank">
                <Icon name="socialTwitter" className={styles.icon} />
              </a>
              <a href="/" target="_blank">
                <Icon name="socialYoutube" className={styles.icon} />
              </a>
            </div>
            <div className={styles.selectLanguage}>
              <Select
                id="languae"
                options={["English", "French"]}
                className={styles.select}
                classNameIcon={styles.iconArrow}
              />
              <Icon name="earth" className={styles.iconEarth} />
            </div>
          </div>
        </div>
        <div className={styles.categoryContainer}>
          <div className={styles.category}>
            <Typography variant={"Heading_4"} className={styles.categoryTitle}>
              Visit
            </Typography>
            <ul className={styles.categoryList}>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>Gameloft Games</Typography>
                </li>{" "}
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>
                    Gameloft Careers{" "}
                  </Typography>
                </li>
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>Gameloft News </Typography>
                </li>
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>
                    Gameloft Forum{" "}
                  </Typography>
                </li>
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>
                    Gameloft Corporate{" "}
                  </Typography>
                </li>
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>
                    Gameloft Advertising{" "}
                  </Typography>
                </li>
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>
                    Gameloft Support{" "}
                  </Typography>
                </li>
              </a>
            </ul>
          </div>
          <div className={styles.category}>
            <Typography variant={"Heading_4"} className={styles.categoryTitle}>
              Legal
            </Typography>
            <ul className={styles.categoryList}>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>Terms of Use</Typography>
                </li>
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>Privacy Policy</Typography>
                </li>
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>Cookies Policy</Typography>
                </li>
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>EULA </Typography>
                </li>
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>Legal Notices </Typography>
                </li>
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>Event Rules</Typography>
                </li>
              </a>
              <a href="/">
                <li className={styles.categoryItem}>
                  <Typography variant={"Subtitle_2"}>
                    Business Contacts
                  </Typography>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className={styles.copyrightInfo}>
        <Typography variant={"Caption_1"} className={styles.copyrightContent}>
          ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo
          are trademarks of Gameloft in the U.S. and/or other countries.
          <br />
          All other trademarks are the property of their respective owners.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
