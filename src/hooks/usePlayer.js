import { useState, useCallback } from 'react';

import { randomTetromino } from '../tetrominoes';
import { STAGE_WIDTH } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    // Parenthesis around curly braces to signify it is not a block
    setPlayer((prev) => ({
      // Spread the previous player state but update the x and y values by adding (or subtracting if left)
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
    }));
  };

  // resetPlayer position to the center of the grid with useCallback to avoid infinite loops
  const resetPlayer = useCallback(() => {
    setPlayer(
      {
        pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
        tetromino: randomTetromino().shape,
        collided: false,
      },
      []
    );
  });

  // Return the player in an array by itself
  return [player, updatePlayerPos, resetPlayer];
};
