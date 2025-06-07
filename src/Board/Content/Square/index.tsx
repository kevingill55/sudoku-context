import React from "react";
import { Box } from "grommet";
import { INDEX_BORDER_MAP } from "./constants";
import { handleBoardUpdate } from "./handlers";
import { getBackgroundColor, getFontColor, isCurrent } from "./utils";
import { useBoardContext } from "../../../context";

const Square = ({ index }: { index: number }) => {
  const {
    board,
    indices,
    selected,
    updateBoard,
    updateSelected,
    checkedIndices,
    checkBoard,
  } = useBoardContext();

  const onBoardUpdate = handleBoardUpdate({
    board,
    indices,
    updateBoard,
    updateSelected,
    index: selected,
  });

  const borderValues = INDEX_BORDER_MAP[index].map((side) => ({
    color: "black",
    side,
    size: "2px",
  }));

  const current = isCurrent(index, selected);

  return (
    <Box
      width="60px"
      height="60px"
      align="center"
      justify="center"
      border={[{ side: "all", color: "light-4" }, ...borderValues]}
      background={getBackgroundColor({ current, index, indices })}
      hoverIndicator={current ? { color: "app" } : { color: "light-2" }}
      onClick={() => updateSelected(index)}
      focusIndicator={false}
      style={{
        fontSize: "48px",
        color: getFontColor({ checkBoard, checkedIndices, indices, index }),
      }}
    >
      <input
        type="text"
        id={`square-${index}`}
        onKeyDown={(event) => onBoardUpdate(event.key)}
        onChange={() => {}}
        value={board[index] || ""}
        style={{
          border: "none",
          outline: "none",
          boxSizing: "border-box",
          background: "transparent",
          caretColor: "transparent",
          cursor: "pointer",
          fontSize: "inherit",
          fontWeight: "inherit",
          fontFamily: "inherit",
          color: "inherit",
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      />
    </Box>
  );
};

export default Square;
