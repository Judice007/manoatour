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

test("server-renders the blue-and-white Manoa landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]+lang="pt-BR"/i);
  assert.match(html, /<title>Manoa Tour \| Reserve seu passeio em Angra dos Reis<\/title>/i);
  assert.match(html, /Seu dia em Angra/);
  assert.match(html, /começa no mar/);
  assert.match(html, /Passeio compartilhado/);
  assert.match(html, /Passeio privativo/);
  assert.match(html, /Aproximadamente 6 horas/);
  assert.match(html, /Embarque no Clube ARMC/);
  assert.match(html, /O embarque normalmente acontece no Clube ARMC/);
  assert.match(html, /Consultar passeio compartilhado/);
  assert.match(html, /Consultar passeio privativo/);
  assert.match(html, /Muitos tons de azul/);
  assert.match(html, /O Manoa cuida do restante/);
  assert.match(html, /Data desejada/);
  assert.match(html, /Quantidade de pessoas/);
  assert.match(html, /Tipo de experiência/);
  assert.match(html, /Consultar pelo WhatsApp/);
  assert.match(html, /Falar com o Manoa pelo WhatsApp/);
  assert.match(html, /O Manoa oferece hospedagem\?/);
  assert.match(html, /Por que escolher o Manoa/);
  assert.match(html, /manoa-tour-reel\.mp4/);
  assert.match(html, /Takes reais/);
  assert.match(html, /Conhecimento local/);
  assert.match(html, /Estrutura a bordo/);
  assert.match(html, /Conforto para aproveitar o dia/);
  assert.match(html, /não oferece hospedagem/);
  assert.match(html, /Pedir indicações/);
  assert.match(html, /Ilha Grande/);
  assert.match(html, /Costa Verde/);
  assert.match(html, /Baía de Angra/);
  assert.match(html, /Praia Vermelha/);
  assert.match(html, /Angra pelo mar/);
  assert.match(html, /https:\/\/wa\.me\/5524992958552\?text=/);
  assert.match(html, /https:\/\/www\.instagram\.com\/manoa\.tour\//);
  assert.doesNotMatch(html, /\b(?:A|a|da|na|pela) Manoa\b/);
  assert.doesNotMatch(html, /Aluguel de barco|Hospedagem em Angra/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("keeps official media, contextual WhatsApp messages, and responsive styling", async () => {
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
    "barco-comodidades.jpg",
    "manoa-tour-reel.mp4",
    "og.png",
  ]) {
    await access(new URL(`../public/${asset}`, import.meta.url));
  }

  for (const usedAsset of [
    "manoa-profile.jpg",
    "angra-baia.jpg",
    "barco-manoa.jpg",
    "agua-cristalina.jpg",
    "praia-ilha-grande.jpg",
    "costa-verde.jpg",
    "barco-comodidades.jpg",
    "manoa-tour-reel.mp4",
    "og.png",
  ]) {
    assert.match(page + layout, new RegExp(usedAsset.replace(".", "\\.")));
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
  assert.match(layout, /metadataBase:\s*new URL\("https:\/\/manoatour\.vercel\.app"\)/);
  assert.match(layout, /canonical:\s*"\/"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(layout, /fonts\.googleapis\.com\/css2\?family=Cormorant\+Garamond:[^"']+family=Manrope/);
  assert.doesNotMatch(css, /fonts\.googleapis\.com/);
  assert.match(css, /--serif:\s*"Cormorant Garamond"/);
  assert.match(css, /--sans:\s*"Manrope"/);
  assert.match(css, /--navy:\s*#061f33/);
  assert.match(css, /--blue:\s*#0d6594/);
  assert.match(css, /--white:\s*#ffffff/);
  assert.doesNotMatch(css, /--coral|--sun|#ef7652|#f1dfc5|#ff875e|#f6c757/i);
  assert.match(css, /h1, h2, h3\s*\{[^}]*letter-spacing:\s*-\.045em/s);
  assert.match(css, /\.hero\s*\{[^}]*min-height:\s*730px[^}]*grid-template-columns:/s);
  assert.match(css, /\.hero-media\s*\{[^}]*border-radius:\s*28px/s);
  assert.match(css, /\.hero-media\s*\{[^}]*box-shadow:\s*18px\s+18px\s+0\s+rgba\(141,215,242,\.12\)/s);
  assert.match(css, /\.trust-strip\s*\{[^}]*grid-template-columns:\s*repeat\(4,\s*1fr\)/s);
  assert.match(css, /\.tour-grid\s*\{[^}]*grid-template-columns:\s*repeat\(2,/s);
  assert.match(css, /\.destination-gallery\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/s);
  assert.match(css, /\.destination figcaption\s*\{[^}]*min-height:\s*72px[^}]*display:\s*flex/s);
  assert.match(css, /\.experience-reel a\s*\{[^}]*aspect-ratio:\s*9\s*\/\s*16/s);
  assert.match(css, /\.onboard-card\s*\{[^}]*grid-template-columns:\s*minmax\(190px,\s*\.72fr\)\s+1\.28fr/s);
  assert.doesNotMatch(page, /className="boat-section"/);
  assert.match(page, /className="stay-note__visual"/);
  assert.match(css, /\.booking\s*\{[^}]*grid-template-columns:\s*\.8fr\s+1\.2fr/s);
  assert.match(css, /@media\s*\(max-width:\s*760px\)[\s\S]*\.hero\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(css, /\.floating-cta\s*\{[^}]*position:\s*fixed[^}]*width:\s*54px[^}]*background:\s*#25d366/s);
  assert.match(page, /import\s*\{\s*FaInstagram,\s*FaMapMarkerAlt,\s*FaWhatsapp\s*\}\s*from\s*["']react-icons\/fa["']/);
  assert.match(page, /<FaMapMarkerAlt\s+aria-hidden="true"\s*\/>/);
  assert.match(page, /<FaWhatsapp\s+aria-hidden="true"\s+focusable="false"\s*\/>/);
  assert.match(page, /encodeURIComponent\(message\)/);
  assert.match(page, /Tenho interesse no passeio compartilhado/);
  assert.match(page, /Tenho interesse em um passeio privativo/);
  assert.match(page, /orientações de regiões e parceiros para hospedagem/);
  assert.match(bookingForm, /5524992958552/);
  assert.match(bookingForm, /new URLSearchParams/);
  assert.match(bookingForm, /message\.normalize\("NFC"\)/);
  assert.match(bookingForm, /\\u\{1F4C5\}\\uFE0F/);
  assert.match(bookingForm, /api\.whatsapp\.com\/send/);
  assert.match(page, /className="hero-media"/);
  assert.match(page, /src="\/barco-manoa\.jpg"/);
  assert.match(page, /src="\/barco-comodidades\.jpg"[^>]+Área interna do barco/);
  assert.match(css, /\.tour-card\s*\{[^}]*flex-direction:\s*column[^}]*border-radius:\s*24px/s);
  await assert.rejects(access(new URL("../app/_sites-preview", root)));
});
