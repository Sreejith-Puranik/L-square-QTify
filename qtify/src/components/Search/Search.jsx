import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.searchcontainer}>
      <input
        type={Text}
        placeholder="Search a song of your choice"
        className={styles.search}
      />
      <button type="submit" className={styles.searchimg}>
        <img
          className={styles.icon}
          src={require("../../Assets/search_icon.png")}
          alt="logo"
        />
      </button>
    </div>
  );
};

export default Search;
