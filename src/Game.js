import { useState } from "react";
import ChangeTime from "./changeTime";
import LesBoard from "./gameBoard";

// do not use variables like this, only use useState

const getWinner = (board) => {
  // refactor this shit code
  for (let x = 0; x !== 3; x++) {
    if (board[3 * x] === board[3 * x + 1] && board[3 * x] === board[3 * x + 2] && board[x * 3] !== "") {
      return board[3 * x];
    } else if (board[x] === board[x + 3] && board[x] === board[x + 6] && board[x] !== "") {
      return board[x];
    } else if ((board[0] === board[4] && board[0] === board[8]) || (board[2] && board[4] && board[6])) {
      if (board[4] !== "") {
        return board[4];
      }
    }
  }
  return null;
}

const Game = () => {
  const [history, changeHistory] = useState([["", "", "", "", "", "", "", "", ""]]);
  const [boardIndex, changeBoardIndex] = useState(0);

  const increaseBoardIndex = () => {
    if (history[boardIndex + 1]) {
      changeBoardIndex(boardIndex + 1)
    }
  }

  const decreaseBoardIndex = () => {
    if (boardIndex > 0) {
      changeBoardIndex(boardIndex - 1)
    }
  }

  const whosGo = boardIndex % 2 === 0 ? 'X' : 'O';


  const updateBoard = (index) => {
    const currentHistory = history.slice(0, boardIndex + 1);
    const newBoard = [...board];
    newBoard[index] = whosGo;
    changeHistory([...currentHistory, newBoard])
    changeBoardIndex(boardIndex + 1);

  }

  const board = history[boardIndex];

  const winner = getWinner(board);
  console.log('Hey you found an easter egg!')

  return (
    <div>
      <h1><center>Illy's Not Buggy Noughts and Crosses</center></h1>
      {winner && <div className="Winner"><center><h1>{winner + " won!"}</h1></center></div>}
      <LesBoard board={board} updateBoard={updateBoard} whoswon={winner} whosGo={whosGo} />
      <ChangeTime increaseBoardIndex={increaseBoardIndex} decreaseBoardIndex={decreaseBoardIndex} />
    </div>
  );
}

export default Game;