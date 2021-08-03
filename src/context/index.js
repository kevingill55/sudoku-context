// © Copyright 2021 KMG: Sudoku

import React, { createContext, useReducer, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getActions } from './actions';
import reducer from './reducer';
import { getInitialBoardIndices } from '../utils';
import { FinishModal, NewGameModal } from '../Modals';
import { KEYS } from '../constants';

const BoardContext = createContext();

const BoardProvider = ({ children, initialBoard }) => {
  const [state, dispatch] = useReducer(reducer, {
    selected: null,
    newGame: false,
    finish: false,
    checkBoard: false,
    board: [...initialBoard],
    checkedIndices: [],
    boardDifficulty: 'Easy',
    boardCount: getInitialBoardIndices([...initialBoard]).length,
    indices: getInitialBoardIndices([...initialBoard]),
    initialBoard: [...initialBoard],
  });
  const actions = getActions(dispatch);
  const context = {
    ...actions,
    ...state,
  };
  useEffect(() => {
    localStorage.setItem(KEYS.indices, JSON.stringify(context.indices));
  }, []);
  return (
    <BoardContext.Provider value={context}>
      {children}
      {context.newGame && <NewGameModal />}
      {context.finish && <FinishModal />}
    </BoardContext.Provider>
  );
};

BoardProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialBoard: PropTypes.array.isRequired,
};

const useBoardContext = () => useContext(BoardContext);

export { useBoardContext, BoardProvider };
