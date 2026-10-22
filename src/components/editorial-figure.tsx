import Image from "@/components/ui/image";
import { Parallax } from "@/components/parallax";
import { cn } from "@/lib/utils";

type EditorialFigureProps = {
  src: string;
  alt: string;
  /** Legenda editorial exibida sob a imagem. */
  caption?: string;
  /** Índice tipográfico (ex.: "01") no canto da moldura. */
  index?: string;
  /** Proporção do enquadramento. */
  ratio?: "portrait" | "square" | "landscape" | "tall" | "fill";
  sizes?: string;
  priority?: boolean;
  /** Intensidade do paralaxe interno. */
  distance?: number;
  className?: string;
  /** Moldura deslocada em dourado (desativar em grades densas). */
  frame?: boolean;
};

const ratios: Record<string, string> = {
  portrait: "aspect-4/5",
  square: "aspect-square",
  landscape: "aspect-16/10",
  tall: "aspect-[3/4.4]",
  fill: "h-full min-h-56",
};

export function EditorialFigure({
  src,
  alt,
  caption,
  index,
  ratio = "portrait",
  sizes = "(max-width: 1024px) 100vw, 45vw",
  priority = false,
  distance = 70,
  className,
  frame = true,
}: EditorialFigureProps) {
  return (
    <figure className={cn("editorial-figure group relative", className)}>
      {frame ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-3 -left-3 hidden h-full w-full border-t border-l border-gold/45 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 sm:block"
        />
      ) : null}

      <div className={cn("relative overflow-hidden bg-secondary", ratios[ratio])}>
        <Parallax distance={distance} scale={0.08} className="absolute inset-0">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        </Parallax>
        <span aria-hidden="true" className="figure-veil" />
        {index ? (
          <span
            aria-hidden="true"
            className="font-display absolute top-4 left-4 text-xs tracking-[0.3em] text-background/80"
          >
            {index}
          </span>
        ) : null}
      </div>

      {caption ? (
        <figcaption className="mt-4 flex items-start gap-3 text-xs leading-relaxed tracking-[0.14em] text-muted-foreground uppercase">
          <span
            aria-hidden="true"
            className="mt-2 h-px w-6 shrink-0 bg-gold transition-all duration-500 group-hover:w-10"
          />
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
