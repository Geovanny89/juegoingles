import { useEffect, useState } from 'react'
import { ArrowRight, Braces, RotateCcw, Sparkles } from 'lucide-react'
import { Header } from './components/Header'
import { HangmanFigure } from './components/HangmanFigure'
import { WordDisplay } from './components/WordDisplay'
import { Keyboard } from './components/Keyboard'
import { GameStatus } from './components/GameStatus'
import { HowToPlay } from './components/HowToPlay'
import { useHangmanGame } from './hooks/useHangmanGame'

function App() {
  const [isLight, setIsLight] = useState(false)
  const game = useHangmanGame()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (/^[a-zA-Z]$/.test(event.key)) game.guessLetter(event.key.toUpperCase())
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [game.guessLetter])

  return (
    <div className={`app-shell ${isLight ? 'light-theme' : ''}`}>
      <div className="ambient-glow ambient-glow-one" />
      <div className="ambient-glow ambient-glow-two" />
      <Header isLight={isLight} onToggleTheme={() => setIsLight((current) => !current)} />

      <main className="relative mx-auto w-full max-w-[1240px] px-5 pb-12 sm:px-8 lg:px-10 lg:pb-16">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="hero-kicker"><Sparkles size={13} /> Práctica inteligente para devs</div>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.98] tracking-[-0.055em] text-primary">
              Domina el vocabulario<span className="text-gradient">.</span><br />Salva la partida<span className="text-gradient">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-secondary sm:text-lg">
              Aprende 10 conceptos esenciales de tecnología en inglés jugando una partida rápida y visual. Cada letra te acerca a la respuesta.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <div className="hero-stat"><Braces size={16} /><span><strong>10</strong> conceptos</span></div>
              <div className="hero-stat"><span className="stat-dot stat-dot-cyan" /><span><strong>6</strong> intentos</span></div>
              <div className="hero-stat"><span className="stat-dot stat-dot-purple" /><span>ES / EN</span></div>
            </div>
          </div>
          <div className="hero-note hidden lg:block">
            <p className="eyebrow">Misión de hoy</p>
            <p className="mt-3 text-sm font-semibold leading-6 text-primary">Piensa como una máquina.<br />Aprende como una persona.</p>
            <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-cyan-300">Comenzar reto <ArrowRight size={14} /></div>
          </div>
        </section>

        <section className="game-layout mt-10 lg:mt-14">
          <div className="min-w-0">
            <HangmanFigure errors={game.errors} status={game.status} />
          </div>
          <div className="min-w-0 space-y-5">
            <WordDisplay currentWord={game.currentWord} guessedLetters={game.guessedLetters} status={game.status} />
            <GameStatus status={game.status} currentWord={game.currentWord} onNewGame={game.newGame} />
            <Keyboard guessedLetters={game.guessedLetters} targetWord={game.currentWord.word} status={game.status} onGuess={game.guessLetter} />
          </div>
        </section>

        <section className="bottom-grid mt-5 lg:mt-6">
          <HowToPlay />
          <div className="surface-card flex flex-col justify-between rounded-[24px] border border-subtle p-5 sm:p-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="eyebrow">Partida en curso</p>
                <h2 className="mt-1 text-base font-bold text-primary">Tu progreso se queda aquí</h2>
              </div>
              <div className="small-icon small-icon-purple"><RotateCcw size={16} /></div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-secondary">No necesitas iniciar sesión ni configurar nada. Pulsa nueva partida cuando quieras cambiar de reto y sigue ampliando tu glosario.</p>
            <button type="button" onClick={game.newGame} className="secondary-action mt-5 self-start">
              <RotateCcw size={14} /> Cambiar palabra
            </button>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-[1240px] items-center justify-between border-t border-subtle px-5 py-6 text-[11px] font-medium text-muted sm:px-8 lg:px-10">
        <span>HangWord Lab · Tech English</span>
        <span className="hidden sm:inline">Hecho para aprender jugando</span>
      </footer>
    </div>
  )
}

export default App
