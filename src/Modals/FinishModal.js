// © Copyright 2021 KMG: Sudoku
import React, { useState, useEffect } from 'react';
import { Box, Text, Layer } from 'grommet';
import { useQueryClient } from 'react-query';
import { useBoardContext } from '../context';
import ModalButton from './ModalButton';
import ModalHeader from './ModalHeader';
import Loading from '../Loading';

const onYes = ({ toggleFinish, toggleNewGame }) => {
  toggleFinish(false);
  toggleNewGame(true);
};

const onNo = ({ toggleFinish }) => toggleFinish(false);

const solvePuzzle = ({ queryClient, setLoading, setSuccess, board }) => {
  const solution = queryClient.getQueryData('solution');
  setLoading(false);
  return JSON.stringify(board) == (JSON.stringify(solution)) ? setSuccess(true) : setSuccess(false);
};

const FinishModal = () => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const { board, toggleFinish, toggleNewGame } = useBoardContext();
  useEffect(() => {
    solvePuzzle({ queryClient, setLoading, setSuccess, board });
    setLoading(false);
  }, []);
  return (
    <Layer>
      <Box
        width='medium'
        align='center'
        pad={{ bottom: 'medium' }}
        gap='small'
      >
        {loading ? <Loading /> : (
          <Box
            fill={true}
            align='center'
            gap='small'
          >
            {
              success
                ? (
                  <Box
                    fill={true}
                    pad='small'
                    align='center'
                    gap='small'
                  >
                    <ModalHeader title='Nice job! Play again?' onClick={() => toggleFinish(false)} />
                    <ModalButton label='Yes' onClick={() => onYes({ toggleFinish, toggleNewGame })} />
                    <ModalButton label='No' onClick={() => onNo({ toggleFinish })} />
                  </Box>
                )
                : (
                  <Box
                    fill={true}
                    pad='small'
                    align='center'
                  >
                    <ModalHeader title='Not quite, keep trying!' onClick={() => toggleFinish(false)} />
                    <Text
                      color='black'
                      weight={300}
                      textAlign='center'
                    >
                      There appear to be a few mistakes in your board.
                    </Text>
                  </Box>
                )
            }
          </Box>
        )}
      </Box>
    </Layer>
  );
};

export default FinishModal;
