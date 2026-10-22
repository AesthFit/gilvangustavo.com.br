# Publicação no Cloudflare Workers

## Objetivo

Publicar a landing page existente em gilvangustavo.com.br, na conta Cloudflare
`de66398e0fd4bf1873f26815de955ddc`, mantendo o código em AesthFit/gilvangustavo.com.br.

## Requisitos e critérios de aceite

- Exportar a página Next.js como HTML, CSS, JavaScript e imagens estáticos.
- Servir esses arquivos pelo Worker `gilvangustavo`.
- Preservar conteúdo, fontes, imagens, interações e links existentes.
- Preservar os quatro cabeçalhos de segurança definidos na configuração atual.
- Responder com HTTP 404 para caminhos inexistentes.
- Permitir build e deploy reproduzíveis com pnpm e Wrangler.
- Validar build, deploy e resposta HTTPS do domínio.

## Fora de escopo

Redesenho, mudanças nos dados de contato, APIs, bancos de dados e migração do framework.
