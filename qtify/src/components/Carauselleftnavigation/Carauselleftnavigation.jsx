import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./Carauselleftnavigation.module.css";

function Carauselleftnavigation() {
  const swiper = useSwiper();
  return (
    <div className={styles.left} onClick={() => swiper.slidePrev()}>
      <img
        src={require("../../Assets/leftarrow.png")}
        alt="arrow"
        className={styles.leftarrow}
      />
    </div>
  );
}

export default Carauselleftnavigation;
