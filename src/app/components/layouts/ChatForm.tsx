import styles from "./ChatForm.module.css";
import { SendForm } from "./SendForm";

export function ChatForm() {
  return (
    <div className={styles.chatForm}>
      <SendForm />
    </div>
  );
}