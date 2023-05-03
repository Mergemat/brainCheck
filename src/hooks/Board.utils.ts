import { getRandomInt } from '@utils';

export const getNewTasks = (size: number) => {
  const tempTasks: number[] = [];
  const template = defaultBoardState();
  for (let i = 0; i < size; i++) {
    let next_num = getRandomInt(0, 35);
    while (tempTasks.indexOf(next_num) !== -1) {
      next_num = getRandomInt(0, 35);
    }
    tempTasks.push(next_num);
  }

  tempTasks.forEach((i) => (template[i].active = true));
  return template;
};

export const defaultBoardState = () => {
  return new Array(36).fill(0).map(() => ({ active: false, error: false }));
};
