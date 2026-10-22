import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  alt: string;
  /** Preenche o container posicionado (equivalente ao `fill` do next/image). */
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

/**
 * Substituto leve do next/image para esta stack (Vite + TanStack Start).
 * Mantém a mesma API usada pelos componentes da página.
 */
export default function Image({
  src,
  alt,
  fill,
  priority,
  className,
  loading,
  ...rest
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : (loading ?? "lazy")}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      className={cn(fill && "absolute inset-0 h-full w-full", className)}
      {...rest}
    />
  );
}
