import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished Manoa landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]+lang="pt-BR"/i);
  assert.match(html, /<title>Manoa Tour \| Reserve seu passeio em Angra dos Reis<\/title>/i);
  assert.match(html, /Seu próximo passeio começa/);
  assert.match(html, /Passeio compartilhado/);
  assert.match(html, /Passeio privativo/);
  assert.match(html, /Valores e agendamento/);
  assert.match(html, /direto no WhatsApp/);
  assert.match(html, /O WhatsApp abre pronto/);
  assert.match(html, /Data desejada/);
  assert.match(html, /Quantidade de pessoas/);
  assert.match(html, /Tipo de experiência/);
  assert.match(html, /Abrir mensagem no WhatsApp/);
  assert.match(html, /Agendar no WhatsApp/);
  assert.match(html, /O Manoa oferece hospedagem\?/);
  assert.match(html, /Por que falar com o Manoa/);
  assert.match(html, /manoa-tour-reel\.mp4/);
  assert.match(html, /Takes reais/);
  assert.match(html, /Planeje rápido/);
  assert.doesNotMatch(html, /\b(?:A|a|da|na|pela) Manoa\b/);
  assert.match(html, /não oferece hospedagem/);
  assert.match(html, /Pedir dicas no WhatsApp/);
  assert.match(html, /Receba sugestões/);
  assert.match(html, /Combine diretamente/);
  assert.doesNotMatch(html, /Aluguel de barco|Hospedagem em Angra/);
  assert.match(html, /Praia Vermelha/);
  assert.match(html, /https:\/\/wa\.me\/5524992958552/);
  assert.match(html, /https:\/\/www\.instagram\.com\/manoa\.tour\//);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("keeps official Manoa media local and removes disposable preview", async () => {
  const [page, layout, css, bookingForm, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/BookingForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  for (const asset of [
    "manoa-profile.jpg",
    "angra-baia.jpg",
    "barco-manoa.jpg",
    "praia-vermelha.jpg",
    "agua-cristalina.jpg",
    "praia-ilha-grande.jpg",
    "costa-verde.jpg",
    "manoa-tour-reel.mp4",
    "og.png",
  ]) {
    await access(new URL(`../public/${asset}`, import.meta.url));
    assert.match(page + layout, new RegExp(asset.replace(".", "\\.")));
  }

  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /lang="pt-BR"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /\.why-image\s*\{[^}]*max-width:\s*220px[^}]*aspect-ratio:\s*9\s*\/\s*16/s);
  assert.match(css, /\.stay-card__heading \.tour-type\s*\{[^}]*font-size:\s*clamp\(11px,\s*\.9vw,\s*13px\)/s);
  assert.match(css, /\.destination-collage\s*\{[^}]*min-height:\s*520px[^}]*display:\s*grid[^}]*grid-template-columns:\s*1\.15fr\s+\.85fr/s);
  assert.match(css, /\.destination--one\s*\{[^}]*grid-row:\s*1\s*\/\s*-1/s);
  assert.match(bookingForm, /5524992958552/);
  assert.match(bookingForm, /encodeURIComponent\(message\)/);
  assert.match(bookingForm, /Passeio compartilhado/);
  assert.match(bookingForm, /Passeio privativo/);
  await assert.rejects(access(new URL("../app/_sites-preview", root)));
});
