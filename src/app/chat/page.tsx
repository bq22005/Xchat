import styles from "./page.module.css";
import { ChatForm } from "../components/layouts/ChatForm";

export default function Chat() {
  return (
    <div className={styles.chat}>
      <ChatForm />
    </div>
  );
}