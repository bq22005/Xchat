import styles from "./SendForm.module.css";
import { Button } from "../elements/Button";

export function SendForm() {
  return (
    <div className={styles.sendForm}>
      <input className={styles.textContent} type="text" />
      <Button>送信</Button>
    </div>
  );
}