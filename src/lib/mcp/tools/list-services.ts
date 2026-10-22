import { defineTool } from '@lovable.dev/mcp-js'
import { z } from 'zod'

import { comoComecar, especialidades, formatos } from '../data'

export default defineTool({
  name: 'list_services',
  title: 'Formatos, especialidades e como começar',
  description:
    'Lista os formatos de acompanhamento presencial, as especialidades atendidas e os passos para começar. Não inclui valores — condições são tratadas na conversa inicial.',
  inputSchema: {
    secao: z
      .enum(['formatos', 'especialidades', 'como_comecar', 'tudo'])
      .default('tudo')
      .describe('Qual parte do conteúdo retornar.'),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ secao }) => {
    const payload = {
      ...(secao === 'formatos' || secao === 'tudo' ? { formatos } : {}),
      ...(secao === 'especialidades' || secao === 'tudo' ? { especialidades } : {}),
      ...(secao === 'como_comecar' || secao === 'tudo' ? { como_comecar: comoComecar } : {}),
      observacao: 'Valores e condições são apresentados na conversa inicial pelo WhatsApp.',
    }
    return {
      content: [{ type: 'text', text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    }
  },
})
