import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <>
      <input
        type={Text}
        placeholder="Search a song of your choice"
        className={styles.search}
      />
      <button type="submit" className={styles.searchimg}>
        <img src={require("../../Assets/search_icon.png")} alt="logo" />
      </button>
    </>
  );
};

export default Search;
