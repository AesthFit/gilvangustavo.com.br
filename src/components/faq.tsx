import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { OrbField, SplitText } from "@/components/flair";
import { Parallax, ScrollRule } from "@/components/parallax";
import { perguntasFrequentes } from "@/lib/faq-data";

const perguntas = perguntasFrequentes;

export function Faq() {
  const [aberta, setAberta] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="editorial-section bg-secondary/45">
      <span aria-hidden="true" className="aurora" />
      <OrbField />
      <Parallax
        aria-hidden="true"
        distance={110}
        reverse
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2"
      >
        <span className="blob block h-full w-full bg-gold/10" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <Reveal variant="rise-blur">
          <p className="editorial-kicker">Perguntas frequentes</p>
          <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
            <SplitText text="Ainda com" /> <span className="text-shine">dúvidas</span>?
          </h2>
          <ScrollRule className="mt-6" />
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {perguntas.map((item, i) => {
            const isOpen = aberta === i;
            const painelId = `${baseId}-painel-${i}`;
            const botaoId = `${baseId}-botao-${i}`;

            return (
              <Reveal key={item.pergunta} delay={i * 70} variant="up">
                <div
                  data-open={isOpen ? "true" : "false"}
                  className="editorial-card transition-[border-color,box-shadow,transform] duration-500 data-[open=true]:border-gold/50"
                >
                  <h3>
                    <button
                      type="button"
                      id={botaoId}
                      aria-expanded={isOpen}
                      aria-controls={painelId}
                      onClick={() => setAberta(isOpen ? null : i)}
                      className="group/faq flex min-h-14 w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:text-gold md:px-8"
                    >
                      <span className="text-base font-medium transition-transform duration-500 group-hover/faq:translate-x-1 md:text-lg">
                        {item.pergunta}
                      </span>
                      <Plus
                        aria-hidden="true"
                        className={`size-5 shrink-0 text-gold transition-transform duration-500 group-hover/faq:scale-125 ${
                          isOpen ? "rotate-[135deg]" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={painelId}
                    role="region"
                    aria-labelledby={botaoId}
                    className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-base leading-relaxed text-muted-foreground md:px-8">
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
