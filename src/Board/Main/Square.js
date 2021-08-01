// © Copyright 2021 KMG: Sudoku
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { useBoardContext } from '../../context';
import { INDEX_BORDER_MAP } from '../../constants';
import { getBackgroundColor, onBoardUpdate } from '../utils';

const Square = ({ index }) => {
  const {
    board,
    updateBoard,
    updateSelected,
    indices,
    selected,
  } = useBoardContext();
  const borderValues = INDEX_BORDER_MAP[index].map(side => ({ color: 'black', side, size: '2px' }));
  const isSelected = index === selected;
  return (
    <Box
      width='60px'
      height='60px'
      align='center'
      justify='center'
      border={[
        { side: 'all', color: 'light-4' },
        ...borderValues,
      ]}
      background={getBackgroundColor(isSelected, index, indices)}
      hoverIndicator={isSelected ? { color: 'app' } : { color: 'light-2' }}
      onClick={() => console.log('yo', index) || updateSelected(index)}
      focusIndicator={false}
      style={{ fontSize: '48px', color: 'black' }}
    >
      <input
        type='text'
        onKeyDown={event => console.log(event.key) || onBoardUpdate({
          board,
          index: selected,
          value: event.key,
          indices,
          updateBoard,
          updateSelected,
        })}
        onChange={() => {}}
        value={board[index] || ''}
        style={{
          border: 'none',
          outline: 'none',
          boxSizing: 'border-box',
          background: 'transparent',
          caretColor: 'transparent',
          cursor: 'pointer',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          fontFamily: 'inherit',
          color: 'inherit',
          width: '100%',
          height: '100%',
          textAlign: 'center',
        }}
      />
    </Box>
  );
};

Square.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Square;
