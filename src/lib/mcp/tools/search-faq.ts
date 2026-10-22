import { defineTool } from '@lovable.dev/mcp-js'
import { z } from 'zod'

import { perguntasFrequentes } from '@/lib/faq-data'

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
}

export default defineTool({
  name: 'search_faq',
  title: 'Perguntas frequentes',
  description:
    'Retorna as perguntas frequentes públicas do site, opcionalmente filtradas por um termo de busca.',
  inputSchema: {
    termo: z
      .string()
      .trim()
      .min(1)
      .max(120)
      .optional()
      .describe('Termo opcional para filtrar perguntas e respostas.'),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ termo }) => {
    const alvo = termo ? normalize(termo) : undefined
    const itens = perguntasFrequentes.filter(
      (item) =>
        !alvo ||
        normalize(item.pergunta).includes(alvo) ||
        normalize(item.resposta).includes(alvo),
    )
    const payload = { total: itens.length, itens }
    return {
      content: [{ type: 'text', text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    }
  },
})
