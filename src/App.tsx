import { Board } from '@components';
import { useGame } from '@hooks/useGame';
import { motion } from 'framer-motion';

const App = () => {
  const { boardInstance, gameInstance } = useGame();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-teal-50 dark:bg-teal-900">
      <motion.h1
        initial={{ scale: 0.4 }}
        animate={{ scale: 1 }}
        className="mb-7 text-4xl font-semibold tracking-wide text-teal-900 dark:text-teal-50"
      >
        {gameInstance.score}
      </motion.h1>
      <Board
        board={boardInstance.board}
        setItemActive={boardInstance.setItemActive}
      />
      <motion.button
        onClick={gameInstance.startGame}
        whileTap={{ scale: 0.9 }}
        className="mt-7 flex rounded-2xl bg-teal-100 p-5 text-4xl font-semibold tracking-wide text-teal-900 shadow-lg dark:bg-teal-800 dark:text-teal-50"
        disabled={gameInstance.isPlaying}
      >
        start game
      </motion.button>
    </div>
  );
};

export default App;
