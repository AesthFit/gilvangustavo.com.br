import { EditorialFigure } from "@/components/editorial-figure";
import { Reveal } from "@/components/reveal";
import { OrbField, SplitText } from "@/components/flair";
import { ScrollRule } from "@/components/parallax";
import { siteConfig } from "@/lib/site-config";

/**
 * Seção editável de prova social.
 * Fica completamente oculta enquanto não houver depoimentos reais
 * cadastrados em `siteConfig.depoimentos` (lib/site-config.ts).
 */
export function Testimonials() {
  const depoimentos = siteConfig.depoimentos;
  if (depoimentos.length === 0) return null;

  return (
    <section id="historias" className="editorial-section bg-background">
      <span aria-hidden="true" className="aurora" />
      <OrbField />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal className="max-w-3xl" variant="rise-blur">
          <p className="editorial-kicker">Prova social</p>
          <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
            <SplitText text="Histórias construídas com" />{" "}
            <span className="text-shine">constância</span>.
          </h2>
          <ScrollRule className="mt-6" />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((item, i) => (
            <Reveal as="li" key={item.nome} delay={i * 90} variant="rotate">
              <figure className="group editorial-card flex h-full flex-col p-8">
                {item.foto ? (
                  <EditorialFigure
                    src={item.foto}
                    alt={`Foto autorizada de ${item.nome}, aluno acompanhado por ${siteConfig.nome}`}
                    ratio="landscape"
                    frame={false}
                    distance={50}
                    className="mb-6"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                ) : null}
                <blockquote className="text-base leading-relaxed">{item.texto}</blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="hairline mb-4 block w-12 transition-all duration-500 group-hover:w-full"
                  />
                  <span className="font-semibold text-foreground">{item.nome}</span>
                  <span className="mt-1 block">{item.contexto}</span>
                  <span className="mt-1 block">Acompanhamento: {item.tempo}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
