import Catagory from './Catagory'
import React, { useState, useContext } from 'react';
import {GameContext} from './GameContext'

const Board = (props) => {
    const defaultQ = {question: "", options: [], answer: 0, catagory: "", value: 0}
    
    const [showCorrect, setShowCorrect] = useState(false);
    const [showInCorrect, setShowInCorrect] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const game  = useContext(GameContext);

    const setQuestion = (q) => {
      game.setCurrQuestion(q);
    }

    const updateScore = (answer) => {
      game.setTimerState("ready");
        if  (answer === game.currQuestion.answer){
          game.updateScore(game.currQuestion.value);
          setShowCorrect(true);
        } else {
          game.updateScore(-game.currQuestion.value);
          setSelectedOption(game.currQuestion.options[answer])
          setShowInCorrect(true);
        }
      }
    
    const returnToBoard = () => {
        setSelectedOption("");
        setShowCorrect(false);
        setShowInCorrect(false);
        game.setCurrQuestion(defaultQ);
    }

    const cols = props.catagories.map((c) =>
        <Catagory key={c} title={c} setQuestion={setQuestion}/>
    );

    const opts = game.currQuestion.options.map((opt, i) =>
        <li className="option" onClick={()=>updateScore(i)}><h2>{opt}</h2> </li>
    );

    return (
        <div className="board">
            <div className={"question mx-auto " + game.currQuestion.catagory} hidden={game.currQuestion.question == ""}>
                <h1>{game.currQuestion.question}</h1>
                <ol hidden={showCorrect || showInCorrect} type="a" className="options">
                  {opts}
                </ol>
                <div className="answer" hidden={!showCorrect}>
                  <h2>{game.currQuestion.options[game.currQuestion.answer]} is <span style={{color:"darkgreen"}}>correct</span>!</h2>
                  <div className="back">
                    <button className="btn btn-light back" onClick={()=>returnToBoard()}>continue</button>
                  </div>
                </div>
                <div className="answer" hidden={!showInCorrect}>
                    <h2 > {selectedOption} is <span style={{color:"darkred"}}>incorrect</span></h2>
                    <h2>The correct answer was {game.currQuestion.options[game.currQuestion.answer]}</h2>
                    <div className="back">
                      <button className="btn btn-light" onClick={()=>returnToBoard()}>continue</button>
                    </div>
                </div>
            </div>
                <div className="card-deck mx-auto" hidden={!game.currQuestion.question == ""}>
                    {cols}
                </div>
            </div>
        );
}

export default Board