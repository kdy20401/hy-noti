import React from 'react';
import styles from './boardCategory.module.css'

const BoardCategory = ({categorys, onCategorySelect}) => {
  function handleCategorySelect (e) {
    onCategorySelect(e.target.textContent)
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