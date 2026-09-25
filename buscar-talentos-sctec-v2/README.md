# Portal de Talentos SCTEC — Protótipo de Visualização Rápida

## O problema

A tela de busca do Portal de Talentos possui uma funcionalidade de **visualização rápida de candidatos** modelada como um carrossel no estilo Stories do Instagram. Isso cria um conflito conceitual difícil de resolver:

- A lista de resultados tem **paginação** (N candidatos por página)
- O carrossel de visualização rápida navega **entre candidatos**
- Essas duas dimensões colidem: o que acontece quando o carrossel chega ao último candidato da página?

O usuário fica sem saber se deve:
- Fechar o carrossel e ir para a próxima página manualmente
- Esperar que o carrossel avance sozinho para a página 2
- Continuar no carrossel e ignorar a paginação

Esse conflito gera desorientação, perda de contexto e redução da velocidade de triagem — exatamente o oposto do objetivo da funcionalidade.

---

## Diagnóstico

### Por que "Stories + paginação" não funciona

| Problema | Impacto |
|---|---|
| Dois sistemas de navegação paralelos (carrossel e paginação) | O usuário não sabe qual está no controle |
| Stories ocultam a lista durante a revisão | Perde referência visual dos candidatos já vistos |
| Paginação interrompe o fluxo do carrossel | Força ação manual para continuar revisando |
| Sem indicador de progresso global | Não sabe quantos candidatos já analisou de 100 |
| Sem rastreio de "já revisado" | Não sabe por onde parou ao voltar |
| Stories são consumo passivo (entretenimento) | Recrutamento exige comparação ativa e decisão |

O modelo Stories é otimizado para **consumo rápido e passivo de conteúdo efêmero**. Recrutamento exige **análise comparativa ativa**, com contexto preservado, possibilidade de voltar, marcar, descartar e tomar decisões. São contextos cognitivos completamente opostos.

---

## Alternativas avaliadas

### Alternativa A — Carrossel integrado à paginação

**Proposta:** manter o carrossel, mas tornar a navegação contínua entre páginas.

**Como funcionaria:**
- O carrossel opera sobre todos os resultados filtrados (não apenas a página atual)
- Ao chegar ao último candidato da página 1, avança automaticamente para a página 2
- Indicador duplo: "candidato 10 de 48" (global) + "página 2 de 5"
- A lista sincroniza para mostrar a página do candidato em exibição

**Trade-offs:**

| Pró | Contra |
|---|---|
| Mantém o visual de Stories existente | Lista some durante a revisão |
| Navegação global sem interrupção | Sem visão comparativa dos candidatos |
| Menor mudança no design atual | Difícil scanear e voltar a um candidato específico |
| | Modelo mental de Stories é inadequado para o contexto |
| | Acessibilidade ruim (foco preso no overlay) |

**Conclusão sobre a alternativa A:** resolve o problema técnico de paginação, mas não resolve o problema de experiência. O recrutador continua sem contexto e sem visão comparativa.

---

### Alternativa B — Split View (recomendada) ✅

**Proposta:** substituir o overlay por um **painel lateral fixo**, mantendo a lista visível durante a navegação.

**Como funciona:**
- Lista de candidatos ocupa a parte esquerda
- Ao clicar num candidato, um painel de perfil rápido abre à direita
- A lista **não desaparece** — o recrutador vê a lista e o perfil simultaneamente
- Navegação pelos botões anterior/próximo avança globalmente (atravessa páginas automaticamente)
- A lista sincroniza e rola para mostrar o candidato ativo com highlight
- Candidatos já revisados recebem marcação visual (ponto verde)
- Barra de progresso mostra % do total revisado
- Ações rápidas: favoritar, selecionar, descartar (com atalhos de teclado)

**Trade-offs:**

| Pró | Contra |
|---|---|
| Lista sempre visível — contexto preservado | Painel reduz espaço para a lista |
| Navegação global sem barreira de paginação | Requer mais espaço horizontal (desktop first) |
| Indicadores claros de posição e progresso | |
| Candidatos revisados são rastreados visualmente | |
| Atalhos de teclado tornam triagem muito rápida | |
| Padrão conhecido: email clients, Jira, Figma | |
| Escalável para centenas de candidatos | |
| Acessível: focus management, aria-live, keyboard nav | |

---

## Solução recomendada: Split View com navegação global

### Decisão e raciocínio

A alternativa B foi escolhida por três razões fundamentais:

**1. Elimina o conflito conceitual**
A paginação deixa de ser um obstáculo para a navegação rápida. O recrutador navega pelo índice global (1 de 48, 2 de 48...) e a lista se sincroniza automaticamente. Paginação vira um detalhe de implementação invisível ao usuário.

**2. Mantém contexto e visão comparativa**
Ver a lista enquanto analisa o perfil permite comparar mentalmente candidatos, voltar a um perfil anterior facilmente e manter o contexto da busca em tela o tempo todo.

**3. Padrão de mercado para análise em escala**
Email clients (Gmail, Outlook), ferramentas de code review (Linear, GitHub), e sistemas de RH enterprise (Greenhouse, Lever) todos usam split view para análise em escala. É um modelo mental já estabelecido.

