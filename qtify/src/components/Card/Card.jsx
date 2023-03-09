import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardinner}>
        <img
          src={props.albumlogo}
          alt="albumlogo"
          className={styles.albumlogo}
        />

        <p className={styles.follows}>{props.follows}</p>
      </div>

      <p className={styles.cardtitle}>{props.cardtitle}</p>
    </div>
  );
}
