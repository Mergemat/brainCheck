import { useBoard } from '@components/Board/hooks/useBoard';
import {
  defaultState,
  getNewTasks,
} from '@components/Board/hooks/useBoard.utils';
import { Cell } from '@types';
import { useEffect, useState } from 'react';

export const useGame = () => {
  const [size, setSize] = useState<number>(4);
  const [score, setScore] = useState<number>(0);
  const { board, setBoard } = useBoard();
  const [progress, setProgress] = useState<number>(0);
  const [task, setTask] = useState<Cell[]>(getNewTasks(size));
  const [isShowing, setIsShowing] = useState(false);

  const set = () => {
    setTask(getNewTasks(size));
    setTimeout(() => {
      setBoard(defaultState());
    }, 200);
    setTimeout(() => {
      startGame();
    }, 400)
  };

  useEffect(() => {
    if (size == 4) {
      return;
    }
    set();
  }, [size]);

  useEffect(() => {
    if (progress == size && board.filter((item) => item.error).length == 0) {
      setScore((prev) => prev + 1);
    }
  }, [progress]);

  useEffect(() => {
    if (score == 0) {
      return;
    }
    if (score % 4 == 0) {
      setSize((prev) => prev + 1);
    } else {
      set();
    }
  }, [score]);

  const setItemActive = (index: number) => {
    const prev = board;
    if (task[index].active == true) {
      prev[index].active = true;
    } else {
      prev[index].error = true;
    }
    setBoard([...prev]);
    setProgress((prev) => prev + 1);
  };

  const startGame = () => {
    setProgress(0);
    setIsShowing(true);

    setTimeout(() => {
      setIsShowing(false);
    }, 1000);
  };

  return {
    board: {
      state: isShowing ? task : board,
      setItemActive: isShowing ? () => {} : setItemActive,
    },
    startGame,
    score,
  };
};
