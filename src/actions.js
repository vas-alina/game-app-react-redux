export const SET_FIELD = "SET_FIELD";
export const SET_CURRENT_PLAYER = "SET_CURRENT_PLAYER";
export const SET_GAME_ENDED = "SET_GAME_ENDED";
export const SET_IS_DRAW = "SET_IS_DRAW";
export const RESET_GAME = "RESET_GAME";

export const setField = (field) => ({
  type: SET_FIELD,
  payload: field,
});

export const setCurrentPlayer = (player) => ({
  type: SET_CURRENT_PLAYER,
  payload: player,
});

export const setGameEnded = (isGameEnded) => ({
  type: SET_GAME_ENDED,
  payload: isGameEnded,
});

export const setIsDraw = (isDraw) => ({
  type: SET_IS_DRAW,
  payload: isDraw,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
