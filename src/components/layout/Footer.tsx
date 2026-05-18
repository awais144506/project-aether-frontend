"use client";

import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Activity} from "lucide-react";
import { FaTwitter,FaGithub } from "react-icons/fa";
import Link from "next/link";

/** Site footer with navigation, social profiles, and legal links. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          {/* Brand Identity */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5 text-zinc-100 transition hover:text-white">
              <Activity className="h-5 w-5 text-white" aria-hidden />
              <span className="font-medium tracking-tight text-sm">{SITE_NAME}</span>
            </Link>
            <p className="max-w-xs text-sm text-zinc-500 leading-relaxed">
              Persistent backbone for real-time URL latency monitoring at
              global scale.
            </p>
          </div>

          {/* Navigation Blocks */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            
            {/* Product Links */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Product
              </p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm text-zinc-400 transition hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Legal Links */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Legal
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-sm text-zinc-400 transition hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-sm text-zinc-400 transition hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Professional Social Grid */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Social
              </p>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition hover:text-white"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition hover:text-white"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Rights Alignment */}
        <div className="mt-12 border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {year} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}