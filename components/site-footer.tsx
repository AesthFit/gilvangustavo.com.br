import { AtSign, MapPin } from 'lucide-react'
import { siteConfig, whatsappLink } from '@/lib/site-config'
import { WhatsappIcon } from '@/components/whatsapp-icon'

const seoLocal = [
  `Personal trainer em ${siteConfig.cidade}`,
  `Consultoria presencial em ${siteConfig.cidade}`,
  `Treinamento individual em ${siteConfig.cidade}`,
  `Personal trainer para treino em dupla em ${siteConfig.cidade}`,
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pb-24 md:pb-10">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-signature text-3xl leading-none">{siteConfig.nome}</p>
            <p className="mt-3 text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Consultoria | Treinamento | Resultados
            </p>
            <p className="mt-5 flex items-center gap-2 text-base text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-gold" aria-hidden="true" />
              Atendimento em {siteConfig.regiao}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 text-base font-medium transition-colors hover:text-gold"
            >
              <WhatsappIcon className="size-5 text-gold" />
              Falar com {siteConfig.nome.split(' ')[0]} no WhatsApp
            </a>
            <a
              href={`https://instagram.com/${siteConfig.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 text-base font-medium transition-colors hover:text-gold"
            >
              <AtSign className="size-5 text-gold" aria-hidden="true" />
              {siteConfig.instagram}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Atendimento
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {seoLocal.map((item) => (
              <li key={item} className="text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.nome}. Os resultados variam conforme a
            frequência, o histórico e as características de cada pessoa.
          </p>
        </div>
      </div>
    </footer>
  )
}
