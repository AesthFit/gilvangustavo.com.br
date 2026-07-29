import { Reveal } from '@/components/reveal'
import { WaCta } from '@/components/wa-cta'

const cards = [
  'Não saber quais exercícios fazer.',
  'Ter dúvidas sobre a execução.',
  'Mudar de treino sem estratégia.',
  'Perder a constância depois de algumas semanas.',
  'Sentir que o tempo investido não está sendo bem aproveitado.',
  'Não conseguir perceber uma evolução clara.',
]

export function Problem() {
  return (
    <section id="direcao" className="border-t border-border bg-secondary/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            O ponto de partida
          </p>
          <h2 className="font-display mt-5 text-3xl leading-[1.18] pb-1 font-semibold tracking-tight text-balance uppercase md:text-4xl">
            Você treina, mas sente que falta <span className="text-gold">direção</span>?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Nem sempre o problema é falta de esforço. Muitas pessoas começam motivadas, mas acabam
            enfrentando dúvidas sobre exercícios, execução, frequência e progressão.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((texto, i) => (
            <Reveal as="li" key={texto} delay={i * 60}>
              <div className="flex h-full items-start gap-4 rounded-lg border border-border bg-card p-6">
                <span
                  aria-hidden="true"
                  className="font-display mt-0.5 text-sm font-semibold text-gold"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-base leading-relaxed">{texto}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex flex-col items-start gap-6 border-t border-gold/40 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl font-display text-xl leading-snug text-balance md:text-2xl">
            O acompanhamento profissional transforma uma sequência de exercícios em um{' '}
            <span className="text-gold">processo estruturado</span>.
          </p>
          <WaCta
            variant="solid"
            className="w-full shrink-0 sm:w-auto"
            mensagem="Olá, Gilvan! Conheci seu trabalho pelo site e quero entender como funciona o acompanhamento presencial."
          >
            Quero entender como funciona
          </WaCta>
        </Reveal>
      </div>
    </section>
  )
}
