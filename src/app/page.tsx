import styles from "./page.module.css";
import { ChatForm } from "./components/layouts/ChatForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <ChatForm />
    </div>
  );
}
