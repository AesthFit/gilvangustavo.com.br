import { useEffect } from 'react'

/**
 * Faz o brilho dourado (.spotlight) seguir o cursor dentro do elemento.
 * Um único listener global, sem custo por card.
 */
export function PointerGlow() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover)').matches) return

    const onMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      const host = target?.closest<HTMLElement>('.spotlight')
      if (!host) return
      const rect = host.getBoundingClientRect()
      host.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`)
      host.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return null
}
