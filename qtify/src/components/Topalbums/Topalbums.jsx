import React from "react";
import Card from "../Card/Card";
import styles from "./Topalbums.module.css";

function Topalbums() {
  return (
    <div>
      <p className={styles.albumtitle}>Top Albums</p>
      <Card
        albumlogo={require("../../Assets/albumlogo.png")}
        follows="100 Follows"
        cardtitle="New Bollywood"
      />
    </div>
  );
}

export default Topalbums;
