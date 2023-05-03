import { Cell } from '@types';
import { createContext } from 'react';

export const GameContext = createContext<{
  board: {
    state: Cell[];
    setItemActive: (index: number) => void;
    size: number;
  };
  startGame: () => void;
  score: number;
  isPlaying: boolean;
} | null>(null);
