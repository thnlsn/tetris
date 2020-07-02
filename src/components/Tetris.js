import React, { useState } from 'react';

import { createStage } from '../gameHelpers';

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
  const [player] = usePlayer();
  const [stage, setStage] = useStage(player); // Passing in player because we already have access to it

  // Console.log whenever component re-renders
  console.log('re-render');

  // Player movement
  const movePlayer = (direction) => {};

  const startGame = () => {};

  const dropPlayer = () => {};

  // Move function using the key pressed (destructured) as parameter
  const move = ({ keyCode }) => {};

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
            <Display gameOver text></Display>
          ) : (
            /* Otherwise, if false, then show displays of the current game information */
            <div>
              <Display text='Score' />
              <Display text='Rows' />
              <Display text='Level' />
            </div>
          )}
          <StartButton callback='' />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
