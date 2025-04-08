"use client";

import styles from "./ChatText.module.css";
import { HTMLAttributes, ReactNode, useState } from "react";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  userId: number;
}

export function ChatText({ children, userId, ...props }: Props) {
  const [isMine, setIsMine] = useState(false);

  return (
    <div className={`${styles.chatText} ${isMine ? styles.right : ""}`}>
      <div className={styles.iconContainer}>
        <img className={styles.userIcon} src="/user_default.png" alt="user-icon" />
      </div>
      <p className={styles.text} {...props}>{children}</p>
    </div>
  );
}