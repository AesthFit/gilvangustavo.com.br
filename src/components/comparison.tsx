import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { OrbField, SplitText } from "@/components/flair";
import { Parallax, ScrollRule } from "@/components/parallax";

const semAcompanhamento = [
  "Tentativa e erro.",
  "Dúvidas durante a execução.",
  "Dificuldade para ajustar o treino.",
  "Menos clareza sobre a progressão.",
  "Maior chance de perder a constância.",
];

const comAcompanhamento = [
  "Planejamento individualizado.",
  "Correção durante os exercícios.",
  "Ajustes conforme sua evolução.",
  "Metas claras e realistas.",
  "Acompanhamento próximo.",
];

export function Comparison() {
  return (
    <section id="acompanhamento" className="editorial-section bg-secondary/45">
      <span aria-hidden="true" className="aurora" />
      <OrbField />
      <Parallax
        aria-hidden="true"
        distance={120}
        className="pointer-events-none absolute top-10 right-[-8rem] h-[26rem] w-[26rem]"
      >
        <span className="blob block h-full w-full bg-gold/12" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal className="max-w-3xl" variant="rise-blur">
          <p className="editorial-kicker">O valor de um personal</p>
          <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
            <SplitText text="Ter um personal muda a" /> <span className="text-shine">forma</span>{" "}
            como você treina.
          </h2>
          <ScrollRule className="mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal variant="tilt-left">
            <div className="soft-panel panel-organic-alt h-full p-8 md:p-10">
              <h3 className="font-display text-lg font-semibold tracking-wide text-muted-foreground uppercase">
                Treinar sem acompanhamento
              </h3>
              <span aria-hidden="true" className="mt-5 block h-px w-full bg-border" />
              <ul className="mt-6 flex flex-col gap-4">
                {semAcompanhamento.map((item, i) => (
                  <Reveal as="li" key={item} delay={i * 70} variant="left">
                    <span className="flex items-start gap-3">
                      <Minus
                        className="mt-1 size-4 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <span className="text-base leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} variant="tilt-right">
            <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-gold/45 bg-ink p-8 text-ink-foreground md:p-10">
              <span
                aria-hidden="true"
                className="glow-breathe pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-gold/25 blur-3xl"
              />
              <h3 className="font-display relative text-lg font-semibold tracking-wide text-gold uppercase">
                Treinar com acompanhamento
              </h3>
              <span aria-hidden="true" className="hairline relative mt-5 block w-full" />
              <ul className="relative mt-6 flex flex-col gap-4">
                {comAcompanhamento.map((item, i) => (
                  <Reveal as="li" key={item} delay={140 + i * 80} variant="right">
                    <span className="flex items-start gap-3">
                      <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                      <span className="text-base leading-relaxed">{item}</span>
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale">
          <p className="font-display mx-auto mt-14 max-w-3xl text-center text-2xl leading-snug text-balance md:text-3xl">
            Treinar certo <span className="text-shine">encurta a distância</span> entre o seu
            esforço e a sua evolução.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
