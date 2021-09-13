import React, { useState } from 'react';
import styles from './board.module.css'
import BoardRow from '../boardRow/boardRow';
import BoardCategory from '../boardCategory/boardCategory';

const Board = ({list, categoryList, onCategorySelect}) => {
  const [toggledRow, setToggledRow] = useState(null)

  function handleToggling(id) {
    toggledRow === id ? setToggledRow(null) : setToggledRow(id)
  }
  
  return (
    <div>
      <BoardCategory categoryList={categoryList} onCategorySelect={onCategorySelect}/>
      <div className={styles.board}>
        {list && list.map((item) => {
          const toggled = item._id === toggledRow ? true : false
          return <BoardRow info={item} isToggled={toggled} onToggle={handleToggling}/>
        })}
      </div>
    </div>
  );

}

export default Board;
