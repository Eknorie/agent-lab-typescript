interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
      <div className="backdrop-blur-md rounded-xl p-6 max-w-xs w-full text-center shadow-2xl animate-[bounce_0.5s_ease-out] border-2" style={{ background: 'var(--color-glass-bg-strong)', borderImage: 'var(--gradient-bingo) 1', boxShadow: 'var(--color-glass-shadow)' }}>
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', background: 'var(--gradient-bingo)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>BINGO!</h2>
        <p className="text-gray-600 mb-6">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full font-semibold py-3 px-6 rounded-lg active:scale-95 transition-all duration-150 backdrop-blur-sm border" 
          style={{ background: 'var(--gradient-primary)', color: 'white', borderColor: 'var(--color-glass-border)' }}
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
