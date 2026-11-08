import { useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/hero-cake.jpg";
import feiraImg from "@/assets/feira-ingredientes.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { depoimentos, doces, faq, festas, galeria, waLink, WHATSAPP_DISPLAY } from "./data";

/* ---------- primitives ---------- */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] ${dark ? "text-neon-purple" : "text-neon-pink"}`}>
      <span className="h-px w-8 bg-current" aria-hidden />
      {children}
    </p>
  );
}

function WaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-neon-pink" fill="currentColor" aria-hidden>
      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  );
}

const btnPink =
  "inline-flex items-center justify-center gap-2 rounded-full bg-neon-pink px-7 py-4 text-sm font-semibold text-night glow-pink transition-transform hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-cream/70 px-7 py-4 text-sm font-semibold text-cream backdrop-blur-md transition-colors hover:bg-cream/10";

/* ---------- bubbles ---------- */
const bubbles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  size: 12 + ((i * 23) % 60),
  dur: 22 + ((i * 7) % 20),
  delay: -((i * 5) % 30),
}));
export function Bubbles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{ left: b.left, bottom: -80, width: b.size, height: b.size, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }}
        />
      ))}
    </div>
  );
}

/* ---------- nav ---------- */
const links = [
  ["Doces", "#doces"],
  ["Apiaí", "#apiai"],
  ["Festas", "#festas"],
  ["Galeria", "#galeria"],
  ["Dúvidas", "#faq"],
];
export function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="glass fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 items-center justify-between rounded-full bg-night/40 py-2 pl-5 pr-2"
      aria-label="Principal"
    >
      <a href="#topo" className="font-display text-lg italic text-cream">
        Carla <span className="text-neon">Confeitaria</span>
      </a>
      <ul className="hidden gap-6 text-sm text-cream/85 md:flex">
        {links.map(([l, h]) => (
          <li key={h}><a href={h} className="transition-colors hover:text-neon-pink">{l}</a></li>
        ))}
      </ul>
      <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-neon-pink px-4 py-2 text-xs font-semibold text-night glow-pink">
        <WaIcon className="h-4 w-4" /> Encomendar
      </a>
    </motion.nav>
  );
}

/* ---------- 1 hero ---------- */
export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  return (
    <header id="topo" ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Bolo artístico flutuando num céu rosa e lilás com bolhas de vidro, sobre as montanhas do Vale do Ribeira"
        width={1920}
        height={1088}
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-night" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-night via-night/60 to-transparent" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:pb-24">
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
          className="mb-5 text-xs uppercase tracking-[0.35em] text-cream/90"
        >
          Apiaí · Vale do Ribeira · agenda da semana aberta
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-5xl font-normal italic leading-[0.95] text-cream sm:text-7xl md:text-8xl"
        >
          Bolos que viram memória, <span className="text-neon not-italic font-semibold">feitos em Apiaí</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 max-w-lg text-lg text-cream/90"
        >
          Confeitaria artesanal no coração do Vale do Ribeira. Bolos caseiros e salgados que fazem todo mundo perguntar: "quem fez?"
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a href={waLink()} target="_blank" rel="noreferrer" className={btnPink}>
            <WaIcon /> Encomendar pelo WhatsApp
          </a>
          <a href="#doces" className={btnOutline}>Ver cardápio</a>
        </motion.div>
      </div>
    </header>
  );
}

/* ---------- 2 doces ---------- */
export function Doces() {
  return (
    <section id="doces" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <Eyebrow>Nossos doces</Eyebrow>
        <h2 className="max-w-2xl text-4xl italic leading-tight text-cream md:text-6xl">
          Bolo caseiro e salgado de Apiaí. <span className="text-neon not-italic">Do jeito que você lembra.</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid auto-rows-[300px] grid-cols-1 gap-5 md:grid-flow-dense md:grid-cols-4">
        {doces.map((d, i) => (
          <Reveal key={d.nome} delay={i * 0.08} className={d.span}>
            <motion.article
              whileHover={{ y: -6 }}
              className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl transition-shadow duration-500 hover:glow-pink"
            >
              <img src={d.img} alt={d.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" aria-hidden />
              <div className="glass relative mx-3 mb-3 mt-auto flex flex-wrap items-end justify-between gap-x-4 gap-y-2 rounded-2xl bg-night/40 p-4">
                <div>
                  <h3 className="text-2xl italic text-cream">{d.nome}</h3>
                  <p className="mt-1 text-sm text-cream/75">{d.desc}</p>
                </div>
                <p className="shrink-0 rounded-full bg-neon-pink px-3 py-1 text-xs font-semibold text-night">{d.tag}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- 3 apiaí ---------- */
export function Apiai() {
  return (
    <section id="apiai" className="relative z-10 bg-gradient-to-b from-lavender via-peach to-lavender py-24 text-cream md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <Eyebrow dark>Feito em Apiaí</Eyebrow>
          <h2 className="text-4xl italic leading-tight md:text-6xl">Começou numa barraca de feira.</h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-cream/85">
            <p>
              A Carla começou fazendo bolo de milho pra feira de Apiaí, embrulhado em pano de prato, ainda morno. O povo voltava no sábado seguinte perguntando pelo "bolo da Carla".
            </p>
            <p>
              Hoje atende toda a região do Vale do Ribeira — Apiaí, Capão Bonito, Itaoca e Ribeira — com ingredientes da terra: banana da baixada, milho verde, goiabada cascão, mandioca e palmito de produtor local. Cultura caipira, sem pressa e sem conservante.
            </p>
          </div>
          <blockquote className="glass-light mt-10 rounded-3xl p-7">
            <p className="font-display text-2xl italic leading-snug md:text-3xl">
              "A gente faz doce com o que a terra dá — banana, milho, goiaba, mandioca. Receita de vó, tempero de Apiaí."
            </p>
            <footer className="mt-4 text-sm font-medium text-neon-purple">— Carla</footer>
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-neon opacity-40 blur-2xl" aria-hidden />
            <img src={feiraImg} alt="Banca de feira rural com bananas, milho, goiabada, mandioca e palmito" loading="lazy" width={1024} height={1280} className="relative aspect-[4/5] w-full rounded-[2rem] object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 4 festas ---------- */
export function Festas() {
  return (
    <section id="festas" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <Eyebrow>Encomende para sua festa</Eyebrow>
        <h2 className="max-w-2xl text-4xl italic leading-tight text-cream md:text-6xl">Sua festa sem dor de cabeça. Vagas limitadas por semana.</h2>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {festas.map((f, i) => (
          <Reveal key={f.titulo} delay={i * 0.12} className={i === 1 ? "md:translate-y-12" : ""}>
            <motion.a
              href={waLink(`Olá, Carla! Quero orçamento para: ${f.titulo}.`)}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="group relative block h-[440px] overflow-hidden rounded-3xl"
            >
              <img src={f.img} alt={f.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="bg-card-overlay absolute inset-0" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-4xl italic text-night">{f.titulo}</h3>
                <p className="mt-2 text-sm text-night/90">{f.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-night">
                  Pedir orçamento
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- 5 galeria ---------- */
export function Galeria() {
  return (
    <section id="galeria" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <Eyebrow>Mural da cozinha</Eyebrow>
        <h2 className="text-4xl italic leading-tight text-cream md:text-6xl">Feito essa semana pra festas de Apiaí</h2>
      </Reveal>
      <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-3">
        {galeria.map((g, i) => (
          <Reveal key={g.nome} delay={i * 0.06} className={g.span}>
            <motion.figure
              whileHover={{ scale: 1.04, zIndex: 10 }}
              className={`group relative h-full overflow-hidden rounded-2xl ${i % 2 ? "rotate-1" : "-rotate-1"}`}
            >
              <img src={g.img} alt={g.nome} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-night/90 to-transparent p-4 font-display text-lg italic text-cream transition-transform duration-500 group-hover:translate-y-0">
                {g.nome}
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- 6 depoimentos ---------- */
export function Depoimentos() {
  const [i, setI] = useState(0);
  const d = depoimentos[i] ?? depoimentos[0]!;
  const go = (n: number) => setI((n + depoimentos.length) % depoimentos.length);
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center md:py-32" aria-roledescription="carrossel">
      <Reveal>
        <Eyebrow>Quem provou</Eyebrow>
        <h2 className="text-4xl italic text-cream md:text-5xl">Quem prova, volta. E indica.</h2>
      </Reveal>
      <div className="glass relative mt-12 min-h-[300px] rounded-[2rem] p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.figure key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-center gap-1" aria-label="5 de 5 estrelas">{[0, 1, 2, 3, 4].map((s) => <Star key={s} />)}</div>
            <blockquote className="mt-6 font-display text-2xl italic leading-snug text-cream md:text-3xl">"{d.texto}"</blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-3">
              <img src={d.img} alt={`Foto de ${d.nome}`} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-neon-pink" />
              <span className="text-left text-sm text-cream"><strong className="font-semibold">{d.nome}</strong><br /><span className="text-cream/70">{d.local}</span></span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button onClick={() => go(i - 1)} aria-label="Depoimento anterior" className="glass rounded-full p-3 text-cream hover:glow-pink">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        {depoimentos.map((_, n) => (
          <button key={n} onClick={() => setI(n)} aria-label={`Depoimento ${n + 1}`} className={`h-2 rounded-full transition-all ${n === i ? "w-8 bg-neon-pink" : "w-2 bg-cream/40"}`} />
        ))}
        <button onClick={() => go(i + 1)} aria-label="Próximo depoimento" className="glass rounded-full p-3 text-cream hover:glow-pink">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </section>
  );
}

/* ---------- 7 faq ---------- */
export function Faq() {
  return (
    <section id="faq" className="relative z-10 mx-auto max-w-3xl px-5 py-24 md:py-32">
      <Reveal>
        <Eyebrow>Dúvidas</Eyebrow>
        <h2 className="text-4xl italic text-cream md:text-5xl">Pergunta que a gente sempre ouve</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="glass mt-10 rounded-3xl px-6">
          {faq.map((f, n) => (
            <AccordionItem key={f.q} value={`f${n}`} className="border-cream/15 last:border-0">
              <AccordionTrigger className="py-5 text-left font-display text-lg italic text-cream hover:no-underline md:text-xl">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-cream/80">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

/* ---------- 8 cta ---------- */
export function CtaFinal() {
  return (
    <section className="relative z-10 px-5 py-16">
      <Reveal className="bg-neon relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-20 text-center md:py-28">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-peach/40 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-neon-purple/50 blur-3xl" aria-hidden />
        <h2 className="relative mx-auto max-w-3xl text-5xl italic leading-[1] text-night md:text-7xl">Pronto pra encomendar seu doce?</h2>
        <p className="relative mt-6 text-night/95">A agenda do fim de semana fecha rápido. Garanta sua data: {WHATSAPP_DISPLAY}</p>
        <a href={waLink()} target="_blank" rel="noreferrer" className="relative mt-10 inline-flex items-center gap-3 rounded-full bg-whatsapp px-9 py-5 text-base font-semibold text-cream glow-green transition-transform hover:scale-105">
          <WaIcon className="h-6 w-6" /> Falar com a Carla
        </a>
      </Reveal>
    </section>
  );
}

/* ---------- 9 footer ---------- */
export function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-16">
      <div className="flex flex-col gap-10 border-t border-cream/15 pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-neon font-display text-4xl italic md:text-5xl">Carla Confeitaria</p>
          <p className="mt-3 text-sm text-cream/75">Confeitaria artesanal do Vale do Ribeira</p>
        </div>
        <ul className="grid gap-2 text-sm text-cream/80 sm:grid-cols-2 sm:gap-x-12">
          <li>Apiaí - SP</li>
          <li>Seg a Sáb, 8h às 18h</li>
          <li><a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-neon-pink">Instagram @carlaconfeitaria</a></li>
          <li><a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-neon-pink">WhatsApp {WHATSAPP_DISPLAY}</a></li>
        </ul>
      </div>
      <p className="mt-10 text-xs text-cream/60">© 2026 Carla Confeitaria. Feito com carinho em Apiaí.</p>
    </footer>
  );
}
