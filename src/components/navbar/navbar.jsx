import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './navbar.module.css'

const Navbar = (props) => {
  const history = useHistory()

  return (
    <nav id={styles.navbar}>
      <div className={styles.logo}>logo</div>
      <div className={styles.menu}>
        <button className={styles.menu_btn} onClick={() => {history.push('/notice')}}>
          <h1 className={styles.menu_item}>Notice</h1>
        </button>
        <button className={styles.menu_btn} onClick={()=>{history.push('/board')}}>
          <h1 className={styles.menu_item}>Board</h1>
        </button>
      </div>
      <div className={styles.right_menu}>
        <img className={styles.right_menu_img} src="imgs/menu.png" alt="menu" />
      </div>
    </nav>
  );
}
export default Navbar;