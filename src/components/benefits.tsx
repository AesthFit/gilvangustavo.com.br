import {
  Activity,
  BatteryCharging,
  Dumbbell,
  HeartHandshake,
  Repeat,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { OrbField, SplitText } from "@/components/flair";
import { Parallax, ScrollRule } from "@/components/parallax";

const beneficios = [
  { icon: BatteryCharging, texto: "Mais disposição para a rotina." },
  { icon: Dumbbell, texto: "Desenvolvimento de força e resistência." },
  { icon: Activity, texto: "Melhora da mobilidade e da capacidade física." },
  { icon: ShieldCheck, texto: "Maior confiança para realizar os exercícios." },
  { icon: Repeat, texto: "Construção de disciplina e constância." },
  { icon: HeartHandshake, texto: "Um momento de cuidado pessoal." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="editorial-section bg-background">
      <span aria-hidden="true" className="aurora" />
      <OrbField />
      <Parallax
        aria-hidden="true"
        distance={130}
        reverse
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96"
      >
        <span className="blob block h-full w-full bg-gold/10" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal className="max-w-3xl" variant="rise-blur">
          <p className="editorial-kicker">Por que treinar faz bem</p>
          <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
            <SplitText text="Treinar é cuidar do corpo, da mente e da sua" />{" "}
            <span className="text-shine">rotina</span>.
          </h2>
          <ScrollRule className="mt-6" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            O exercício físico pode contribuir para uma vida mais ativa, fortalecer capacidades
            físicas, melhorar a disposição e ajudar na construção de hábitos mais consistentes.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map(({ icon: Icon, texto }, i) => (
            <Reveal as="li" key={texto} delay={i * 70} variant="rotate">
              <div className="group editorial-card flex h-full flex-col gap-5 p-8">
                <span className="icon-orb size-12 shrink-0">
                  <Icon className="size-5 text-gold" aria-hidden="true" />
                </span>
                <p className="text-base leading-relaxed">{texto}</p>
                <span
                  aria-hidden="true"
                  className="hairline mt-auto w-10 transition-all duration-500 group-hover:w-full"
                />
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Os benefícios e resultados variam de acordo com a frequência, o histórico, os objetivos
            e as características de cada pessoa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
