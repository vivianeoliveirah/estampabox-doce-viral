import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import logoAsset from "@/assets/doce-viral-logo.png.asset.json";
import heroImg from "@/assets/hero-morango.jpg";
import p1 from "@/assets/produto-1.jpg";
import p2 from "@/assets/produto-2.jpg";
import p3 from "@/assets/produto-3.jpg";
import p4 from "@/assets/produto-4.jpg";
import p5 from "@/assets/produto-5.jpg";
import p6 from "@/assets/produto-6.jpg";

const TITLE = "Doce Viral | Morango Cravejado: guia, calculadora e kit";
const DESCRIPTION =
  "Aprenda 6 versões do Morango Cravejado, calcule seu preço com a planilha automática e divulgue com mini cardápio e textos prontos. Acesso digital por R$ 19,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "";

const produtos = [
  { n: "01", nome: "Morango Cravejado", img: p1, txt: "Morango, brigadeiro branco, cobertura e lascas crocantes." },
  { n: "02", nome: "Picolé Cravejado", img: p2, txt: "Formato gelado com cobertura branca e acabamento cravejado." },
  { n: "03", nome: "Geladinho Cravejado", img: p3, txt: "Base cremosa em saquinho com finalização cravejada." },
  { n: "04", nome: "Casquinha Cravejada", img: p4, txt: "Cone crocante, creme de morango e cristais de caramelo." },
  { n: "05", nome: "Copo Cravejado", img: p5, txt: "Camadas de creme e fruta com cobertura crocante." },
  { n: "06", nome: "Travessa Cravejada", img: p6, txt: "Versão para compartilhar, com creme, morangos e cobertura." },
];

const entregas = [
  {
    tag: "PRODUTO PRINCIPAL",
    titulo: "Guia Premium — 28 páginas",
    txt: "Higiene e segurança, as 3 bases, os 6 produtos com formulação, passo a passo, testes de qualidade, fichas de custo e caderno de padronização.",
  },
  {
    tag: "BÔNUS 1",
    titulo: "Calculadora automática",
    txt: "Já preenchida com formulações e rendimentos de referência. Você informa seus valores e ela simula custo, preço sugerido, lucro bruto e margem.",
  },
  {
    tag: "BÔNUS 2",
    titulo: "Kit de divulgação — 10 páginas",
    txt: "Mini cardápio, cartaz de encomenda, 10 textos prontos, roteiro de fotos e folha de controle de pedidos.",
  },
];

const etapas = [
  { n: "1", t: "Escolha", d: "Comece com uma ou duas versões para testar." },
  { n: "2", t: "Prepare e registre", d: "Pese os ingredientes e anote o rendimento real." },
  { n: "3", t: "Calcule e divulgue", d: "Atualize a planilha e use os textos prontos." },
];

const faq = [
  {
    q: "O material é físico?",
    a: "Não. É 100% digital e abre no celular, computador ou tablet.",
  },
  {
    q: "Preciso produzir os seis produtos?",
    a: "Não. O guia recomenda começar com uma ou duas opções e ampliar depois.",
  },
  {
    q: "A calculadora define o preço final por mim?",
    a: "Ela sugere um preço a partir dos seus custos e da margem escolhida. Você ainda considera mercado local, taxas, impostos e mão de obra.",
  },
  {
    q: "O resultado financeiro é garantido?",
    a: "Não. Custos, procura e resultados variam conforme região, fornecedores, execução e divulgação.",
  },
];

