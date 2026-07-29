import { Reveal } from '@/components/reveal'

const perfis = [
  'Quem está começando e não sabe por onde seguir.',
  'Quem já treina, mas sente que parou de evoluir.',
  'Quem deseja melhorar a técnica dos exercícios.',
  'Quem precisa de acompanhamento para manter constância.',
  'Quem busca treinar individualmente.',
  'Quem prefere dividir o horário com outra pessoa.',
]

export function Audience() {
  return (
    <section id="para-quem" className="paper-texture border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            Para quem é
          </p>
          <h2 className="font-display mt-5 text-3xl leading-[1.18] pb-1 font-semibold tracking-tight text-balance uppercase md:text-4xl">
            Um acompanhamento para <span className="text-gold">diferentes momentos</span>.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perfis.map((perfil, i) => (
            <Reveal as="li" key={perfil} delay={i * 60}>
              <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-card p-6">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
                <p className="text-base leading-relaxed">{perfil}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="font-display mx-auto mt-12 max-w-3xl text-center text-xl leading-snug text-balance md:text-2xl">
            Você não precisa estar em forma para começar. O treinamento será construído a partir do{' '}
            <span className="text-gold">ponto em que você está</span>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
