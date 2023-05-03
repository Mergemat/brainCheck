import { defaultBoardState, getNewTasks } from '@hooks/Board.utils';
import { Cell } from '@types';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useGame = () => {
  const [size, setSize] = useState<number>(4);
  const [score, setScore] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const [isShowing, setIsShowing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [board, setBoard] = useState<Cell[]>(
    new Array(36).fill(0).map(() => ({ active: false, error: false }))
  );

  const increaseScore = useCallback(() => setScore((prev) => prev + 1), []);
  const increaseSize = useCallback(() => setSize((prev) => prev + 1), []);

  const task = useMemo(() => getNewTasks(size), [size, score]);

  const set = useCallback(() => {
    setTimeout(() => {
      setBoard(defaultBoardState());
      setTimeout(() => {
        prepareAndShow();
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
          setIsPlaying(false);
        }
        return prev;
      });

      setProgress((prev) => prev + 1);
    },
    [board, defaultBoardState]
  );

  const prepareAndShow = useCallback(() => {
    setProgress(0);
    setIsShowing(true);
    setTimeout(() => {
      setIsShowing(false);
    }, 1000);
  }, []);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0)
    setBoard(defaultBoardState());
    prepareAndShow();
  };

  return {
    board: {
      state: isShowing ? task : board,
      setItemActive: isShowing ? () => {} : setItemActive,
      size,
    },
    startGame,
    score,
    isPlaying,
  };
};
