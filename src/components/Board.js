import Catagory from './Catagory'
import React, { useState, useContext } from 'react';
import {GameContext} from './GameContext'

const Board = (props) => {
    const totalQuestions = props.numQuestions * props.catagories.length;
    const defaultQ = {question: "", options: [], answer: 0, catagory: "", value: 0};
    
    const [showCorrect, setShowCorrect] = useState(false);
    const [showInCorrect, setShowInCorrect] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const game  = useContext(GameContext);

    const updateScore = (answer) => {
      game.setTimerState("ready");
        if  (answer === game.currQuestion.answer){
          game.updateScore(game.currQuestion.value);
          setShowCorrect(true);
        } else {
          game.updateScore(-game.currQuestion.value);
          game.setAllRight(false);
          setSelectedOption(game.currQuestion.options[answer])
          setShowInCorrect(true);
        }
      }
    
    const passQuestion = () => {
      setSelectedOption("");
      setShowCorrect(false);
      setShowInCorrect(false);
      game.setCurrQuestion(defaultQ);
      game.setHasSkip(false);
      game.updateNumAnswered(1);
    }

    const returnToBoard = () => {
        setSelectedOption("");
        setShowCorrect(false);
        setShowInCorrect(false);
        game.setCurrQuestion(defaultQ);
        game.updateNumAnswered(1);
    }

    const cols = props.catagories.map((c) =>
        <Catagory key={c} title={c} numQuestions={props.numQuestions}/>
    );

    const opts = game.currQuestion.options.map((opt, i) =>
        <li className="option" onClick={()=>updateScore(i)}><h2>{opt}</h2> </li>
    );
    if (game.numAnswered !== totalQuestions){
      return (
        <div className="board">
            <div className={"question mx-auto " + game.currQuestion.catagory} hidden={game.currQuestion.question == ""}>
                <h1>{game.currQuestion.question}</h1>
                <div hidden={showCorrect || showInCorrect}>
                  <div>
                    <ol type="a" className="options">
                      {opts}
                    </ol>
                  </div>
                  <button className="btn btn-primary" hidden={!game.hasSkip} onClick={()=>passQuestion()}>PASS</button>
                </div>
                <div className="answer" hidden={!showCorrect}>
                  <h2>{game.currQuestion.options[game.currQuestion.answer]} is <span style={{color:"darkgreen"}}>correct</span>!</h2>
                  <button className="btn btn-primary" onClick={()=>returnToBoard()}>continue</button>
                </div>
                <div className="answer" hidden={!showInCorrect}>
                    <h2 > {selectedOption} is <span style={{color:"darkred"}}>incorrect</span></h2>
                    <h2>The correct answer was {game.currQuestion.options[game.currQuestion.answer]}</h2>
                    <button className="btn btn-primary" onClick={()=>returnToBoard()}>continue</button>
                </div>
            </div>
            <div className="card-deck mx-auto" hidden={!game.currQuestion.question == ""}>
                {cols}
            </div>
        </div>);
        } else{
          if (game.allRight){
            return (<div className="board"><h1 className="result">You won!</h1></div>);
          } else {
            return (<div className="board"><h1 className="result">You can do better next time!</h1></div>);
          }
          
        }
}

export default Board