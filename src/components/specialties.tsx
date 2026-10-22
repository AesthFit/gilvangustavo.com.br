import { Flame, Scale, Move3d, Target, PersonStanding, Timer } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { OrbField, SplitText } from "@/components/flair";
import { Parallax, ScrollRule } from "@/components/parallax";

const especialidades = [
  {
    icon: Flame,
    titulo: "Hipertrofia",
    texto: "Estímulo progressivo, volume ajustado e técnica cuidada para ganho de massa muscular.",
  },
  {
    icon: Scale,
    titulo: "Emagrecimento",
    texto:
      "Treinos que combinam força e condicionamento para sustentar o gasto energético na rotina.",
  },
  {
    icon: Move3d,
    titulo: "Mobilidade e postura",
    texto: "Trabalho de amplitude, estabilidade e consciência corporal para se mover melhor.",
  },
  {
    icon: Target,
    titulo: "Condicionamento físico",
    texto: "Progressão de resistência cardiorrespiratória para mais disposição no dia a dia.",
  },
  {
    icon: PersonStanding,
    titulo: "Iniciantes",
    texto: "Primeiros passos com orientação próxima, adaptação gradual e segurança na execução.",
  },
  {
    icon: Timer,
    titulo: "Retomada de treino",
    texto: "Volta à atividade depois de uma pausa, respeitando o histórico e o ritmo atual.",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="editorial-section bg-secondary/45">
      <span aria-hidden="true" className="aurora" />
      <OrbField />
      <Parallax
        aria-hidden="true"
        distance={120}
        className="pointer-events-none absolute -top-24 right-[-6rem] h-80 w-80"
      >
        <span className="blob block h-full w-full bg-gold/12" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal className="max-w-3xl" variant="rise-blur">
          <p className="editorial-kicker">Especialidades</p>
          <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
            <SplitText text="Objetivos diferentes pedem treinos" />{" "}
            <span className="text-shine">diferentes</span>.
          </h2>
          <ScrollRule className="mt-6" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            O planejamento é construído a partir do seu objetivo, do seu histórico e do tempo que
            você tem disponível para treinar.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map(({ icon: Icon, titulo, texto }, i) => (
            <Reveal
              as="li"
              key={titulo}
              delay={i * 70}
              variant={i % 2 === 0 ? "tilt-left" : "tilt-right"}
            >
              <div className="group editorial-card flex h-full flex-col gap-5 p-8">
                <span className="icon-orb size-12 shrink-0">
                  <Icon className="size-5 text-gold" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight uppercase">
                  {titulo}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">{texto}</p>
                <span
                  aria-hidden="true"
                  className="hairline mt-auto w-10 transition-all duration-500 group-hover:w-full"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
