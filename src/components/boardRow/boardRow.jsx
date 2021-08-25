import React, { useEffect, useState } from 'react';
import styles from './boardRow.module.css'

const BoardRow = ({info}) => {
  const [isToggled, setIsToggled] = useState(false)
  const {title, published, viewCount} = info

  return (
    <>
    <div className={styles.row} onClick={() => {setIsToggled(isToggled ? false : true)}}>
      <div className={styles.title}>{title}</div>
      <div className={styles.published}>{published}</div>
      <div className={styles.viewCount}>{viewCount}</div>
    </div>
    {isToggled && <div><h1>toggle</h1></div>}
    </>
  );
}

export default BoardRow;