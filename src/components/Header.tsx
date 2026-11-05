import { Moon, Sun, TerminalSquare } from 'lucide-react'

type HeaderProps = {
  isLight: boolean
  onToggleTheme: () => void
}

export function Header({ isLight, onToggleTheme }: HeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-5 pb-8 pt-6 sm:px-8 lg:px-10 lg:pb-10">
      <div className="flex items-center gap-3">
        <div className="brand-mark" aria-hidden="true">
          <TerminalSquare size={20} strokeWidth={2.2} />
        </div>
        <div>
          <p className="font-display text-[15px] font-bold tracking-tight text-primary">HangWord<span className="text-cyan-400">.</span>Lab</p>
          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Tech English</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-subtle bg-chip px-3 py-2 text-[11px] font-semibold text-muted sm:flex">
          <span className="live-dot" />
          10 palabras · nivel técnico
        </div>
        <button
          type="button"
          onClick={onToggleTheme}
          className="theme-toggle"
          aria-label={isLight ? 'Activar modo oscuro' : 'Activar modo claro'}
          title={isLight ? 'Activar modo oscuro' : 'Activar modo claro'}
        >
          {isLight ? <Moon size={17} /> : <Sun size={17} />}
        </button>
      </div>
    </header>
  )
}
