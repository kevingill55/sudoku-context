// © Copyright 2021 KMG: Sudoku
import axios from 'axios';
import chunk from 'lodash/fp/chunk';

const BASE_API = 'https://sugoku.herokuapp.com';

const reduceBoard = board => board.reduce((acc, curr) => [...acc, ...curr], []);
const formatBoard = board => JSON.stringify(chunk(9)(board));

export const getInitialBoardIndices = (board) => {
  const resArr = [];
  board.map((val, index) => {
    if (Number(val)) resArr.push(index);
    return resArr;
  });
  return resArr;
};

export const getBoard = async (difficulty) => {
  const boardDifficulty = difficulty.length ? difficulty : 'medium';
  const { data: { board } } = await axios.get(`${BASE_API}/board?difficulty=${boardDifficulty}`);
  return reduceBoard(board);
};

export const getSolution = async (board) => {
  const formattedBoard = formatBoard(board);
  const formData = new FormData();
  formData.append('board', formattedBoard);
  const { data: { solution } } = await axios.post(`${BASE_API}/solve`, formData);
  return reduceBoard(solution);
};
