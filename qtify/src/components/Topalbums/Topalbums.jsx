import React from "react";
import Card from "../Card/Card";
import styles from "./Topalbums.module.css";

function Topalbums() {
  return (
    <div>
      <p className={styles.albumtitle}>Top Albums</p>
      <div className={styles.cardloop}>
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
        <Card
          albumlogo={require("../../Assets/albumlogo.png")}
          follows="100 Follows"
          cardtitle="New Bollywood"
        />
      </div>
    </div>
  );
}

export default Topalbums;
