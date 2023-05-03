import { Cell } from '@types';
import { createContext } from 'react';

export const GameContext = createContext<{
  board: {
    state: Cell[];
    setItemActive: (index: number) => void;
  };
  startGame: () => void;
  score: number;
} | null>(null);
