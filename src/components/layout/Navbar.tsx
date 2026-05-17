"use client";

import { SignInButton } from "@/components/auth/SignInButton";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Activity } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Sticky top navigation with section anchors and OAuth Get Started CTA.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-cyan-500/10 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-100 transition hover:text-cyan-300"
        >
          <Activity className="h-6 w-6 text-cyan-400" aria-hidden />
          <span className="text-lg font-semibold tracking-tight">
            {SITE_NAME}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-slate-400 transition hover:text-cyan-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <SignInButton variant="navbar" />
      </nav>
    </header>
  );
}
