import { CheckCircle2, RotateCcw, Trophy, XCircle } from 'lucide-react'
import type { GameStatus } from '../hooks/useHangmanGame'
import type { WordEntry } from '../data/words'

type GameStatusProps = {
  status: GameStatus
  currentWord: WordEntry
  onNewGame: () => void
}

export function GameStatus({ status, currentWord, onNewGame }: GameStatusProps) {
  if (status === 'playing') {
    return (
      <div className="status-callout status-playing" role="status">
        <div className="status-icon"><Trophy size={17} /></div>
        <div>
          <p className="text-sm font-bold text-primary">Encuentra todas las letras</p>
          <p className="mt-0.5 text-xs text-muted">Cada acierto revela una pieza del vocabulario.</p>
        </div>
      </div>
    )
  }

  const won = status === 'won'
  return (
    <div className={`status-callout ${won ? 'status-won' : 'status-lost'}`} role="alert">
      <div className="status-icon">{won ? <CheckCircle2 size={19} /> : <XCircle size={19} />}</div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-primary">{won ? '¡Excelente trabajo!' : 'La partida terminó'}</p>
        <p className="mt-0.5 text-xs text-secondary">
          {won ? `Descubriste ${currentWord.word}: ${currentWord.translation}.` : `La respuesta era ${currentWord.word}. ¡Inténtalo de nuevo!`}
        </p>
      </div>
      <button type="button" onClick={onNewGame} className="new-game-button">
        <RotateCcw size={14} />
        Nueva partida
      </button>
    </div>
  )
}
