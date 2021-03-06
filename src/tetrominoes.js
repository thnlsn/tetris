export const TETROMINOES = {
  0: { shape: [[0]], color: '0, 0, 0' },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
    ],
    color: '80, 227, 230',
  },
  J: {
    shape: [
      [0, 0, 'J'],
      [0, 0, 'J'],
      [0, 'J', 'J'],
    ],
    color: '223, 173, 36',
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L'],
    ],
    color: '223, 173, 36',
  },
  O: {
    shape: [
      [0, 'O', 'O'],
      [0, 'O', 'O'],
    ],
    color: '223, 217, 36',
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0],
    ],
    color: '48, 211, 56',
  },
  T: {
    shape: [
      ['T', 'T', 'T'],
      [0, 'T', 0],
      [0, 'T', 0],
    ],
    color: '132, 61, 196',
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0],
    ],
    color: '227, 78, 78',
  },
};

export const randomTetromino = () => {
  const tetrominoes = 'IJLOSTZ';
  // Generate random number between 0 and 6 (0 is I, 6 is Z)
  const randTetromino =
    tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
  // Return the shape and color object from the object of tetrominoes above at the index generated from randTetromino()
  return TETROMINOES[randTetromino];
};
