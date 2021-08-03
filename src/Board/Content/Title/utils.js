// © Copyright 2021 KMG: Sudoku

import { KEYS } from '../../../constants';

export const onReset = ({ resetBoard, initialBoard }) => {
  localStorage.setItem(KEYS.BOARD, JSON.stringify(initialBoard));
  resetBoard();
};

export const onSolve = ({ solveBoard }) => solveBoard(JSON.parse(localStorage.getItem(KEYS.SOLUTION)));

export const onCheck = ({ updateCheckedIndices, toggleCheckBoard, indices, board }) => {
  const solution = JSON.parse(localStorage.getItem(KEYS.SOLUTION));
  const checked = [];
  board.map((num, index) => {
    if (indices.includes(index)) return;
    if (num === solution[index]) return checked.push(index);
  }); 
  updateCheckedIndices([...checked]);
  toggleCheckBoard(true);
};
