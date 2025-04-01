import styles from "./page.module.css";
import { ChatForm } from "@/app/components/layouts/ChatForm";

export default function Chat() {
  return (
    <div className={styles.chat}>
      <ChatForm />
    </div>
  );
}