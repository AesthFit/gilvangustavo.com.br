import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/lib/site-config";

const itens = [
  "Treino individual",
  "Treino em dupla",
  "Correção técnica",
  "Planejamento personalizado",
  `Atendimento em ${siteConfig.cidade}`,
  "Acompanhamento presencial",
];

export function BrandStrip() {
  const sequencia = [...itens, ...itens];

  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-gold bg-foreground py-4 text-background"
    >
      <div className="marquee-track items-center gap-10">
        {sequencia.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-10">
            <span className="font-display text-xs tracking-[0.18em] uppercase">{item}</span>
            <span className="text-xl text-gold">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
