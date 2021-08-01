// © Copyright 2021 KMG: Sudoku
import React from 'react';
import { Spinner, Box, Text } from 'grommet';

const Loading = () => {
  return (
    <Box
      fill={true}
      justify='center'
      align='center'
      pad='xlarge'
      gap='medium'
    >
      <Spinner
        size='medium'
        style={{
          borderLeft: '3px solid black',
          borderRight: '3px solid black',
          borderTop: '3px solid black',
          borderBottom: '3px solid transparent',
        }}
      />
      <Text
        color='black'
        size='xlarge'
        weight={300}
      >
        Loading
      </Text>
    </Box>
  );
};

export default Loading;
