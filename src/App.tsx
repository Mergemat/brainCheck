import { Board } from '@components';
import { useBoard } from '@components/Board/hooks/useBoard';
import {
  defaultState,
  getNewTasks,
} from '@components/Board/hooks/useBoard.utils';
import { useGame } from '@hooks/useGame';
import { Cell } from '@types';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

const aCountdown = () => {
  return (
    <Countdown
      className=""
      date={Date.now() + 3000}
      renderer={(props) => (
        <p className="text-4xl font-semibold tracking-wide text-teal-900 dark:bg-teal-800 dark:text-teal-50">
          {props.total / 1000}
        </p>
      )}
    />
  );
};

const App = () => {
  const { board, startGame, score } = useGame();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-teal-50 dark:bg-teal-900">
      <motion.h1
        initial={{ scale: 0.4 }}
        animate={{ scale: 1 }}
        className="mb-7 text-4xl font-semibold tracking-wide text-teal-900 dark:text-teal-50"
      >
        {score}
      </motion.h1>

      <Board board={board} show={true} />

      <motion.button
        onClick={startGame}
        whileTap={{ scale: 0.9 }}
        className={`mt-7 flex rounded-2xl bg-teal-100 p-5 px-6 text-4xl font-semibold tracking-wide text-teal-900 shadow-lg dark:bg-teal-800 dark:text-teal-50`}
      >
        start game
      </motion.button>
    </div>
  );
};

export default App;
