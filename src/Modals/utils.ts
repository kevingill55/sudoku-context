import { getBoard, getInitialBoardIndices } from "../utils";
import { DIFFICULTY } from "../types";

export const capitalize = (str: string | DIFFICULTY) => {
  return str.charAt(0).toUpperCase() + str.substring(1);
};

export const onNo = ({
  toggleFinish,
}: {
  toggleFinish: (finish: boolean) => void;
}) => toggleFinish(false);

export const onYes = ({
  toggleFinish,
  toggleNewGame,
}: {
  toggleFinish: (finish: boolean) => void;
  toggleNewGame: (newGame: boolean) => void;
}) => {
  toggleFinish(false);
  toggleNewGame(true);
};

export const solvePuzzle = ({
  setSuccess,
  board,
  solution,
}: {
  board: number[];
  solution: number[];
  setSuccess: (x: boolean) => void;
}) => {
  return JSON.stringify(board) === JSON.stringify(solution)
    ? setSuccess(true)
    : setSuccess(false);
};

export const onNewGame =
  ({
    resetContext,
    setLoading,
  }: {
    setLoading: (loading: boolean) => void;
    resetContext: (
      board: number[],
      indices: number[],
      difficulty: DIFFICULTY
    ) => void;
  }) =>
  async (difficulty: DIFFICULTY) => {
    setLoading(true);

    const { board } = await getBoard(difficulty);
    const indices = getInitialBoardIndices(board);
    resetContext(board, indices, difficulty);

    // const formattedSolution = await getSolution(formattedBoard);
  };
