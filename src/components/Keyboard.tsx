import { Check, X } from 'lucide-react'
import { ALPHABET } from '../data/words'
import type { GameStatus } from '../hooks/useHangmanGame'

type KeyboardProps = {
  guessedLetters: string[]
  targetWord: string
  status: GameStatus
  onGuess: (letter: string) => void
}

export function Keyboard({ guessedLetters, targetWord, status, onGuess }: KeyboardProps) {
  return (
    <section aria-labelledby="keyboard-title">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <p className="eyebrow">Tu turno</p>
          <h2 id="keyboard-title" className="mt-1 text-base font-bold text-primary">Elige una letra</h2>
        </div>
        <p className="text-right text-[11px] font-medium text-muted">También puedes usar tu teclado</p>
      </div>

      <div className="keyboard-grid">
        {ALPHABET.map((letter) => {
          const isGuessed = guessedLetters.includes(letter)
          const isCorrect = isGuessed && targetWord.includes(letter)
          const isWrong = isGuessed && !isCorrect
          return (
            <button
              key={letter}
              type="button"
              onClick={() => onGuess(letter)}
              disabled={isGuessed || status !== 'playing'}
              className={`key-button ${isCorrect ? 'key-correct' : ''} ${isWrong ? 'key-wrong' : ''}`}
              aria-label={`Letra ${letter}${isCorrect ? ', correcta' : isWrong ? ', incorrecta' : ''}`}
            >
              {letter}
              {isCorrect && <Check size={11} strokeWidth={3} />}
              {isWrong && <X size={11} strokeWidth={3} />}
            </button>
          )
        })}
      </div>
    </section>
  )
}
