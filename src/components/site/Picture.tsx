import type { Photo } from "@/assets/images";
import { cn } from "@/lib/utils";

type PictureProps = {
  photo: Photo;
  /** Describe what the photo shows. Pass an empty string only for purely decorative images. */
  alt: string;
  /** How wide the image is displayed, e.g. "(min-width: 1024px) 40vw, 100vw". */
  sizes: string;
  /** Above-the-fold images: load immediately at high priority instead of lazily. */
  priority?: boolean;
  /** Classes for the <img>. It fills its frame and crops by default. */
  className?: string | undefined;
};

/**
 * Responsive photograph: AVIF first, WebP fallback. Width and height are always set so the
 * browser reserves the right space; the surrounding frame decides the visible crop.
 */
export function Picture({ photo, alt, sizes, priority = false, className }: PictureProps) {
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={photo.avif} sizes={sizes} />
      <source type="image/webp" srcSet={photo.webp} sizes={sizes} />
      <img
        src={photo.src}
        alt={alt}
        width={photo.width}
        height={photo.height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn("block size-full object-cover", className)}
      />
    </picture>
  );
}
