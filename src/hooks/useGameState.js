import { useState } from "react";

export const useGameState = () => {
  const [gameState, setGameState] = useState({
    currentPlayer: "X",
    isGameEnded: false,
    isDraw: false,
    field: ["", "", "", "", "", "", "", "", ""],
  });

  const handleResetGame = () => {
    setGameState({
      currentPlayer: "X",
      isGameEnded: false,
      isDraw: false,
      field: ["", "", "", "", "", "", "", "", ""],
    });
  };

  return {
    gameState,
    setGameState,
    handleResetGame,
  };
};
