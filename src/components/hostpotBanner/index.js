import Typography from "../ui/typography";
import RatingStar from "../ui/ratingStar";
import styles from "./styles.module.scss";

function HotspotBanner() {
  return (
    <section className={styles.container}>
      <img
        src="https://mkt-web.gameloft.com/static/media-manager/f8e2d18dbafdc639574d18598cd3b992.jpg"
        alt="hotspot-banner"
        className={styles.banner}
      />
      <div className={styles.infoWrap}>
        <div className={styles.info}>
          <Typography variant={"Heading_1"} className={styles.title}>
            Gameloft game
          </Typography>
          <div className={styles.rating}>
            <Typography variant={"Caption_2"}>
              Racing / Action |{" "}
              <RatingStar point={4} className={styles.ratingStar} />{" "}
            </Typography>
          </div>
          <div className={styles.description}>
            <Typography variant={"Subtitle_2"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud itation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit...
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotspotBanner;
