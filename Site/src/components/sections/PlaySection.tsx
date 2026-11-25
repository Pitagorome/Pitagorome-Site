import { ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChapterHeader, SectionTitle } from "@/components/site/PageHero";
import { Downloads } from "@/components/site/Downloads";
import { Reveal } from "@/components/site/Reveal";
import { Sprite, TileFill } from "@/components/site/Pixel";
import { CONTROLS, PLAY_ONLINE_URL, sprites, tiles } from "@/lib/game-content";

export function PlaySection() {
  return (
    <>
      <ChapterHeader id="jogar" eyebrow="Jogar agora" title="A diretoria está esperando por você">
        Jogue online, sem instalar nada. Três trimestres, quinze problemas e uma escola inteira
        contando com você.
      </ChapterHeader>

      <section className="relative">
        <TileFill src={tiles.pisosMadeiraClara} w={16} h={16} scale={4} className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="panel relative overflow-hidden p-8 md:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
                <div>
                  <p className="font-display text-sm uppercase tracking-[0.2em] text-highlight">
                    Versão online
                  </p>
                  <h2 className="mt-2 text-3xl text-card-foreground md:text-5xl">
                    Assuma a diretoria agora
                  </h2>
                  <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                    Comece pela historinha, crie seu diretor ou diretora e resolva os problemas da
                    Escola Pitagórica com lógica, equações e funções.
                  </p>
                  <Button asChild variant="game" size="lg" className="mt-8 h-14 px-8 text-lg">
                    <a href={PLAY_ONLINE_URL} target="_blank" rel="noreferrer">
                      <Play /> Jogar online <ExternalLink className="opacity-70" />
                    </a>
                  </Button>
                  <p className="mt-3 text-sm text-muted-foreground">Abre em uma nova aba.</p>
                </div>

                <div className="rounded-2xl bg-secondary/60 p-6">
                  <p className="font-display text-sm uppercase tracking-[0.2em] text-highlight">
                    Controles
                  </p>
                  <div className="mt-4 space-y-3">
                    {CONTROLS.map((c) => (
                      <div key={c.action} className="flex flex-wrap items-center gap-2.5">
                        <div className="flex gap-1.5">
                          {c.keys.map((k) => (
                            <kbd
                              key={k}
                              className="min-w-9 rounded-md border-[3px] border-b-[5px] border-panel-border bg-card px-2 py-0.5 text-center font-display text-xs text-card-foreground"
                            >
                              {k}
                            </kbd>
                          ))}
                        </div>
                        <span className="text-sm font-medium text-card-foreground">{c.action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-20">
              <div className="panel mb-10 flex flex-wrap items-end justify-between gap-6 p-6 md:p-8">
                <SectionTitle eyebrow="Para baixar" title="Versões para o computador">
                  Pacotes para jogar sem internet no Windows, no macOS e no Linux.
                </SectionTitle>
                <Sprite sheet={sprites.adamIdle} scale={4} label="Diretor" />
              </div>
              <Downloads />
            </Reveal>
          </div>
        </TileFill>
      </section>
    </>
  );
}
