import { defineTool } from '@lovable.dev/mcp-js'
import { z } from 'zod'

import { siteConfig, whatsappLink } from '@/lib/site-config'
import { SITE_URL } from '../data'

export default defineTool({
  name: 'get_contact_info',
  title: 'Contato e área de atendimento',
  description:
    'Retorna o contato público de Gilvan Gustavo (link de WhatsApp, Instagram), a cidade e a região atendida, e monta o link de WhatsApp com uma mensagem opcional.',
  inputSchema: {
    mensagem: z
      .string()
      .trim()
      .min(1)
      .max(500)
      .optional()
      .describe('Mensagem opcional para pré-preencher a conversa no WhatsApp.'),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ mensagem }) => {
    const info = {
      nome: siteConfig.nome,
      tagline: siteConfig.tagline,
      cidade: siteConfig.cidade,
      regiao: siteConfig.regiao,
      instagram: siteConfig.instagram,
      instagramUrl: `https://instagram.com/${siteConfig.instagram.replace('@', '')}`,
      whatsappUrl: mensagem ? whatsappLink(mensagem) : whatsappLink(),
      site: `${SITE_URL}/`,
    }
    return {
      content: [{ type: 'text', text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    }
  },
})
