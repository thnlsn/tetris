import { useState } from 'react';

import { randomTetromino } from '../tetrominoes';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });
};

// Return the player in an array by itself
return [player];
