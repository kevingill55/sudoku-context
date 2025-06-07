import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading";
import Content from "./Content";
import { BoardProvider } from "../context";
import { getBoard } from "../utils";
import { DIFFICULTY } from "../types";

const Board = () => {
  const { isSuccess, isLoading, data } = useQuery("getBoard", () =>
    getBoard(DIFFICULTY.EASY)
  );

  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <BoardProvider initialBoard={data.board} solution={data.solution}>
          <Content />
        </BoardProvider>
      )}
    </>
  );
};

export default Board;
