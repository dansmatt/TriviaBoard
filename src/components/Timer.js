import { useContext, useState } from "react";
import Countdown from "react-countdown";
import { GameContext } from "./GameContext";

const Timer = ({time}) => {
  const game  = useContext(GameContext);

  const [key, setKey] = useState(Date.now());

  const renderer =  ({hours, minutes, seconds, completed}) => {
    if (completed && (game.timerState == "start")){
      game.setTimerState("ready");
      game.updateScore(-game.currQuestion.value);
      game.setAllRight(false);
      game.setCurrQuestion({question: "", options: [], answer: 0, catagory: "", value: 0});
      setKey(Date.now());
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
        key={key}
        date={Date.now() + time}
        renderer={renderer}/>
    </div>);
}

export default Timer