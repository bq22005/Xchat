import styles from "./ChatText.module.css";
import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  bgPath: string;
}

export function ChatText({ children, bgPath, ...props }: Props) {
  return (
    <div className={styles.chatText} style={{ "backgroundImage": `url(${bgPath})`} as React.CSSProperties}>
      <p className={styles.text} {...props}>{children}</p>
    </div>
  );
}