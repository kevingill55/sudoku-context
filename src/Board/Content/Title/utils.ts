// © Copyright 2021 KMG: Sudoku

import { KEYS } from "../../../constants";

export const onReset = ({
  resetBoard,
  initialBoard,
}: {
  initialBoard: number[];
  resetBoard: () => void;
}) => {
  localStorage.setItem(KEYS.BOARD, JSON.stringify(initialBoard));
  resetBoard();
};

export const onSolve = ({
  solveBoard,
}: {
  solveBoard: (x: number[]) => void;
}) => solveBoard(JSON.parse(localStorage.getItem(KEYS.SOLUTION) || ""));

export const onCheck = ({
  updateCheckedIndices,
  toggleCheckBoard,
  indices,
  board,
}: {
  board: number[];
  indices: number[];
  toggleCheckBoard: (checkBoard: boolean) => void;
  updateCheckedIndices: (indices: number[]) => void;
}) => {
  const solution = JSON.parse(localStorage.getItem(KEYS.SOLUTION) || "");
  const checked: number[] = [];
  board.forEach((num: number, index: number) => {
    if (num === solution[index]) return checked.push(index);
  });
  updateCheckedIndices([...checked]);
  toggleCheckBoard(true);
};
