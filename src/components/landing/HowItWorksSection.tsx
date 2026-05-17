"use client";

import { motion } from "framer-motion";
import { Link2, LineChart, Server } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Link2,
    title: "Register your endpoints",
    description:
      "Add URLs, define check intervals, and configure regions. Import via API or UI in seconds.",
  },
  {
    step: "02",
    icon: Server,
    title: "Probes collect globally",
    description:
      "Edge agents fire concurrent health checks and stream latency histograms back to Aether core.",
  },
  {
    step: "03",
    icon: LineChart,
    title: "Analyze and alert",
    description:
      "Visualize p50–p99 trends, set SLO thresholds, and route incidents to Slack, PagerDuty, or webhooks.",
  },
] as const;

/** Three-step onboarding narrative. */
export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative border-y border-slate-800/60 bg-slate-900/30 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(34,211,238,0.06),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            From URL to insight in three steps
          </h2>
        </div>

        <ol className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-3 lg:gap-8">
          {STEPS.map((item, index) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center lg:text-left"
            >
              <span className="text-5xl font-bold text-slate-800">
                {item.step}
              </span>
              <item.icon
                className="mx-auto mt-4 h-10 w-10 text-cyan-400 lg:mx-0"
                aria-hidden
              />
              <h3 className="mt-4 text-xl font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-400">{item.description}</p>
              {index < STEPS.length - 1 && (
                <div
                  className="absolute top-12 right-0 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-cyan-500/40 to-transparent lg:block"
                  aria-hidden
                />
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
