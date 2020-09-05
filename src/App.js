import React, { useEffect, useState, useRef } from 'react';
import './App.scss';

import Tetris from './components/Tetris';

function App() {
  // Entire game contained within the Tetris component

  return (
    <div className='App'>
      <Tetris />
    </div>
  );
}

export default App;
