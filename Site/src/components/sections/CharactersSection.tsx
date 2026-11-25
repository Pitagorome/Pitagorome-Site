import { ChapterHeader, SectionTitle } from "@/components/site/PageHero";
import { CharacterSprites, Sprite, TileFill } from "@/components/site/Pixel";
import { Reveal } from "@/components/site/Reveal";
import { CHARACTERS, DIRECTOR_LOOKS, shots, tiles } from "@/lib/game-content";

export function CharactersSection() {
  return (
    <>
      <ChapterHeader id="personagens" eyebrow="Personagens" title="Quem você encontra na escola">
        Vaga de malabarista, preenchida. Astronauta, também. Até que um anúncio no jornal chamou a
        atenção: a Escola Pitagórica procurava alguém que gostasse de lógica e matemática.
      </ChapterHeader>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionTitle eyebrow="A história" title="O diretor anterior foi demitido">
            Os pais reclamavam, os horários não fechavam e ninguém achava nada no almoxarifado. A
            Secretaria de Educação demitiu o Diretor Otávio, e a Coordenadora pôs um anúncio no
            jornal. Na manhã seguinte, você chega ao portão: "Quantos problemas uma escola pode ter,
            afinal?"
          </SectionTitle>
        </div>
        <figure className="overflow-hidden rounded-2xl border-4 border-panel-border shadow-pixel-lg">
          <img
            src={shots.escolaConceito}
            alt="A Coordenadora recebe o novo diretor no gabinete"
            className="pixelated w-full"
            width={1227}
            height={679}
          />
        </figure>
      </section>

      <section className="relative">
        <TileFill src={tiles.pisosAzulejoAzul} w={48} h={32} scale={3} className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CHARACTERS.map((c) => (
                <article key={c.name} className="panel flex flex-col p-6">
                  <div className="flex h-36 items-end justify-center rounded-lg bg-secondary/60">
                    {c.sheets?.length ? (
                      <CharacterSprites
                        sheets={c.sheets}
                        scale={4}
                        label={c.name}
                        className="pb-2"
                      />
                    ) : (
                      <span className="mb-10 font-display text-5xl text-secondary-foreground/40">
                        ?
                      </span>
                    )}
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-highlight">
                    {c.role}
                  </p>
                  <h3 className="mt-1 text-2xl text-card-foreground">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  {c.quote && (
                    <blockquote className="mt-4 border-l-4 border-accent pl-3 text-sm italic text-card-foreground/80">
                      “{c.quote}”
                    </blockquote>
                  )}
                </article>
              ))}
            </Reveal>
          </div>
        </TileFill>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="Você" title="Escolha sua aparência">
          Antes do tour, escolha nome, se é diretor ou diretora e um dos 13 visuais do jogo. Entre
          eles estão os integrantes da equipe, alguns com farda e roupa de trabalho.
        </SectionTitle>
        <Reveal className="stagger mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {DIRECTOR_LOOKS.map((l) => (
            <figure key={l.label} className="panel flex flex-col items-center p-4 md:p-6">
              <div className="flex h-36 items-end">
                <Sprite sheet={l.sheet} scale={4} label={`Aparência do diretor: ${l.label}`} />
              </div>
              <figcaption className="mt-3 text-center font-display text-sm text-highlight">
                {l.label}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </section>
    </>
  );
}
