"use client"

import styles from "./ChatItem.module.css";
import { HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { ChatText } from "@/app/components/layouts/ChatText";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  userId: number;
}

export function ChatItem({ children, userId, ...props }: Props) {
  const [isMine, setIsMine] = useState(false);

  useEffect(() => {
    const handleCheckUser = (id: number) => {
      if (id == 1) {
        setIsMine(true);
      }
    }

    handleCheckUser(userId);
  }, [])

  return (
    <div className={styles.chatItem} {...props}>
      <ChatText isMine={isMine} >{children}</ChatText>
    </div>
  );
}