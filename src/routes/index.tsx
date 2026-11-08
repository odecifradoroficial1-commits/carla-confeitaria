import { createFileRoute } from "@tanstack/react-router";
import {
  Apiai, Bubbles, CtaFinal, Depoimentos, Doces, Faq, Festas, Footer, Galeria, Hero, Nav,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carla Confeitaria — Bolos e doces artesanais em Apiaí/SP" },
      { name: "description", content: "Bolos caseiros e salgados típicos de Apiaí: coxinha, canudo, pastel, risoles e quibe. Encomendas para festas em Apiaí, Capão Bonito, Itaoca e Ribeira." },
      { property: "og:title", content: "Carla Confeitaria — Apiaí, Vale do Ribeira" },
      { property: "og:description", content: "Bolos que viram memória, feitos em Apiaí. Encomende pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-sky relative min-h-screen overflow-x-clip">
      <Bubbles />
      <Nav />
      <Hero />
      <main className="relative">
        <div className="pointer-events-none absolute left-1/2 top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-neon-pink/20 blur-[120px]" aria-hidden />
        <Doces />
        <Apiai />
        <Festas />
        <Galeria />
        <Depoimentos />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
