import React, { useEffect, useState, useRef } from 'react';
import './App.scss';

import Grid from './components/grid/Grid';

function App() {
  const [score, setScore] = useState(0);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className='App'>
      <h3>
        Score: <span className='score'>{score}</span>
      </h3>
      <button>Start/Pause</button>

      <Grid />
    </div>
  );
}

export default App;
