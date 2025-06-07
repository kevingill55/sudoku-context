import axios from "axios";
import { DIFFICULTY } from "./types";

const BASE_API = "https://api.api-ninjas.com/v1/sudokugenerate";
const API_KEY = process.env.REACT_APP_NINJA_API_KEY;

console.log({ API_KEY });

const reduceBoard = (board: number[][]) =>
  board.reduce((acc, curr) => [...acc, ...curr], []);

export const getInitialBoardIndices = (board: number[]): number[] => {
  const resArr: number[] = [];
  board.map((val, index) => {
    if (Number(val)) resArr.push(index);
    return resArr;
  });
  return resArr;
};

export const convertBoard = (board: (number | null)[]) => {
  return board.map((cell) => {
    if (cell == null) return 0;
    return cell;
  });
};

export const getBoard = async (difficulty: DIFFICULTY) => {
  const { data } = await axios.get(`${BASE_API}?difficulty=${difficulty}`, {
    headers: { "X-Api-Key": API_KEY },
  });

  const board = convertBoard(reduceBoard(data.puzzle));
  const solution = convertBoard(reduceBoard(data.solution));
  return { board, solution };
};
