import React from "react";
import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";

export default function Card(props) {
  switch (props.type) {
    case "album":
      return (
        <Tooltip title="42 songs">
          <div className={styles.cardcontainer}>
            <div className={styles.cardinner}>
              <img
                src={props.albumlogo}
                alt="albumlogo"
                className={styles.albumlogo}
                loading="lazy"
              />

              <p className={styles.follows}>{props.follows} Follows</p>
            </div>

            <p className={styles.cardtitle}>{props.cardtitle}</p>
          </div>
        </Tooltip>
      );

    case "song":
      return (
        <div className={styles.cardcontainer}>
          <div className={styles.cardinner}>
            <img
              src={props.albumlogo}
              alt="albumlogo"
              className={styles.albumlogo}
              loading="lazy"
            />

            <p className={styles.follows}>{props.follows} Likes</p>
          </div>

          <p className={styles.cardtitle}>{props.cardtitle}</p>
        </div>
      );

    default:
      break;
  }
}
