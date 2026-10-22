/**
 * ARQUIVO DE CONFIGURAÇÃO — edite apenas aqui.
 * Todos os dados de contato, cidade e links da página vêm deste arquivo.
 */

export const siteConfig = {
  url: 'https://gilvangustavo.com.br',
  nome: 'Gilvan Gustavo',
  tagline: 'Consultoria • Treinamento • Resultados',

  // Somente números, com código do país (55) e DDD. Ex.: 5531999999999
  whatsapp: '5531992931470',

  // Cidade e região de atendimento
  cidade: 'Betim',
  regiao: 'Belo Horizonte e região',

  // Instagram (apenas o @, sem link)
  instagram: '@gilvangustavo',

  // Imagens (substitua os arquivos em /public mantendo os nomes)
  fotoHero: '/fotos/gilvan-hero.webp',
  fotoOrientando: '/fotos/gilvan-orientando.webp',
  fotoPlanejamento: '/fotos/gilvan-planejamento.webp',

  // Formação e experiência — INSERIR APENAS INFORMAÇÕES REAIS.
  // Deixe o array vazio para ocultar a área automaticamente.
  formacao: [] as string[],

  // Prova social — a seção só aparece quando houver depoimentos reais.
  depoimentos: [] as {
    nome: string
    contexto: string
    tempo: string
    texto: string
    foto?: string
  }[],
} as const

const MENSAGEM_PADRAO =
  'Olá, Gilvan! Conheci seu trabalho pelo site e quero entender qual formato de acompanhamento é mais adequado para mim.'

export function whatsappLink(mensagem: string = MENSAGEM_PADRAO) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(mensagem)}`
}
