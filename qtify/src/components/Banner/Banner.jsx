import React from "react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.bannermain}>
      <p className={styles.bannertext}>
        <span id={styles.content1}>100 Thousand Songs, ad-free</span>
        <span id={styles.content2}>Over thousands podcast episodes</span>
      </p>
      <img
        src={require("../../Assets/headphone.png")}
        alt="bannerimg"
        className={styles.bannerimg}
      />
      ;
    </div>
  );
}

export default Banner;
