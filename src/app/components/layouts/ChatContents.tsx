import styles from "./ChatContents.module.css";
import { ChatItem } from "@/app/components/layouts/ChatItem";

export function ChatContents() {
  return (
    <div className={styles.chatContents}>
      <ChatItem userId={0}>text</ChatItem>
      <ChatItem userId={1}>text</ChatItem>
      <ChatItem userId={0}>text</ChatItem>
      <ChatItem userId={1}>text</ChatItem>
    </div>
  );
}