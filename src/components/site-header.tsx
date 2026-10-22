import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { WaCta } from "@/components/wa-cta";
import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "@/components/parallax";

const links = [
  ["Metodologia", "#metodologia"],
  ["Especialidades", "#especialidades"],
  ["Acompanhamento", "#acompanhamento"],
  ["Formatos", "#formatos"],
  ["Como começar", "#como-comecar"],
  ["Dúvidas", "#faq"],
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled ? "true" : "false"}
      className={cn(
        "sticky top-0 z-40 border-b bg-background/92 backdrop-blur-md transition-all duration-500",
        scrolled ? "border-gold" : "border-border",
      )}
    >
      <div
        className={cn(
          "mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 md:px-8 lg:flex lg:justify-between",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <BrandLogo
            variant="monogram"
            priority
            className={cn("w-auto shrink-0 transition-all duration-500", scrolled ? "h-8" : "h-10")}
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-display truncate text-sm leading-tight text-foreground uppercase md:text-base">
              {siteConfig.nome}
            </span>
            <span className="mt-1 truncate text-[9px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Consultoria | Treinamento
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="nav-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <WaCta variant="solid" className="hidden px-5 text-xs md:inline-flex">
          Falar com Gilvan
        </WaCta>
      </div>

      <ScrollProgress className="transition-none" />
    </header>
  );
}
