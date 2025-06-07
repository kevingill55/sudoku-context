// © Copyright 2021 KMG: Sudoku

import React, { useContext } from "react";
import { Box, Text, Heading, ResponsiveContext } from "grommet";
import TitleButton from "./TitleButton";
import { onReset, onCheck, onSolve } from "./utils";
import { useBoardContext } from "../../../context";

const Title = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";
  const {
    resetBoard,
    solveBoard,
    boardDifficulty,
    toggleNewGame,
    toggleCheckBoard,
    updateCheckedIndices,
    initialBoard,
    indices,
    board,
  } = useBoardContext();
  return (
    <Box
      align={isSmall ? "start" : "center"}
      style={{ minWidth: "200px" }}
      gap="large"
      pad={isSmall ? { vertical: "medium" } : "none"}
      direction={isSmall ? "row" : "column"}
    >
      <Box pad={{ horizontal: "small" }}>
        <Heading
          color="black"
          margin={isSmall ? { top: "none", bottom: "small" } : "none"}
          size="36px"
        >
          Sudoku
        </Heading>
        <Text size="small" textAlign="center" color="black">
          {`Difficulty: ${boardDifficulty}`}
        </Text>
        <Text alignSelf="center" size="xsmall" weight={300}>
          {new Date().toDateString()}
        </Text>
      </Box>
      <Box
        width={!isSmall ? "75%" : "none"}
        gap="small"
        alignSelf="center"
        direction={isSmall ? "row" : "column"}
      >
        <TitleButton label="Solve" onClick={() => onSolve({ solveBoard })} />
        <TitleButton
          label="Check"
          onClick={() =>
            onCheck({ board, indices, updateCheckedIndices, toggleCheckBoard })
          }
        />
        <TitleButton label="New Puzzle" onClick={() => toggleNewGame(true)} />
        <TitleButton
          label="Reset"
          onClick={() => onReset({ resetBoard, initialBoard })}
        />
      </Box>
    </Box>
  );
};

export default Title;
