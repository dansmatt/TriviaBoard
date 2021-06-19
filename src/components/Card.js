import React, { useState, useContext } from 'react';
import {GameContext} from './GameContext'

const Card = (props) => {

  const [selected, setSelected] = useState(false);
  const [attempted, setAttempted] = useState(false);
  
  const game  = useContext(GameContext);

  const selectCard = () => {
    setSelected(true);
    game.setCurrQuestion(props.q);
    setAttempted(true);

    /* start timer */
    game.setTimerState("start");
  }

  if (!selected & !attempted){
    return (
      <div className={props.q.catagory + " card scoreCard clickable"} onClick={() => selectCard()}>
        <div className="card-title value">{props.q.value}</div>
      </div>);
  } else {
    return (
      <div className={props.q.catagory + " card scoreCard attempted"}>
        <div className="card-title value">{props.q.value}</div>
      </div>);
  }
}

export default Card