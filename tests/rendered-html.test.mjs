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
  assert.match(html, /<title>Manoa Tour \| Passeios em Angra dos Reis<\/title>/i);
  assert.match(html, /Angra fica ainda melhor/);
  assert.match(html, /Passeios de barco/);
  assert.match(html, /Praia Vermelha/);
  assert.match(html, /https:\/\/linkr\.bio\/n2x0k/);
  assert.match(html, /https:\/\/www\.instagram\.com\/manoa\.tour\//);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("keeps official Manoa media local and removes disposable preview", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
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
  ]) {
    await access(new URL(`../public/${asset}`, import.meta.url));
    assert.match(page + layout, new RegExp(asset.replace(".", "\\.")));
  }

  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /lang="pt-BR"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  await assert.rejects(access(new URL("../app/_sites-preview", root)));
});
