import { Board } from '@components';
import { useGame } from '@hooks/useGame';
import { motion } from 'framer-motion';

const App = () => {
  const { boardInstance, gameInstance } = useGame();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-teal-50">
      <motion.h1
        initial={{ scale: 0.4 }}
        animate={{ scale: 1 }}
        className="text-4xl font-semibold tracking-wide text-teal-900"
      >
        {/* {isPlaying && 'playing'}
        {done && 'done'}
        {wrong && 'wrong'} */}
        {gameInstance.score}
      </motion.h1>
      <Board
        board={boardInstance.board}
        setItemActive={boardInstance.setItemActive}
      />
      <motion.button
        onClick={gameInstance.startGame}
        whileTap={{ scale: 0.9 }}
        className="mt-7 flex rounded-2xl bg-teal-100 p-5 text-4xl font-semibold tracking-wide text-teal-900 shadow-lg"
        disabled={gameInstance.isPlaying}
      >
        start game
      </motion.button>
    </div>
  );
};

export default App;
