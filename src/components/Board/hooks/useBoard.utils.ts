import { Cell } from '@types';
import { getRandomInt } from '@utils';

export const getNewTasks = (size: number) => {
  const tempTasks: number[] = [];
  const template = defaultState();
  for (let i = 0; i < size ; i++) {
    let next_num = getRandomInt(0, size * size - 1);
    while (tempTasks.indexOf(next_num) !== -1) {
      next_num = getRandomInt(0, size * size - 1);
    }
    tempTasks.push(next_num);
  }

  tempTasks.forEach((i) => (template[i].active = true));
  return template;
};

export const defaultState = (): Cell[] => {
  return Array(36)
    .fill(0)
    .map(() => ({ active: false, error: false }));
};
