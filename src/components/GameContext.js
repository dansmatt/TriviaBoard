import React, { useState } from "react";

const GameContext = React.createContext();

const GameProvider = ({children}) => {
  const [timer, setTimer] = useState("ready");
  const [hasSkip, setHasSkip] = useState(true); 
  const [currQuestion, setCurrQuestion] = useState({question: "", options: [], answer: 0, catagory: "", value: 0}); 
  const [score, setScore] = useState(0); 
  const [allRight, setAllRight] = useState(true);
  const [numAnswered, setNumAnswered] = useState(0); 

  const updateScore = (n) => {setScore(score + n)}
  const updateNumAnswered = (n) => {setNumAnswered(numAnswered + n)}

  const setTimerState = (s) => {
    if (s === "start"){
      setTimer(s)
    } else if (s === "finished"){
      setTimer(s)
    } else {
      setTimer("ready")
    }
  }

  const value = {timer, setTimerState, 
                hasSkip, setHasSkip, 
                currQuestion, setCurrQuestion, 
                score, updateScore,
                allRight, setAllRight,
                numAnswered, updateNumAnswered};

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}


export {GameProvider, GameContext};