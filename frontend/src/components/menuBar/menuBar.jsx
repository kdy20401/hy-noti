import React, { useState } from 'react';
import styles from './menuBar.module.css'

const MenuBar = ({sectionList, onSectionSelect}) => {
  const [selected, setSelected] = useState('포털')

  function handleSectionSelect(e) {
    onSectionSelect(e.target.textContent)
    setSelected(e.target.textContent)
  }

  return (
    <div className={styles.menu}>
      {sectionList.map(s => {
        return <button className={`${styles.menu_item} ${s === selected && styles.selected}`} onClick={handleSectionSelect}>{s}</button>
      })}
    </div>
  );
}

export default MenuBar