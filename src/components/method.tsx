import { Reveal } from "@/components/reveal";
import { OrbField, SplitText } from "@/components/flair";
import { Parallax, ScrollRule } from "@/components/parallax";
import { WaCta } from "@/components/wa-cta";

const etapas = [
  {
    numero: "01",
    titulo: "Conversa inicial",
    texto:
      "Gilvan entende sua rotina, seus objetivos, sua experiência e suas principais dificuldades.",
  },
  {
    numero: "02",
    titulo: "Planejamento",
    texto:
      "O treinamento é organizado de acordo com suas necessidades, seu momento e sua disponibilidade.",
  },
  {
    numero: "03",
    titulo: "Acompanhamento presencial",
    texto: "Durante o treino, você recebe orientação, correções e ajustes em tempo real.",
  },
  {
    numero: "04",
    titulo: "Evolução contínua",
    texto: "O plano acompanha seu desenvolvimento e pode ser adaptado conforme seu progresso.",
  },
];

export function Method() {
  return (
    <section id="metodologia" className="editorial-section bg-background">
      <span aria-hidden="true" className="aurora" />
      <OrbField />
      <Parallax
        aria-hidden="true"
        distance={140}
        reverse
        className="pointer-events-none absolute -top-16 -left-24 h-80 w-80"
      >
        <span className="blob block h-full w-full bg-gold/12" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal className="max-w-3xl" variant="rise-blur">
          <p className="editorial-kicker">Metodologia</p>
          <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
            <SplitText text="Um processo construído" />{" "}
            <span className="text-shine">para você</span>.
          </h2>
          <ScrollRule className="mt-6" />
        </Reveal>

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-4 lg:gap-6">
          {etapas.map((etapa, i) => (
            <Reveal as="li" key={etapa.numero} delay={i * 110} variant="rotate">
              <div className="group editorial-card relative h-full p-8">
                <span
                  aria-hidden="true"
                  className="numeral-ghost absolute top-5 right-6 text-5xl font-semibold opacity-70 transition-all duration-500 group-hover:opacity-100"
                >
                  {etapa.numero}
                </span>
                <span aria-hidden="true" className="icon-orb size-9">
                  <span className="size-2 rounded-full bg-gold" />
                </span>
                <h3 className="font-display mt-6 text-lg font-semibold tracking-wide uppercase">
                  {etapa.titulo}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {etapa.texto}
                </p>
                <span
                  aria-hidden="true"
                  className="hairline mt-6 block w-12 transition-all duration-500 group-hover:w-full"
                />
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex justify-center" variant="scale">
          <WaCta
            variant="solid"
            className="w-full rounded-sm sm:w-auto"
            mensagem="Olá, Gilvan! Conheci seu trabalho pelo site e quero conhecer melhor o acompanhamento presencial."
          >
            Quero conhecer o acompanhamento
          </WaCta>
        </Reveal>
      </div>
    </section>
  );
}
