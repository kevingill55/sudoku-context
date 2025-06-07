import React, { useContext } from "react";
import { Box, Text, Heading, ResponsiveContext } from "grommet";
import TitleButton from "./TitleButton";
import { onReset, onCheck } from "./utils";
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
    solution,
    board,
  } = useBoardContext();
  return (
    <Box
      align={isSmall ? "start" : "center"}
      style={{ minWidth: "150px" }}
      gap={isSmall ? "medium" : "large"}
      pad={isSmall ? { vertical: "medium" } : "none"}
      direction={isSmall ? "row" : "column"}
    >
      <Box pad={{ horizontal: "small" }}>
        <Heading
          color="black"
          margin={isSmall ? { top: "none", bottom: "xxsmall" } : "none"}
          size={isSmall ? "24px" : "36px"}
        >
          Sudoku
        </Heading>
        <Text
          size={isSmall ? "13px" : "small"}
          textAlign="center"
          color="black"
        >
          {`Difficulty: ${
            boardDifficulty.charAt(0).toUpperCase() +
            boardDifficulty.substring(1)
          }`}
        </Text>
        <Text alignSelf="center" size="xsmall" weight={300}>
          {new Date().toDateString()}
        </Text>
      </Box>
      <Box
        width={!isSmall ? "75%" : "none"}
        gap={isSmall ? "xsmall" : "small"}
        alignSelf="center"
        direction={isSmall ? "row" : "column"}
      >
        <TitleButton
          label="Solve"
          onClick={() => {
            solveBoard(board);
          }}
        />
        <TitleButton
          label="Check"
          onClick={() =>
            onCheck({
              board,
              solution,
              indices,
              updateCheckedIndices,
              toggleCheckBoard,
            })
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
