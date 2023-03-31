import { ICell } from '@types';
import { motion } from 'framer-motion';
import { Cell } from './components/Cell';

type Props = { board: ICell[]; setItemActive: (index: number) => void };

export const Board = ({ board, setItemActive }: Props) => {
  return (
    <div className="flex rounded-3xl bg-teal-100 p-5 shadow-lg dark:bg-teal-800 md:p-10">
      <div
        style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}
        className="grid grid-rows-5 gap-3 md:gap-6"
      >
        {board.map((item, index) => (
          <Cell
            key={`${item}-${index}`}
            item={item}
            onClick={() => setItemActive(index)}
          />
        ))}
      </div>
    </div>
  );
};
