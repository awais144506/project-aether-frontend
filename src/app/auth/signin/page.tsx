"use client";

import { SITE_NAME } from "@/lib/constants";
import { Activity } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";

/**
 * Dedicated sign-in page with Google and GitHub OAuth providers.
 */
export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,211,238,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative w-full max-w-md rounded-2xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-sm">
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-2 text-slate-100"
        >
          <Activity className="h-6 w-6 text-cyan-400" aria-hidden />
          <span className="text-lg font-semibold">{SITE_NAME}</span>
        </Link>

        <h1 className="text-center text-2xl font-bold text-slate-50">
          Welcome back
        </h1>
        <p className="mt-2 text-center text-sm text-slate-400">
          Sign in to start monitoring your URLs with OAuth 2.0.
        </p>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
          >
            Continue with Google
          </button>
          <button
            type="button"
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
          >
            Continue with GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          <Link href="/" className="text-cyan-500/80 hover:text-cyan-400">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
