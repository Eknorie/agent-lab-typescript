interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6" style={{ background: 'var(--gradient-background)' }}>
      <div className="text-center max-w-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-fade-in-up" style={{ fontFamily: 'var(--font-display)', animationDelay: '0.1s' }}>Bingo Mixer</h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Find your people!</p>
        
        <div className="backdrop-blur-md rounded-lg p-6 shadow-lg border mb-8 animate-fade-in-up" style={{ background: 'var(--color-glass-bg)', borderColor: 'var(--color-glass-border)', boxShadow: 'var(--color-glass-shadow)', animationDelay: '0.5s' }}>
          <h2 className="font-semibold text-gray-800 mb-3">How to play</h2>
          <ul className="text-left text-gray-600 text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full font-semibold py-4 px-8 rounded-lg text-lg active:scale-95 transition-all duration-150 backdrop-blur-sm border animate-fade-in-up" 
          style={{ background: 'var(--gradient-primary)', color: 'white', borderColor: 'var(--color-glass-border)', animationDelay: '0.7s' }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
