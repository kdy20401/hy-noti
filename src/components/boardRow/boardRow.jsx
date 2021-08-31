import React from 'react';
import styles from './boardRow.module.css'
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser'
import { useMediaQuery } from 'react-responsive';

const BoardRow = ({info, isToggled, onToggle}) => {
  const {_id, title, writer, date, content} = info
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1024px)'})

  function handleToggling() {
    onToggle(_id)
  }

  function handleWriter(w) {
    return w.split('/')[0]
  }

  function handleDate(d) {
    return d.slice(2, 10)
  }

  function transformContentImg(node, index) {
    if (node.name === 'img'){
      const src = node.attribs.src
      node.attribs = {
        src:src,
        width:'100%'
      }
      return convertNodeToElement(node, index, transformContentImg)
    }
  }

  return (
    <div className={styles.row_container}>
      <div className={`${styles.row} ${isToggled && styles.toggled}`} onClick={handleToggling}>
        <div className={styles.title}>{title}</div>
        <div className={`${styles.metadata} ${isTabletOrMobile && styles.tablet_mobile}`}>
          <div className={styles.writer}>{handleWriter(writer)}</div>
          <div className={styles.date}>{handleDate(date)}</div>
        </div>
      </div>
      {isToggled && <div className={styles.content}>{ReactHtmlParser(content, {transform: transformContentImg})}</div>}
    </div> 
  );
}

export default BoardRow;