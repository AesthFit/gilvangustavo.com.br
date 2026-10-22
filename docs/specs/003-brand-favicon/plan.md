# Plano

Usar `public/icon.svg` como desenho canônico, com traços vetoriais para dois Gs,
fundo carvão e dourado da paleta existente. Renderizar os PNG e as imagens PNG
incorporadas no contêiner ICO a partir desse SVG, com Sharp. O ICO inclui
16, 32, 48, 64, 128 e 256px; o ícone Apple usa 180px.

Atualizar os links de `src/routes/__root.tsx` com SVG, ICO e Apple Touch Icon,
incluindo uma versão explícita nas URLs. Estender a verificação HTTP existente
para conferir conteúdo, dimensões/formatos declarados e referências dos ícones.
Inspecionar visualmente a arte, executar a CI existente e publicar o artefato
aprovado no mesmo Worker.
