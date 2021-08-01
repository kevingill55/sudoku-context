// © Copyright 2021 KMG: Sudoku
const TOGGLE_FINISH = 'TOGGLE_FINISH';
const TOGGLE_NEW_GAME = 'TOGGLE_NEW_GAME';
const UPDATE_SELECTED = 'UPDATE_SELECTED';
const UPDATE_BOARD = 'UPDATE_BOARD';
const RESET_BOARD = 'RESET_BOARD';
const RESET_CONTEXT = 'RESET_CONTEXT';
const SOLVE_BOARD = 'SOLVE_BOARD';

export {
  TOGGLE_NEW_GAME,
  TOGGLE_FINISH,
  RESET_CONTEXT,
  RESET_BOARD,
  UPDATE_SELECTED,
  UPDATE_BOARD,
  SOLVE_BOARD,
};

export const getActions = dispatch => ({
  resetBoard: () => dispatch({ type: RESET_BOARD }),
  resetContext: (value, indices) => dispatch({ type: RESET_CONTEXT, value, indices }),
  updateBoard: (value, count) => dispatch({ type: UPDATE_BOARD, value, count }),
  updateSelected: (value) => dispatch({ type: UPDATE_SELECTED, value }),
  toggleNewGame: (value) => dispatch({ type: TOGGLE_NEW_GAME, value }),
  toggleFinish: (value) => dispatch({ type: TOGGLE_FINISH, value }),
  solveBoard: (value) => dispatch({ type: SOLVE_BOARD, value }),
});
