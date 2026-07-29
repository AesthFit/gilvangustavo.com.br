import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { siteConfig } from '@/lib/site-config'

/**
 * Seção editável de prova social.
 * Fica completamente oculta enquanto não houver depoimentos reais
 * cadastrados em `siteConfig.depoimentos` (lib/site-config.ts).
 */
export function Testimonials() {
  const depoimentos = siteConfig.depoimentos
  if (depoimentos.length === 0) return null

  return (
    <section id="historias" className="paper-texture border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            Prova social
          </p>
          <h2 className="font-display mt-5 text-3xl leading-[1.18] pb-1 font-semibold tracking-tight text-balance uppercase md:text-4xl">
            Histórias construídas com <span className="text-gold">constância</span>.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((item, i) => (
            <Reveal as="li" key={item.nome} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-7">
                {item.foto ? (
                  <div className="relative mb-5 h-40 w-full overflow-hidden rounded-md">
                    <Image
                      src={item.foto}
                      alt={`Foto autorizada de ${item.nome}, aluno acompanhado por ${siteConfig.nome}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <blockquote className="text-base leading-relaxed">{item.texto}</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 text-sm text-muted-foreground">
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
  )
}
