import { EditorialFigure } from "@/components/editorial-figure";
import { User, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { OrbField, SplitText } from "@/components/flair";
import { Parallax, ScrollRule } from "@/components/parallax";
import { WaCta } from "@/components/wa-cta";
import { siteConfig } from "@/lib/site-config";

const formatos = [
  {
    icon: User,
    titulo: "Treinamento individual",
    texto:
      "Acompanhamento totalmente direcionado para seus objetivos, necessidades e ritmo de evolução.",
  },
  {
    icon: Users,
    titulo: "Treinamento em dupla",
    texto:
      "Uma alternativa para treinar acompanhado, mantendo orientação profissional e atenção à execução.",
  },
];

export function Formats() {
  return (
    <section id="formatos" className="editorial-section bg-secondary/45">
      <span aria-hidden="true" className="aurora" />
      <OrbField />
      <Parallax
        aria-hidden="true"
        distance={120}
        className="pointer-events-none absolute -bottom-28 right-[-6rem] h-96 w-96"
      >
        <span className="blob block h-full w-full bg-gold/12" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal className="max-w-3xl" variant="rise-blur">
          <p className="editorial-kicker">Formatos de acompanhamento</p>
          <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
            <SplitText text="Escolha o formato que combina com a sua" />{" "}
            <span className="text-shine">rotina</span>.
          </h2>
          <ScrollRule className="mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {formatos.map(({ icon: Icon, titulo, texto }, i) => (
              <Reveal key={titulo} delay={i * 110} variant={i === 0 ? "tilt-left" : "rotate"}>
                <div className="group editorial-card flex h-full flex-col p-8 md:p-9">
                  <span className="icon-orb size-12 shrink-0">
                    <Icon className="size-5 text-gold" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-6 text-xl font-semibold tracking-wide uppercase">
                    {titulo}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{texto}</p>
                  <span
                    aria-hidden="true"
                    className="hairline mt-auto pt-0 w-12 transition-all duration-500 group-hover:w-full"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180} variant="tilt-right">
            <EditorialFigure
              src={siteConfig.fotoPlanejamento}
              alt={`${siteConfig.nome} conversando com um aluno e anotando o planejamento do treino`}
              caption="Planejamento definido junto com o aluno"
              index="02"
              ratio="portrait"
              distance={80}
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </Reveal>
        </div>

        <Reveal
          variant="scale"
          className="soft-panel panel-blob mt-10 flex flex-col items-start gap-6 border-gold/40 p-8 md:flex-row md:items-center md:justify-between md:p-10"
        >
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            No formato em dupla, você pode conversar com {siteConfig.nome.split(" ")[0]} para
            verificar a possibilidade de encaixe com outra pessoa no mesmo horário.
          </p>
          <WaCta
            variant="gold"
            className="w-full shrink-0 rounded-sm sm:w-auto"
            mensagem="Olá, Gilvan! Conheci seu trabalho pelo site e gostaria de consultar os horários disponíveis para o acompanhamento."
          >
            Consultar horários pelo WhatsApp
          </WaCta>
        </Reveal>
      </div>
    </section>
  );
}
