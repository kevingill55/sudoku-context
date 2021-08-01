// © Copyright 2021 KMG: Sudoku
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'grommet';

const ModalButton = ({ label, onClick }) => (
  <Box 
    justify='center'
    width='small'
    border
  >
    <Button
      color='accent-4'
      primary
      label={label}
      onClick={onClick}
      style={{ color: 'black', borderRadius: '0' }}
    />
  </Box>
);

ModalButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ModalButton;
