"use client";

import { SITE_NAME } from "@/lib/constants";
import { Activity } from "lucide-react";
import { FaGoogle,FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Link from "next/link";

/**
 * Dedicated sign-in page with Google and GitHub OAuth providers.
 */
export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6">
      {/* Replaced neon cyan background glow with a crisp, minimal white accent mask */}
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.04),transparent)]"
        aria-hidden
      />

      {/* Styled card context with Vercel's tight edge geometry and sharp monochrome accents */}
      <div className="relative w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-2.5 text-zinc-100 transition hover:text-white"
        >
          <Activity className="h-5 w-5 text-white" aria-hidden />
          <span className="text-lg font-medium tracking-tight">{SITE_NAME}</span>
        </Link>

        <h1 className="text-center text-2xl font-semibold tracking-tight text-white">
          Welcome back
        </h1>
        <p className="mt-2 text-center text-sm text-zinc-400">
          Sign in to start monitoring your URLs.
        </p>

        {/* Form elements using matte zinc states with quick, reactive transition phases */}
        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex w-full items-center justify-center gap-3 rounded-md border border-zinc-800 bg-zinc-900/30 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
          >
            <FaGoogle />
            Continue with Google
          </button>
          <button
            type="button"
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="flex w-full items-center justify-center gap-3 rounded-md border border-zinc-800 bg-zinc-900/30 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
          >
            <FaGithub />
            Continue with GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-xs">
          <Link href="/" className="text-zinc-500 transition hover:text-zinc-300">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}