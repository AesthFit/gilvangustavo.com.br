# gilvan-gustavo

## Cloudflare Workers

Landing page Next.js publicada como arquivos estáticos pelo Worker
`gilvangustavo`, na conta `0-MatBRGZ` (`de66398e0fd4bf1873f26815de955ddc`).

- Site: https://gilvangustavo.com.br
- Também atende: https://www.gilvangustavo.com.br
- Configuração: [`wrangler.jsonc`](wrangler.jsonc)
- Especificação: [`docs/specs/001-cloudflare-worker/`](docs/specs/001-cloudflare-worker/)

Use Node.js 22 ou superior e pnpm 12.8.1, indicado em `package.json`.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Para validar o artefato de produção localmente:

```bash
pnpm exec tsc --noEmit
pnpm build
pnpm preview
```

O build gera `out/`. Wrangler serve esse diretório, aplica os cabeçalhos de
`public/_headers` e retorna a página 404 para caminhos inexistentes. Não é
necessário executar um servidor Next.js em produção. O build baixa as fontes
Google; a rede deve estar disponível durante essa etapa.

Para publicar, autentique-se na conta Cloudflare autorizada e execute:

```bash
pnpm exec wrangler login
pnpm deploy
```

Para verificar a configuração sem publicar:

```bash
pnpm exec wrangler deploy --dry-run
```

Os Custom Domains declarados no Wrangler gerenciam DNS e HTTPS do site.
Não altere os registros MX ou TXT de e-mail para publicar o Worker.
Vercel Analytics é ativado apenas quando o build ocorre na Vercel.

Para configurar Workers Builds com acesso ao repositório GitHub, selecione
`AesthFit/gilvangustavo.com.br`, branch `main`, diretório raiz, build
`pnpm build` e deploy `pnpm exec wrangler deploy`. Fixe Node.js 22 ou superior
e pnpm 12.8.1 no ambiente de build. A conexão exige que a instalação GitHub da
Cloudflare tenha acesso a essa organização; até lá, use `pnpm deploy`.

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Cloudflare publication uses the commands above or a configured Workers Builds integration.

[Continue working on v0 →](https://v0.app/chat/projects/prj_YupRDiznu667hwCSwT6FummY4NCn)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.
