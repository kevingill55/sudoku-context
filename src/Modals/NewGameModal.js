// © Copyright 2021 KMG: Sudoku
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { Box, Layer } from 'grommet';
import chunk from 'lodash/fp/chunk';
import axios from 'axios';
import ModalButton from './ModalButton';
import ModalHeader from './ModalHeader';
import Loading from '../Loading';
import { useBoardContext } from '../context';
import { getBoard, getSolution, getInitialBoardIndices } from '../utils';

const onNewGame = ({ queryClient, resetContext, setLoading }) => async (difficulty) => {
  setLoading(true);
  const formattedBoard = await getBoard(difficulty);
  const indices = getInitialBoardIndices(formattedBoard);
  queryClient.setQueryData('board', formattedBoard);
  resetContext(formattedBoard, indices);
  const formattedSolution = await getSolution(formattedBoard);
  queryClient.setQueryData('solution', formattedSolution);
};

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
            >
              <ModalHeader title='Select a difficulty' onClick={() => toggleNewGame(false)} />
              <ModalButton label='Easy' onClick={() => newGame('easy')} />
              <ModalButton label='Medium' onClick={() => newGame('medium')} />
              <ModalButton label='Hard' onClick={() => newGame('hard')} />
            </Box>
        )}
      </Box>
    </Layer>
  );
};

export default NewGameModal;
