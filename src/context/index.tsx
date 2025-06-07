import React, {
  PropsWithChildren,
  createContext,
  useReducer,
  useContext,
  useEffect,
} from "react";
import { getActions } from "./actions";
import { reducer } from "./reducer";
import { getInitialBoardIndices } from "../utils";
import { FinishModal, NewGameModal } from "../Modals";
import { DIFFICULTY, BoardState, ActionState } from "../types";
import { KEYS } from "../constants";

export const INITIAL_BOARD_STATE: BoardState = {
  selected: null,
  newGame: false,
  finish: false,
  checkBoard: false,
  board: [],
  checkedIndices: [],
  boardDifficulty: DIFFICULTY.EASY,
  boardCount: 0,
  indices: [],
  initialBoard: [],
};

export const INITIAL_ACTIONS_STATE: ActionState = {
  resetBoard: () => {},
  toggleNewGame: (x: boolean) => {},
  toggleFinish: (x: boolean) => {},
  toggleCheckBoard: (x: boolean) => {},
  updateSelected: (x: number) => {},
  updateBoard: (board: number[], count: number) => {},
  updateCheckedIndices: (indices: number[]) => {},
  solveBoard: (board: number[]) => {},
  resetContext: (
    board: number[],
    indices: number[],
    difficulty: DIFFICULTY
  ) => {},
};

const BoardContext = createContext<BoardState & ActionState>({
  ...INITIAL_BOARD_STATE,
  ...INITIAL_ACTIONS_STATE,
});

const BoardProvider = (
  props: PropsWithChildren<{ initialBoard: number[] }>
) => {
  const { children, initialBoard } = props;
  const [state, dispatch] = useReducer(reducer, {
    selected: null,
    newGame: false,
    finish: false,
    checkBoard: false,
    board: [...initialBoard],
    checkedIndices: [],
    boardDifficulty: DIFFICULTY.EASY,
    boardCount: getInitialBoardIndices([...initialBoard]).length,
    indices: getInitialBoardIndices([...initialBoard]),
    initialBoard: [...initialBoard],
  });
  const actions = getActions(dispatch);
  const context: ActionState & BoardState = {
    ...actions,
    ...state,
  };

  useEffect(() => {
    localStorage.setItem(KEYS.INDICES, JSON.stringify(context.indices));
  }, [context.indices]);

  return (
    <BoardContext.Provider value={context}>
      {children}
      {context.newGame && <NewGameModal />}
      {context.finish && <FinishModal />}
    </BoardContext.Provider>
  );
};

const useBoardContext = () => useContext(BoardContext);
export { useBoardContext, BoardProvider };
