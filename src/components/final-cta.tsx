import Image from "@/components/ui/image";
import { Reveal } from "@/components/reveal";
import { BrandLogo } from "@/components/brand-logo";
import { WaCta } from "@/components/wa-cta";
import { Parallax } from "@/components/parallax";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink text-ink-foreground">
      <Parallax
        aria-hidden="true"
        distance={160}
        scale={0.12}
        className="absolute inset-y-0 right-0 w-full opacity-20 md:w-1/2"
      >
        <Image
          src={siteConfig.fotoOrientando}
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div aria-hidden="true" className="hairline absolute inset-x-10 top-0" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal variant="scale">
          <BrandLogo decorative tone="invert" className="mb-12 h-16 w-auto opacity-95 md:h-20" />
          <p className="editorial-kicker text-gold">Próximo passo</p>

          <h2 className="font-display mt-8 max-w-4xl text-5xl leading-[0.95] text-balance uppercase md:text-7xl">
            Seu próximo passo pode começar com uma <span className="text-gold">conversa</span>.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-foreground/80 md:text-lg">
            Conte para {siteConfig.nome.split(" ")[0]} qual é o seu objetivo e descubra como o
            acompanhamento presencial pode fazer parte da sua rotina.
          </p>

          <div className="mt-10 flex">
            <WaCta variant="gold" className="w-full rounded-sm px-9 py-4 text-base sm:w-auto">
              Falar com {siteConfig.nome.split(" ")[0]} no WhatsApp
            </WaCta>
          </div>

          <p className="mt-5 text-sm text-ink-foreground/75">
            Sem formulário e sem compromisso. Atendimento direto pelo WhatsApp.
          </p>
          <p className="mt-2 text-sm text-gold/85">Vagas e horários sujeitos à disponibilidade.</p>
        </Reveal>
      </div>
    </section>
  );
}
