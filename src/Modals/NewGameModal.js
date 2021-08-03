// © Copyright 2021 KMG: Sudoku

import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { Box, Layer } from 'grommet';
import ModalButton from './ModalButton';
import ModalHeader from './ModalHeader';
import { onNewGame } from './utils';
import Loading from '../Loading';
import { DIFFICULTIES } from '../constants';
import { useBoardContext } from '../context';

const NewGameModal = () => {
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const { toggleNewGame, resetContext } = useBoardContext();
  const newGame = onNewGame({ queryClient, resetContext, setLoading });
  return (
    <Layer>
      <Box
        width='medium'
        align='center'
        justify='center'
        fill={true}
        pad={{ bottom: 'medium' }}
      >
        {
          loading ? <Loading /> : (
            <Box
              fill={true}
              gap='small'
              align='center'
              justify='center'
              pad='small'
            >
              <ModalHeader title='Select a difficulty' onClick={() => toggleNewGame(false)} />
              <ModalButton label='Easy' onClick={() => newGame(DIFFICULTIES.EASY)} />
              <ModalButton label='Medium' onClick={() => newGame(DIFFICULTIES.MEDIUM)} />
              <ModalButton label='Hard' onClick={() => newGame(DIFFICULTIES.HARD)} />
            </Box>
        )}
      </Box>
    </Layer>
  );
};

export default NewGameModal;
