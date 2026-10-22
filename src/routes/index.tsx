import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { BrandStrip } from "@/components/brand-strip";
import { Problem } from "@/components/problem";
import { Benefits } from "@/components/benefits";
import { Comparison } from "@/components/comparison";
import { Method } from "@/components/method";
import { About } from "@/components/about";
import { Audience } from "@/components/audience";
import { Specialties } from "@/components/specialties";
import { Formats } from "@/components/formats";
import { Locations } from "@/components/locations";
import { Steps } from "@/components/steps";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { PointerGlow } from "@/components/pointer-glow";

import { siteConfig } from "@/lib/site-config";
import { perguntasFrequentes } from "@/lib/faq-data";

const SITE_URL = siteConfig.url;
const OG_IMAGE = `${SITE_URL}${siteConfig.fotoHero}`;

const TITLE = `Personal Trainer em ${siteConfig.cidade} | ${siteConfig.nome}`;
const DESCRIPTION =
  `Personal trainer em ${siteConfig.cidade} e ${siteConfig.regiao}: treino presencial individual ou em dupla, com planejamento, correção técnica e acompanhamento próximo. Fale pelo WhatsApp.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content: [
          `Personal trainer em ${siteConfig.cidade}`,
          `Consultoria presencial em ${siteConfig.cidade}`,
          `Treinamento individual em ${siteConfig.cidade}`,
          `Personal trainer para treino em dupla em ${siteConfig.cidade}`,
        ].join(", "),
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: siteConfig.nome },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: `${siteConfig.nome}, personal trainer em ${siteConfig.cidade}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      {
        rel: "preload",
        as: "image",
        href: siteConfig.fotoHero,
        type: "image/webp",
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: `${SITE_URL}/`,
              name: siteConfig.nome,
              inLanguage: "pt-BR",
              description: DESCRIPTION,
              publisher: { "@id": `${SITE_URL}/#business` },
            },
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/#webpage`,
              url: `${SITE_URL}/`,
              name: TITLE,
              description: DESCRIPTION,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              primaryImageOfPage: OG_IMAGE,
              about: { "@id": `${SITE_URL}/#business` },
            },
            {
              "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "SportsActivityLocation"],
              "@id": `${SITE_URL}/#business`,
              name: siteConfig.nome,
              description: DESCRIPTION,
              url: `${SITE_URL}/`,
              image: OG_IMAGE,
              priceRange: "$$",
              areaServed: [
                { "@type": "City", name: siteConfig.cidade },
                { "@type": "Place", name: siteConfig.regiao },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.cidade,
                addressRegion: "MG",
                addressCountry: "BR",
              },
              sameAs: [`https://instagram.com/${siteConfig.instagram.replace("@", "")}`],
              founder: { "@id": `${SITE_URL}/#gilvan` },
              knowsAbout: [
                "Personal trainer",
                "Consultoria presencial",
                "Treinamento individual",
                "Treinamento em dupla",
                "Hipertrofia",
                "Emagrecimento",
                "Mobilidade",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Formatos de acompanhamento",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Treinamento presencial individual",
                      serviceType: "Personal trainer",
                      areaServed: siteConfig.cidade,
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Treinamento presencial em dupla",
                      serviceType: "Personal trainer",
                      areaServed: siteConfig.cidade,
                    },
                  },
                ],
              },
            },
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#gilvan`,
              name: siteConfig.nome,
              jobTitle: "Personal trainer",
              image: OG_IMAGE,
              url: `${SITE_URL}/`,
              worksFor: { "@id": `${SITE_URL}/#business` },
              sameAs: [`https://instagram.com/${siteConfig.instagram.replace("@", "")}`],
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/#faq`,
              mainEntity: perguntasFrequentes.map((item) => ({
                "@type": "Question",
                name: item.pergunta,
                acceptedAnswer: { "@type": "Answer", text: item.resposta },
              })),
            },
          ],
        }),
      },
    ],
  }),

  component: Page,
});

function Page() {
  return (
    <>
      <PointerGlow />
      <a
        href="#conteudo"
        className="sr-only rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Ir para o conteúdo
      </a>
      <SiteHeader />

      <main id="conteudo">

        <Hero />
        <BrandStrip />
        <Problem />
        <Benefits />
        <Comparison />
        <Method />
        <Specialties />
        <About />
        <Audience />
        <Formats />
        <Locations />
        <Steps />
        <Testimonials />

        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingWhatsapp />
    </>
  );
}
