# Carla Confeitaria

Quero um site para a "Carla Confeitaria", uma confeitaria artesanal em Apiaí/SP. NÃO quero site focado em casamento — quero algo geral: bolos caseiros, tortas, salgados, doces típicos do Vale do Ribeira, bolos temáticos infantis e encomendas para festas. O site deve ter ALMA de interior paulista, mas com estética futurista-sonhadora inspirada no site PeachWeb.

## DNA VISUAL OBRIGATÓRIO (inspirado no PeachWeb)

Paleta exata:

- Fundo gradiente: pêssego (#FFE4D0) no topo → lavanda (#B8A0E0) no meio → roxo profundo (#1A0B2E) embaixo

- Rosa neon principal: #FF4D9D

- Roxo neon: #8B3FFF

- Texto cream: #FFF4E6

- Nunca fundo branco puro, nunca roxo chapado sem gradiente

Mood: sonhador, etéreo, cinematográfico. Como se a confeitaria fosse um mundo mágico flutuando no céu de Apiaí.

Tipografia:

- Títulos em serif elegante (Fraunces ou Playfair Display), itálico quando possível

- Corpo em sans-serif limpa (Outfit ou Inter)

- Tracking apertado nos títulos grandes (-0.02em)

Elementos visuais:

- Hero com imagem de fundo dreamy (céu rosa/lilás com bolhas de vidro flutuando + um bolo artístico no centro, tipo "surreal food photography")

- Cards com glassmorphism (fundo translúcido com blur + borda sutil rosa)

- Botões arredondados com glow rosa/roxo

- Partículas ou bolhas flutuando devagar no fundo (CSS animation, não canvas)

- Scroll reveal suave nos textos

- Nav pill com blur (glassmorphism) flutuando no topo

## ESTRUTURA DE SEÇÕES (nesta ordem)

1. HERO — Imagem de fundo surreal (Unsplash: "surreal pink dreamy cake" ou "pastel cake floating"). Título em serif itálico: "Bolos que viram memória, feitos em Apiaí". Subtítulo: "Confeitaria artesanal no coração do Vale do Ribeira". Dois CTAs: "Encomendar pelo WhatsApp" (rosa sólido com glow) + "Ver cardápio" (outline branco). Nav pill flutuante no topo com blur.

2. "NOSSOS DOCES" — Grid assimétrico de 4 a 6 cards com foto + nome + preço "a partir de". Itens: Bolos caseiros (chocolate, cenoura, milho), Tortas geladas, Salgados para festa (coxinha, quibe, empada), Doces típicos regionais (doce de banana, goiabada, pé de moleque, pamonha), Bolos temáticos infantis, Encomendas personalizadas. Cards com glassmorphism, hover com glow rosa.

3. "FEITO EM APIAÍ" — Seção sobre a região. Texto em 2 colunas: esquerda a história ("A Carla começou fazendo bolo de milho pra feira de Apiaí... hoje atende toda a região do Vale do Ribeira com ingredientes da terra"), direita imagem de ingredientes rurais ou da feira. Fundo lavanda suave com texto escuro. Citação em destaque: "A gente faz doce com o que a terra dá — banana, milho, goiaba, mandioca. Receita de vó, tempero de Apiaí."

4. "ENCOMENDE PARA SUA FESTA" — 3 cards grandes com imagem de fundo (Unsplash): "Aniversários" (bolos temáticos, docinhos, salgadinhos), "Festas e eventos" (salgados, tortas, bolos grandes), "Coffee break" (kits corporativos). Cada card é uma foto com overlay gradiente rosa→roxo e texto em serif. Hover: escala 1.03.

5. GALERIA EM MOVIMENTO — Grid de 6 fotos do Unsplash de confeitaria (bolos artísticos, tortas, salgados, doces regionais) com hover que aumenta e mostra o nome do doce. Deve parecer um mural.

6. DEPOIMENTOS — Carrossel de 3 depoimentos com foto de avatar (Unsplash). Nomes plausíveis de Apiaí: "Mariana S. — encomendei o bolo de aniversário da minha filha, ficou perfeito"; "João P. — os salgados do coffee break da empresa todo mundo elogiou"; "Fernanda L. — o bolo de milho da Carla é igual ao da minha avó". Cards com glassmorphism, estrelas rosa.

7. FAQ — 6 perguntas em acordeão: "Entregam em Apiaí e região?", "Com quanto tempo encomendar?", "Fazem bolo sem açúcar/sem glúten?", "Quais formas de pagamento?", "Tem encomenda mínima de salgados?", "Fazem entrega em Capão Bonito / Itaoca / Ribeira?".

8. CTA FINAL — Fundo gradiente rosa→roxo com texto grande em serif: "Pronto pra encomendar seu doce?". Botão grande do WhatsApp verde com glow. Número fake: (15) 99999-9999.

9. FOOTER — Logo da Carla Confeitaria (texto em gradiente rosa→roxo), endereço "Apiaí - SP", horário "Seg a Sáb, 8h às 18h", Instagram, WhatsApp, © 2026.

## DETALHES REGIONAIS (Vale do Ribeira / Apiaí)

Mencionar no texto:

- "Vale do Ribeira" (não "interior de SP" genérico)

- Ingredientes da região: banana, milho, goiabada, mandioca, palmito

- Cidades atendidas: Apiaí, Capão Bonito, Itaoca, Ribeira

- Referência à feira de Apiaí, à cultura caipira

- NÃO mencionar casamento em destaque (só como item pequeno em "festas e eventos")

## O QUE NÃO QUERO

- Site focado em casamento (nada de "bolo de noiva" no hero)

- Fundo branco

- Fonte system-ui ou Inter sem serif nos títulos

- Cards todos com mesmo tamanho (varie: uns 2x, outros 1x no grid)

- Emoji no site (só SVG)

- Gradiente roxo-rosa genérico estilo template grátis

- Carrossel infinito piscando

- Cookies banner

- Login/signup/carrinho de compras (é site institucional com WhatsApp)

- Múltiplas páginas (single page scroll)

## TÉCNICO (você, Lovable, decide o resto)

- React + Vite + Tailwind + Framer Motion

- Framer Motion para: hero fade-in, scroll reveals (useInView), hover scale nos cards, parallax suave na imagem do hero

- Imagens: use Unsplash (source.unsplash.com ou imagens específicas de cake/pastry/pink clouds) — eu substituo depois pelas fotos reais da Carla

- Mobile first: 375px deve funcionar tão bem quanto 1440px

- Acessibilidade: alt em todas imagens, contraste WCAG AA nos textos

- Sem backend (formulário nenhum — todos os CTAs vão pra wa.me/5515999999999 com mensagem pré-preenchida)

## O QUE VOCÊ DEVE ENTREGAR

Um site de uma página só, com todas as 9 seções, no padrão PeachWeb visual mas com a identidade da confeitaria de Apiaí. Se parecer "mais um template de IA", você errou. Se parecer que poderia estar no Awwwards mas é claramente de interior, você acertou.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3d965d50-ad02-5234-992f-9bddb93330d3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