---

## Fluxo completo: página 1 → visualização rápida → última candidato → continuação

```
1. Recrutador aplica filtros → sistema exibe 48 candidatos, 10 por página

2. Clica no candidato 10 (último da página 1)
   → Painel abre à direita
   → Lista mantém candidato 10 em destaque
   → Contador mostra: "10 de 48 candidatos"
   → Indicador de página: "Página 1/5 · 10 de 10 nesta página"
   → Hint aparece: "→ Próximo: página 2"

3. Recrutador clica "Próximo" (ou pressiona →)
   → Candidato 11 carrega no painel (primeiro da página 2)
   → Lista sincroniza automaticamente para a PÁGINA 2
   → Candidato 11 fica destacado na lista
   → Contador atualiza: "11 de 48 candidatos"
   → Página 1 ficou para trás — candidatos 1-10 com marcação "revisado"

4. Recrutador continua navegando pela página 2...

5. Se pressionar "Anterior" no candidato 11:
   → Volta ao candidato 10
   → Lista sincroniza de volta para a PÁGINA 1
   → Hint: "← Voltando: página 1"

6. Ao chegar no candidato 48 (último):
   → Botão "Próximo" fica desabilitado
   → Progresso mostra 100%

7. A qualquer momento:
   → Filtros e ordenação continuam aplicados
   → Lista mostra quais candidatos já foram revisados (ponto verde)
   → Status marcados (favorito/selecionado/descartado) visíveis na lista
   → Recrutador pode clicar diretamente em qualquer linha da lista
```

### Resposta às perguntas centrais

**"O que acontece quando o recrutador chega ao último candidato da primeira página?"**
O sistema mostra claramente "→ Próximo: página 2" e ao pressionar próximo, sincroniza automaticamente para a página 2 sem nenhuma ação manual do usuário.

**"Como o usuário entende quantos candidatos existem, quantos já visualizou e quantos ainda faltam?"**
- Contador global no painel: "11 de 48 candidatos"
- Barra de progresso com percentual
- Pontos verdes nas linhas já revisadas na lista
- Status aplicados visíveis na lista (⭐ ✅ ✕)

**"Como ele passa da página 1 para a página 2 sem perder o contexto?"**
Ele não precisa fazer nada. A navegação é global. A paginação sincroniza automaticamente conforme o recrutador avança pelo painel.

---

## Como executar o protótipo

```
Abrir o arquivo diretamente no navegador:
C:\Kiro Projeto\Mocks\buscar-talentos-sctec-v2\index.html
```

Não requer servidor, build ou dependências. Funciona offline.

### Fluxo de teste recomendado

1. Abra o `index.html` no Chrome ou Firefox
2. Observe os 48 candidatos na lista (10 por página)
3. Clique em qualquer candidato — o painel abre à direita
4. Use **→** para avançar até o candidato 10
5. Observe o hint "→ Próximo: página 2" e a barra de progresso
6. Pressione **→** novamente — veja a lista sincronizar para a página 2
7. Use os filtros e observe os resultados atualizando em tempo real
8. Marque candidatos com **F** (favorito), **S** (selecionar) ou **D** (descartar)
9. Note as marcações persistindo na lista enquanto navega
10. Pressione **Esc** para fechar o painel — filtros e estado mantidos

### Atalhos de teclado

| Tecla | Ação |
|---|---|
| `→` ou `↓` | Próximo candidato |
| `←` ou `↑` | Candidato anterior |
| `Esc` | Fechar painel |
| `F` | Favoritar / desfavoritar |
| `S` | Selecionar / deselecionar |
| `D` | Descartar / restaurar |

---

## Arquivos

```
buscar-talentos-sctec-v2/
├── index.html   — Estrutura HTML completa (navbar, sidebar, lista, painel)
├── style.css    — Design system fiel ao Figma (tokens, layout, componentes)
├── script.js    — 48 candidatos + toda a lógica de estado e renderização
└── README.md    — Este arquivo
```

---

## Decisões importantes de UX

### Navegação global vs. navegação por página
O painel navega pelo **índice global dos resultados filtrados**, não pelo índice da página. A paginação da lista é um detalhe de apresentação — ela sincroniza para acompanhar o candidato em foco. Isso elimina completamente o conflito paginação + carrossel.

### Por que não modal
Modal fecha a lista. O recrutador perde referência de onde estava e precisa reabrir para comparar. Split view mantém tudo visível simultaneamente.

### Candidatos revisados
Um ponto verde na lista indica candidatos já abertos no painel. O recrutador consegue identificar visualmente onde parou mesmo após horas de triagem ou ao retornar no dia seguinte.

### Sincronização bidirecional
Clicar numa linha da lista abre o painel **e** sincroniza o contador global. Navegar pelo painel sincroniza o destaque na lista. Os dois controles são equivalentes — o usuário pode usar qualquer um.

### Por que manter paginação na lista
Sem paginação, uma lista de 100+ candidatos seria lenta para renderizar e impossível de escanear. A paginação é mantida na lista para eficiência visual. Mas ela é transparente para o fluxo de revisão do painel.
