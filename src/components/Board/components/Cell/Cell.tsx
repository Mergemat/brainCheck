import { ICell } from '@types';
import { motion } from 'framer-motion';
import React from 'react';

type Props = { item: ICell; onClick: () => void };

export const Cell = ({ item, onClick }: Props) => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className={`h-12 w-12 rounded-xl md:h-24 md:w-24 ${
        item.active
          ? 'bg-teal-500 dark:bg-teal-200'
          : 'bg-teal-200 dark:bg-teal-500'
      } ${item.error && 'bg-rose-400 dark:bg-rose-300'}`}
      onClick={onClick}
      disabled={item.active || item.error}
    ></motion.button>
  );
};
