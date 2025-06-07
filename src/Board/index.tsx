// © Copyright 2021 KMG: Sudoku
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading";
import Content from "./Content";
import { BoardProvider } from "../context";
import { getBoard } from "../utils";
import { KEYS } from "../constants";
import { DIFFICULTY } from "../types";

const Board = () => {
  const {
    isSuccess,
    isLoading,
    data: initialBoard,
  } = useQuery(KEYS.BOARD, () => getBoard(DIFFICULTY.EASY));
  // useQuery(KEYS.SOLUTION, () => getSolution(initialBoard), { enabled: isSuccess });
  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <BoardProvider initialBoard={initialBoard}>
          <Content />
        </BoardProvider>
      )}
    </>
  );
};

export default Board;
