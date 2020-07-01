import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

const Stage = ({ stage }) => (
  // stage is the 20 tall array of 12 wide arrays, so stage[0].length is just 12, while stage.length is 20
  <StyledStage width={stage[0].length} height={stage.length}>
    {/* When we map stage we get 20 row arrays each with an array of 12 cells, which we also map and for each we render a cell component using the 0 index of cell generated in gameHelpers */}
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
