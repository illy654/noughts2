import Tile from "./Tile";

const GameBoard = ({ board, updateBoard, whoswon, whosGo }) => {
  return (
    <div className="gameBoard">
      {board.map((tile, i) => (
        <Tile value={tile} id={i} changeValue={() => updateBoard(i)} />
      ))}
    </div>
  );
}

export default GameBoard;