import React, { useState, useEffect } from "react";
import { Box, Text, Layer } from "grommet";
import { useBoardContext } from "../context";
import ModalButton from "./ModalButton";
import ModalHeader from "./ModalHeader";
import { onYes, onNo, solvePuzzle } from "./utils";

const FinishModal = () => {
  const [success, setSuccess] = useState(false);
  const { board, solution, toggleFinish, toggleNewGame } = useBoardContext();
  useEffect(() => {
    solvePuzzle({ setSuccess, solution, board });
  }, [board, solution]);
  return (
    <Layer>
      <Box width="medium" align="center" pad={{ bottom: "medium" }} gap="small">
        {
          <Box fill={true} align="center" gap="small">
            {success ? (
              <Box fill={true} pad="small" align="center" gap="small">
                <ModalHeader
                  title="You won! Play again?"
                  onClick={() => toggleFinish(false)}
                />
                <ModalButton
                  label="Sure"
                  onClick={() => onYes({ toggleFinish, toggleNewGame })}
                />
                <ModalButton
                  label="Nah"
                  onClick={() => onNo({ toggleFinish })}
                />
              </Box>
            ) : (
              <Box fill={true} pad="small" align="center">
                <ModalHeader
                  title="Close, but no cigar"
                  onClick={() => toggleFinish(false)}
                />
                <Text color="black" weight={300} textAlign="center">
                  There appear to be a few mistakes in your board. Keep trying.
                </Text>
              </Box>
            )}
          </Box>
        }
      </Box>
    </Layer>
  );
};

export default FinishModal;
