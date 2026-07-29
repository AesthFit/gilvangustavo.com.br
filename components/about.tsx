import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { siteConfig } from '@/lib/site-config'

const diferenciais = [
  'Atendimento próximo e individualizado.',
  'Correção técnica durante a execução.',
  'Treinos adaptados à rotina do aluno.',
  'Comunicação clara e sem complicação.',
  'Progressão construída passo a passo.',
  'Foco em constância e evolução sustentável.',
]

export function About() {
  return (
    <section id="sobre" className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src={siteConfig.fotoOrientando}
              alt={`${siteConfig.nome} orientando um aluno durante a execução de um exercício`}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
              Por que escolher {siteConfig.nome}
            </p>
            <h2 className="font-display mt-5 text-3xl leading-[1.18] pb-1 font-semibold tracking-tight text-balance uppercase md:text-4xl">
              Presença, estratégia e <span className="text-gold">acompanhamento de verdade</span>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              O trabalho de {siteConfig.nome} combina planejamento, orientação presencial e
              acompanhamento próximo para tornar o treinamento mais claro, consistente e adequado à
              realidade de cada aluno.
            </p>
          </Reveal>

          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {diferenciais.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60}>
                <div className="flex h-full items-start gap-3 border-l border-gold/50 pl-4">
                  <p className="text-base leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          {siteConfig.formacao.length > 0 ? (
            <Reveal className="mt-10 rounded-lg border border-border bg-card p-6">
              <h3 className="font-display text-base font-semibold tracking-wide uppercase">
                Formação e experiência
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {siteConfig.formacao.map((item) => (
                  <li key={item} className="text-base leading-relaxed text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  )
}
