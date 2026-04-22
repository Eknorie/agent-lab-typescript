import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight hover:scale-105 active:scale-95 backdrop-blur-sm';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'text-white border-transparent'
      : 'text-white border-transparent'
    : 'bg-glass-bg border-glass-border text-gray-700 hover:bg-glass-bg-strong';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  const backgroundStyle = square.isMarked
    ? isWinning
      ? { background: 'var(--gradient-bingo)' }
      : { background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }
    : {};

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      style={backgroundStyle}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-white text-xs drop-shadow">✓</span>
      )}
    </button>
  );
}
