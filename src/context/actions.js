// © Copyright 2021 KMG: Sudoku

const TOGGLE_FINISH = 'TOGGLE_FINISH';
const TOGGLE_NEW_GAME = 'TOGGLE_NEW_GAME';
const TOGGLE_CHECK_BOARD = 'TOGGLE_CHECK_BOARD';
const UPDATE_SELECTED = 'UPDATE_SELECTED';
const UPDATE_BOARD = 'UPDATE_BOARD';
const RESET_BOARD = 'RESET_BOARD';
const RESET_CONTEXT = 'RESET_CONTEXT';
const SOLVE_BOARD = 'SOLVE_BOARD';
const UPDATE_CHECKED_INDICES = 'UPDATE_CHECKED_INDICES';

export {
  TOGGLE_NEW_GAME,
  TOGGLE_FINISH,
  TOGGLE_CHECK_BOARD,
  RESET_CONTEXT,
  RESET_BOARD,
  UPDATE_SELECTED,
  UPDATE_BOARD,
  UPDATE_CHECKED_INDICES,
  SOLVE_BOARD,
};

export const getActions = dispatch => ({
  resetBoard: () => dispatch({ type: RESET_BOARD }),
  resetContext: (value, indices, difficulty) => dispatch({ type: RESET_CONTEXT, value, indices, difficulty }),
  updateBoard: (value, count) => dispatch({ type: UPDATE_BOARD, value, count }),
  updateSelected: (value) => dispatch({ type: UPDATE_SELECTED, value }),
  updateCheckedIndices: (value) => dispatch({ type: UPDATE_CHECKED_INDICES, value }),
  toggleNewGame: (value) => dispatch({ type: TOGGLE_NEW_GAME, value }),
  toggleFinish: (value) => dispatch({ type: TOGGLE_FINISH, value }),
  toggleCheckBoard: (value) => dispatch({ type: TOGGLE_CHECK_BOARD, value }),
  solveBoard: (value) => dispatch({ type: SOLVE_BOARD, value }),
});
