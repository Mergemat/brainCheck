import { Cell } from '@types';
import { motion } from 'framer-motion';
import React from 'react';

type Props = { item: Cell; onClick: () => void };

export const BoardCell = ({ item, onClick }: Props) => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className={`h-12 w-12 rounded-xl md:h-16 md:w-16 ${
        item.active
          ? 'bg-teal-500 dark:bg-teal-200'
          : 'bg-teal-200 dark:bg-teal-500'
      } ${item.error && 'bg-rose-400 dark:bg-rose-300'}`}
      onClick={onClick}
      disabled={item.active || item.error}
    ></motion.button>
  );
};
