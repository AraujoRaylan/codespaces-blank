# Convite de aniversário — 35 anos

Projeto simples em HTML, CSS e JavaScript para um convite digital elegante e responsivo.

## Como abrir

Você pode abrir o arquivo `index.html` diretamente no navegador ou servir a pasta com um servidor local.

### Opção 1: abrir diretamente

- Clique em `index.html` no VS Code
- Use a opção “Open in Browser” ou abra no navegador do sistema

### Opção 2: servidor local

```bash
cd /workspaces/codespaces-blank
python3 -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Deploy no Cloudflare Pages

Como é um site estático, o projeto funciona diretamente no Cloudflare Pages sem build.

1. Suba o projeto para um repositório GitHub.
2. No painel do Cloudflare Pages, clique em “Create a project”.
3. Escolha “Connect to Git”.
4. Selecione o repositório.
5. Em “Framework preset”, escolha “None”.
6. Deixe o campo de build em branco.
7. No campo de output, use a pasta raiz do projeto: `.`
8. Clique em “Save and Deploy”.

Depois da publicação, o link público será algo como:

```text
https://seu-projeto.pages.dev
```

### Preview do WhatsApp

O site já tem Open Graph configurado pelo [index.html](index.html) e pela imagem [assets/og-image.svg](assets/og-image.svg).

Quando a página estiver publicada, o WhatsApp vai mostrar a capa do convite automaticamente com a URL real do site.

## Estrutura

- `index.html` — página principal
- `styles.css` — estilos do convite
- `script.js` — interações leves
- `assets/cover.svg` — imagem ilustrativa do convite

## Personalização

Você pode trocar:

- texto do convite
- data e local
- link do WhatsApp
- link do Instagram
- imagem de destaque

---

Projeto criado para celebrar uma data especial com estilo e simplicidade.
