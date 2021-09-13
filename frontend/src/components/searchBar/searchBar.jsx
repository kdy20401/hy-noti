import React, { Component } from 'react';
import styles from './searchbar.module.css'

class SearchBar extends Component {
  render() {
    return (
      <div className={styles.searchBar}>
        <div className={styles.img_container}>
          <img className={styles.img} src="imgs/loupe.png" alt="loupe" />
        </div>
        <div className={styles.input_container}>
          <input className={styles.input} type="text" placeholder="Search"/>
        </div>
      </div>
    );
  }
}

export default SearchBar;