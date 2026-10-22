# Tarefas

- [x] Inspecionar os ícones existentes e definir desenho e formatos.
- [x] Criar SVG e gerar PNGs e ICO.
- [x] Atualizar metadados e checagem HTTP dos ícones.
- [x] Inspecionar visualmente e validar a CI.
- [x] Publicar e verificar os dois domínios.

## Validação

- Arte inspecionada em renderizações de 16, 32, 64 e 256px.
- CI aprovada: https://github.com/AesthFit/gilvangustavo.com.br/actions/runs/39836523326
- O teste HTTP verifica as referências versionadas, o SVG da marca, as seis
  resoluções ICO e as dimensões dos PNGs de 32 e 180px.
- Publicado no Worker `gilvangustavo`, versão `3438aa64-aadc-4b0a-9172-5f45f7986d15`.
- Verificação HTTPS passou nos hosts raiz e `www`, incluindo os novos ícones,
  os demais assets, cabeçalhos, 404, sitemap, robots e rotas MCP.
