import { useState, useCallback } from 'react';

import { randomTetromino, TETROMINOES } from '../tetrominoes';
import { STAGE_WIDTH } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    // This is the inital tetromino, which in tetrominoes.js is just a blank, so the stage will begin blank
    tetromino: TETROMINOES[0].shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    // Parenthesis around curly braces to signify it is not a block
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const rotate = (matrix, direction) => {
    // Convert rows to columns using the matrix
    // The matrix is simply the array of arrays that a tetromino consists of, eg. shape: [[0, 0, 'J'], [0, 0, 'J'], [0, 'J', 'J']]
    const rotatedTetromino = matrix.map(
      (_, index) => matrix.map((column) => column[index])
      // 0, 1, 2
    );

    // Reverse each row to get a rotated matrix
    if (direction < 0) return rotatedTetromino.map((row) => row.reverse());
    return rotatedTetromino.reverse();
  };

  const playerRotate = (stage, direction) => {
    const playerCopy = JSON.parse(JSON.stringify(player));
  };

  // resetPlayer position to the center of the grid with useCallback to avoid infinite loops
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  // Return the player in an array by itself
  return [player, updatePlayerPos, resetPlayer];
};
