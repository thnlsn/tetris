import React from 'react';

import { createStage } from '../gameHelpers';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  return (
    <div>
      {/* Invoke createStage() here so it is sent as the array rather than the function to call later */}
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text={'Score'} />
          <Display text={'Rows'} />
          <Display text={'Level'} />
        </div>
      </aside>
      <StartButton callback={''} />
    </div>
  );
};

export default Tetris;
