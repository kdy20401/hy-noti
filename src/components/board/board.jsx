import React, { useState } from 'react';
import styles from './board.module.css'
import BoardRow from '../boardRow/boardRow';
import BoardCategory from '../boardCategory/boardCategory';
import { useParams } from 'react-router-dom';

const Board = ({list, categorys, onCategorySelect}) => {
  const [toggledRow, setToggledRow] = useState(null)

  function handleToggling(id) {
    if (toggledRow === id) {
      setToggledRow(null)
    } else {
      setToggledRow(id)
    }
  }
  
  return (
    <div>
      <BoardCategory categorys={categorys} onCategorySelect={onCategorySelect}/>
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
