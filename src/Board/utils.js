// © Copyright 2021 KMG: Sudoku
const getTrimmedValue = (value) => {
  if (value.length <= 1) return value;
  return value.charAt(value.length - 1);
};

export const getBackgroundColor = (isSelected, index, initialBoard) => {
  if (isSelected) return '#E7BEFF';
  return initialBoard.includes(index) ? 'light-3' : 'white';
};

const onArrow = ({ index, value, updateSelected }) => {
  switch (value) {
    case 'ArrowDown':
      if (index === 80) return updateSelected(0);
      return (index < 81 && index > 71) ? updateSelected(9 - (80 - index)) : updateSelected(index + 9); 
      case 'ArrowRight':
        return index === 80 ? updateSelected(0) : updateSelected(index + 1);
      case 'ArrowLeft':
          return index === 0 ? updateSelected(80) : updateSelected(index - 1);
      case 'ArrowUp':
        if (index === 0) return updateSelected(80);
        return index < 9 ? updateSelected(80 - (9 - index)) : updateSelected(index - 9);
    default:
      return;
  }
};

const getBoardCount = board => board.filter(num => num > 0).length;

export const onBoardUpdate = ({
  board,
  index,
  value,
  indices,
  updateSelected,
  updateBoard,
}) => {
  onArrow({ updateSelected, index, value });
  if (indices.includes(index))  return;
  if (value === 'Backspace') {
    const newBoard = [...board];
    newBoard[index] = 0;
    const count = getBoardCount(newBoard);
    updateBoard(newBoard, count);
  }
  const trimmedValue = getTrimmedValue(value);
  if (isNaN(trimmedValue) || trimmedValue === ' ') return;
  const newBoard = [...board];
  newBoard[index] = Number(trimmedValue);
  const count = getBoardCount(newBoard);
  updateBoard(newBoard, count);
};
