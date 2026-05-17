# Project Aether — Frontend

Marketing landing page and authentication shell for **Project Aether**, a high-performance URL monitoring platform.

## Quick start

```bash
cd frontend
cp .env.example .env.local
# Fill in OAuth credentials (see docs/AUTH.md)
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | Next.js 16 (App Router)             |
| Styling      | Tailwind CSS 4                      |
| Auth         | NextAuth.js (OAuth 2.0)             |
| 3D Hero      | React Three Fiber + Three.js        |
| Animation    | Framer Motion                       |
| Icons        | Lucide React                        |

## Project structure

```
src/
├── app/                    # Routes & API
│   ├── api/auth/           # NextAuth handler
│   ├── auth/signin/        # OAuth sign-in UI
│   └── page.tsx            # Landing page entry
├── components/
│   ├── auth/               # Sign-in button
│   ├── landing/            # Page sections + globe
│   ├── layout/             # Navbar, footer
│   └── providers/          # Session provider
├── lib/                    # Auth config, constants
└── types/                  # NextAuth type extensions
docs/                       # Documentation (this folder)
```

## Landing sections

1. **Hero** — 3D rotating globe, headline, Get Started (OAuth)
2. **Stats** — Key platform metrics
3. **Features** — Six capability cards
4. **How it works** — Three-step flow
5. **Pricing** — Starter / Pro / Enterprise tiers
6. **CTA** — Final conversion band
7. **Footer** — Navigation & legal placeholders

## Further reading

- [Authentication setup](./AUTH.md)
- [Architecture overview](./ARCHITECTURE.md)
