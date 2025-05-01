import React, { useState } from "react";
import "./style.css"; // Assuming you have some styles for the boxes and the component

const TicTacToe = () => {
  // Initial state
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [gameActive, setGameActive] = useState(true);
  const [winnerText, setWinnerText] = useState("");

  // Winning combinations
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  /**
   * Function to check if a player has won the game
   */
  const checkWinner = (newGameState) => {
    for (const [a, b, c] of winningCombos) {
      if (
        newGameState[a] &&
        newGameState[a] === newGameState[b] &&
        newGameState[a] === newGameState[c]
      ) {
        setGameActive(false);
        setWinnerText(`Winner: ${newGameState[a]}`);
        return;
      }
    }

    // Check for draw
    if (!newGameState.includes(null)) {
      setWinnerText("It's a Draw!");
      setGameActive(false);
    }
  };

  /**
   * Function to handle a player's move
   */
  const handleBoxClick = (index) => {
    if (!gameState[index] && gameActive) {
      const newGameState = gameState.slice();
      newGameState[index] = currentPlayer;
      setGameState(newGameState);
      checkWinner(newGameState);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  /**
   * Function to reset the game
   */
  const resetGame = () => {
    setGameState(Array(9).fill(null));
    setWinnerText("");
    setGameActive(true);
    setCurrentPlayer("X");
  };

  return (
    <div className="tic-tac-toe">
      <div className="game-board">
        {gameState.map((value, index) => (
          <div
            key={index}
            className="box"
            onClick={() => handleBoxClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      <button id="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
      <div id="winner-text">{winnerText}</div>
    </div>
  );
};

export default TicTacToe;
