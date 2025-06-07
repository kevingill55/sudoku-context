import axios from "axios";
import { KEYS } from "./constants";
import { DIFFICULTY } from "./types";

const BASE_API = "https://api.api-ninjas.com/v1/sudokugenerate";
const API_KEY = process.env.REACT_APP_NINJA_API_KEY;

console.log({ API_KEY });

const reduceBoard = (board: number[][]) =>
  board.reduce((acc, curr) => [...acc, ...curr], []);

export const getInitialBoardIndices = (board: number[]): number[] => {
  const localIndices = localStorage.getItem(KEYS.INDICES);
  if (localIndices) return JSON.parse(localIndices);
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
  const localBoard = localStorage.getItem(KEYS.BOARD);
  if (localBoard) return JSON.parse(localBoard);
  const { data } = await axios.get(`${BASE_API}?difficulty=${difficulty}`, {
    headers: { "X-Api-Key": API_KEY },
  });

  const convertedBoard = convertBoard(reduceBoard(data.puzzle));
  const convertedSolution = convertBoard(reduceBoard(data.solution));
  localStorage.setItem(KEYS.BOARD, JSON.stringify(convertedBoard));
  localStorage.setItem(KEYS.SOLUTION, JSON.stringify(convertedSolution));
  return convertedBoard;
};

// export const getSolution = async (board) => {
//   const formattedBoard = formatBoard(board);
//   const formData = new FormData();
//   formData.append("board", formattedBoard);
//   const {
//     data: { solution },
//   } = await axios.post(`${BASE_API}/solve`, formData);
//   const reducedBoard = reduceBoard(solution);
//   localStorage.setItem(KEYS.SOLUTION, JSON.stringify(reducedBoard));
//   return reducedBoard;
// };
