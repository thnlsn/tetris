export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

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

// change x and y to moveX and moveY because x and y are needed in the loops
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[0].length; x += 1) {
            // 1. Check if there is in fact a tetromino block (as in IJLOSTZ rather than 0)
            // A letter will coerce to true, but 0 will coerce to false
            if (player.tetromino[y][x] === 0) {
                if (
                    // 2. Check that it is inside the grid height (y), as in not going below the 20 tall grid
                    // Chained short-circuit (checks if first condition is true then stop, if not check second and stop, and so on)
                    !stage[y + player.pos.y + moveY] || // Move to next condition if this is not true
                    // 3. Check that the move is within the grid width (x), as in the 12 wide grid
                    !stage[y + player.pos.y + moveY][
                        x + player.pos.x + moveX
                    ] || // Move to next condition if this is not true
                    // 4. Check that the cell we're moving to isn't set to clear (if clear, then no collision)
                    stage[y + player.pos.y + moveY][
                        x + player.pos.x + moveX
                    ][1] !== 'clear'
                    // So if the cell we are moving to IS set to clear, then collision is true
                ) {
                    return true;
                }
            }
        }
    }
};
