// © Copyright 2021 KMG: Sudoku

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

const TitleButton = ({ label, onClick }) => (
  <Box
    hoverIndicator={{ color: 'light-2' }}
    onClick={onClick}
    flex={false}
    align='center'
    border={{ color: 'black' }}
    pad='small'
  >
    <Text size='small' color='black'>{label}</Text>
  </Box>
);

TitleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default TitleButton;
