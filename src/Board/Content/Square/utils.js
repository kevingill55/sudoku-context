// © Copyright 2021 KMG: Sudoku

import { ARROW, BOUNDARIES } from './constants';
import { KEYS } from '../../../constants';

export const onArrow = ({ index, value, updateSelected }) => {
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

export const onInput = ({ board, updateBoard, index, value }) => {
  const newBoard = [...board];
  newBoard[index] = Number(value);
  const count = newBoard.filter(num => num > 0).length;
  localStorage.setItem(KEYS.BOARD, JSON.stringify(newBoard));
  updateBoard(newBoard, count);
};

export const getFontColor = ({ checkBoard, checkedIndices, indices, index }) => {
  if (indices.includes(index)) return 'black';
  if (checkBoard) {
    if (checkedIndices.includes(index)) return '#0437F2';
    return '#FF4040';
  }
  return 'black';
};

export const isCurrent = (index, selected) => selected === index;

export const getBackgroundColor = ({ current, index, indices}) => {
  if (current) return 'app';
  return indices.includes(index) ? 'light-3' : 'white';
};
