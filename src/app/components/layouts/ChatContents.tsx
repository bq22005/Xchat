import styles from "./ChatContents.module.css";
import { ChatItem } from "@/app/components/layouts/ChatItem";

export function ChatContents() {
  return (
    <div className={styles.chatContents}>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </div>
  );
}