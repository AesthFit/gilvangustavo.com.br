# Plano de importação e publicação

## Origem e preservação

Baixar o commit de origem pelo Git e extrair seus arquivos no checkout isolado
do destino. Substituir arquivos da aplicação antiga; preservar `.git`, as specs
anteriores e a identidade da publicação Cloudflare. Não reescrever nenhum commit
publicado. Registrar a origem no commit e na documentação operacional.

## Arquitetura

Preservar TanStack Start, React, Vite e o adaptador Nitro já usados na origem.
A configuração Lovable fornece plugins de build e preset Cloudflare. Conferir
o artefato gerado antes de apontar Wrangler para o novo entrypoint e assets.
Preservar o manifesto e o lockfile Bun da origem, fixando Bun 1.4.2 e Wrangler
4.151.3 por Bunx. Normalizar os URLs de tarballs do cache Lovable para o npm
público, mantendo versões e hashes de integridade. Preservar `bunfig.toml`,
incluindo a política de idade mínima de 24 horas e as seis exceções já existentes.
O GitHub Actions executa instalação, build, tipos, lint de código, dry-run e
verificação HTTP no runtime Workers. O artefato do build pode ser baixado e
publicado localmente com a autenticação Cloudflare existente, sem enviar
credenciais Cloudflare para o GitHub. Essa execução remota evita os timeouts
observados nos downloads npm da máquina local.
Atualizar canonical, Open Graph, JSON-LD, sitemap, robots e contato MCP para o
domínio canônico. Aplicar cabeçalhos às respostas SSR no wrapper já existente.

## Contratos

- `bun run build`: gera o Worker SSR e seus assets.
- `bun run preview:worker`: executa o artefato no runtime Workers local.
- `bun run deploy`: compila e publica o mesmo Worker e domínios.
- Cabeçalhos de segurança devem ser aplicados tanto ao HTML SSR quanto aos
  arquivos estáticos, conforme o caminho de resposta do adaptador.
- As rotas MCP somente expõem os serviços e contatos já públicos na origem.
- A spec 001 permanece como registro da publicação anterior, substituída por esta.

## Passos e validação

Importar arquivos; adaptar apenas publicação e documentação; instalar pelo
lockfile; validar TypeScript, lint e build; verificar artefato com Wrangler;
testar rotas locais; publicar e verificar os dois hosts e apresentação visual;
registrar e integrar commits assinados ao destino.
