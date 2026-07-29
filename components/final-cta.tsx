import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { WaCta } from '@/components/wa-cta'
import { siteConfig } from '@/lib/site-config'

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink text-ink-foreground">
      <div aria-hidden="true" className="absolute inset-0 opacity-15">
        <Image
          src={siteConfig.fotoOrientando}
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gold/50"
      />

      <div className="relative mx-auto w-full max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            Próximo passo
          </p>
          <h2 className="font-display mt-6 pb-1 text-3xl leading-[1.16] font-semibold tracking-tight text-balance uppercase md:text-5xl">
            Seu próximo passo pode começar com uma <span className="text-gold">conversa</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/80 md:text-lg">
            Conte para {siteConfig.nome.split(' ')[0]} qual é o seu objetivo e descubra como o
            acompanhamento presencial pode fazer parte da sua rotina.
          </p>

          <div className="mt-9 flex justify-center">
            <WaCta variant="gold" className="w-full px-8 py-4 text-base sm:w-auto">
              Falar com {siteConfig.nome.split(' ')[0]} no WhatsApp
            </WaCta>
          </div>

          <p className="mt-5 text-sm text-ink-foreground/75">
            Sem formulário e sem compromisso. Atendimento direto pelo WhatsApp.
          </p>
          <p className="mt-2 text-sm text-gold/85">Vagas e horários sujeitos à disponibilidade.</p>
        </Reveal>
      </div>
    </section>
  )
}
