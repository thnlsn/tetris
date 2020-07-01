import React from 'react';

import Cell from './Cell';

const Stage = ({ stage }) => (
  <div>
    {/* When we map stage we get 20 row arrays each with an array of 12 cells, which we also map and for each we render a cell component using the 0 index of cell generated in gameHelpers */}
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
);

export default Stage;
