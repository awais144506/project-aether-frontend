# Authentication (NextAuth + OAuth 2.0)

Project Aether uses **NextAuth.js v4** with JWT sessions and two OAuth 2.0 providers: **Google** and **GitHub**.

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable               | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `NEXTAUTH_URL`         | App URL (e.g. `http://localhost:3000`)           |
| `NEXTAUTH_SECRET`      | Random secret (`openssl rand -base64 32`)        |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID                           |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret                       |
| `GITHUB_ID`            | GitHub OAuth App client ID                       |
| `GITHUB_SECRET`        | GitHub OAuth App client secret                   |

## Google OAuth setup

1. Open [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Create an **OAuth 2.0 Client ID** (Web application).
3. Add authorized redirect URI:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
4. Copy Client ID and Secret into `.env.local`.

## GitHub OAuth setup

1. Go to [GitHub Developer Settings → OAuth Apps](https://github.com/settings/developers).
2. Create a new OAuth App.
3. Set **Authorization callback URL**:
   ```
   http://localhost:3000/api/auth/callback/github
   ```
4. Copy Client ID and generate a Client Secret for `.env.local`.

## User flows

- **Navbar / Hero / CTA “Get started”** — `signIn()` redirects to `/auth/signin`.
- **Sign-in page** — Explicit “Continue with Google” or “Continue with GitHub”.
- **Authenticated** — Buttons show “Sign out”; session available via `useSession()`.

## Configuration files

- `src/lib/auth.ts` — Provider list, pages, callbacks
- `src/app/api/auth/[...nextauth]/route.ts` — API route handler
- `src/components/providers/SessionProvider.tsx` — Client session context

## Production

Update `NEXTAUTH_URL` and add production callback URLs to both OAuth apps:

```
https://your-domain.com/api/auth/callback/google
https://your-domain.com/api/auth/callback/github
```
