import React, { memo } from 'react';
import { Board } from '@components';
import { GameContext } from '@components/Game/Game.context';
import { useGame } from '@hooks/useGame';
import { motion } from 'framer-motion';
type Props = {};

const Game = memo((props: Props) => {
  const context = useGame();
  return (
    <GameContext.Provider value={context}>
      <motion.h1
        initial={{ scale: 0.4 }}
        animate={{ scale: 1 }}
        className="mb-7 text-4xl font-semibold tracking-wide text-teal-900 dark:text-teal-50"
      >
        {context.score}
      </motion.h1>

      <Board />

      <motion.button
        onClick={context.startGame}
        whileTap={{ scale: 0.9 }}
        className={`mt-7 flex rounded-2xl bg-teal-100 p-5 px-6 text-4xl font-semibold tracking-wide text-teal-900 shadow-lg dark:bg-teal-800 dark:text-teal-50`}
      >
        start game
      </motion.button>
    </GameContext.Provider>
  );
});

export default Game;
