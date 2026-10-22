import { Building2, CalendarClock, MapPin, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { OrbField, SplitText } from "@/components/flair";
import { Parallax, ScrollRule } from "@/components/parallax";
import { siteConfig } from "@/lib/site-config";

export function Locations() {
  const itens = [
    {
      icon: MapPin,
      titulo: "Região de atendimento",
      texto: `Atendimento presencial em ${siteConfig.cidade} e ${siteConfig.regiao}.`,
    },
    {
      icon: Building2,
      titulo: "Academia ou espaço de treino",
      texto:
        "O treino acontece em ambiente com estrutura adequada aos exercícios do seu planejamento.",
    },
    {
      icon: CalendarClock,
      titulo: "Horários combinados",
      texto:
        "Os dias e horários são definidos na conversa inicial, conforme a disponibilidade de agenda.",
    },
    {
      icon: Users,
      titulo: "Individual ou em dupla",
      texto: "Você pode treinar sozinho ou dividir o horário com alguém de confiança.",
    },
  ];

  return (
    <section id="onde-treinar" className="editorial-section bg-secondary/45">
      <span aria-hidden="true" className="aurora" />
      <OrbField />
      <Parallax
        aria-hidden="true"
        distance={110}
        reverse
        className="pointer-events-none absolute top-0 -right-24 h-80 w-80"
      >
        <span className="blob block h-full w-full bg-gold/12" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal className="max-w-3xl" variant="rise-blur">
          <p className="editorial-kicker">Onde treinar</p>
          <h2 className="font-display mt-7 max-w-4xl text-4xl leading-[0.98] text-balance uppercase md:text-6xl">
            <SplitText text="Estrutura, região e" /> <span className="text-shine">logística</span>.
          </h2>
          <ScrollRule className="mt-6" />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {itens.map(({ icon: Icon, titulo, texto }, i) => (
            <Reveal as="li" key={titulo} delay={i * 80} variant="rotate">
              <div className="group editorial-card flex h-full items-start gap-5 p-8">
                <span className="icon-orb size-12 shrink-0">
                  <Icon className="size-5 text-gold" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight uppercase">
                    {titulo}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{texto}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Vagas e horários estão sujeitos à disponibilidade da agenda.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
