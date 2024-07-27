import { store } from "../store";
import { setGameEnded, setIsDraw } from "../actions";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const useGameLogic = () => {
  const checkWin = (field) => {
    for (const [a, b, c] of WIN_PATTERNS) {
      if (field[a] && field[a] === field[b] && field[a] === field[c]) {
        store.dispatch(setGameEnded(true));
        store.dispatch(setIsDraw(false));
        return true;
      }
    }
    return false;
  };

  const checkDraw = (field) => {
    if (!field.includes("")) {
      store.dispatch(setGameEnded(true));
      store.dispatch(setIsDraw(true));
      return true;
    }
    return false;
  };

  return {
    checkWin,
    checkDraw,
  };
};
