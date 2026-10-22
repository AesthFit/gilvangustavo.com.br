import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site-config";
import { WhatsappIcon } from "@/components/whatsapp-icon";

type WaCtaProps = {
  children: ReactNode;
  /** Mensagem pré-preenchida. Omita para usar a mensagem padrão. */
  mensagem?: string;
  variant?: "solid" | "outline" | "gold" | "light";
  className?: string;
  withIcon?: boolean;
};

const base =
  "press group/cta inline-flex min-h-12 items-center justify-center gap-2.5 rounded-sm border px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-300";

const variants = {
  solid:
    "border-primary bg-primary text-primary-foreground hover:border-gold hover:bg-gold hover:text-foreground",
  outline: "border border-foreground/25 text-foreground hover:border-gold hover:bg-secondary",
  gold: "border-gold bg-gold text-ink hover:bg-background",
  light:
    "border-ink-foreground bg-ink-foreground text-ink hover:bg-transparent hover:text-ink-foreground",
} as const;

export function WaCta({
  children,
  mensagem,
  variant = "solid",
  className,
  withIcon = true,
}: WaCtaProps) {
  return (
    <a
      href={whatsappLink(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
    >
      {withIcon ? (
        <WhatsappIcon className="size-5 shrink-0 transition-transform duration-500 group-hover/cta:-rotate-12 group-hover/cta:scale-110" />
      ) : null}

      <span>{children}</span>
    </a>
  );
}
