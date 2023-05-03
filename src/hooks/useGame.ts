import { useBoard } from '@components/Board/hooks/useBoard';
import {
  defaultBoardState,
  getNewTasks,
} from '@components/Board/hooks/useBoard.utils';
import { Cell } from '@types';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useGame = () => {
  const [size, setSize] = useState<number>(4);
  const [score, setScore] = useState<number>(0);

  const [board, setBoard] = useState<Cell[]>(
    new Array(36).fill(0).map(() => ({ active: false, error: false }))
  );
  const [progress, setProgress] = useState<number>(0);
  const task = useMemo(() => getNewTasks(size), [size, score]);
  const [isShowing, setIsShowing] = useState(false);

  const increaseScore = useCallback(() => setScore((prev) => prev + 1), []);
  const increaseSize = useCallback(() => setSize((prev) => prev + 1), []);

  const set = useCallback(() => {
    setTimeout(() => {
      setBoard(defaultBoardState());
      setTimeout(() => {
        startGame();
      }, 400);
    }, 200);
  }, [size, defaultBoardState()]);

  useEffect(() => {
    if (progress == size && board.filter((item) => item.error).length == 0) {
      increaseScore();
    }
  }, [progress]);

  useEffect(() => {
    if (score == 0) {
      return;
    }
    if (score % 4 == 0) {
      increaseSize();
    }
    set();
  }, [score]);

  const setItemActive = useCallback(
    (index: number) => {
      setBoard((board) => {
        const prev = board;
        if (task[index].active == true) {
          prev[index].active = true;
        } else {
          prev[index].error = true;
        }
        return prev;
      });

      setProgress((prev) => prev + 1);
    },
    [board, defaultBoardState]
  );

  const startGame = useCallback(() => {
    setProgress(0);
    setIsShowing(true);
    setTimeout(() => {
      setIsShowing(false);
    }, 1000);
  }, [size]);

  return {
    board: {
      state: isShowing ? task : board,
      setItemActive: isShowing ? () => {} : setItemActive,
      size,
    },
    startGame,
    score,
  };
};
