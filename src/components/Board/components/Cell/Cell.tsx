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
      style={{
        background: item.active
          ? 'rgb(45 212 191)'
          : item.error
          ? 'rgb(251 113 133)'
          : 'rgb(153 246 228)',
      }}
      className="w-12 h-12 md:h-24 md:w-24 rounded-xl"
      onClick={onClick}
      disabled={item.active || item.error}
    ></motion.button>
  );
};
