import { useContext } from "react";
import { GameContext } from "./GameContext";

const Score = (props) => {
  const game  = useContext(GameContext);

  var color = "black";
  if (game.score < 0){
    color = "red";
  } else if (game.score > 0){
    color = "green";
  }
  return (
      <div className="score">
          <span  style={{color: color }}>Score: {game.score}</span>
      </div>
  );
}

export default Score