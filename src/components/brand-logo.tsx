import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

const wordmark = { url: '/logo-wordmark.webp' }
const monogram = { url: '/logo-monogram.webp' }

type BrandLogoProps = {
  className?: string
  /** wordmark = assinatura completa | monogram = símbolo "G" */
  variant?: 'wordmark' | 'monogram'
  /** invert = versão clara, para uso sobre fundos escuros */
  tone?: 'ink' | 'invert'
  /** Decorativo: sem texto alternativo e invisível para leitores de tela. */
  decorative?: boolean
  priority?: boolean
}

export function BrandLogo({
  className,
  variant = 'wordmark',
  tone = 'ink',
  decorative = false,
  priority = false,
}: BrandLogoProps) {
  const asset = variant === 'monogram' ? monogram : wordmark
  const size = variant === 'monogram' ? { w: 130, h: 147 } : { w: 900, h: 303 }

  return (
    <img
      src={asset.url}
      alt={decorative ? '' : `Logotipo de ${siteConfig.nome}`}
      aria-hidden={decorative ? 'true' : undefined}
      width={size.w}
      height={size.h}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
      className={cn(
        'object-contain select-none',
        tone === 'invert' && 'brightness-0 invert',
        className,
      )}
    />
  )
}
