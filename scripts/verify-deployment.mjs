import assert from 'node:assert/strict';

const base = process.argv[2];
assert(base, 'Provide the base URL');
const securityHeaders = {
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'strict-transport-security': 'max-age=63072000',
  'permissions-policy': 'camera=(), microphone=(), geolocation=()',
};

async function check(path, status = 200, options = {}) {
  const response = await fetch(new URL(path, base), {
    ...options,
    signal: AbortSignal.timeout(30000),
  });
  assert.equal(response.status, status, `${path} status`);
  for (const [name, expected] of Object.entries(securityHeaders)) {
    assert.equal(response.headers.get(name), expected, `${path}: ${name}`);
  }
  console.log(`${path}: ${response.status}`);
  return response;
}

const home = await check('/');
const html = await home.text();
assert(html.includes('Gilvan Gustavo'), 'SSR content');
assert(html.includes('wa.me/5531992931470'), 'Latest WhatsApp contact');
const canonical = html.match(/<link\b[^>]*>/g)?.find(tag => tag.includes('rel="canonical"'));
assert(canonical?.includes('href="https://gilvangustavo.com.br/"'), 'Canonical URL');
assert(!html.includes('gilvan-evolve-connect.lovable.app'), 'No old public canonical origin');
assert(html.includes('/icon.svg?v=gg-20261022'), 'Versioned brand SVG favicon');
assert(html.includes('/favicon.ico?v=gg-20261022'), 'Versioned ICO favicon');
assert(html.includes('/apple-icon.png?v=gg-20261022'), 'Versioned Apple Touch Icon');
const faviconSvg = await (await check('/icon.svg?v=gg-20261022')).text();
assert(faviconSvg.includes('id="gilvan-gustavo-favicon"'), 'Brand favicon SVG');
const ico = Buffer.from(await (await check('/favicon.ico?v=gg-20261022')).arrayBuffer());
assert.equal(ico.readUInt16LE(2), 1, 'ICO format');
assert.equal(ico.readUInt16LE(4), 6, 'Six ICO resolutions');
for (const [path, size] of [['/apple-icon.png?v=gg-20261022', 180], ['/icon-dark-32x32.png', 32], ['/icon-light-32x32.png', 32]]) {
  const png = Buffer.from(await (await check(path)).arrayBuffer());
  assert.equal(png.readUInt32BE(16), size, `${path}: PNG width`);
  assert.equal(png.readUInt32BE(20), size, `${path}: PNG height`);
}

for (const path of ['/fotos/gilvan-hero.webp', '/fotos/gilvan-orientando.webp', '/fotos/gilvan-planejamento.webp', '/logo-wordmark.webp', '/logo-monogram.webp']) {
  const image = await check(path);
  assert(image.headers.get('content-type')?.startsWith('image/'), `${path}: image type`);
}
const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^"?]+\.(?:js|css))"/g)].map(match => match[1]);
assert(assets.some(path => path.endsWith('.js')), 'Client JavaScript included');
assert(assets.some(path => path.endsWith('.css')), 'Stylesheet included');
for (const path of [...new Set(assets)]) {
  const asset = await check(path);
  assert(asset.headers.get('cache-control')?.includes('immutable'), `${path}: immutable cache`);
}
await check('/nao-existe-validacao-migracao', 404);
const sitemap = await (await check('/sitemap.xml')).text();
assert(sitemap.includes('<loc>https://gilvangustavo.com.br/</loc>'), 'Canonical sitemap');
const robots = await (await check('/robots.txt')).text();
assert(robots.includes('Sitemap: https://gilvangustavo.com.br/sitemap.xml'), 'Canonical robots');
const listing = await (await check('/.mcp/list-tools')).json();
assert.deepEqual(listing.tools.map(tool => tool.name).sort(), ['get_contact_info', 'list_services', 'search_faq']);
const contact = await (await check('/.mcp/invoke-tool/get_contact_info', 200, {
  method: 'POST',
  headers: {'content-type': 'application/json'},
  body: '{}',
})).json();
assert.equal(contact.structuredContent.site, 'https://gilvangustavo.com.br/');
assert(contact.structuredContent.whatsappUrl.includes('5531992931470'));
const initialize = await (await check('/mcp', 200, {
  method: 'POST',
  headers: {'content-type': 'application/json', accept: 'application/json, text/event-stream'},
  body: JSON.stringify({jsonrpc: '2.0', id: 1, method: 'initialize', params: {protocolVersion: '2025-03-26', capabilities: {}, clientInfo: {name: 'deployment-smoke-check', version: '1.0.0'}}}),
})).text();
assert(initialize.includes('protocolVersion'), 'MCP initialize response');
console.log(`PASS: ${base} — latest content, images, assets, headers, 404, SEO and MCP`);
