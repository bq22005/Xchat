import styles from "./page.module.css";
import { Profile } from "./components/layouts/Profile";

export default function Home() {
  return (
    <div className={styles.page}>
      <Profile />
    </div>
  );
}
