// © Copyright 2021 KMG: Sudoku
import { BoardAction, BoardState } from "../types";
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
} from "./actions";

export const reducer = (state: BoardState, action: BoardAction) => {
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
        board: action.board,
        initialBoard: action.board,
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
        board: action.board,
        finish: false,
        checkBoard: false,
        newGame: false,
        selected: null,
      };
    case UPDATE_BOARD:
      return {
        ...state,
        board: action.board,
        boardCount: action.count,
        finish: action.count === 81,
        checkBoard: false,
      };
    case UPDATE_CHECKED_INDICES:
      return { ...state, checkedIndices: action.checkedIndices };
    case UPDATE_SELECTED:
      console.log("UPDATE_SELECTED", action);
      return { ...state, selected: action.selected };
    case TOGGLE_FINISH:
      return { ...state, finish: action.finish };
    case TOGGLE_NEW_GAME:
      return { ...state, newGame: action.newGame };
    case TOGGLE_CHECK_BOARD:
      return { ...state, checkBoard: action.checkBoard, selected: null };
    default:
      return state;
  }
};
