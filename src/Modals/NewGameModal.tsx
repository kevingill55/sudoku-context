// © Copyright 2021 KMG: Sudoku

import React, { useState } from "react";
import { Box, Layer } from "grommet";
import ModalButton from "./ModalButton";
import ModalHeader from "./ModalHeader";
import { onNewGame } from "./utils";
import Loading from "../Loading";
import { DIFFICULTY } from "../types";
import { useBoardContext } from "../context";

const NewGameModal = () => {
  const [loading, setLoading] = useState(false);
  const { toggleNewGame, resetContext } = useBoardContext();
  const newGame = onNewGame({ resetContext, setLoading });
  return (
    <Layer>
      <Box
        width="medium"
        align="center"
        justify="center"
        fill={true}
        pad={{ bottom: "medium" }}
      >
        {loading ? (
          <Loading />
        ) : (
          <Box
            fill={true}
            gap="small"
            align="center"
            justify="center"
            pad="small"
          >
            <ModalHeader
              title="Select a difficulty"
              onClick={() => toggleNewGame(false)}
            />
            <ModalButton
              label="Easy"
              onClick={() => newGame(DIFFICULTY.EASY)}
            />
            <ModalButton
              label="Medium"
              onClick={() => newGame(DIFFICULTY.MEDIUM)}
            />
            <ModalButton
              label="Hard"
              onClick={() => newGame(DIFFICULTY.HARD)}
            />
          </Box>
        )}
      </Box>
    </Layer>
  );
};

export default NewGameModal;
