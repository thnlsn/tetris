import React from 'react';

import { createStage } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  console.log(createStage());
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        {/* Invoke createStage() here so it is sent as the array rather than the function to call later */}
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text={'Score'} />
            <Display text={'Rows'} />
            <Display text={'Level'} />
            <StartButton callback={''} />
          </div>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
