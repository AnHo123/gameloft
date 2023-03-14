import Typography from "../ui/typography";
import styles from "./styles.module.scss";

function DownloadInfo() {
  return (
    <section className={styles.container}>
      <div className={styles.downloadInfo}>
        <Typography variant={"Heading_4"} className={styles.title}>
          Download latest version{" "}
        </Typography>
        <div className={styles.app}>
          <a href="https://anho123.github.io/gameloft/" target="_blank">
            <img
              src="image/downloadNintendoEShop.png"
              alt="downloadNintendoEShop"
            />
          </a>
          <a href="https://anho123.github.io/gameloft/" target="_blank">
            <img src="image/downloadMicrosoft.png" alt="downloadMicrosoft" />
          </a>
          <a href="https://anho123.github.io/gameloft/" target="_blank">
            <img src="image/downloadSteam.png" alt="dowdownloadSteamnload" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default DownloadInfo;
