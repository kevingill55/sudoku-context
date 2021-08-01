// © Copyright 2021 KMG: Sudoku
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import Header from './Header';
import Main from './Main';
import { BoardProvider } from '../context';
import { getBoard, getSolution } from '../utils';

const Board = () => {
  const { isSuccess, isLoading, data: initialBoard } = useQuery('board', getBoard);
  useQuery('solution', () => getSolution(initialBoard), { enabled: isSuccess });
  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <BoardProvider initialBoard={initialBoard}>
          <Header />
          <Main initialBoard={initialBoard} />
        </BoardProvider>
      )}
    </>
  );
};

export default Board;
