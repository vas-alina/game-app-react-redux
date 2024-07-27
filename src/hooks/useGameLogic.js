export const useGameLogic = (setGameState) => {
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

  const checkWin = (updatedField) => {
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      const [a, b, c] = WIN_PATTERNS[i];
      if (
        updatedField[a] &&
        updatedField[a] === updatedField[b] &&
        updatedField[a] === updatedField[c]
      ) {
        setGameState((prevState) => ({
          ...prevState,
          isGameEnded: true,
        }));
        return true;
      }
    }
    return false;
  };

  const checkDraw = (updatedField) => {
    if (!updatedField.includes("")) {
      setGameState((prevState) => ({
        ...prevState,
        isDraw: true,
      }));
      return true;
    }
    return false;
  };

  return {
    checkWin,
    checkDraw,
  };
};
