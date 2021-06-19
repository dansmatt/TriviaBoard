import { useContext } from "react";
import Countdown from "react-countdown";
import { GameContext } from "./GameContext";

const Timer = ({time}) => {
  const game  = useContext(GameContext);

  const renderer =  ({hours, minutes, seconds, completed}) => {
    if (completed){
      game.setTimerState("ready");
      game.updateScore(-game.currQuestion.value);
      game.setCurrQuestion({question: "", options: [], answer: 0, catagory: "", value: 0})
      return <span></span>;
    } else if (game.timer === "start") {
      return <span className="time">Time left: {seconds}s</span>;
    } else {
      game.setTimerState("ready");
      return <span></span>;
    }
  } 

  return (
    <div className="timer" align="right">
      <Countdown 
        date={Date.now() + time}
        renderer={renderer}/>
    </div>);
}

export default Timer