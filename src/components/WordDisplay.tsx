import { BookOpen, Eye, EyeOff, MessageCircleQuestion } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { GameStatus } from '../hooks/useHangmanGame'
import type { WordEntry } from '../data/words'

type WordDisplayProps = {
  currentWord: WordEntry
  guessedLetters: string[]
  status: GameStatus
}

export function WordDisplay({ currentWord, guessedLetters, status }: WordDisplayProps) {
  const [showTranslation, setShowTranslation] = useState(false)
  const revealWord = status !== 'playing'

  useEffect(() => {
    setShowTranslation(false)
  }, [currentWord.word])

  return (
    <section className="surface-card rounded-[28px] border border-subtle p-5 sm:p-7" aria-labelledby="current-word-title">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">English challenge</p>
          <h2 id="current-word-title" className="mt-2 font-display text-2xl font-bold tracking-tight text-primary sm:text-[28px]">Answer the question</h2>
        </div>
        <span className="category-pill">{currentWord.category}</span>
      </div>

      <div className="question-box">
        <div className="question-icon"><MessageCircleQuestion size={18} /></div>
        <p className="question-copy">{currentWord.question}</p>
      </div>

      <button
        type="button"
        className="translation-toggle"
        onClick={() => setShowTranslation((visible) => !visible)}
        aria-expanded={showTranslation}
        aria-controls="question-translation"
      >
        {showTranslation ? <EyeOff size={14} /> : <Eye size={14} />}
        {showTranslation ? 'Hide Spanish translation' : 'Show Spanish translation'}
      </button>

      <div id="question-translation" className={`translation-reveal ${showTranslation ? 'translation-reveal-visible' : ''}`} aria-hidden={!showTranslation}>
        <BookOpen size={15} className="shrink-0 text-cyan-300" />
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">Traducción de la pregunta</p>
          <p className="mt-1 text-sm font-semibold leading-5 text-primary">{currentWord.questionTranslation}</p>
        </div>
      </div>

      <div className="word-slots" aria-label={revealWord ? currentWord.word : 'Hidden word'}>
        {currentWord.word.split('').map((letter, index) => {
          const isVisible = revealWord || guessedLetters.includes(letter)
          return (
            <span key={`${letter}-${index}`} className={`word-slot ${isVisible ? 'word-slot-visible' : ''}`}>
              {isVisible ? letter : ''}
            </span>
          )
        })}
      </div>

      <p className="mt-4 flex items-center gap-2 text-xs font-medium text-muted">
        <span className="question-tip-dot" /> The answer is a technical term from your glossary.
      </p>
    </section>
  )
}
