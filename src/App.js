import Header from './components/Header'
import Board from './components/Board'
import Footer from './components/Footer'
import {GameProvider} from './components/GameContext'

import React, { useState } from 'react';

const App = () => {
  const [score, setScore] = useState(0); 
  const updateScore = (n) => {setScore(score + n)}

  

  return (
    <GameProvider>
      <div className="game">
        <Header />
        <Board updateScore={updateScore}/>
        <Footer score={score}/>
      </div>
    </GameProvider>
  );
}

export default App
