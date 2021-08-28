import React, { useEffect, useState } from 'react';
import styles from './boardRow.module.css'
import ReactHtmlParser from 'react-html-parser'

const BoardRow = ({info}) => {
  const [isToggled, setIsToggled] = useState(false)
  const {title, published, viewCount, content} = info

  return (
    <>
    <div className={styles.row} onClick={() => {setIsToggled(isToggled ? false : true)}}>
      <div className={styles.title}>{title}</div>
      <div className={styles.published}>{published}</div>
      <div className={styles.viewCount}>{viewCount}</div>
    </div>
    {isToggled && <div>{ReactHtmlParser(content)}</div>}
    </>
  );
}

export default BoardRow;