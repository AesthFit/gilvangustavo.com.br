import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { Benefits } from '@/components/benefits'
import { Comparison } from '@/components/comparison'
import { Method } from '@/components/method'
import { About } from '@/components/about'
import { Audience } from '@/components/audience'
import { Formats } from '@/components/formats'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWhatsapp } from '@/components/floating-whatsapp'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Comparison />
        <Method />
        <About />
        <Audience />
        <Formats />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingWhatsapp />
    </>
  )
}
