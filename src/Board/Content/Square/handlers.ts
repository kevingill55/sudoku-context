import { onArrow, onInput } from "./utils";
import { BACKSPACE } from "./constants";

export const handleBoardUpdate =
  ({
    board,
    indices,
    index,
    updateBoard,
    updateSelected,
  }: {
    board: number[];
    index: number | null;
    indices: number[];
    updateBoard: (x: number[], count: number) => void;
    updateSelected: (x: number) => void;
  }) =>
  (value: string) => {
    if (!index) return;
    onArrow({ updateSelected, index, value });
    if (indices.includes(index)) return;
    if (value === BACKSPACE)
      return onInput({ board, updateBoard, index, value: "0" });
    // @ts-ignore
    if (isNaN(value) || value === " ") return;
    return onInput({ board, updateBoard, index, value });
  };
