import { useState } from "react";
import Board from "../Board/Board";
import History from "../History/History";
import React from "react";

type Props = {
  /** 移動履歴 */
  history: string[][],
  /** 移動位置 */
  locations: string[],
  /** 現在移動位置 */
  currentMove: number,
  /** Xの順番かどうか */
  xIsNext:  boolean,
  /** 現在のマス */
  currentSquares: string[],
  /** 現在位置を設定する */
  setCurrentMove: (currentMove: number) => void,
  /** 現在位置、移動履歴を更新する関数 */
  handlePlay: (nextSqaures: string[], location: {row: number, column: number}) => void;
}

/**
 * OXゲームを行うコンポーネント
 * - OXを入力する盤面と入力の履歴情報が表示される  
 * - 履歴情報から特定の盤面の再現をすることが可能
 * @returns 
 */
const Game = ({history, locations, currentMove, xIsNext, currentSquares, setCurrentMove, handlePlay}: Props) => {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>

        <div className="game-info">
          <History 
            currentMove={currentMove}
            setCurrentMove={setCurrentMove}
            locations={locations}
            history={history}
          />
        </div>
      </div>
    )
  }
  
  export default Game;