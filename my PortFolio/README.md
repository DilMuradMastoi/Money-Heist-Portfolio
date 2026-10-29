# Dilmurad — Cinematic Heist Portfolio

A React + Vite portfolio with a cinematic black-and-crimson visual identity and eight sections: Home, About, Experience, Skills, Services, Projects, Resume, and Contact. The original design and section artwork are preserved.

## Requirements

- Node.js 20.19+ (Node.js 22.12+ or a current Node 24 release is recommended)
- npm

## Run locally

Open this folder in VS Code. In the terminal, make sure you are in the folder containing `package.json`, then run:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (this project uses port 3000 by default).

## Contact form delivery

The contact form validates the fields and opens the visitor's default email app with the message addressed to `dilmurad2307@gmail.com`. The visitor must press **Send** in their email app. This avoids third-party form-service outages and browser CORS errors and does not require an API key. It does **not** silently send email from the website; for automatic delivery without the visitor's mail app, configure a form provider (such as Formspree) or a secure server-side email endpoint with your own account credentials. Never put private API keys in frontend code.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

- `src/sections/` — the eight portfolio sections
- `src/components/` — shared navigation, footer, icons, and modal components
- `src/data/portfolioData.js` — editable portfolio content
- `src/assets/` — the eight cinematic backgrounds, project previews, and signature artwork used by the app
- `vite.config.ts` — Vite and React configuration

## Customization

Update personal details, quotes, experience, skills, services, and project information in `src/data/portfolioData.js`. Replace social links and contact details with your own before publishing.

The background images and project preview images required by the current design are included locally. No nested ZIP files or unused legacy project copy is required to run the app.
