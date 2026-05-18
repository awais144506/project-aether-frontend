"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";

interface SignInButtonProps {
  variant?: "navbar" | "hero" | "cta";
}

// Replaced the playful rounded-full shapes and glowing neon cyans 
// with Vercel's signature clean edges, crisp white backgrounds, and matte blacks.
const variantStyles = {
  navbar:
    "rounded-md bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:bg-zinc-200 active:bg-zinc-300",
  hero: 
    "rounded-md bg-white px-6 py-2.5 text-base font-medium text-black transition hover:bg-zinc-200 active:bg-zinc-300",
  cta: 
    "rounded-md bg-white px-8 py-3.5 text-lg font-medium text-black transition hover:bg-zinc-200 active:bg-zinc-300",
};

/**
 * OAuth entry point — signs in via Google/GitHub or signs out when authenticated.
 */
export function SignInButton({ variant = "navbar" }: SignInButtonProps) {
  const { data: session, status } = useSession();
  const className = variantStyles[variant];

  if (status === "loading") {
    return (
      <span
        className={`${className} inline-block cursor-wait opacity-60`}
        aria-busy="true"
      >
        Loading…
      </span>
    );
  }

  if (session?.user) {
    return (
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/" })}
        className={`${className} inline-flex items-center gap-2`}
      >
        <LogOut className="h-4 w-4" aria-hidden />
        Sign out
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signIn(undefined, { callbackUrl: "/", redirect: true })}
      className={`${className} inline-flex items-center gap-2`}
    >
      <LogIn className="h-4 w-4" aria-hidden />
      Get started
    </button>
  );
}