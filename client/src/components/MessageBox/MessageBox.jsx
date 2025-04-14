import styles from "./messagebox.module.css";

export default function MessageBox({ message, role }) {
  if (role == "user") {
    return (
      <div className={styles.containerUser}>
        <p className={styles.message}>{message}</p>
      </div>
    );
  } else if (role == "system") {
    return (
      <div className={styles.containerSystem}>
        <p className={styles.message}>{message}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.containerError}>
        <p className={styles.message}>{message}</p>
      </div>
    );
  }
}
