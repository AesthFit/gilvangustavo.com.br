import { Reveal } from "@/components/reveal";
import { OrbField, SplitText } from "@/components/flair";
import { Parallax, ScrollRule } from "@/components/parallax";
import { WaCta } from "@/components/wa-cta";

const passos = [
  {
    titulo: "Conversa inicial",
    texto:
      "Você envia uma mensagem no WhatsApp contando seu objetivo, sua rotina e sua experiência com treino.",
  },
  {
    titulo: "Alinhamento",
    texto:
      "Definimos juntos o formato mais adequado, a frequência semanal e os horários disponíveis.",
  },
  {
    titulo: "Primeiro treino",
    texto:
      "A primeira sessão serve para conhecer seu ponto de partida e ajustar exercícios e cargas.",
  },
  {
    titulo: "Acompanhamento",
    texto:
      "O planejamento evolui com o tempo, com correção técnica, progressão e ajustes conforme a resposta.",
  },
];

export function Steps() {
  return (
    <section id="como-comecar" className="editorial-section bg-background">
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
          <p className="editorial-kicker">Como começar</p>
          <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
            <SplitText text="Do primeiro contato ao primeiro" />{" "}
            <span className="text-shine">treino</span>.
          </h2>
          <ScrollRule className="mt-6" />
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((passo, i) => (
            <Reveal as="li" key={passo.titulo} delay={i * 90} variant="rotate">
              <div className="group editorial-card flex h-full flex-col gap-4 p-7">
                <span
                  aria-hidden="true"
                  className="numeral-ghost text-3xl font-semibold transition-all duration-500 group-hover:[-webkit-text-stroke:1px_var(--gold)]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight uppercase">
                  {passo.titulo}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">{passo.texto}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal variant="scale" className="mt-14 flex justify-center">
          <WaCta
            variant="solid"
            className="w-full rounded-sm sm:w-auto"
            mensagem="Olá, Gilvan! Quero começar o acompanhamento presencial. Podemos conversar sobre horários?"
          >
            Começar pelo primeiro passo
          </WaCta>
        </Reveal>
      </div>
    </section>
  );
}
