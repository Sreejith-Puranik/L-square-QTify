import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./Carauselrightnavigation.module.css";

function Carauselrightnavigation() {
  const swiper = useSwiper();
  return (
    <div className={styles.right} onClick={() => swiper.slideNext()}>
      <img
        src={require("../../Assets/rightarrow.png")}
        alt="arrow"
        className={styles.rightarrow}
      />
    </div>
  );
}

export default Carauselrightnavigation;
