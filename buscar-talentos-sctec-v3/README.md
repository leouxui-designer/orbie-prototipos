# Portal de Talentos SCTEC — MVP v3

Protótipo HTML criado pelo colega como MVP do Portal de Talentos do programa SCTEC (Secretaria de Estado da Ciência, Tecnologia e Inovação de Santa Catarina).

---

## Contexto do produto

O **SCTEC** é um programa do Governo de SC executado em parceria com o SENAI/SC. Oferece trilhas gratuitas de formação em tecnologia e IA:

- **Carreira Tech** — formação inicial em 3 áreas (até 518h)
- **IA para DEVs** — desenvolvedores que querem aplicar IA (180h, aulas ao vivo)
- **IA na Prática** — uso de IA no dia a dia (54h, autoguiado)

O **Portal de Talentos** é uma plataforma que conecta os alunos formados pelo programa com empresas parceiras de SC.

---

## Perfis de usuário

| Perfil | Acesso | Telas principais |
|---|---|---|
| **Aluno** | Login → portal do aluno | Buscar Empresas, Meu Perfil |
| **Empresa** | Login → painel da empresa | Buscar Talentos, Perfil da Empresa |
| **Admin** | Login → painel admin | Gestão de Alunos, Gestão de Empresas, Usuários |

O login redireciona para um modal de seleção de perfil (modo teste/protótipo).

---

## Estrutura de arquivos

```
buscar-talentos-sctec-v3/
├── index.html                     # Home pública (trilhas, sobre, hero)
├── server.js                      # Servidor Node simples (não usado no protótipo estático)
│
├── components/                    # Parciais carregados via fetch (data-component)
│   ├── govbar.html                # Barra gov.sc.gov.br
│   ├── navbar.html                # Menu principal com link "Portal de Talentos"
│   └── footer.html                # Footer com 4 colunas
│
├── css/
│   ├── variables.css              # Design tokens: cores, tipografia, espaçamento
│   ├── reset.css                  # Reset base
│   ├── layout.css                 # Container, grid, helpers responsivos
│   ├── components.css             # Govbar, Navbar, Buttons, Cards, Footer
│   ├── home.css                   # Estilos exclusivos da home pública
│   ├── empresas.css               # Landing "Para Empresas" + formulário de captação
│   ├── login.css                  # Tela de login + modal de perfil
│   └── painel.css                 # Sidebar, painel de empresa/aluno, admin, toast, etc.
│
├── js/
│   └── main.js                    # Component loader, navbar, smooth scroll, scroll reveal
│
├── assets/
│   └── bandeira-sc.png            # Logo SC para govbar
│
└── pages/
    │
    │  ── PÚBLICO ──
    ├── empresas.html              # Landing "Para Empresas" (hero, benefícios, form de cadastro, FAQ)
    ├── empresas-obrigado.html     # Página de confirmação após envio do form
    ├── login.html                 # Login + modal de seleção de perfil (teste)
    │
    │  ── ALUNO (logado) ──
    ├── aluno-empresas.html        # Lista de empresas parceiras com filtros (segmento, porte, tech chips)
    ├── aluno-perfil.html          # Edição do perfil do aluno (foto, skills, exp, vídeo, PDF)
    ├── aluno-perfil-publico.html  # Visualização pública do perfil do aluno
    ├── empresa-perfil-publico.html # Perfil público de uma empresa (visto pelo aluno)
    │
    │  ── EMPRESA (logada) ──
    ├── painel-candidatos.html     # Busca de talentos com filtro de hard/soft skills e cidade
    ├── painel-perfil.html         # Edição do perfil da empresa (logo, dados, portais de vagas, techs)
    │
    │  ── ADMIN ──
    ├── admin-alunos.html          # Lista de alunos (tabela com busca e filtros)
    ├── admin-aluno-perfil.html    # Visualização do perfil de um aluno pelo admin
    ├── admin-aluno-cadastro.html  # Cadastro manual de aluno pelo admin
    ├── admin-empresas.html        # Lista de empresas (aprovação pendente + ativas)
    ├── admin-empresa-editar.html  # Edição de dados de empresa pelo admin
    ├── admin-empresa-cadastro.html# Cadastro manual de empresa pelo admin
    ├── admin-usuarios.html        # Lista de usuários admin
    └── admin-usuario-cadastro.html# Cadastro de usuário admin
```

---

## Design System

**Fontes:** Montserrat (títulos) + Roboto (corpo)  
**Cor primária:** `#2CA942` (verde SCTEC) com gradiente `#2CA942 → #55B13A → #52B934`  
**Background dark:** `#303030` / `#141414`  
**Container:** max 1200px

Tokens definidos em `css/variables.css` — cores, tipografia, espaçamento (4px a 120px), sombras e transições.

---

## Como rodar

Como protótipo estático, os componentes (govbar, navbar, footer) são carregados via `fetch`. Para funcionar corretamente precisa de um servidor local:

```bash
# Opção 1 — Node (server.js incluído)
node server.js

# Opção 2 — VS Code Live Server
# Abrir index.html com Live Server

# Opção 3 — Python
python -m http.server 3000
```

Acesse `http://localhost:3000` e clique em **Portal de Talentos** para entrar no login.

---

## Fluxo de navegação do protótipo

```
index.html
  └─► pages/login.html
        └─► [modal] Selecionar perfil:
              ├─► Administrador → pages/admin-alunos.html
              ├─► Empresa       → pages/painel-candidatos.html
              └─► Aluno         → pages/aluno-empresas.html
```

---

## Notas para ajustes futuros

- Os caminhos dos componentes usam caminhos absolutos (`/components/...`) — funciona ok com servidor local na raiz, mas pode precisar de ajuste se servido em subpasta.
- Sem backend: todas as ações (login, formulários, filtros) são puramente client-side com dados mockados.
- Filtros de busca (talentos e empresas) funcionam em memória via `data-*` attributes nos cards.
- O `server.js` é um Express simples — não foi avaliado em detalhe.
