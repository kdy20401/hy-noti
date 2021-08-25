import React from 'react';
import styles from './menuBar.module.css'

const MenuBar = (props) => {
  return (
    <div className={styles.menu}>
      <button className={styles.menu_item}>포털</button>
      <button className={styles.menu_item}>컴소</button>
      <button className={styles.menu_item}>융전</button>
      <button className={styles.menu_item}>화공</button>
    </div>
  );
}

export default MenuBar