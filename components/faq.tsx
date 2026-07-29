'use client'

import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const perguntas = [
  {
    pergunta: 'Preciso já estar treinando para começar?',
    resposta:
      'Não. O acompanhamento pode ser adaptado tanto para iniciantes quanto para pessoas que já possuem experiência.',
  },
  {
    pergunta: 'Posso fazer uma conversa inicial antes de decidir?',
    resposta:
      'Sim. Você pode entrar em contato pelo WhatsApp, explicar seu objetivo e entender como funciona o acompanhamento.',
  },
  {
    pergunta: 'Existe treinamento individual e em dupla?',
    resposta:
      'Sim. A disponibilidade de cada formato pode ser consultada diretamente com Gilvan.',
  },
  {
    pergunta: 'Preciso ter um parceiro para treinar em dupla?',
    resposta:
      'Não necessariamente. Dependendo dos horários disponíveis, poderá ser avaliada a possibilidade de encaixe com outra pessoa.',
  },
  {
    pergunta: 'O site mostra os valores?',
    resposta:
      'Os formatos, disponibilidade e condições são apresentados diretamente pelo WhatsApp, de acordo com o acompanhamento procurado.',
  },
  {
    pergunta: 'O treinamento é adaptado para iniciantes?',
    resposta:
      'Sim. A proposta é respeitar o nível atual de cada pessoa e construir uma evolução progressiva.',
  },
]

export function Faq() {
  const [aberta, setAberta] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" className="border-t border-border bg-secondary/60">
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
            Perguntas frequentes
          </p>
          <h2 className="font-display mt-5 text-3xl leading-[1.18] pb-1 font-semibold tracking-tight text-balance uppercase md:text-4xl">
            Ainda com <span className="text-gold">dúvidas</span>?
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {perguntas.map((item, i) => {
            const isOpen = aberta === i
            const painelId = `${baseId}-painel-${i}`
            const botaoId = `${baseId}-botao-${i}`

            return (
              <div key={item.pergunta}>
                <h3>
                  <button
                    type="button"
                    id={botaoId}
                    aria-expanded={isOpen}
                    aria-controls={painelId}
                    onClick={() => setAberta(isOpen ? null : i)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-gold"
                  >
                    <span className="text-base font-medium md:text-lg">{item.pergunta}</span>
                    <Plus
                      aria-hidden="true"
                      className={`size-5 shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={painelId}
                  role="region"
                  aria-labelledby={botaoId}
                  hidden={!isOpen}
                  className="pb-6"
                >
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {item.resposta}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
