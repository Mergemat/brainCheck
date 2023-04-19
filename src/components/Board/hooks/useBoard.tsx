import { Cell } from '@types';
import { useState } from 'react';
import { defaultState } from './useBoard.utils';

export const useBoard = () => {
  const [board, setBoard] = useState<Cell[]>(defaultState());

  return { board, setBoard };
};
