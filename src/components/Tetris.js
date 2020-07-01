import React from 'react';

import { createStage, Rows } from '../gameHelpers';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} rows={Rows} />
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
