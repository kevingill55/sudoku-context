// © Copyright 2021 KMG: Sudoku

import capitalize from 'lodash/capitalize';
import { getSolution, getBoard, getInitialBoardIndices } from '../utils';
import { KEYS } from '../constants';

export const onNo = ({ toggleFinish }) => toggleFinish(false);

export const onYes = ({ toggleFinish, toggleNewGame }) => {
  toggleFinish(false);
  toggleNewGame(true);
};

export const solvePuzzle = ({ setSuccess, board }) => {
  const solution = JSON.parse(localStorage.getItem(KEYS.SOLUTION));
  return JSON.stringify(board) == (JSON.stringify(solution)) ? setSuccess(true) : setSuccess(false);
};

export const onNewGame = ({
  queryClient,
  resetContext,
  setLoading,
}) => async (difficulty) => {
  localStorage.clear();
  setLoading(true);
  const formattedBoard = await getBoard(difficulty);
  queryClient.setQueryData(KEYS.BOARD, formattedBoard);
  const indices = getInitialBoardIndices(formattedBoard);
  localStorage.setItem(KEYS.INDICES, JSON.stringify(indices));
  localStorage.setItem(KEYS.BOARD, JSON.stringify(formattedBoard));
  resetContext(formattedBoard, indices, capitalize(difficulty));
  const formattedSolution = await getSolution(formattedBoard);
  queryClient.setQueryData(KEYS.SOLUTION, formattedSolution);
};
