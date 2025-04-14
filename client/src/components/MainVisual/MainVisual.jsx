import styles from "./mainvisual.module.css";
import cloudImage from "./../../assets/cloud1.webp";

export default function MainVisual() {
  return (
    <div className={styles.container}>
      <img className={styles.worldMap} src={cloudImage} alt="" />
      <div className={styles.content}>
        <div>
          <p className={styles.title}>RainDrops</p>
          <p className={styles.slogan}>Your Pockect Weather Assistant</p>
        </div>
      </div>
    </div>
  );
}
