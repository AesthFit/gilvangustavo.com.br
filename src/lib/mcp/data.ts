/** Conteúdo público exposto pelas ferramentas MCP (espelha as seções do site). */
import { siteConfig } from '@/lib/site-config'

export const formatos = [
  {
    titulo: 'Treinamento presencial individual',
    texto:
      'Acompanhamento totalmente direcionado para seus objetivos, necessidades e ritmo de evolução.',
  },
  {
    titulo: 'Treinamento presencial em dupla',
    texto:
      'Uma alternativa para treinar acompanhado, mantendo orientação profissional e atenção à execução.',
  },
] as const

export const especialidades = [
  {
    titulo: 'Hipertrofia',
    texto: 'Estímulo progressivo, volume ajustado e técnica cuidada para ganho de massa muscular.',
  },
  {
    titulo: 'Emagrecimento',
    texto:
      'Treinos que combinam força e condicionamento para sustentar o gasto energético na rotina.',
  },
  {
    titulo: 'Mobilidade e postura',
    texto: 'Trabalho de amplitude, estabilidade e consciência corporal para se mover melhor.',
  },
  {
    titulo: 'Condicionamento físico',
    texto: 'Progressão de resistência cardiorrespiratória para mais disposição no dia a dia.',
  },
  {
    titulo: 'Iniciantes',
    texto: 'Primeiros passos com orientação próxima, adaptação gradual e segurança na execução.',
  },
  {
    titulo: 'Retomada de treino',
    texto: 'Volta à atividade depois de uma pausa, respeitando o histórico e o ritmo atual.',
  },
] as const

export const comoComecar = [
  'Conversa inicial pelo WhatsApp para entender objetivo, rotina e histórico.',
  'Alinhamento do formato de acompanhamento e da agenda de treinos.',
  'Primeiro treino presencial com foco em execução e adaptação.',
  'Acompanhamento contínuo, com ajustes de progressão ao longo do processo.',
] as const

export const SITE_URL = siteConfig.url
