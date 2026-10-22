import { defineMcp } from '@lovable.dev/mcp-js'

import getContactInfo from './tools/get-contact-info'
import listServices from './tools/list-services'
import searchFaq from './tools/search-faq'

export default defineMcp({
  name: 'gilvan-gustavo-sua-jornada-fitness',
  title: 'Gilvan Gustavo: Sua Jornada Fitness',
  version: '0.1.0',
  instructions:
    'Ferramentas com o conteúdo público do site do personal trainer Gilvan Gustavo. Use `get_contact_info` para contato/WhatsApp e área de atendimento, `list_services` para formatos, especialidades e passos iniciais, e `search_faq` para perguntas frequentes. O site não divulga valores.',
  tools: [getContactInfo, listServices, searchFaq],
})
