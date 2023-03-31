import { ICell } from '@types';
import { getRandomInt, removeItem } from '@utils';
import { useEffect, useState } from 'react';

export const useBoard = () => {
  const defBoard = Array(25)
    .fill(0)
    .map(() => ({ active: false, error: false }));

  const [board, setBoard] = useState<ICell[]>([...defBoard]);
  const [tasks, setTasks] = useState<number[]>([]);

  const setItemActive = (index: number) => {
    const prev = [...board];
    if (tasks.includes(index)) {
      prev[index].active = true;
      setTasks((prev) => {
        removeItem<number>(prev, index);
        return [...prev];
      });
    } else {
      prev[index].error = true;
    }

    setBoard(prev);
  };

  const clearBoard = () => setBoard([...defBoard]);

  const shuffle = () => {
    clearBoard();
    const cloneMat = [...defBoard];
    const tempTasks: number[] = [];

    for (let i = 0; i < 4; i++) {
      let next_num = getRandomInt(0, cloneMat.length - 1);
      while (tempTasks.indexOf(next_num) !== -1) {
        next_num = getRandomInt(0, cloneMat.length - 1);
      }
      tempTasks.push(next_num);
    }

    tempTasks.forEach((a) => (cloneMat[a].active = true));
    setTasks(tempTasks);
    setBoard([...cloneMat]);

    setTimeout(() => {
      setBoard(
        Array(25)
          .fill(0)
          .map(() => ({ active: false, error: false }))
      );
    }, 1500);
  };

  return { board, setItemActive, shuffle, tasks, clearBoard };
};
