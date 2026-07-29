import { siteConfig } from '@/lib/site-config'
import { WaCta } from '@/components/wa-cta'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#hero" className="flex flex-col leading-none">
          <span className="font-signature text-2xl leading-tight text-foreground md:text-[26px]">
            {siteConfig.nome}
          </span>
          <span className="mt-0.5 text-[10px] font-medium tracking-[0.22em] text-muted-foreground uppercase">
            Consultoria | Treinamento
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {[
            ['Metodologia', '#metodologia'],
            ['Acompanhamento', '#acompanhamento'],
            ['Formatos', '#formatos'],
            ['Dúvidas', '#faq'],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <WaCta variant="solid" className="hidden px-5 text-xs md:inline-flex">
          Falar com Gilvan
        </WaCta>
      </div>
    </header>
  )
}
