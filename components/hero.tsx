import Image from 'next/image'
import { ClipboardList, Hand, UserRound } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { WaCta } from '@/components/wa-cta'

const indicadores = [
  { icon: ClipboardList, label: 'Treino personalizado' },
  { icon: Hand, label: 'Correção presencial' },
  { icon: UserRound, label: 'Acompanhamento próximo' },
]

export function Hero() {
  return (
    <section id="hero" className="paper-texture relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Conteúdo primeiro no mobile */}
        <div className="flex flex-col items-start">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            Consultoria presencial
          </p>

          <h1 className="font-display mt-6 text-4xl leading-[1.12] font-semibold tracking-tight text-balance uppercase sm:text-5xl lg:text-6xl">
            Treine com <span className="text-gold">direção</span>.
            <br />
            Evolua com <span className="text-gold">consistência</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Um acompanhamento presencial e personalizado para você treinar com mais segurança,
            aproveitar melhor o seu tempo e construir resultados sustentáveis.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <WaCta variant="solid" className="w-full sm:w-auto">
              Quero começar a treinar
            </WaCta>
            <WaCta variant="outline" className="w-full sm:w-auto">
              Conversar pelo WhatsApp
            </WaCta>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Atendimento individual ou em dupla, conforme disponibilidade.
          </p>

          <ul className="mt-10 grid w-full gap-3 border-t border-border pt-8 sm:grid-cols-3">
            {indicadores.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon className="size-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-sm font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fotografia */}
        <div className="relative w-full">
          <div className="absolute -top-4 -right-4 hidden h-32 w-32 border-t border-r border-gold/50 lg:block" />
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg border border-border bg-secondary">
            <Image
              src={siteConfig.fotoHero}
              alt={`${siteConfig.nome}, personal trainer, em ambiente de academia durante o atendimento`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 max-w-[78%] rounded-md border border-gold/40 bg-card px-5 py-4 shadow-sm md:left-6">
            <p className="font-signature text-2xl leading-none">{siteConfig.nome}</p>
            <p className="mt-1.5 text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Consultoria | Treinamento | Resultados
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
