import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Activity } from "lucide-react";
import Link from "next/link";

/** Site footer with navigation and legal placeholders. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2 text-slate-100">
              <Activity className="h-5 w-5 text-cyan-400" aria-hidden />
              <span className="font-semibold">{SITE_NAME}</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              Persistent backbone for real-time URL latency monitoring at
              global scale.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Product
              </p>
              <ul className="mt-4 space-y-2">
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
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Legal
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>
                  <span className="cursor-default">Privacy</span>
                </li>
                <li>
                  <span className="cursor-default">Terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-slate-800/80 pt-8 text-center text-xs text-slate-600 md:text-left">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
