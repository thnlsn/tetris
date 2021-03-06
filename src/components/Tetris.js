import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  // State
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // Custom Hooks, destructured
  // player is the original state of player (which is technically at the top left of grid, but value 0 which is nothing)
  // updatePlayerPos invokes setPlayer and takes it's previous properties and plus or minuses x/y values depending on keypress
  // resetPlayer is what gives us out first real tetromino and centers it on the grid for it's initial placement
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();

  // stage is the inital stage built by createStage() in gameHelpers.js
  const [stage, setStage] = useStage(player, resetPlayer); // Passing in player because we already have access to it

  // Console.log whenever component re-renders
  console.log('re-render');

  // Player movement -- Left/Right
  const moveHorizontal = (direction) => {
    // Check if we are NOT colliding with anything with y as 0 because this is only responsible for left/right movement
    if (!checkCollision(player, stage, { x: direction, y: 0 })) {
      // If so, move the player with collision set to false
      updatePlayerPos({ x: direction, y: 0, collided: false });
    }
  };

  const startGame = () => {
    // Reset everything
    setStage(createStage()); // Creates blank stage
    resetPlayer(); // Sets player to the middle of the grid
    setGameOver(false);
  };

  // ▓▓▓ COMMENT THIS LATER ▓▓▓
  // Player movement -- Down
  const drop = () => {
    // Check if we are NOT colliding with anything
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      // If so, move the player with collision set to false
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Otherwise we are colliding with something, either the bottom or anothe previous tetromino, so updatePlayerPos with collided set to true
      // The if condition is checking if y < 1 because
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  // Move function using the key pressed (destructured) as parameter
  const move = ({ keyCode }) => {
    console.log(keyCode);
    if (!gameOver) {
      // Left
      if (keyCode === 37) {
        moveHorizontal(-1);
        // Right
      } else if (keyCode === 39) {
        moveHorizontal(1);
        // Down
      } else if (keyCode === 40) {
        dropPlayer();
        // Up
      } else if (keyCode === 38) {
        // Rotate player tetromino (first argument is state, second is a value above 0, which will result in direction right)
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <StyledTetrisWrapper
      role='button'
      tabIndex='0'
      onKeyDown={(event) => move(event)}
    >
      <StyledTetris>
        {/* We invoke createStage() in the useStage hook as inital value for stage (this is the grid) */}
        <Stage stage={stage} />
        <aside>
          {/* If gameOver is true, display a Display component with gameOver value so the styled component will set text to red */}
          {gameOver ? (
            <Display gameOver={gameOver} text='Game Over'></Display>
          ) : (
            /* Otherwise, if false, then show displays of the current game information */
            <div>
              <Display text='Score' />
              <Display text='Rows' />
              <Display text='Level' />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
