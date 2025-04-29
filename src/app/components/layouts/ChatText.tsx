import styles from "./ChatText.module.css";
import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  isMine: boolean;
}

export function ChatText({ children, isMine, ...props }: Props) {
  return (
    <div className={`${styles.chatText} ${isMine ? styles.right : ""}`}>
      <div className={styles.iconContainer}>
        <img className={styles.userIcon} src="/user_default.png" alt="user-icon" />
      </div>
      <p className={styles.text} {...props}>{children}</p>
    </div>
  );
}