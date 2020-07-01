import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOES } from '../tetrominoes';

const Cell = ({ type }) => (
  /* We send in the color value of the tetromino of whichever is passed into this component which can be used in StyledCell.js */
  <StyledCell type={type} color={TETROMINOES[type].color}></StyledCell>
);
export default Cell;
