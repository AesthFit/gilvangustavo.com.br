import { Activity, BatteryCharging, Dumbbell, HeartHandshake, Repeat, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const beneficios = [
  { icon: BatteryCharging, texto: 'Mais disposição para a rotina.' },
  { icon: Dumbbell, texto: 'Desenvolvimento de força e resistência.' },
  { icon: Activity, texto: 'Melhora da mobilidade e da capacidade física.' },
  { icon: ShieldCheck, texto: 'Maior confiança para realizar os exercícios.' },
  { icon: Repeat, texto: 'Construção de disciplina e constância.' },
  { icon: HeartHandshake, texto: 'Um momento de cuidado pessoal.' },
]

export function Benefits() {
  return (
    <section id="beneficios" className="paper-texture border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            Por que treinar faz bem
          </p>
          <h2 className="font-display mt-5 text-3xl leading-[1.18] pb-1 font-semibold tracking-tight text-balance uppercase md:text-4xl">
            Treinar é cuidar do corpo, da mente e da sua <span className="text-gold">rotina</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            O exercício físico pode contribuir para uma vida mais ativa, fortalecer capacidades
            físicas, melhorar a disposição e ajudar na construção de hábitos mais consistentes.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map(({ icon: Icon, texto }, i) => (
            <Reveal as="li" key={texto} delay={i * 60} className="bg-card">
              <div className="flex h-full flex-col gap-4 p-7">
                <Icon className="size-6 text-gold" aria-hidden="true" />
                <p className="text-base leading-relaxed">{texto}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Os benefícios e resultados variam de acordo com a frequência, o histórico, os objetivos e
            as características de cada pessoa.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
