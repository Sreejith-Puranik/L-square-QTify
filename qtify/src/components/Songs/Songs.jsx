import { React } from "react";
import { songs } from "../../Api/Api";
import Songstab from "../Songstab/Songstab";
import styles from "./Songs.module.css";

function Songs(props) {
  return (
    <div>
      <div className={styles.section}>{props.title}</div>
      <Songstab songsinfo={songs} />
    </div>
  );
}

export default Songs;
