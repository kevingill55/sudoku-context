// © Copyright 2021 KMG: Sudoku
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'grommet';

const ModalButton = ({ label, onClick }) => (
  <Box 
    justify='center'
    width='small'
    border={{ color: 'black' }}
  >
    <Button
      color='app'
      primary={true}
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
