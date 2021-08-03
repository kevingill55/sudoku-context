// © Copyright 2021 KMG: Sudoku
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import Header from './Header';
import Content from './Content';
import { BoardProvider } from '../context';
import { getBoard, getSolution } from '../utils';
import { DIFFICULTIES, KEYS } from '../constants';

const Board = () => {
  const { isSuccess, isLoading, data: initialBoard } = useQuery(KEYS.BOARD, () => getBoard(DIFFICULTIES.EASY));
  useQuery(KEYS.SOLUTION, () => getSolution(initialBoard), { enabled: isSuccess });
  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <BoardProvider initialBoard={initialBoard}>
          <Header />
          <Content />
        </BoardProvider>
      )}
    </>
  );
};

export default Board;
