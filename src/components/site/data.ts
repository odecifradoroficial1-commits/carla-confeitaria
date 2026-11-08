import boloCaseiro from "@/assets/bolo-caseiro.jpg";
import boloFesta from "@/assets/bolo-festa.jpg";
import coxinha from "@/assets/coxinha.jpg";
import canudo from "@/assets/canudo.jpg";
import pastel from "@/assets/pastel.jpg";
import risolesQuibe from "@/assets/risoles-quibe.jpg";
import coffeeBreak from "@/assets/coffee-break.jpg";

export const WHATSAPP_NUMBER = "5515999999999";
export const WHATSAPP_DISPLAY = "(15) 99999-9999";

export const waLink = (msg = "Olá, Carla! Quero fazer uma encomenda.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const doces = [
  { nome: "Bolos caseiros", desc: "Milho, cenoura com chocolate, fubá — o sabor de domingo na casa da vó", tag: "O mais pedido", img: boloCaseiro, alt: "Bolo de milho e bolo de cenoura com chocolate fatiados", span: "md:col-span-2 md:row-span-2" },
  { nome: "Coxinha", desc: "Massa macia, frango bem temperado", tag: "Sai primeiro na festa", img: coxinha, alt: "Coxinhas douradas, uma aberta mostrando o recheio de frango", span: "" },
  { nome: "Canudo", desc: "Crocante, recheado na hora", tag: "Clássico de Apiaí", img: canudo, alt: "Canudos crocantes recheados com doce de leite e frango", span: "" },
  { nome: "Bolos de festa", desc: "Temáticos e recheados pra criançada e pra família", tag: "Agenda enche rápido", img: boloFesta, alt: "Bolo de aniversário infantil rosa com velas e brigadeiros", span: "md:col-span-2" },
  { nome: "Pastéis", desc: "Carne, queijo e palmito — massa fininha e sequinha", tag: "Feito no dia", img: pastel, alt: "Pastéis de feira, um aberto com carne e queijo", span: "md:col-span-2" },
  { nome: "Risoles e quibe", desc: "Risoles cremoso e quibe bem temperado, do jeito de Apiaí", tag: "Todo mundo repete", img: risolesQuibe, alt: "Bandeja com risoles e quibes com limão", span: "md:col-span-2" },
];

export const festas = [
  {
    titulo: "Aniversários",
    desc: "Bolo temático + cento de coxinha, risoles e quibe. A festa resolvida numa mensagem.",
    img: boloFesta,
    alt: "Bolo de aniversário infantil com velas",
  },
  {
    titulo: "Festas e eventos",
    desc: "Salgados e bolos grandes pra batizado, chá, formatura e casamento.",
    img: risolesQuibe,
    alt: "Bandeja de salgados para evento",
  },
  {
    titulo: "Coffee break",
    desc: "Kits pra empresa com salgados quentinhos e bolo caseiro. Entrega no horário.",
    img: coffeeBreak,
    alt: "Mesa de coffee break com coxinhas, bolo caseiro e café",
  },
];

export const galeria = [
  { nome: "Bolo de milho e de cenoura", img: boloCaseiro, span: "row-span-2" },
  { nome: "Coxinhas douradas", img: coxinha, span: "" },
  { nome: "Bolo de aniversário", img: boloFesta, span: "" },
  { nome: "Canudos recheados", img: canudo, span: "row-span-2" },
  { nome: "Pastéis sequinhos", img: pastel, span: "" },
  { nome: "Risoles e quibe", img: risolesQuibe, span: "" },
];

export const depoimentos = [
  {
    nome: "Mariana S.",
    local: "Apiaí",
    texto: "Encomendei o bolo de aniversário da minha filha, ficou perfeito. Ela não parava de olhar pro bolo.",
    img: u("photo-1494790108377-be9c29b29330", 200),
  },
  {
    nome: "João P.",
    local: "Capão Bonito",
    texto: "Os salgados do coffee break da empresa todo mundo elogiou. Chegou quentinho e no horário.",
    img: u("photo-1507003211169-0a1dd7228f2d", 200),
  },
  {
    nome: "Fernanda L.",
    local: "Itaoca",
    texto: "O bolo de milho da Carla é igual ao da minha avó. Cheiro de casa de sítio no domingo.",
    img: u("photo-1438761681033-6461ffad8d80", 200),
  },
];

export const faq = [
  {
    q: "Entregam em Apiaí e região?",
    a: "Sim! Entregamos em toda Apiaí, inclusive bairros rurais com acesso por estrada. Também dá pra retirar no ateliê.",
  },
  {
    q: "Com quanto tempo encomendar?",
    a: "Bolos caseiros e doces: 2 dias. Bolos temáticos e festas: pelo menos 7 dias. Datas como Dia das Mães e Natal lotam rápido — chama cedo.",
  },
  {
    q: "Fazem bolo sem açúcar/sem glúten?",
    a: "Fazemos versões sem açúcar e sem glúten de alguns bolos caseiros. Consulte pelo WhatsApp.",
  },
  {
    q: "Quais formas de pagamento?",
    a: "Pix, dinheiro e cartão na entrega. Para encomendas de festa, pedimos 50% de sinal no Pix.",
  },
  {
    q: "Tem encomenda mínima de salgados?",
    a: "O mínimo é meio cento (50 unidades) por sabor. Pode misturar coxinha, risoles, quibe, pastel e canudo.",
  },
  {
    q: "Fazem entrega em Capão Bonito / Itaoca / Ribeira?",
    a: "Sim, com taxa de deslocamento combinada no pedido. Para Capão Bonito, Itaoca e Ribeira agendamos as entregas por dia da semana.",
  },
];
