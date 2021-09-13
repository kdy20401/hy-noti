import React, { useState } from 'react';
import styles from './boardCategory.module.css'

const BoardCategory = ({categoryList, onCategorySelect}) => {
  const [selected, setSelected] = useState('전체')

  function handleCategorySelect (e) {
    onCategorySelect(e.target.textContent)
    setSelected(e.target.textContent)
  }

  return (
    <div className={styles.categorys}>
      {categoryList.map(c => {
        return (
          <div className={styles.btn_container}>
            <button className={`${styles.category_btn} ${c === selected && styles.selected}`} onClick={handleCategorySelect}>{c}</button>
          </div>
        )
      })}
    </div>
  )
}

export default BoardCategory;