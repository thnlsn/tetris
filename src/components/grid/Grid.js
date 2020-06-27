import React, { useEffect, useState, useRef } from 'react';

const Grid = () => {
  const gridRef = useRef(null);
  const squares = [];

  const width = 10;

  // Tetrominoes
  const tetrominoL = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];

  const tetrominoZ = [
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
  ];

  const tetrominoT = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];

  const tetrominoO = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];
  const tetrominoI = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  let grid = [];
  for (let i = 0; i < 200; i++) {
    grid.push(<div key={i} className='grid__unit'></div>);
  }

  useEffect(() => {
    for (let i = 0; i < 200; i++) {
      grid.push(<div className='grid__unit'></div>);
      squares.push(gridRef.current.children[i]);
    }
  }, []);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className='grid' ref={gridRef}>
      {grid}

      <button
        onClick={() => {
          console.log(gridRef.current.children[0]);
          console.log(squares);
        }}
      >
        Button
      </button>
    </div>
  );
};

export default Grid;
