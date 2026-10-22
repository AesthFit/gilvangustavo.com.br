import { Reveal } from "@/components/reveal";
import { OrbField, SplitText } from "@/components/flair";
import { Parallax, ScrollRule } from "@/components/parallax";
import { WaCta } from "@/components/wa-cta";

const cards = [
  "Não saber quais exercícios fazer.",
  "Ter dúvidas sobre a execução.",
  "Mudar de treino sem estratégia.",
  "Perder a constância depois de algumas semanas.",
  "Sentir que o tempo investido não está sendo bem aproveitado.",
  "Não conseguir perceber uma evolução clara.",
];

export function Problem() {
  return (
    <section id="direcao" className="editorial-section bg-secondary/45">
      <span aria-hidden="true" className="aurora" />
      <OrbField />
      <Parallax
        aria-hidden="true"
        distance={110}
        className="pointer-events-none absolute -top-24 right-[-6rem] h-80 w-80"
      >
        <span className="blob block h-full w-full bg-gold/12" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal className="max-w-3xl" variant="rise-blur">
          <p className="editorial-kicker">O ponto de partida</p>
          <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
            <SplitText text="Você treina, mas sente que falta" />{" "}
            <span className="text-shine">direção</span>?
          </h2>
          <ScrollRule className="mt-6" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Nem sempre o problema é falta de esforço. Muitas pessoas começam motivadas, mas acabam
            enfrentando dúvidas sobre exercícios, execução, frequência e progressão.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((texto, i) => (
            <Reveal
              as="li"
              key={texto}
              delay={i * 80}
              variant={i % 2 === 0 ? "tilt-left" : "tilt-right"}
            >
              <div className="group editorial-card flex h-full items-start gap-4 p-7">
                <span
                  aria-hidden="true"
                  className="numeral-ghost shrink-0 text-3xl font-semibold transition-all duration-500 group-hover:[-webkit-text-stroke:1px_var(--gold)]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed">{texto}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal
          variant="scale"
          className="soft-panel panel-blob mt-14 flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10"
        >
          <p className="font-display max-w-2xl text-xl leading-snug text-balance md:text-2xl">
            O acompanhamento profissional transforma uma sequência de exercícios em um{" "}
            <span className="text-gold">processo estruturado</span>.
          </p>
          <WaCta
            variant="solid"
            className="w-full shrink-0 rounded-sm sm:w-auto"
            mensagem="Olá, Gilvan! Conheci seu trabalho pelo site e quero entender como funciona o acompanhamento presencial."
          >
            Quero entender como funciona
          </WaCta>
        </Reveal>
      </div>
    </section>
  );
}
