export const onReset = ({
  resetBoard,
  initialBoard,
}: {
  initialBoard: number[];
  resetBoard: () => void;
}) => {
  resetBoard();
};

export const onCheck = ({
  updateCheckedIndices,
  toggleCheckBoard,
  indices,
  board,
  solution,
}: {
  board: number[];
  solution: number[];
  indices: number[];
  toggleCheckBoard: (checkBoard: boolean) => void;
  updateCheckedIndices: (indices: number[]) => void;
}) => {
  const checked: number[] = [];
  board.forEach((num: number, index: number) => {
    if (num === solution[index]) return checked.push(index);
  });
  updateCheckedIndices([...checked]);
  toggleCheckBoard(true);
};
