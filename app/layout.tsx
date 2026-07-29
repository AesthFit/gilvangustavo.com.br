import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Italianno, Oswald } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', display: 'swap' })
const italianno = Italianno({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-signature',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${siteConfig.nome} | Personal Trainer e Consultoria Presencial`,
  description:
    'Treinamento presencial personalizado, com planejamento, correção técnica e acompanhamento próximo. Fale com Gilvan Gustavo pelo WhatsApp.',
  keywords: [
    `Personal trainer em ${siteConfig.cidade}`,
    `Consultoria presencial em ${siteConfig.cidade}`,
    `Treinamento individual em ${siteConfig.cidade}`,
    `Personal trainer para treino em dupla em ${siteConfig.cidade}`,
  ],
  generator: 'v0.app',
  openGraph: {
    title: `${siteConfig.nome} | Personal Trainer e Consultoria Presencial`,
    description:
      'Treinamento presencial personalizado, com planejamento, correção técnica e acompanhamento próximo.',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f1e9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`bg-background ${inter.variable} ${oswald.variable} ${italianno.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
