// © Copyright 2021 KMG: Sudoku
import {
  TOGGLE_FINISH,
  TOGGLE_NEW_GAME,
  TOGGLE_CHECK_BOARD,
  UPDATE_BOARD,
  SOLVE_BOARD,
  UPDATE_CHECKED_INDICES,
  UPDATE_SELECTED,
  RESET_BOARD,
  RESET_CONTEXT,
} from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RESET_BOARD:
      return {
        ...state,
        board: state.initialBoard,
        boardCount: state.indices.length,
        checkedIndices: [],
        selected: null,
        checkBoard: false,
      };
    case RESET_CONTEXT: 
      return {
        ...state,
        selected: null,
        boardDifficulty: action.difficulty,
        board: action.value,
        initialBoard: action.value,
        indices: action.indices,
        checkedIndices: [],
        boardCount: action.indices.length,
        finish: false,
        newGame: false,
        checkBoard: false,
      };
    case SOLVE_BOARD:
      return {
        ...state,
        boardCount: 81,
        board: action.value,
        finish: false,
        checkBoard: false,
        newGame: false,
        selected: null,
      };
    case UPDATE_BOARD:
      return {
        ...state,
        board: action.value,
        boardCount: action.count,
        finish: action.count === 81,
        checkBoard: false,
      };
    case UPDATE_CHECKED_INDICES:
      return { ...state, checkedIndices: action.value };
    case UPDATE_SELECTED:
      return { ...state, selected: action.value };
    case TOGGLE_FINISH:
      return { ...state, finish: action.value };
    case TOGGLE_NEW_GAME:
      return { ...state, newGame: action.value };
    case TOGGLE_CHECK_BOARD:
      return { ...state, checkBoard: action.value, selected: null };
    default:
      return state;
  }
};
