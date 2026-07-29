import Image from 'next/image'
import { User, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { WaCta } from '@/components/wa-cta'
import { siteConfig } from '@/lib/site-config'

const formatos = [
  {
    icon: User,
    titulo: 'Treinamento individual',
    texto:
      'Acompanhamento totalmente direcionado para seus objetivos, necessidades e ritmo de evolução.',
  },
  {
    icon: Users,
    titulo: 'Treinamento em dupla',
    texto:
      'Uma alternativa para treinar acompanhado, mantendo orientação profissional e atenção à execução.',
  },
]

export function Formats() {
  return (
    <section id="formatos" className="border-t border-border bg-secondary/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            Formatos de acompanhamento
          </p>
          <h2 className="font-display mt-5 text-3xl leading-[1.18] pb-1 font-semibold tracking-tight text-balance uppercase md:text-4xl">
            Escolha o formato que combina com a sua <span className="text-gold">rotina</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {formatos.map(({ icon: Icon, titulo, texto }, i) => (
              <Reveal key={titulo} delay={i * 100}>
                <div className="flex h-full flex-col rounded-lg border border-border bg-card p-7 md:p-8">
                  <Icon className="size-6 text-gold" aria-hidden="true" />
                  <h3 className="font-display mt-5 text-xl font-semibold tracking-wide uppercase">
                    {titulo}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{texto}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="relative h-56 w-full overflow-hidden rounded-lg border border-border bg-card lg:h-full">
              <Image
                src={siteConfig.fotoPlanejamento}
                alt={`${siteConfig.nome} conversando com um aluno e anotando o planejamento do treino`}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-col items-start gap-6 rounded-lg border border-gold/40 bg-card p-7 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            No formato em dupla, você pode conversar com {siteConfig.nome.split(' ')[0]} para
            verificar a possibilidade de encaixe com outra pessoa no mesmo horário.
          </p>
          <WaCta
            variant="gold"
            className="w-full shrink-0 sm:w-auto"
            mensagem="Olá, Gilvan! Conheci seu trabalho pelo site e gostaria de consultar os horários disponíveis para o acompanhamento."
          >
            Consultar horários pelo WhatsApp
          </WaCta>
        </Reveal>
      </div>
    </section>
  )
}
