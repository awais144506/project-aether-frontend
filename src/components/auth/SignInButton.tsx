"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";

interface SignInButtonProps {
  variant?: "navbar" | "hero" | "cta";
}

const variantStyles = {
  navbar:
    "rounded-full bg-cyan-500/90 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 hover:shadow-cyan-400/30",
  hero: "rounded-full bg-cyan-500 px-8 py-3.5 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-400",
  cta: "rounded-full bg-cyan-500 px-10 py-4 text-lg font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-400",
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
