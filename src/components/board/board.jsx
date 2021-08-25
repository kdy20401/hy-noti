import React from 'react';
import styles from './board.module.css'
import BoardRow from '../boardRow/boardRow';
import BoardCategory from '../boardCategory/boardCategory';
import { useParams } from 'react-router-dom';

const Board = ({list, onCategorySelect}) => {
  const categorys=['all', 'haksa', 'admission', 'employment', 'startup']
  return (
    <div>
      <BoardCategory categorys={categorys} onCategorySelect={onCategorySelect}/>
      <div className={styles.board}>
        {list && list.map((i) => {
          return <BoardRow info={i}/>
        })}
      </div>
    </div>
  );

}

export default Board;
