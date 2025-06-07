import React from "react";
import { ActionState, DIFFICULTY } from "../types";

const TOGGLE_FINISH = "TOGGLE_FINISH";
const TOGGLE_NEW_GAME = "TOGGLE_NEW_GAME";
const TOGGLE_CHECK_BOARD = "TOGGLE_CHECK_BOARD";
const UPDATE_SELECTED = "UPDATE_SELECTED";
const UPDATE_BOARD = "UPDATE_BOARD";
const RESET_BOARD = "RESET_BOARD";
const RESET_CONTEXT = "RESET_CONTEXT";
const SOLVE_BOARD = "SOLVE_BOARD";
const UPDATE_CHECKED_INDICES = "UPDATE_CHECKED_INDICES";

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

export const getActions = (
  dispatch: React.ActionDispatch<any>
): ActionState => ({
  resetBoard: () => dispatch({ type: RESET_BOARD }),
  resetContext: (board: number[], indices: number[], difficulty: DIFFICULTY) =>
    dispatch({ type: RESET_CONTEXT, board, indices, difficulty }),
  updateBoard: (board: number[], count: number) =>
    dispatch({ type: UPDATE_BOARD, board, count }),
  updateSelected: (selected: number) =>
    dispatch({ type: UPDATE_SELECTED, selected }),
  updateCheckedIndices: (checkedIndices: number[]) =>
    dispatch({ type: UPDATE_CHECKED_INDICES, checkedIndices }),
  toggleNewGame: (newGame: boolean) =>
    dispatch({ type: TOGGLE_NEW_GAME, newGame }),
  toggleFinish: (finish: boolean) => dispatch({ type: TOGGLE_FINISH, finish }),
  toggleCheckBoard: (checkBoard: boolean) =>
    dispatch({ type: TOGGLE_CHECK_BOARD, checkBoard }),
  solveBoard: (board: number[]) => dispatch({ type: SOLVE_BOARD, board }),
});
