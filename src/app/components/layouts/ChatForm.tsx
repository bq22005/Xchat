import styles from "./ChatForm.module.css";
import { ChatContents } from "@/app/components/layouts/ChatContents";
import { SendForm } from "@/app/components/layouts//SendForm";

export function ChatForm() {
  return (
    <div className={styles.chatForm}>
      <ChatContents />
      <SendForm />
    </div>
  );
}