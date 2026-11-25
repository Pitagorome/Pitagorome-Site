import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ChapterHeader } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { GALLERY } from "@/lib/game-content";

export function GallerySection() {
  const [open, setOpen] = useState<number | null>(null);
  const item = open === null ? null : GALLERY[open];
  return (
    <>
      <ChapterHeader id="galeria" eyebrow="Galeria" title="A escola, quadro a quadro">
        Capturas reais do jogo. Clique em uma imagem para ampliar.
      </ChapterHeader>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="stagger grid gap-8 md:grid-cols-2">
          {GALLERY.map((g, i) => (
            <button
              key={g.title}
              type="button"
              onClick={() => setOpen(i)}
              className={`group text-left ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <figure className="overflow-hidden rounded-2xl border-4 border-panel-border shadow-pixel transition-transform group-hover:-translate-y-1">
                <img
                  src={g.src}
                  alt={g.text}
                  className="pixelated h-auto w-full"
                  width={1228}
                  height={676}
                  loading="lazy"
                />
              </figure>
              <p className="mt-4 font-display text-xl">{g.title}</p>
              <p className="text-sm text-muted-foreground">{g.text}</p>
            </button>
          ))}
        </Reveal>
      </section>
      <Dialog open={item !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-5xl border-4 border-panel-border bg-card p-3">
          {item && (
            <>
              <DialogTitle className="px-2 pt-1 font-display">{item.title}</DialogTitle>
              <DialogDescription className="px-2">{item.text}</DialogDescription>
              <img src={item.src} alt={item.text} className="pixelated w-full rounded-lg" />
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
