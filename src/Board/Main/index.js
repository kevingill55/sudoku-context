// © Copyright 2021 KMG: Sudoku
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { v4 as uuidv4 } from 'uuid';
import Title from './Title';
import Square from './Square';

const Main = ({ initialBoard }) => {
  return (
    <Box
      align='center'
      justify='center'
      gap='3vw'
      margin={{ vertical: '7vh' }}
      direction='row'
      wrap={true}
    >
      <Title />
      <Box
        wrap={true}
        border={{ side: 'all', color: 'black', size: '3px' }}
        direction='row'
        width='546px'
        style={{ minWidth: '546px' }}
        alignSelf='center'
      >
        {initialBoard.map((_, index) => (
          <Square
            key={uuidv4()}
            index={index}
          />
        ))}
      </Box>
    </Box>
  );
};

Main.propTypes = {
  initialBoard: PropTypes.array.isRequired,
};

export default Main;
