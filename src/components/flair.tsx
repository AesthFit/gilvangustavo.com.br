import type { CSSProperties, ReactNode } from 'react'
import { useScrollProgress } from '@/components/parallax'
import { cn } from '@/lib/utils'

/** Onda decorativa que suaviza a emenda entre seções. */
export function WaveDivider({
  className,
  flip = false,
}: {
  className?: string
  /** flip = onda apontando para baixo */
  flip?: boolean
}) {
  return (
    <div aria-hidden="true" className={cn('wave-divider', className)}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={flip ? { transform: 'scaleY(-1)' } : undefined}>
        <path
          fill="currentColor"
          d="M0,64 C240,120 420,8 720,40 C1010,72 1200,124 1440,72 L1440,0 L0,0 Z"
        />
      </svg>
    </div>
  )
}

/** Título revelado palavra por palavra (usar dentro de um Reveal). */
export function SplitText({
  text,
  className,
  step = 70,
  start = 0,
}: {
  text: string
  className?: string
  step?: number
  start?: number
}) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="split-word" style={{ '--w-delay': `${start + i * step}ms` } as CSSProperties}>
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}

const dots = [
  { top: '12%', left: '8%', size: 10, delay: '0s' },
  { top: '68%', left: '18%', size: 6, delay: '1.4s' },
  { top: '28%', left: '82%', size: 8, delay: '2.6s' },
  { top: '78%', left: '68%', size: 5, delay: '3.8s' },
  { top: '46%', left: '52%', size: 4, delay: '2s' },
]

/** Poeira dourada flutuando ao fundo da seção. */
export function OrbField({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('orb-field', className)}>
      {dots.map((d, i) => (
        <span
          key={i}
          className="orb-dot"
          style={{ top: d.top, left: d.left, width: d.size, height: d.size, animationDelay: d.delay }}
        />
      ))}
    </div>
  )
}

/** Envelope que cresce levemente conforme entra na tela. */
export function ScrollScale({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useScrollProgress<HTMLDivElement>()
  return (
    <div ref={ref} className={cn('scroll-scale', className)}>
      {children}
    </div>
  )
}
