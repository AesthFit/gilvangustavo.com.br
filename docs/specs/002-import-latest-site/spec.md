# Substituir o site pela versão mais recente

## Objetivo

Usar a versão mais recente de `matbrgz/gilvan-evolve-connect` como código do
site canônico `AesthFit/gilvangustavo.com.br` e publicá-la nos domínios existentes.

## Requisitos e critérios de aceite

- Importar o conteúdo de `main` da origem, commit
  `813916b515ece1d5f7241db25cc4a5b336e97a47`.
- Substituir a implementação Next.js por TanStack Start/Vite da origem,
  preservando conteúdo, imagens, contato, estilos e rotas existentes.
- Preservar o histórico do destino e não alterar ou apagar o repositório de origem.
- Manter o Worker `gilvangustavo` e os domínios raiz e `www` existentes.
- Gerar e executar o novo build no runtime Cloudflare Workers.
- Preservar os quatro cabeçalhos de segurança da publicação anterior.
- Validar tipos, build, home, recursos, 404, sitemap, rotas MCP e HTTPS público.
- Disponibilizar a substituição na branch principal do destino com commits assinados.

## Fora de escopo

Redesenho, sincronização futura com Lovable, exclusão do repositório de origem e
configuração de novas credenciais para deploy automático.
