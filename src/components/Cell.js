import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOES } from '../tetrominoes';

// type is the 0 index value of the cell (which as set default to 0 from [0, clear], but could be the letter of the tetromino (IJLOSTZ))
const Cell = ({ type }) => (
  // We use bracket notation to look through TETROMINOES array for the correct letter (or 0, if its an empty cell) and take it's color property
  <StyledCell type={type} color={TETROMINOES[type].color}></StyledCell>
);
export default Cell;
