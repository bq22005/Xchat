import styles from "./ChatText.module.css";
import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
}

export function ChatText({ children, ...props }: Props) {
  return (
    <div className={styles.chatText}>
      <img src="/text-background-right" alt="text-background">
        <p className={styles.text} {...props}>{children}</p>
      </img>
    </div>
  );
}