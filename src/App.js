import React, { useEffect, useState, useRef } from 'react';
import './App.scss';

import Tetris from './components/Tetris';
import Grid from './components/grid/Grid';

function App() {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className='App'>
      <Tetris />
    </div>
  );
}

export default App;
