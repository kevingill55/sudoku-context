// © Copyright 2021 KMG: Sudoku

import axios from 'axios';
import chunk from 'lodash/fp/chunk';
import { KEYS } from './constants';

const BASE_API = 'https://sugoku.herokuapp.com';

const reduceBoard = board => board.reduce((acc, curr) => [...acc, ...curr], []);
const formatBoard = board => JSON.stringify(chunk(9)(board));

export const getInitialBoardIndices = (board) => {
  const localIndices = localStorage.getItem(KEYS.INDICES);
  if (localIndices) return JSON.parse(localIndices);
  const resArr = [];
  board.map((val, index) => {
    if (Number(val)) resArr.push(index);
    return resArr;
  });
  return resArr;
};

export const getBoard = async (difficulty) => {
  const localBoard = localStorage.getItem(KEYS.BOARD);
  if (localBoard) return JSON.parse(localBoard);
  const { data: { board } } = await axios.get(`${BASE_API}/board?difficulty=${difficulty}`);
  const reducedBoard = reduceBoard(board);
  localStorage.setItem(KEYS.BOARD, JSON.stringify(reducedBoard));
  return reducedBoard;
};

export const getSolution = async (board) => {
  const formattedBoard = formatBoard(board);
  const formData = new FormData();
  formData.append('board', formattedBoard);
  const { data: { solution } } = await axios.post(`${BASE_API}/solve`, formData);
  const reducedBoard = reduceBoard(solution);
  localStorage.setItem(KEYS.SOLUTION, JSON.stringify(reducedBoard));
  return reducedBoard;
};
