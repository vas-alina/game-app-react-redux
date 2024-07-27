import { store } from "../store";
import {
  setField,
  setCurrentPlayer,
  setGameEnded,
  setIsDraw,
} from "../actions";
import { useGameLogic } from "./useGameLogic";
import { useDispatch, useSelector } from "react-redux";
import { selectState } from "../selectors/select-state";

export const useGameState = () => {
  const dispatch = useDispatch();
  const gameState = useSelector(selectState);
  const { checkWin, checkDraw } = useGameLogic();

  const handleFieldClick = (index) => {
    if (gameState.isGameEnded || gameState.field[index] !== "") {
      return;
    }

    const updatedField = gameState.field.map((value, i) =>
      i === index ? gameState.currentPlayer : value
    );

    dispatch(setField(updatedField));

    if (!checkWin(updatedField) && !checkDraw(updatedField)) {
      store.dispatch(
        setCurrentPlayer(gameState.currentPlayer === "X" ? "O" : "X")
      );
    }
  };

  const handleResetGame = () => {
    dispatch(setField(Array(9).fill("")));
    dispatch(setCurrentPlayer("X"));
    dispatch(setGameEnded(false));
    dispatch(setIsDraw(false));
  };

  console.log("Текущее состояние", gameState);

  return {
    gameState,
    handleFieldClick,
    handleResetGame,
  };
};
