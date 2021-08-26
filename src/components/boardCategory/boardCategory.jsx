import React, { useEffect, useRef, useState } from 'react';
import styles from './boardCategory.module.css'

const BoardCategory = ({categorys, onCategorySelect}) => {
  const [selected, setSelected] = useState('전체')
  const prevSelected = useRef()
  
  useEffect(() => {
    const btns = document.getElementsByClassName(styles.category_btn)
    for (let b of btns) {
      if (b.textContent === prevSelected.current) {
        b.classList.remove(styles.selected)
      } else if (b.textContent === selected){
        b.classList.add(styles.selected)
      }
    }
    prevSelected.current = selected
  }, [selected])


  function handleCategorySelect (e) {
    onCategorySelect(e.target.textContent)
    setSelected(e.target.textContent)
  }

  return (
    <div className={styles.categorys}>
      {categorys.map(c => {
        return (
          <div className={styles.btn_container}>
            <button className={styles.category_btn} onClick={handleCategorySelect}>{c}</button>
          </div>
        )
      })}
    </div>
  )
}

export default BoardCategory;