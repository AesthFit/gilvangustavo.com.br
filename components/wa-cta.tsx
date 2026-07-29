import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { whatsappLink } from '@/lib/site-config'
import { WhatsappIcon } from '@/components/whatsapp-icon'

type WaCtaProps = {
  children: ReactNode
  /** Mensagem pré-preenchida. Omita para usar a mensagem padrão. */
  mensagem?: string
  variant?: 'solid' | 'outline' | 'gold' | 'light'
  className?: string
  withIcon?: boolean
}

const base =
  'inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-200'

const variants = {
  solid: 'bg-primary text-primary-foreground hover:bg-primary/88',
  outline: 'border border-foreground/25 text-foreground hover:border-gold hover:bg-secondary',
  gold: 'bg-gold text-ink hover:bg-gold/88',
  light: 'bg-ink-foreground text-ink hover:bg-ink-foreground/88',
} as const

export function WaCta({
  children,
  mensagem,
  variant = 'solid',
  className,
  withIcon = true,
}: WaCtaProps) {
  return (
    <a
      href={whatsappLink(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
    >
      {withIcon ? <WhatsappIcon className="size-5 shrink-0" /> : null}
      <span>{children}</span>
    </a>
  )
}
