// © Copyright 2021 KMG: Sudoku
import {
  TOGGLE_FINISH,
  TOGGLE_NEW_GAME,
  UPDATE_BOARD,
  SOLVE_BOARD,
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
        selected: null,
      };
    case RESET_CONTEXT: 
      return {
        selected: null,
        board: action.value,
        initialBoard: action.value,
        indices: action.indices,
        boardCount: action.indices.length,
        finish: false,
        newGame: false,
      };
    case SOLVE_BOARD:
      return {
        ...state,
        boardCount: 81,
        board: action.value,
        finish: false,
        newGame: false,
      };
    case UPDATE_BOARD:
      return {
        ...state,
        board: action.value,
        boardCount: action.count,
        finish: action.count === 81,
      };
    case UPDATE_SELECTED:
      return { ...state, selected: action.value };
    case TOGGLE_FINISH:
      return { ...state, finish: action.value };
    case TOGGLE_NEW_GAME:
      return { ...state, newGame: action.value };
    default:
      return state;
  }
};
