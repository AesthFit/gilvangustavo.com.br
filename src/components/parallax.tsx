import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

/**
 * Progresso do elemento na viewport (0 = entrando por baixo, 1 = saindo por cima),
 * exposto como CSS var `--sp` para uso em transforms.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const raw = (vh - rect.top) / (vh + rect.height)
      const p = Math.min(1, Math.max(0, raw))
      node.style.setProperty('--sp', p.toFixed(4))
    }
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return ref
}

type ParallaxProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  /** Deslocamento total em px ao longo da travessia da viewport. */
  distance?: number
  /** Zoom máximo somado ao deslocamento (ex.: 0.08 = 8%). */
  scale?: number
  /** Inverte o sentido do movimento. */
  reverse?: boolean
  style?: CSSProperties
  'aria-hidden'?: boolean | 'true' | 'false'
}

/** Camada com deslocamento suave conforme o scroll (efeito paralaxe). */
export function Parallax({
  children,
  className,
  as: Tag = 'div',
  distance = 60,
  scale = 0,
  reverse = false,
  style,
  ...rest
}: ParallaxProps) {
  const ref = useScrollProgress<HTMLElement>()

  return (
    <Tag
      ref={ref}
      {...rest}
      className={cn('parallax-layer', className)}
      style={
        {
          ...style,
          '--px-distance': `${reverse ? -distance : distance}px`,
          '--px-scale': scale,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  )
}

/** Barra de progresso de leitura da página. */
export function ScrollProgress({ className }: { className?: string }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <span
      aria-hidden="true"
      className={cn(
        'block h-px origin-left bg-gradient-to-r from-gold/40 via-gold to-gold/40',
        className,
      )}
      style={{ transform: `scaleX(${progress})` }}
    />
  )
}

/** Régua dourada que cresce conforme a seção entra na tela. */
export function ScrollRule({ className }: { className?: string }) {
  const ref = useScrollProgress<HTMLSpanElement>()
  return <span ref={ref} aria-hidden="true" className={cn('scroll-rule block w-24', className)} />
}
