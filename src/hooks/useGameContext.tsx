import { GameContext } from '@components/Game/Game.context';
import { useContext } from 'react';

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('called GameContext without passed value');
  }
  return context;
}
