import React from 'react';
import styles from './board.module.css'
import BoardRow from '../boardRow/boardRow';
import { useParams } from 'react-router-dom';

const Board = ({list}) => {
  return (
    <div className={styles.board}>
      {list.map((i) => {
        return <BoardRow info={i}/>
      })}
    </div>
  );

}

export default Board;
