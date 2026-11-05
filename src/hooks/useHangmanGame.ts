import { useCallback, useMemo, useState } from 'react'
import { MAX_ERRORS, WORD_BANK, type WordEntry } from '../data/words'

export type GameStatus = 'playing' | 'won' | 'lost'

const pickWord = (current?: string): WordEntry => {
  const candidates = current ? WORD_BANK.filter((entry) => entry.word !== current) : WORD_BANK
  return candidates[Math.floor(Math.random() * candidates.length)] ?? WORD_BANK[0]
}

export function useHangmanGame() {
  const [currentWord, setCurrentWord] = useState<WordEntry>(() => pickWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const wrongGuesses = useMemo(
    () => guessedLetters.filter((letter) => !currentWord.word.includes(letter)),
    [currentWord.word, guessedLetters],
  )

  const isSolved = useMemo(
    () => currentWord.word.split('').every((letter) => guessedLetters.includes(letter)),
    [currentWord.word, guessedLetters],
  )

  const status: GameStatus = isSolved ? 'won' : wrongGuesses.length >= MAX_ERRORS ? 'lost' : 'playing'

  const guessLetter = useCallback(
    (letter: string) => {
      const normalizedLetter = letter.toUpperCase()
      if (status !== 'playing' || guessedLetters.includes(normalizedLetter)) return
      setGuessedLetters((previous) => [...previous, normalizedLetter])
    },
    [guessedLetters, status],
  )

  const newGame = useCallback(() => {
    setCurrentWord((previous) => pickWord(previous.word))
    setGuessedLetters([])
  }, [])

  return {
    currentWord,
    guessedLetters,
    wrongGuesses,
    errors: wrongGuesses.length,
    status,
    guessLetter,
    newGame,
  }
}
