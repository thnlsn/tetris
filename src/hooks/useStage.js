import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  // useEffect because this should happen as a side effect of the player moving the tetromino (x), it falling down (y), the tetromino changing, or the tetromino colliding
  useEffect(() => {
    console.log('useEffect run!');
    // Use the previous state as a parameter
    const updateStage = (prevStage) => {
      // First clear stage from previous render by removing everything that should not be there
      const newStage = prevStage.map((
        row // 0 means no block in the spot
      ) =>
        // If the cell is marked clear (as in not or no longer containing a block of a tetromino), then set it to 0 and clear, otherwise leave it (because it must be merged at the bottom)
        row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      // Then draw the tetromino
      // First we map through each row (ex: [0, 'I', 0, 0]) -- the y axis // y is the index of rows array
      player.tetromino.forEach((row, y) => {
        // For each row we map through it's values (0 or the letter of the tetromino) -- the x axis // x is the index of the cells
        row.forEach((value, x) => {
          // If the value is NOT 0 (meaning it's a string of I, J, L, O S, T, or Z), then we know that the cell is one that makes up the shape of the tetromino (check tetrominoes.js)
          if (value !== 0) {
            // newStage at index y (row), then in that rows index x (cell), we have the cell [value, collidedValue]
            newStage[y + player.pos.y][x + player.pos.x] = [
              // Set the value to whatever it is which is not 0 for sure, because of the if statement
              value,
              // Set the collided to 'merged' if it hit the bottom or another block, otherwise 'clear' because it just moved
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });
      // Then check for any collisions (will return true if there is)
      if (player.collided) {
        resetPlayer();
      }

      // Returning the newStage because we want this whole function to equate to the new grid when invoked below
      return newStage;
    };

    // Callback in the setState is the previous stage, which we pass into updateStage()
    setStage((prev) => updateStage(prev));
    // What to update for
  }, [player, resetPlayer]);

  // Returning needed values in an array
  return [stage, setStage];
};
