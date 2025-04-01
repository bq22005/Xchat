import styles from "./SendForm.module.css";

export function SendForm() {
  return (
    <div className={styles.sendForm}>
      <input className={styles.textContent} type="text" />
    </div>
  );
}