# Tarefas

- [x] Ler instruções e identificar commit mais recente da origem.
- [x] Definir spec e plano antes da substituição.
- [x] Importar código e substituir aplicação anterior.
- [x] Adaptar configuração Cloudflare e documentação operacional.
- [x] Instalar e validar tipos, lint, build e dry-run.
- [x] Verificar rotas e recursos no runtime Workers local.
- [x] Publicar e verificar HTTPS e apresentação visual nos domínios existentes.
- [x] Integrar commits assinados à branch principal do destino.

## Validação

- CI aprovada: https://github.com/AesthFit/gilvangustavo.com.br/actions/runs/39828417073
- Instalação frozen-lockfile, build, TypeScript, lint de código, dry-run e
  verificação HTTP do runtime Workers passaram no runner GitHub.
- Versão publicada: `5370f4d0-ce87-4d45-8880-0c391084f5ec`.
- Os dois hosts passaram em `scripts/verify-deployment.mjs`: home, imagens,
  JavaScript, CSS, 404, cabeçalhos, sitemap, robots, REST MCP e inicialização MCP.
- Página inspecionada no Chrome e expansão do FAQ verificada.
