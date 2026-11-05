import { CircleHelp, Keyboard, ShieldCheck } from 'lucide-react'

export function HowToPlay() {
  return (
    <aside className="surface-card rounded-[24px] border border-subtle p-5 sm:p-6" aria-labelledby="how-to-play-title">
      <div className="mb-5 flex items-center gap-3">
        <div className="small-icon"><CircleHelp size={17} /></div>
        <div>
          <p className="eyebrow">Guía rápida</p>
          <h2 id="how-to-play-title" className="mt-1 text-base font-bold text-primary">Cómo jugar</h2>
        </div>
      </div>
      <div className="space-y-4">
        <div className="instruction-row">
          <span className="instruction-number">01</span>
          <p>Read the question in English and choose letters to reveal the technical term.</p>
        </div>
        <div className="instruction-row">
          <span className="instruction-number">02</span>
          <p>Use “Show Spanish translation” when you need a bilingual clue.</p>
        </div>
        <div className="instruction-row">
          <span className="instruction-number">03</span>
          <p>Every error changes the animation. You have 6 attempts to save the figure.</p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 border-t border-subtle pt-4 text-[11px] font-medium text-muted">
        <Keyboard size={14} className="text-cyan-300" />
        <span>Use your keyboard or tap the letters.</span>
        <ShieldCheck size={14} className="ml-auto text-emerald-400" />
      </div>
    </aside>
  )
}
