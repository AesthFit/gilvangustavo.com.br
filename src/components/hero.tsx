import Image from "@/components/ui/image";
import { ArrowDownRight, ClipboardList, Hand, UserRound } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { WaCta } from "@/components/wa-cta";
import { BrandLogo } from "@/components/brand-logo";
import { Parallax } from "@/components/parallax";

const indicadores = [
  { icon: ClipboardList, label: "Treino personalizado" },
  { icon: Hand, label: "Correção presencial" },
  { icon: UserRound, label: "Acompanhamento próximo" },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      <Parallax
        aria-hidden="true"
        distance={60}
        reverse
        className="pointer-events-none absolute top-10 left-0 hidden lg:block"
      >
        <span className="font-display block text-[6.5rem] leading-none text-secondary uppercase [writing-mode:vertical-rl]">
          Movimento
        </span>
      </Parallax>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pt-10 pb-16 md:px-8 md:pt-16 md:pb-20 lg:grid-cols-12 lg:gap-12 lg:py-20">
        {/* Conteúdo primeiro no mobile */}
        <div className="z-10 flex min-w-0 flex-col items-start lg:col-span-6 lg:pl-10">
          <BrandLogo priority className="rise-in mb-8 h-16 w-auto md:h-20 [animation-delay:0ms]" />

          <p className="editorial-kicker rise-in [animation-delay:100ms]">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            Consultoria presencial
          </p>

          <h1 className="font-display rise-in mt-7 max-w-full text-[2.1rem] leading-[0.95] text-balance uppercase sm:text-5xl lg:text-[3.4rem] xl:text-6xl [animation-delay:180ms]">
            Treine com <span className="text-gold">direção</span>.
            <br />
            Evolua com consistência.
          </h1>

          <p className="rise-in mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg [animation-delay:280ms]">
            Um acompanhamento presencial e personalizado para você treinar com mais segurança,
            aproveitar melhor o seu tempo e construir resultados sustentáveis.
          </p>

          <div className="rise-in mt-9 flex w-full flex-col gap-3 sm:flex-row [animation-delay:380ms]">
            <WaCta variant="solid" className="w-full sm:w-auto">
              Quero começar a treinar
            </WaCta>
            <WaCta variant="outline" className="w-full sm:w-auto">
              Conversar pelo WhatsApp
            </WaCta>
          </div>

          <p className="rise-in mt-4 text-sm text-muted-foreground [animation-delay:460ms]">
            Atendimento individual ou em dupla, conforme disponibilidade.
          </p>

          <ul className="rise-in mt-12 grid w-full border-t border-border sm:grid-cols-3 [animation-delay:540ms]">
            {indicadores.map(({ icon: Icon, label }, index) => (
              <li
                key={label}
                className="group border-b border-border py-5 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0"
              >
                <span className="mb-3 flex items-center justify-between">
                  <Icon className="size-4 text-gold" aria-hidden="true" />
                  <span className="text-[10px] text-muted-foreground">0{index + 1}</span>
                </span>
                <span className="block text-sm font-medium leading-tight">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fotografia */}
        <div className="rise-in relative w-full lg:col-span-6 lg:flex lg:justify-end [animation-delay:320ms]">
          <div className="absolute -top-4 left-0 hidden h-24 w-24 border-t border-l border-gold lg:block" />
          <div className="editorial-photo editorial-figure group relative aspect-[4/5] w-full max-w-[34rem] overflow-hidden bg-secondary">
            <Parallax distance={70} scale={0.08} className="absolute inset-0">
              <Image
                src={siteConfig.fotoHero}
                alt={`${siteConfig.nome}, personal trainer, em ambiente de academia durante o atendimento`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </Parallax>
            <span aria-hidden="true" className="figure-veil" />
          </div>
          <div className="absolute right-0 bottom-8 flex max-w-[82%] items-center gap-4 border-l-4 border-gold bg-card px-6 py-5 shadow-xl md:right-[-1rem]">
            <BrandLogo variant="monogram" decorative className="h-11 w-auto shrink-0" />
            <span className="min-w-0">
              <span className="font-signature block truncate text-2xl leading-none">
                {siteConfig.nome}
              </span>
              <span className="mt-1.5 block text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Consultoria | Treinamento
              </span>
            </span>
          </div>
          <a
            href="#direcao"
            className="absolute -bottom-9 left-0 hidden items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase lg:flex"
          >
            Explorar <ArrowDownRight className="size-4 text-gold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
