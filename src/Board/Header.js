// © Copyright 2021 KMG: Sudoku

import React from 'react';
import { Box, Text } from 'grommet';
import { Bookmark } from 'grommet-icons';

const Header = () => {
  return (
    <Box
      direction='row'
      pad={{ horizontal: 'large', vertical: 'small' }}
      border={{ side: 'bottom' }}
      fill='horizontal'
      gap='xsmall'
      align='center'
    >
      <Bookmark
        size='medium'
        color='black'
      />
      <Text
        color='black'
        weight={300}
        size='large'
      >
        Sudoku
      </Text>
    </Box>
  );
};

export default Header;
