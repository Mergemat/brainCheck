import { useBoard } from '@components/Board/hooks/useBoard';
import { useEffect, useState } from 'react';

export const useGame = () => {
  const { board, setItemActive, tasks, clearBoard, shuffle } = useBoard();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (done == true) {
      setScore((prev) => prev + 1);
      setTimeout(() => {
        setIsPlaying(true);
        setDone(false);
        setWrong(false);
        shuffle();
      }, 700);
    }
  }, [done]);

  useEffect(() => {
    if (board.filter((cell) => cell.error).length) {
      setWrong(true);
      setIsPlaying(false);
    }
  }, [board]);

  useEffect(() => {
    if (tasks.length == 0 && isPlaying == true) {
      setDone(true);
      setIsPlaying(false);
      setTimeout(() => {
        clearBoard();
      }, 400);
    }
  }, [tasks]);

  const startGame = () => {
    setIsPlaying(true);
    setDone(false);
    setWrong(false);
    shuffle();
  };

  return {
    boardInstance: { board, setItemActive },
    gameInstance: { startGame, score },
  };
};
