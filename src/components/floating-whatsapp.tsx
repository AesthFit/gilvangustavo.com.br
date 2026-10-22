import { siteConfig, whatsappLink } from '@/lib/site-config'
import { WhatsappIcon } from '@/components/whatsapp-icon'

const primeiroNome = siteConfig.nome.split(' ')[0]

export function FloatingWhatsapp() {
  return (
    <aside aria-label={`Contato rápido com ${primeiroNome}`}>
      {/* Botão flutuante — ícone no mobile (acima da barra fixa), com texto no desktop */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-pulse press group/fab fixed right-4 bottom-24 z-50 flex size-14 items-center justify-center rounded-full bg-ink text-ink-foreground shadow-lg transition-colors hover:bg-ink/90 md:right-6 md:bottom-6 md:size-auto md:gap-2.5 md:rounded-full md:px-5 md:py-3.5"
      >
        <WhatsappIcon className="size-6 text-gold transition-transform duration-500 group-hover/fab:-rotate-12 group-hover/fab:scale-110 md:size-5" />
        <span className="hidden text-sm font-semibold md:inline">Fale com {primeiroNome}</span>
        <span className="sr-only md:hidden">Fale com {primeiroNome} no WhatsApp</span>

      </a>

      {/* Barra fixa inferior — apenas no mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-background/95 px-4 py-3 backdrop-blur-md md:hidden">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-md bg-primary px-5 py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-primary/88"
        >
          <WhatsappIcon className="size-5" />
          Quero começar a treinar
        </a>
      </div>
    </aside>

  )
}
