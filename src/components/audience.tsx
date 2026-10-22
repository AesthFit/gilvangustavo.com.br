import { Reveal } from "@/components/reveal";
import { OrbField, SplitText } from "@/components/flair";
import { Parallax, ScrollRule } from "@/components/parallax";

const perfis = [
  "Quem está começando e não sabe por onde seguir.",
  "Quem já treina, mas sente que parou de evoluir.",
  "Quem deseja melhorar a técnica dos exercícios.",
  "Quem precisa de acompanhamento para manter constância.",
  "Quem busca treinar individualmente.",
  "Quem prefere dividir o horário com outra pessoa.",
];

export function Audience() {
  return (
    <section id="para-quem" className="editorial-section bg-background">
      <span aria-hidden="true" className="aurora" />
      <OrbField />
      <Parallax
        aria-hidden="true"
        distance={130}
        reverse
        className="pointer-events-none absolute top-0 -left-28 h-[24rem] w-[24rem]"
      >
        <span className="blob block h-full w-full bg-gold/10" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal className="max-w-3xl" variant="rise-blur">
          <p className="editorial-kicker">Para quem é</p>
          <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
            <SplitText text="Um acompanhamento para" />{" "}
            <span className="text-shine">diferentes momentos</span>.
          </h2>
          <ScrollRule className="mt-6" />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perfis.map((perfil, i) => (
            <Reveal
              as="li"
              key={perfil}
              delay={i * 80}
              variant={i % 2 === 0 ? "tilt-right" : "tilt-left"}
            >
              <div className="group editorial-card flex h-full items-start gap-4 p-7">
                <span aria-hidden="true" className="icon-orb mt-0.5 size-8 shrink-0">
                  <span className="size-1.5 rounded-full bg-gold" />
                </span>
                <p className="text-base leading-relaxed">{perfil}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal variant="scale">
          <p className="font-display mx-auto mt-14 max-w-3xl text-center text-xl leading-snug text-balance md:text-2xl">
            Você não precisa estar em forma para começar. O treinamento será construído a partir do{" "}
            <span className="text-shine">ponto em que você está</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
