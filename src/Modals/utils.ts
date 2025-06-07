import { getBoard, getInitialBoardIndices } from "../utils";
import { KEYS } from "../constants";
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
}: {
  board: number[];
  setSuccess: (x: boolean) => void;
}) => {
  const solution = JSON.parse(localStorage.getItem(KEYS.SOLUTION) || "");
  return JSON.stringify(board) === JSON.stringify(solution)
    ? setSuccess(true)
    : setSuccess(false);
};

export const onNewGame =
  ({
    queryClient,
    resetContext,
    setLoading,
  }: {
    queryClient: any;
    setLoading: (loading: boolean) => void;
    resetContext: (
      board: number[],
      indices: number[],
      difficulty: DIFFICULTY
    ) => void;
  }) =>
  async (difficulty: DIFFICULTY) => {
    localStorage.clear();

    setLoading(true);

    const formattedBoard = await getBoard(difficulty);
    queryClient.setQueryData(KEYS.BOARD, formattedBoard);

    const indices = getInitialBoardIndices(formattedBoard);
    localStorage.setItem(KEYS.INDICES, JSON.stringify(indices));
    localStorage.setItem(KEYS.BOARD, JSON.stringify(formattedBoard));

    resetContext(formattedBoard, indices, difficulty);

    // const formattedSolution = await getSolution(formattedBoard);
    // queryClient.setQueryData(KEYS.SOLUTION, formattedSolution);
  };
