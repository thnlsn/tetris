import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  /* 
  useEffect(() => {
    const updateStage = prevStage => {
      // First clear stage from previous render by removing everything that should not be there
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) = {
          if (value !== 0) {
            
          }
        })
      })
    };

    setStage((prev) => updateStage(prev));
  }, []); */

  // Returning needed values in an array
  return [stage, setStage];
};