function Index() {
  const [avisoAberto, setAvisoAberto] = useState(false);

  const comprar = () => {
    if (CHECKOUT_URL) {
      window.location.href = CHECKOUT_URL;
      return;
    }
    setAvisoAberto(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <p className="bg-wine px-4 py-2 text-center text-xs tracking-wide text-wine-foreground">
        Produto digital • acesso liberado após a confirmação do pagamento
      </p>

      {/* Hero */}
      <header className="bg-wine text-wine-foreground">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <img
            src={logoAsset.url}
            alt="Doce Viral"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full"
          />
          <a href="#conteudo" className="text-sm text-wine-foreground/80 transition-colors hover:text-gold">
            O que você recebe
          </a>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-6 md:grid-cols-2">
          <div>
            <p className="eyebrow text-gold">Doce Viral • Edição 01</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] md:text-6xl">
              Do morango viral ao seu <em className="text-gold">mini cardápio</em>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-wine-foreground/85">
              Seis versões do Morango Cravejado, fichas para registrar seu lote, calculadora
              automática de preços e material para organizar a divulgação.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {[
                "6 produtos com a mesma tendência",
                "Receitas, bases e fichas de custo",
                "Calculadora de preço automática",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={comprar}
                className="rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-wide text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Quero meu acesso por R$ 19,90
              </button>
              <span className="text-xs text-wine-foreground/70">Compra segura • acesso digital</span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-soft">
              <img
                src={heroImg}
                alt="Morangos cravejados com cobertura branca e lascas de caramelo vermelho"
                width={1000}
                height={1000}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gold text-gold-foreground shadow-card">
              <b className="font-display text-3xl leading-none">6</b>
              <span className="eyebrow text-[0.6rem]">produtos</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Dor */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="eyebrow text-primary">Uma tendência, várias possibilidades</p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            Receita solta na internet não monta um negócio
          </h2>
          <p className="mt-4 text-muted-foreground">
            O Doce Viral organiza o caminho inteiro: preparar as bases, escolher os produtos,
            registrar o rendimento real do seu lote e simular um preço com base nos custos e no
            mercado local.
          </p>
        </section>

        {/* Produtos */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow text-primary">Mini cardápio</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight md:text-4xl">
              6 formas de aproveitar o Morango Cravejado
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {produtos.map((p) => (
                <article
                  key={p.n}
                  className="overflow-hidden rounded-2xl bg-card shadow-card transition-transform hover:-translate-y-1"
                >
                  <img
                    src={p.img}
                    alt={p.nome}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-5">
                    <span className="eyebrow text-gold">{p.n}</span>
                    <h3 className="mt-1 font-display text-xl">{p.nome}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.txt}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              Imagens ilustrativas. O resultado varia conforme ingredientes, técnica e acabamento.
            </p>
          </div>
        </section>

        {/* Entregas */}
        <section id="conteudo" className="bg-wine py-20 text-wine-foreground">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow text-gold">O que você recebe</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight md:text-4xl">
              Material para preparar, calcular e divulgar
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {entregas.map((e) => (
                <article
                  key={e.tag}
                  className="rounded-2xl border border-gold/25 bg-wine-soft p-7"
                >
                  <span className="eyebrow text-gold">{e.tag}</span>
                  <h3 className="mt-2 font-display text-2xl">{e.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-wine-foreground/80">{e.txt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Etapas */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-primary">Sem complicação</p>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Da ideia ao primeiro lote em 3 etapas
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {etapas.map((e) => (
              <li key={e.n} className="rounded-2xl border border-border bg-card p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                  {e.n}
                </span>
                <h3 className="mt-4 font-display text-xl">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Oferta */}
        <section className="px-6 pb-20">
          <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl bg-wine p-8 text-wine-foreground shadow-soft md:grid-cols-[1.2fr_1fr] md:p-12">
            <div>
              <p className="eyebrow text-gold">Acesso digital</p>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                Doce Viral — Morango Cravejado
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-wine-foreground/85">
                Guia Premium de 28 páginas + Calculadora Automática + Kit de Divulgação.
                Pagamento único, com acesso após a confirmação.
              </p>
            </div>
            <div className="rounded-2xl bg-background p-7 text-center text-foreground">
              <small className="eyebrow text-muted-foreground">pagamento único</small>
              <p className="mt-2 font-display text-5xl text-primary">
                <sup className="align-super text-lg">R$</sup>19<small className="text-2xl">,90</small>
              </p>
              <button
                type="button"
                onClick={comprar}
                className="mt-5 w-full rounded-full bg-primary px-6 py-4 text-sm font-bold tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Quero receber agora
              </button>
              <span className="mt-3 block text-xs text-muted-foreground">
                Acesso após a confirmação do pagamento
              </span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <p className="eyebrow text-primary">Dúvidas frequentes</p>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">Antes de começar</h2>
          <div className="mt-8 space-y-3">
            {faq.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="cursor-pointer list-none font-display text-lg">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-wine py-12 text-wine-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <img
            src={logoAsset.url}
            alt="Doce Viral"
            width={48}
            height={48}
            loading="lazy"
            className="h-12 w-12 rounded-full"
          />
          <p className="text-wine-foreground/70">
            Conteúdo digital para transformar ideias em projetos práticos.
          </p>
        </div>
      </footer>

      {avisoAberto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Checkout em configuração"
          onClick={() => setAvisoAberto(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-wine/70 px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-card p-8 text-center shadow-soft"
          >
            <p className="eyebrow text-primary">Quase lá</p>
            <h2 className="mt-2 font-display text-2xl">Checkout em configuração</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              O material está pronto. Assim que você me passar o link de pagamento, este botão vai
              levar direto para a compra.
            </p>
            <button
              type="button"
              onClick={() => setAvisoAberto(false)}
              className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
