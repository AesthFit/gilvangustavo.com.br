import { Check, Minus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const semAcompanhamento = [
  'Tentativa e erro.',
  'Dúvidas durante a execução.',
  'Dificuldade para ajustar o treino.',
  'Menos clareza sobre a progressão.',
  'Maior chance de perder a constância.',
]

const comAcompanhamento = [
  'Planejamento individualizado.',
  'Correção durante os exercícios.',
  'Ajustes conforme sua evolução.',
  'Metas claras e realistas.',
  'Acompanhamento próximo.',
]

export function Comparison() {
  return (
    <section id="acompanhamento" className="border-t border-border bg-secondary/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            O valor de um personal
          </p>
          <h2 className="font-display mt-5 text-3xl leading-[1.18] pb-1 font-semibold tracking-tight text-balance uppercase md:text-4xl">
            Ter um personal muda a <span className="text-gold">forma</span> como você treina.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-border bg-card p-7 md:p-8">
              <h3 className="font-display text-lg font-semibold tracking-wide uppercase">
                Treinar sem acompanhamento
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {semAcompanhamento.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Minus
                      className="mt-1 size-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-lg border border-gold/45 bg-ink p-7 text-ink-foreground md:p-8">
              <h3 className="font-display text-lg font-semibold tracking-wide text-gold uppercase">
                Treinar com acompanhamento
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {comAcompanhamento.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="font-display mx-auto mt-12 max-w-3xl text-center text-2xl leading-snug text-balance md:text-3xl">
            Treinar certo <span className="text-gold">encurta a distância</span> entre o seu esforço e
            a sua evolução.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
