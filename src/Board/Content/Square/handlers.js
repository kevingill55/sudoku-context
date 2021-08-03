// © Copyright 2021 KMG: Sudoku

import {
  onArrow,
  onInput,
} from './utils';
import { BACKSPACE } from './constants';

export const handleBoardUpdate = ({
  board,
  indices,
  index,
  updateBoard,
  updateSelected,
}) => (value) => {
  onArrow({ updateSelected, index, value });
  if (indices.includes(index)) return;
  if (value === BACKSPACE) return onInput({ board, updateBoard, index, value: 0 });
  if (isNaN(value) || value === ' ') return;
  return onInput({ board, updateBoard, index, value });
};
