import { OrbField } from "@/components/flair";
import { EditorialFigure } from "@/components/editorial-figure";
import { Reveal } from "@/components/reveal";
import { Parallax, ScrollRule } from "@/components/parallax";
import { siteConfig } from "@/lib/site-config";

const diferenciais = [
  "Atendimento próximo e individualizado.",
  "Correção técnica durante a execução.",
  "Treinos adaptados à rotina do aluno.",
  "Comunicação clara e sem complicação.",
  "Progressão construída passo a passo.",
  "Foco em constância e evolução sustentável.",
];

export function About() {
  return (
    <section id="sobre" className="editorial-section bg-secondary/45">
      <OrbField />
      <Parallax
        aria-hidden="true"
        distance={130}
        className="pointer-events-none absolute -top-20 right-[-7rem] h-[24rem] w-[24rem]"
      >
        <span className="blob block h-full w-full bg-gold/12" />
      </Parallax>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1" variant="tilt-left">
          <EditorialFigure
            src={siteConfig.fotoOrientando}
            alt={`${siteConfig.nome} orientando um aluno durante a execução de um exercício`}
            caption="Orientação presencial durante a execução"
            index="01"
            ratio="portrait"
            distance={90}
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal variant="rise-blur">
            <p className="editorial-kicker">Por que escolher {siteConfig.nome}</p>
            <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
              Presença, estratégia e <span className="text-shine">acompanhamento de verdade</span>.
            </h2>
            <ScrollRule className="mt-6" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              O trabalho de {siteConfig.nome} combina planejamento, orientação presencial e
              acompanhamento próximo para tornar o treinamento mais claro, consistente e adequado à
              realidade de cada aluno.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {diferenciais.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70} variant="right">
                <div className="group flex h-full items-start gap-3 rounded-r-2xl border-l-2 border-gold/40 bg-card/40 py-3 pl-4 transition-all duration-500 hover:border-gold hover:bg-card hover:pl-5">
                  <p className="text-base leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          {siteConfig.formacao.length > 0 ? (
            <Reveal variant="scale" className="soft-panel panel-blob mt-10 p-8">
              <h3 className="font-display text-base font-semibold tracking-wide uppercase">
                Formação e experiência
              </h3>
              <span aria-hidden="true" className="hairline mt-4 block w-16" />
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
  );
}
