// © Copyright 2021 KMG: Sudoku
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button } from 'grommet';
import { FormClose } from 'grommet-icons';

const ModalHeader = ({ title, onClick }) => {
  return (
    <Box
      direction='row'
      align='center'
      justify='end'
      fill='horizontal'
      margin={{ bottom: 'small' }}
      pad='small'
    >
      <Box width='40px' />
      <Box
        alignSelf='center'
        fill
      >
        <Text
          size='large'
          weight={300}
          textAlign='center'
        >
          {title}
        </Text>
      </Box>
      <Box
        align='end'
        width='40px'
      >
        <Button
          plain={true}
          onClick={onClick}
          icon={<FormClose color='black' />}
        />
      </Box>
    </Box>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ModalHeader;
