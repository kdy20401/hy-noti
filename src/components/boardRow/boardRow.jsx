import React, { useEffect, useState } from 'react';
import styles from './boardRow.module.css'
import ReactHtmlParser from 'react-html-parser'
import { useMediaQuery } from 'react-responsive';

const BoardRow = ({info}) => {
  const [isToggled, setIsToggled] = useState(false)
  const {title, writer, date, content} = info
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1024px)'})

  function handleWriter(w) {
    return w.split('/')[0]
  }

  function handleDate(d) {
    return d.slice(2, 10)
  }

  return (
    <div className={styles.row_container}>
      <div className={`${styles.row} ${isToggled && styles.toggled}`} onClick={() => {setIsToggled(isToggled ? false : true)}}>
        <div className={styles.title}>{title}</div>
        <div className={`${styles.metadata} ${isTabletOrMobile && styles.tablet_mobile}`}>
          <div className={styles.writer}>{handleWriter(writer)}</div>
          <div className={styles.date}>{handleDate(date)}</div>
        </div>
      </div>
      {isToggled && <div className={styles.content}>{ReactHtmlParser(content)}</div>}
    </div> 
  );
}

export default BoardRow;