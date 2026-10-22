# Gilvan Gustavo

Site oficial de Gilvan Gustavo, personal trainer em Betim e região.

- Produção: https://gilvangustavo.com.br
- Também atende: https://www.gilvangustavo.com.br
- Repositório canônico: https://github.com/AesthFit/gilvangustavo.com.br
- Origem desta versão: [matbrgz/gilvan-evolve-connect, commit 813916b](https://github.com/matbrgz/gilvan-evolve-connect/tree/813916b515ece1d5f7241db25cc4a5b336e97a47)
- Especificação: [docs/specs/002-import-latest-site/](docs/specs/002-import-latest-site/)

## Desenvolvimento

TanStack Start, React, TypeScript, Tailwind CSS e Vite, com Nitro para Cloudflare
Workers. Use Node.js 22 ou superior e Bun 1.4.2.

```sh
bun install --frozen-lockfile
bun run dev
```

Contato, região e URL canônica ficam em `src/lib/site-config.ts`. O código e os
assets foram importados da versão Lovable; os ajustes locais tratam da publicação
Cloudflare, domínio canônico e cabeçalhos de segurança.

## Validação e publicação

```sh
bunx --no-install tsc --noEmit
bunx --no-install eslint src vite.config.ts --rule 'prettier/prettier: off'
bun run build
bunx wrangler@4.151.3 deploy --dry-run
bun run preview:worker
```

O build produz `.output/server/index.mjs` e `.output/public/`. O preview Workers
executa o artefato SSR no runtime do Cloudflare. Os cabeçalhos são aplicados a
respostas SSR em `src/lib/security-headers.ts` e aos assets em `public/_headers`.

Para publicar na conta Cloudflare já autorizada:

```sh
bunx wrangler@4.151.3 login
bun run deploy
```

`wrangler.jsonc` mantém o Worker `gilvangustavo`, conta
`de66398e0fd4bf1873f26815de955ddc`, e os dois Custom Domains. Não é necessário
alterar registros de e-mail. A publicação é via CLI; integração Git automática
com Workers Builds exige acesso da instalação Cloudflare à organização AesthFit.

## Build no GitHub Actions

O workflow `Validate Worker` instala pelo lockfile original, compila, verifica
TypeScript e lint de código, executa Wrangler dry-run e testa as rotas no runtime
Workers. O artefato `worker-build` contém o servidor e os assets aprovados.

Para publicar um artefato sem recompilar localmente, defina `BUILD_RUN_ID` com o
identificador de uma execução aprovada e baixe para um diretório vazio:

```sh
gh run download "$BUILD_RUN_ID" --repo AesthFit/gilvangustavo.com.br --name worker-build --dir .output
bunx wrangler@4.151.3 deploy --config .output/server/wrangler.json
```

O workflow não recebe credenciais Cloudflare. A publicação usa a autenticação
local do Wrangler. O desenho canônico do favicon está em `public/icon.svg`, com
ICO multirresolução e PNGs de compatibilidade derivados dele.

## Rotas públicas

- `/`: landing page e contato por WhatsApp.
- `/sitemap.xml` e `/robots.txt`: descoberta e indexação.
- `/mcp`: MCP com ferramentas de leitura do conteúdo público do site.
- `/.mcp/list-tools` e `/.mcp/invoke-tool/<ferramenta>`: descoberta e consulta HTTP.
- `/.well-known/oauth-protected-resource`: metadados da integração MCP original.

A origem Lovable permanece preservada. Esta importação não configura sincronização
entre os dois repositórios nem altera o projeto Lovable de origem.
