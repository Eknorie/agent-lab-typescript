import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full" style={{ background: 'var(--gradient-background)' }}>
      {/* Header */}
      <header className="flex items-center justify-between p-3 backdrop-blur-md border-b" style={{ background: 'var(--color-glass-bg)', borderColor: 'var(--color-glass-border)', boxShadow: 'var(--color-glass-shadow)' }}>
        <button
          onClick={onReset}
          className="text-gray-500 text-sm px-3 py-1.5 rounded active:scale-95 transition-all duration-150"
        >
          ← Back
        </button>
        <h1 className="font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-gray-500 text-sm py-2 px-4 backdrop-blur-sm" style={{ background: 'var(--color-glass-bg-strong)' }}>
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="backdrop-blur-md text-center py-2 font-semibold text-sm border-y" style={{ background: 'var(--gradient-bingo)', color: 'white', borderColor: 'var(--color-glass-border)' }}>
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
