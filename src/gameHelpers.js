export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const Rows = Array.from(Array(STAGE_HEIGHT), () => 1);

// Multidimensional array to represent the grid
export const createStage = () =>
  // Creating an array from an array that is equal to 20 empty indexes (imagine a vertical array representing stage height)
  Array.from(
    Array(STAGE_HEIGHT),
    () =>
      // For every empty index in the 20 tall array, fill it with 12 indexes of [0, 'clear'] (imagine these as a usual horizontal array)
      new Array(STAGE_WIDTH).fill([0, 'clear']) // 0 represents whether a tetromino block is in the cell and clear will remove it if it leaves
    // Together these represent a 20 tall and 12 wide grid for our game stage
  );
