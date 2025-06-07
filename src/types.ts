export enum DIFFICULTY {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum BOARD_ACTIONS {
  TOGGLE_FINISH = "TOGGLE_FINISH",
  TOGGLE_NEW_GAME = "TOGGLE_NEW_GAME",
  TOGGLE_CHECK_BOARD = "TOGGLE_CHECK_BOARD",
  UPDATE_SELECTED = "UPDATE_SELECTED",
  UPDATE_BOARD = "UPDATE_BOARD",
  RESET_BOARD = "RESET_BOARD",
  RESET_CONTEXT = "RESET_CONTEXT",
  SOLVE_BOARD = "SOLVE_BOARD",
  UPDATE_CHECKED_INDICES = "UPDATE_CHECKED_INDICES",
}

export type BoardAction =
  | { type: BOARD_ACTIONS.RESET_BOARD }
  | {
      type: BOARD_ACTIONS.RESET_CONTEXT;
      indices: number[];
      board: number[];
      difficulty: DIFFICULTY;
    }
  | { type: BOARD_ACTIONS.UPDATE_BOARD; board: number[]; count: number }
  | { type: BOARD_ACTIONS.SOLVE_BOARD; board: number[] }
  | { type: BOARD_ACTIONS.UPDATE_CHECKED_INDICES; checkedIndices: number[] }
  | { type: BOARD_ACTIONS.UPDATE_SELECTED; selected: number }
  | { type: BOARD_ACTIONS.TOGGLE_CHECK_BOARD; checkBoard: boolean }
  | { type: BOARD_ACTIONS.TOGGLE_FINISH; finish: boolean }
  | { type: BOARD_ACTIONS.TOGGLE_NEW_GAME; newGame: boolean };

export type BoardState = {
  finish: boolean;
  checkBoard: boolean;
  newGame: boolean;
  selected: number | null;
  checkedIndices: number[];
  board: number[];
  solution: number[];
  initialBoard: number[];
  indices: number[];
  boardCount: number;
  boardDifficulty: DIFFICULTY;
};

export type ActionState = {
  resetBoard: () => void;
  toggleNewGame: (x: boolean) => void;
  toggleFinish: (x: boolean) => void;
  toggleCheckBoard: (x: boolean) => void;
  updateSelected: (x: number) => void;
  updateBoard: (board: number[], count: number) => void;
  updateCheckedIndices: (indices: number[]) => void;
  solveBoard: (board: number[]) => void;
  resetContext: (
    board: number[],
    indices: number[],
    difficulty: DIFFICULTY
  ) => void;
};
