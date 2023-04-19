import { Cell } from '@types';
import { motion } from 'framer-motion';
import { BoardCell } from './components/BoardCell';

type Props = {
  board: {
    state: Cell[];
    setItemActive: (index: number) => void;
  };
  show: boolean;
};

export const Board = ({ board, show }: Props) => {
  const { state, setItemActive } = board;
  return show ? (
    <div className="flex rounded-3xl bg-teal-100 p-5 shadow-lg dark:bg-teal-800 md:p-10">
      <div
        style={{
          gridTemplateColumns: `repeat(6, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(6, minmax(0, 1fr))`,
        }}
        className="grid gap-3 md:gap-6"
      >
        {state.map((item, index) => (
          <BoardCell
            key={`${item}-${index}`}
            item={item}
            onClick={() => setItemActive(index)}
          />
        ))}
      </div>
    </div>
  ) : null;
};
