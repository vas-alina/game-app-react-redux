import { useState, useEffect } from "react";
import { store } from "../store";
import {
  setField,
  setCurrentPlayer,
  setGameEnded,
  setIsDraw,
} from "../actions";
import { useGameLogic } from "./useGameLogic";

export const useGameState = () => {
  const [gameState, setGameState] = useState(store.getState());
  const { checkWin, checkDraw } = useGameLogic();

  useEffect(() => {
    console.log("gameState начал работу:", store.getState());

    const unsubscribe = store.subscribe(() => {
      console.log("Начальное состояние", store.getState());
      setGameState(store.getState());
    });

    return () => unsubscribe();
  }, []);

  const handleFieldClick = (index) => {
    if (gameState.isGameEnded || gameState.field[index] !== "") {
      return;
    }

    const updatedField = gameState.field.map((value, i) =>
      i === index ? gameState.currentPlayer : value
    );

    store.dispatch(setField(updatedField));

    if (!checkWin(updatedField) && !checkDraw(updatedField)) {
      store.dispatch(
        setCurrentPlayer(gameState.currentPlayer === "X" ? "O" : "X")
      );
    }
  };

  const handleResetGame = () => {
    store.dispatch(setField(Array(9).fill("")));
    store.dispatch(setCurrentPlayer("X"));
    store.dispatch(setGameEnded(false));
    store.dispatch(setIsDraw(false));
  };

  console.log("Текущее состояние", gameState);

  return {
    gameState,
    handleFieldClick,
    handleResetGame,
  };
};
