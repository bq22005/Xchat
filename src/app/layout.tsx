import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import styles from "./layout.module.css";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xchat",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenMaruGothic.className} ${styles.body}`}>
        <div className={styles.container}>
          <header>
            <div className={styles.headerContainer}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src="/xchat-logo.png" alt="xchat-logo" />
              </div>
            </div>
          </header>
          {children}
          <footer>
            <div className={styles.footerContainer}>
              <div className={styles.items}>
                <div className={styles.imgContainer}>
                  <img className={styles.itemImg} src="/home.png" alt="home" />
                </div>
                <div className={styles.imgContainer}>
                  <img className={styles.itemImg} src="/chat.png" alt="chat" />
                </div>
                <div className={styles.imgContainer}>
                  <img className={styles.itemImg} src="/search.png" alt="search" />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
