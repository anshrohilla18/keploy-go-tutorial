# Test Your Go API with Keploy

A beginner-friendly, single-page tutorial for recording and replaying API tests of a Go application with [Keploy](https://keploy.io), built with Next.js and MDX.

## What the tutorial covers

I ran Keploy's Go + MySQL (Gorilla/Mux) quickstart on my own machine and wrote up the experience for developers who have never used Keploy:

- Running the sample app and MySQL
- Recording test cases with `keploy record`
- Replaying them with `keploy test`
- What the generated test and mock files contain
- Running the tests with the database switched off
- Setup problems I hit (WSL, `sudo`, `curl` in PowerShell) and how I fixed them

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- MDX via `@next/mdx`
- Tailwind CSS with `@tailwindcss/typography`
- Syntax highlighting with `rehype-pretty-code` and Shiki
- Custom MDX components: `Callout`, `HowKeployWorks`, `Screenshot`, and a code block with a copy button
- Light and dark mode

## Run it locally

Requires Node.js.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Project structure

```text
app/
  layout.tsx       # page shell, header, theme script, table of contents
  page.mdx         # the tutorial content
  globals.css      # theme variables and article styles
components/        # MDX components and UI pieces
public/images/     # screenshots from my own runs
mdx-components.tsx # registers custom components for MDX
next.config.mjs    # MDX and plugin configuration
```

## Deployment

Deployed on [Vercel](https://vercel.com).