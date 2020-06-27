import React, { useEffect, useState, useRef } from 'react';

const Grid = () => {
  const gridRef = useRef(null);
  const squares = [];

  const width = 10;

  let grid = [];
  for (let i = 0; i < 200; i++) {
    grid.push(<div className='grid__unit'></div>);
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
