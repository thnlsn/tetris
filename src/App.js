import React, { useEffect, useState, useRef } from 'react';
import './App.scss';

import Grid from './components/grid/Grid';

function App() {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className='App'>
      <h3>
        Score: <span className='score'>0</span>
      </h3>
      <button>Start/Pause</button>

      <Grid />
    </div>
  );
}

export default App;
