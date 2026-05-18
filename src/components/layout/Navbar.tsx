"use client";

import { SignInButton } from "@/components/auth/SignInButton";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Activity } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Sticky top navigation with Vercel-inspired matte dark aesthetics.
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-zinc-800 bg-black/70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main"
      >
        {/* Logo / Home Link */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-zinc-100 transition hover:text-white"
        >
          <Activity className="h-5 w-5 text-white" aria-hidden />
          <span className="font-medium tracking-tight text-sm">
            {SITE_NAME}
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-zinc-400 transition hover:text-zinc-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="flex items-center">
          <SignInButton variant="navbar" />
        </div>
      </nav>
    </header>
  );
}