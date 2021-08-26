import React, { useEffect, useRef, useState } from 'react';
import styles from './menuBar.module.css'

const MenuBar = ({onSectionSelect}) => {
  const [selected, setSelected] = useState('포털')
  const prevSelected = useRef()
  
  useEffect(() => {
    const btns = document.getElementsByClassName(styles.menu_item)
    for (let b of btns) {
      if (b.textContent === prevSelected.current) {
        b.classList.remove(styles.selected)
      } else if (b.textContent === selected){
        b.classList.add(styles.selected)
      }
    }
    prevSelected.current = selected
  }, [selected])

  function handleSectionSelect(e) {
    onSectionSelect(e.target.textContent)
    setSelected(e.target.textContent)
  }

  return (
    <div className={styles.menu}>
      <button className={styles.menu_item} onClick={handleSectionSelect}>포털</button>
      <button className={styles.menu_item} onClick={handleSectionSelect}>컴소</button>
      <button className={styles.menu_item} onClick={handleSectionSelect}>경영</button>
      <button className={styles.menu_item} onClick={handleSectionSelect}>기계</button>
    </div>
  );
}

export default MenuBar