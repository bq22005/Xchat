"use client";

import styles from "./Profile.module.css";
import { useState } from "react";

export function Profile() {
  const [profileIcon, setProfileIcon] = useState("");
  const [iconPath, setIconPath] = useState("/user_default.png");

  return (
    <div className={styles.profile}>
      <div className={styles.userInfo}>
        <div className={styles.iconContainer}>
          <img className={styles.userIcon} src={iconPath} alt="user_icon" />
        </div>
        <p className={styles.userName}>User</p>
      </div>
    </div>
  );
}