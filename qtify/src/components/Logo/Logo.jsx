import React from "react";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div>
      <img
        src={require("../../Assets/logo.png")}
        alt="logo"
        className={styles.logo}
      />
    </div>
  );
}
