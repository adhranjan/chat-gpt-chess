import React, { useState } from 'react';

const Square = (props) => {
    const [squareName] = useState(props.squareName);
    const squareClicked = () => {
        console.log(squareName)
    }

  const squareStyle = {
    backgroundColor: props.color === 'black' ? 'black' : 'white',
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: 'black',
    border: '1px solid black',
    borderRadius: 5
  };


  return (
      <button className="square" style={squareStyle}
        onClick = {props.onClick}
      >
      {props.holdsAPiece ? props.value : ''}
    </button>
  );
};

export default Square;
