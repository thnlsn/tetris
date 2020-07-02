import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver>{text}</StyledDisplay>
);

export default Display;
