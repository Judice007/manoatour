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
  assert.match(html, /Explore Angra por uma nova/);
  assert.match(html, /Passeio compartilhado/);
  assert.match(html, /Passeio privativo/);
  assert.match(html, /Consulta e agendamento/);
  assert.match(html, /confirmados com o Manoa pelo WhatsApp/);
  assert.match(html, /Envie sua solicitação/);
  assert.match(html, /Data desejada/);
  assert.match(html, /Quantidade de pessoas/);
  assert.match(html, /Tipo de experiência/);
  assert.match(html, /Consultar pelo WhatsApp/);
  assert.match(html, /Falar com o Manoa pelo WhatsApp/);
  assert.match(html, /O Manoa oferece hospedagem\?/);
  assert.match(html, /Atendimento do Manoa/);
  assert.match(html, /manoa-tour-reel\.mp4/);
  assert.match(html, /Takes reais/);
  assert.match(html, /Planejamento claro/);
  assert.doesNotMatch(html, /\b(?:A|a|da|na|pela) Manoa\b/);
  assert.match(html, /não oferece hospedagem/);
  assert.match(html, /Solicitar indicações/);
  assert.match(html, /Receba orientações/);
  assert.match(html, /Contrate diretamente/);
  assert.doesNotMatch(html, /Aluguel de barco|Hospedagem em Angra/);
  assert.match(html, /Praia Vermelha/);
  assert.match(html, /https:\/\/wa\.me\/5524992958552/);
  assert.match(html, /https:\/\/www\.instagram\.com\/manoa\.tour\//);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("keeps official Manoa media local and removes disposable preview", async () => {
  const [page, layout, css, bookingForm, packageJson, vercelJson, vercelTsconfig, nextConfig] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/BookingForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
    readFile(new URL("../tsconfig.vercel.json", import.meta.url), "utf8"),
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
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
  assert.equal(JSON.parse(packageJson).scripts["build:vercel"], "next build");
  assert.deepEqual(JSON.parse(vercelJson), {
    $schema: "https://openapi.vercel.sh/vercel.json",
    framework: "nextjs",
    buildCommand: "npm run build:vercel",
  });
  assert.ok(JSON.parse(vercelTsconfig).exclude.includes("db"));
  assert.ok(JSON.parse(vercelTsconfig).exclude.includes("worker"));
  assert.match(nextConfig, /tsconfigPath:\s*"tsconfig\.vercel\.json"/);
  assert.match(layout, /lang="pt-BR"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /family=DM\+Sans:[^"']+family=DM\+Serif\+Display/);
  assert.match(css, /--serif:\s*"DM Serif Display"/);
  assert.match(css, /--sans:\s*"DM Sans"/);
  assert.match(css, /--coral:\s*#ef7652/);
  assert.match(css, /--sun:\s*#f1dfc5/);
  assert.doesNotMatch(css, /#ff875e|#f6c757|rgba\(255,135,94/);
  assert.match(css, /h1, h2\s*\{[^}]*font-weight:\s*400[^}]*letter-spacing:\s*-\.045em/s);
  assert.match(css, /\.hero\s*\{[^}]*min-height:\s*680px[^}]*height:\s*min\(86svh,\s*820px\)/s);
  assert.match(css, /\.booking-section\s*\{[^}]*padding:\s*clamp\(72px,\s*7vw,\s*110px\)[^}]*gap:\s*clamp\(40px,\s*6vw,\s*90px\)/s);
  assert.match(css, /\.booking-copy h2\s*\{[^}]*font-size:\s*clamp\(44px,\s*4\.5vw,\s*72px\)/s);
  assert.match(css, /\.why-image\s*\{[^}]*max-width:\s*250px[^}]*aspect-ratio:\s*9\s*\/\s*16/s);
  assert.match(css, /@media\s*\(max-width:\s*760px\)[\s\S]*\.why-image\s*\{[^}]*width:\s*min\(190px,\s*58vw\)[^}]*aspect-ratio:\s*9\s*\/\s*16/s);
  assert.match(css, /\.stay-card__heading \.tour-type\s*\{[^}]*font-size:\s*clamp\(11px,\s*\.9vw,\s*13px\)/s);
  assert.match(css, /\.stay-card__steps strong\s*\{[^}]*font-size:\s*clamp\(21px,\s*1\.6vw,\s*25px\)/s);
  assert.match(css, /\.stay-card__steps small\s*\{[^}]*font-size:\s*13px[^}]*font-weight:\s*500/s);
  assert.match(css, /\.destination-collage\s*\{[^}]*min-height:\s*0[^}]*height:\s*clamp\(400px,\s*56vh,\s*480px\)[^}]*display:\s*grid/s);
  assert.match(css, /@media\s*\(min-width:\s*1051px\)\s*and\s*\(max-height:\s*760px\)/);
  assert.match(css, /\.destination--one\s*\{[^}]*grid-row:\s*1\s*\/\s*-1/s);
  assert.match(css, /\.floating-cta\s*\{[^}]*position:\s*fixed[^}]*width:\s*56px[^}]*background:\s*#25d366/s);
  assert.match(page, /import\s*\{\s*FaWhatsapp\s*\}\s*from\s*["']react-icons\/fa["']/);
  assert.match(page, /<FaWhatsapp\s+aria-hidden="true"\s+focusable="false"\s*\/>/);
  assert.match(bookingForm, /5524992958552/);
  assert.match(bookingForm, /new URLSearchParams/);
  assert.match(bookingForm, /message\.normalize\("NFC"\)/);
  assert.match(bookingForm, /\\u\{1F4C5\}\\uFE0F/);
  assert.match(bookingForm, /api\.whatsapp\.com\/send/);
  assert.match(bookingForm, /Passeio compartilhado/);
  assert.match(bookingForm, /Passeio privativo/);
  assert.match(page, /className="hero-photo"\s+src="\/barco-manoa\.jpg"/);
  await assert.rejects(access(new URL("../app/_sites-preview", root)));
});
