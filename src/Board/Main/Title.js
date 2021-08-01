// © Copyright 2021 KMG: Sudoku
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Heading, ResponsiveContext } from 'grommet';
import { useQueryClient } from 'react-query';
import { useBoardContext } from '../../context';

const TitleButton = ({ label, onClick }) => (
  <Box
    hoverIndicator={{ color: 'light-2' }}
    onClick={onClick}
    align='center'
    border={{ color: 'black' }}
    pad='small'
  >
    <Text
      size='small'
      color='black'
    >
      {label}
    </Text>
  </Box>
);

TitleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

const onSolve = ({ queryClient, solveBoard }) => solveBoard(queryClient.getQueryData('solution'));

const Title = () => {
  const queryClient = useQueryClient();
  const size = useContext(ResponsiveContext);
  const isSmall = size === 'small';
  const {
    boardCount,
    resetBoard,
    solveBoard,
    toggleNewGame,
  } = useBoardContext();
  return (
    <Box
      align='center'
      margin={{ vertical: 'medium' }}
      style={{ minWidth: '200px' }}
      gap='large'
    >
      <Box
        pad={{ horizontal: 'small' }}
      >
        <Heading color='black' margin='none'>Sudoku</Heading>
        <Text
          color='black'
          alignSelf='center'
          size='small'
          weight={300}
        >
          {(new Date().toDateString())}
        </Text>
      </Box>
      <Box
        width={!isSmall && '75%'}
        direction={isSmall ? 'row' : 'column'}
        gap='small'
      >
        <TitleButton label='Solve' onClick={() => onSolve({ solveBoard, queryClient })} />
        <TitleButton label='New Puzzle' onClick={() => toggleNewGame(true)} />
        <TitleButton label='Reset' onClick={resetBoard} />
        <Text size='small' weight={300}>{`Board Count: ${boardCount}`}</Text>
      </Box>
    </Box>
  );
};

export default Title;
