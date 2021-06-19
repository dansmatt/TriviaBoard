import Header from './components/Header'
import Board from './components/Board'
import Footer from './components/Footer'
import {GameProvider} from './components/GameContext'

import React, { useState } from 'react';

const App = () => {
  return (
    <GameProvider>
      <div className="game">
        <Header title="Lets play Trivia!" />
        <Board catagories={["sports", "science", "music", "nature"]} numQuestions={4}/>
        <Footer />
      </div>
    </GameProvider>
  );
}

export default App
