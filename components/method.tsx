import { Reveal } from '@/components/reveal'
import { WaCta } from '@/components/wa-cta'

const etapas = [
  {
    numero: '01',
    titulo: 'Conversa inicial',
    texto:
      'Gilvan entende sua rotina, seus objetivos, sua experiência e suas principais dificuldades.',
  },
  {
    numero: '02',
    titulo: 'Planejamento',
    texto:
      'O treinamento é organizado de acordo com suas necessidades, seu momento e sua disponibilidade.',
  },
  {
    numero: '03',
    titulo: 'Acompanhamento presencial',
    texto: 'Durante o treino, você recebe orientação, correções e ajustes em tempo real.',
  },
  {
    numero: '04',
    titulo: 'Evolução contínua',
    texto: 'O plano acompanha seu desenvolvimento e pode ser adaptado conforme seu progresso.',
  },
]

export function Method() {
  return (
    <section id="metodologia" className="paper-texture border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            Metodologia
          </p>
          <h2 className="font-display mt-5 text-3xl leading-[1.18] pb-1 font-semibold tracking-tight text-balance uppercase md:text-4xl">
            Um processo construído <span className="text-gold">para você</span>.
          </h2>
        </Reveal>

        <ol className="relative mt-12 grid gap-6 lg:grid-cols-4 lg:gap-8">
          {/* Linha visual conectando as etapas */}
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[15px] w-px bg-gold/35 lg:top-[15px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full"
          />
          {etapas.map((etapa, i) => (
            <Reveal as="li" key={etapa.numero} delay={i * 90} className="relative pl-12 lg:pl-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 left-0 flex size-8 items-center justify-center rounded-full border border-gold/60 bg-background lg:static lg:mb-6 lg:flex"
              >
                <span className="size-2 rounded-full bg-gold" />
              </span>
              <p className="font-display text-3xl leading-none font-semibold text-gold/85">
                {etapa.numero}
              </p>
              <h3 className="font-display mt-3 text-lg font-semibold tracking-wide uppercase">
                {etapa.titulo}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{etapa.texto}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex justify-center">
          <WaCta
            variant="solid"
            className="w-full sm:w-auto"
            mensagem="Olá, Gilvan! Conheci seu trabalho pelo site e quero conhecer melhor o acompanhamento presencial."
          >
            Quero conhecer o acompanhamento
          </WaCta>
        </Reveal>
      </div>
    </section>
  )
}
