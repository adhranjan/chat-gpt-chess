import React, { useState } from 'react';
import Square from './Square';
import './board.css';

const Board = () => {
  const [squares, setSquares] = useState(Array(64).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    console.log({i})
    
  };

  const renderSquare = (i) => {
    const row = Math.floor(i / 8);
    const black = (row % 2 === 0) ? (i % 2 === 0) : (i % 2 !== 0);
    const color = black ? 'black' : 'white';
    const column = 'abcdefgh'[i % 8];
    const key = `${column}${row+1}`;
    return (
      <Square 
        key= {key}
        squareName = {key}
        color = {color}
        onClick={() => handleClick(key)} 
      />
    );
  };

  const board = [];
  for (let i = 0; i < 64; i += 8) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      row.push(renderSquare(i + j));
    }
    board.push(<div className="board-row"
      key = {i}
    >{row}</div>);
  }

  return (
    <div>
      {board}
    </div>
  );
};

export default Board;
