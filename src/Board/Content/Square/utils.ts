// © Copyright 2021 KMG: Sudoku

import { ARROW, BOUNDARIES } from "./constants";
import { KEYS } from "../../../constants";

export const onArrow = ({
  index,
  value,
  updateSelected,
}: {
  index: number;
  value: string;
  updateSelected: (x: number) => void;
}) => {
  switch (value) {
    case ARROW.DOWN:
      if (!BOUNDARIES.DOWN.includes(index)) return updateSelected(index + 9);
      break;
    case ARROW.RIGHT:
      if (!BOUNDARIES.RIGHT.includes(index)) return updateSelected(index + 1);
      break;
    case ARROW.LEFT:
      if (!BOUNDARIES.LEFT.includes(index)) return updateSelected(index - 1);
      break;
    case ARROW.UP:
      if (!BOUNDARIES.UP.includes(index)) return updateSelected(index - 9);
      break;
    default:
      return;
  }
};

export const onInput = ({
  board,
  updateBoard,
  index,
  value,
}: {
  board: number[];
  index: number;
  updateBoard: (board: number[], count: number) => void;
  value: string;
}) => {
  const newBoard = [...board];
  newBoard[index] = Number(value);
  const count = newBoard.filter((num) => num > 0).length;
  localStorage.setItem(KEYS.BOARD, JSON.stringify(newBoard));
  updateBoard(newBoard, count);
};

export const getFontColor = ({
  checkBoard,
  checkedIndices,
  indices,
  index,
}: {
  checkedIndices: number[];
  indices: number[];
  index: number;
  checkBoard: boolean;
}) => {
  if (indices.includes(index)) return "black";
  if (checkBoard) {
    if (checkedIndices.includes(index)) return "#0437F2";
    return "#FF4040";
  }
  return "black";
};

export const isCurrent = (index: number, selected: number | null) =>
  selected === index;

export const getBackgroundColor = ({
  current,
  index,
  indices,
}: {
  index: number;
  indices: number[];
  current: boolean;
}) => {
  if (current) return "app";
  return indices.includes(index) ? "light-3" : "white";
};
