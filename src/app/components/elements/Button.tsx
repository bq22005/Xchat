import styles from "./Button.module.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
}

export function Button({ children, ...props }: Props) {
  return (
    <div className={styles.container}>
      <button className={styles.button} {...props}>{children}</button>
    </div>
  );
}