import React, { useState } from "react";
import Game from "./components/Game/Game";
import History from "./components/History/History";

function App(){
  const [history, setHistory] = useState<string[][]>([Array(9).fill('')]);
  const [locations, setLocations] = useState<string[]>(['']);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares: string[] = history[currentMove];

  const handlePlay = (nextSquares: string[], location: {row: number, column: number}) => {
    const nextHistory: string[][] = [...history.slice(0, currentMove + 1), nextSquares]
    const currentLocation: string[] = [...locations.slice(0, currentMove + 1), `(${location.row},${location.column})`];
    setHistory(nextHistory);
    setLocations(currentLocation);
    setCurrentMove(nextHistory.length - 1);
  }
  
  return (
    <div className="App">
      <Game 
        history={history}
        locations={locations}
        currentMove={currentMove}
        xIsNext={xIsNext}
        currentSquares={currentSquares}
        setCurrentMove={setCurrentMove}
        handlePlay={handlePlay}
      />
    </div>
  )
}

export default App;