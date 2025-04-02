import styles from "./ChatItem.module.css";
import { ChatText } from "@/app/components/layouts/ChatText";

export function ChatItem() {
  return (
    <div className={styles.chatItem}>
      <ChatText bgPath="/text-background-right.png">text</ChatText>
    </div>
  );
}