import { BoardCell } from './components/BoardCell';
import { useGameContext } from '@hooks/useGameContext';

export const Board = () => {
  const { board } = useGameContext();
  let show = true;
  return show ? (
    <div className="flex rounded-3xl bg-teal-100 p-5 shadow-lg dark:bg-teal-800 md:p-8">
      <div
        style={{
          gridTemplateColumns: `repeat(6, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(6, minmax(0, 1fr))`,
        }}
        className="grid gap-3 md:gap-5"
      >
        {board.state.map((item, index) => (
          <BoardCell
            key={`${item}-${index}`}
            item={item}
            onClick={() => board.setItemActive(index)}
          />
        ))}
      </div>
    </div>
  ) : null;
};
