import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type MemoryPhoto = { url: string };

export function MemoryCarousel({ photos, captions, onOpen }: {
  photos: readonly MemoryPhoto[];
  captions: readonly string[];
  onOpen: (index: number) => void;
}) {
  const [viewportRef, api] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    duration: 35,
    dragFree: false,
    watchDrag: true,
  });
  const [active, setActive] = useState(0);
  const select = useCallback(() => { if (api) setActive(api.selectedScrollSnap()); }, [api]);
  useEffect(() => {
    if (!api) return;
    select();
    api.on("select", select).on("reInit", select);
    return () => { api.off("select", select).off("reInit", select); };
  }, [api, select]);
  function go(index: number) {
    api?.scrollTo(index, window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }
  function keyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") { event.preventDefault(); go(Math.max(0, active - 1)); }
    if (event.key === "ArrowRight") { event.preventDefault(); go(Math.min(photos.length - 1, active + 1)); }
  }
  return <div className="memory-carousel">
    <div className="memory-viewport" ref={viewportRef} role="region" aria-roledescription="carousel" aria-label="Wedding memories" tabIndex={0} onKeyDown={keyDown}>
      <div className="memory-track">
        {photos.map((photo, index) => <article className="memory-slide" data-active={index === active} data-memory-slide={index} key={photo.url} aria-label={`Memory ${index + 1} of ${photos.length}`}>
          <Button variant="weddingGhost" className="memory-image-button" aria-label={`Open photo: ${captions[index] ?? "Wedding memory"}`} onClick={() => onOpen(index)}>
            <img src={photo.url} alt={captions[index] ?? "Akshay and Sandhya"} loading="lazy" draggable={false} />
          </Button>
          <p className="memory-caption">{captions[index]}</p>
        </article>)}
      </div>
    </div>
    <div className="memory-controls" aria-label="Memory carousel controls">
      <Button variant="weddingGhost" className="memory-arrow" aria-label="Previous memory" title="Previous memory" disabled={active === 0} onClick={() => go(active - 1)}><ChevronLeft /></Button>
      <div className="memory-pagination">{photos.map((photo, index) => <Button variant="weddingGhost" className="memory-dot" key={photo.url} aria-label={`Go to memory ${index + 1}`} aria-current={active === index ? "true" : undefined} onClick={() => go(index)}><span /></Button>)}</div>
      <Button variant="weddingGhost" className="memory-arrow" aria-label="Next memory" title="Next memory" disabled={active === photos.length - 1} onClick={() => go(active + 1)}><ChevronRight /></Button>
    </div>
    <p className="memory-counter" aria-live="polite"><span>{captions[active]}</span><span>{String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span></p>
  </div>;
}
