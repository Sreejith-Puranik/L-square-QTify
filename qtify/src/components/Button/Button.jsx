import React from "react";
import styles from "./Button.module.css";

function Button() {
  return (
    <div>
      <button type="submit" className={styles.btn}>
        Give Feedback
      </button>
    </div>
  );
}

export default Button;
