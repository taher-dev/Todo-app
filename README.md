# ✅ Todo App React

A simple, modern Todo application built with React and Vite, styled with Tailwind CSS. It demonstrates core React concepts (state, props, component composition) with a minimal setup optimized for fast development.

## Overview

- Add, toggle (complete/incomplete), and delete todo items.
- Built with Vite for a fast dev server and optimized production build.
- Styling via Tailwind CSS v4 using the official Vite plugin.

## Tech Stack

- Language: JavaScript (ES Modules)
- Frontend Library: React 19
- Build Tool/Dev Server: Vite 7
- Styling: Tailwind CSS 4 (via `@tailwindcss/vite` plugin)
- Linting: ESLint 9 with React Hooks and React Refresh plugins
- Package Manager: npm (inferred from package-lock.json)

## Requirements

- Node.js: 18.18+ or 20+ (recommended LTS). Vite 7 and ESLint 9 work reliably on current LTS versions.
- npm: 9+ (comes with Node). Other package managers may work but npm is assumed here.

## Getting Started

1. Install dependencies

   - npm install

2. Start the development server

   - npm run dev
   - The dev server URL will be printed in the terminal (typically http://localhost:5173).

3. Build for production

   - npm run build
   - Output goes to the `dist` directory.

4. Preview the production build locally
   - npm run preview

## Available Scripts

Defined in package.json:

- npm run dev — Start Vite dev server
- npm run build — Create a production build
- npm run preview — Preview the production build locally
- npm run lint — Lint the codebase using ESLint

## Project Structure

A high-level view of the code layout:

```
D:\Projects\Todo-app
├─ index.html                 # Vite entry HTML
├─ package.json               # Scripts and dependencies
├─ package-lock.json          # npm lockfile
├─ vite.config.js             # Vite config (React + Tailwind plugins)
├─ eslint.config.js           # ESLint config
├─ public\                    # Static assets served as-is
├─ src\
│  ├─ main.jsx                # JS entry point mounts the React app
│  ├─ index.css               # Imports Tailwind CSS
│  ├─ App.jsx                 # Root component with app state
│  └─ components\
│     ├─ TodoInput.jsx        # Input form to add todos
│     ├─ TodoList.jsx         # Lists todos
│     └─ TodoItem.jsx         # Single todo item (toggle/delete)
└─ README.md
```

Entry points:

- HTML: index.html
- JavaScript: src/main.jsx renders <App /> into the #root element.

## Styling (Tailwind CSS)

- Tailwind is enabled via the official Vite plugin in `vite.config.js`:
  - plugins: [react(), tailwindcss()]
- Global CSS imports Tailwind using `@import "tailwindcss";` in `src/index.css`.

## Troubleshooting

- If the dev server doesn’t start:
  - Ensure Node is up-to-date (LTS recommended).
  - Remove `node_modules` and `package-lock.json`, then reinstall: `npm ci` (or `npm install`).
  - Check for port conflicts or try a different port: `npm run dev -- --port=5174`.
- If Tailwind classes don’t apply:
  - Confirm `@import "tailwindcss";` exists in `src/index.css`.
  - Ensure the Tailwind Vite plugin is included in `vite.config.js`.

## Acknowledgements

- Vite: https://vite.dev/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
