import styles from "./ChatItem.module.css";

export function ChatItem() {
  return (
    <div className={styles.chatItem}>
      <p className={styles.text}>テキスト</p>
    </div>
  );
}