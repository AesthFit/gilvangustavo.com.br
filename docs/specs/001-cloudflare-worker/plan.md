# Plano de implementação

## Arquitetura

A página não usa APIs, autenticação ou renderização por requisição. Usar
`output: 'export'` no Next.js e servir `out/` com Workers Static Assets, sem
introduzir adaptador SSR nem script de execução desnecessário.

## Contratos e decisões

- `pnpm build` produz `out/index.html`, recursos e página 404.
- `pnpm preview` serve o resultado com Wrangler local.
- `pnpm deploy` compila e publica com Wrangler.
- `wrangler.jsonc` identifica a conta, o Worker e o diretório de assets.
- `assets.not_found_handling` usa `404-page`; o site não é uma SPA com rotas.
- `public/_headers` transfere os cabeçalhos anteriormente gerados pelo servidor
  Next.js para o servidor de assets Cloudflare.
- Vercel Analytics é carregado apenas em builds na Vercel, pois seu endpoint
  gerenciado não existe no Cloudflare.
- Fixar pnpm 12.8.1 e manter o override de Hono em `pnpm-workspace.yaml`, formato
  reconhecido por essa versão, com scripts de instalação explicitamente listados.
- O domínio será conectado após validar a publicação, conferindo antes eventuais
  registros existentes para evitar alterações em serviços alheios ao site.
- A integração Git do Cloudflare, quando disponível, usa `pnpm build` e
  `pnpm exec wrangler deploy` na branch `main`.

## Validação

Instalação com lockfile, checagem TypeScript, build de produção, deploy dry-run,
requisições locais à página, imagem e caminho inexistente, e verificação HTTPS
após publicação. Inspecionar visualmente a página publicada.
