import { AlertTriangle, CheckCircle2, CircleAlert } from 'lucide-react'
import type { GameStatus } from '../hooks/useHangmanGame'
import { MAX_ERRORS } from '../data/words'

type HangmanFigureProps = {
  errors: number
  status: GameStatus
}

const stageLabels = [
  'Soga intacta',
  'Primer fallo · soga tensa',
  'La soga empieza a aflojarse',
  'Soga debilitada',
  'Soga casi cortada',
  'Último intento',
  'Partida perdida',
]

export function HangmanFigure({ errors, status }: HangmanFigureProps) {
  const stage = Math.min(errors, MAX_ERRORS)
  const isLost = status === 'lost'
  const isWon = status === 'won'
  const figureClass = isLost ? 'figure-lost' : isWon ? 'figure-won' : `figure-stage-${stage}`
  const headY = isLost ? 139 : 126 + Math.min(stage * 1.5, 7)

  return (
    <div className="figure-panel relative overflow-hidden rounded-[28px] border border-subtle">
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5 sm:px-7 sm:pt-6">
        <div>
          <p className="eyebrow">Estado del muñeco</p>
          <p className={`mt-1 text-xs font-semibold ${isLost ? 'text-rose-400' : isWon ? 'text-emerald-400' : 'text-primary'}`}>
            {stageLabels[stage]}
          </p>
        </div>
        <div className={`stage-counter ${isLost ? 'stage-counter-danger' : ''}`}>
          <span className="font-display text-lg font-bold">{errors}</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">/{MAX_ERRORS}</span>
        </div>
      </div>

      <svg
        className={`hangman-svg ${figureClass}`}
        viewBox="0 0 320 340"
        role="img"
        aria-label={isLost ? 'Muñeco ahorcado: partida perdida' : `Muñeco del ahorcado, ${errors} errores`}
      >
        <defs>
          <linearGradient id="board-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.58" />
          </linearGradient>
          <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <g className="ambient-dots" aria-hidden="true">
          <circle cx="64" cy="90" r="2" />
          <circle cx="264" cy="83" r="2" />
          <circle cx="246" cy="274" r="1.5" />
          <circle cx="77" cy="284" r="1.5" />
        </g>

        <g className="scaffold" fill="none" stroke="url(#board-gradient)" strokeLinecap="round" strokeWidth="9">
          <path d="M47 283V45h180" />
          <path d="M47 78l43-33" strokeWidth="5" />
          <path d="M27 283h232" strokeWidth="10" />
        </g>

        <g className="rope" fill="none" strokeLinecap="round">
          <path d="M207 47v47" strokeWidth="7" />
          <path className="rope-frayed" d="M207 94v10" strokeWidth="6" />
          <path className="rope-cut-1" d="M205 97l-8 9M210 98l7 8" strokeWidth="3" />
          <path className="rope-cut-2" d="M204 86l-7 10M211 86l8 9" strokeWidth="3" />
        </g>

        <g className="error-burst" aria-hidden="true">
          <path d="M164 100l-9-7M166 111l-12 2M249 101l10-8M248 112l12 2" />
          <circle cx="158" cy="121" r="2" />
          <circle cx="256" cy="121" r="2" />
        </g>

        <g className="figure-art" filter={isLost ? 'url(#soft-glow)' : undefined}>
          <circle className="head" cx="207" cy={headY} r="31" />
          <path className="neck" d={`M207 ${headY + 28}v17`} />
          <path className="body" d={`M207 ${headY + 46}v74`} />
          <path className="arm arm-left" d={`M207 ${headY + 62}l-40 42`} />
          <path className="arm arm-right" d={`M207 ${headY + 62}l40 42`} />
          <path className="leg leg-left" d={`M207 ${headY + 120}l-34 54`} />
          <path className="leg leg-right" d={`M207 ${headY + 120}l34 54`} />
          {isLost ? (
            <g className="lost-face">
              <path d={`M194 ${headY - 7}l8 8m0-8l-8 8M214 ${headY - 7}l8 8m0-8l-8 8`} />
              <path d={`M195 ${headY + 14}q12 10 24 0`} />
            </g>
          ) : (
            <g className="calm-face">
              <circle cx="196" cy={headY - 2} r="3" />
              <circle cx="218" cy={headY - 2} r="3" />
              <path d={`M198 ${headY + 13}q9 7 18 0`} />
            </g>
          )}
        </g>

        {isLost && (
          <g className="loss-stamp">
            <circle cx="270" cy="252" r="29" />
            <path d="M257 252l9 9 17-19" />
          </g>
        )}
      </svg>

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between sm:bottom-6 sm:left-7 sm:right-7">
        <div className="flex items-center gap-2 text-[11px] font-medium text-muted">
          {isLost ? <CircleAlert size={15} className="text-rose-400" /> : isWon ? <CheckCircle2 size={15} className="text-emerald-400" /> : <AlertTriangle size={15} className="text-amber-300" />}
          <span>{isLost ? 'La soga llegó al límite' : isWon ? '¡Muñeco a salvo!' : 'Cada error debilita la soga'}</span>
        </div>
        <div className="flex gap-1.5" aria-label={`${MAX_ERRORS - errors} intentos restantes`}>
          {Array.from({ length: MAX_ERRORS }).map((_, index) => (
            <span key={index} className={`life-pip ${index < errors ? 'life-pip-used' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
