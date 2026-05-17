"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Globe2,
  Lock,
  Layers,
  Radio,
  Cpu,
} from "lucide-react";

const FEATURES = [
  {
    icon: Radio,
    title: "Real-time latency streams",
    description:
      "Ingest millions of probe results per second with lock-free pipelines and zero-copy buffers.",
  },
  {
    icon: Globe2,
    title: "Global edge probes",
    description:
      "Distributed collectors map data-transfer paths worldwide with pinpoint accuracy.",
  },
  {
    icon: Lock,
    title: "Security-first design",
    description:
      "mTLS between agents, encrypted at rest, and OAuth 2.0 for every dashboard session.",
  },
  {
    icon: Cpu,
    title: "Low-level optimization",
    description:
      "Hand-tuned concurrency primitives keep p99 overhead flat under extreme load.",
  },
  {
    icon: Layers,
    title: "Horizontally scalable",
    description:
      "Shard by tenant or region—scale collectors and aggregators independently.",
  },
  {
    icon: BarChart3,
    title: "Actionable analytics",
    description:
      "SLA dashboards, anomaly detection, and historical rollups in one unified view.",
  },
] as const;

/** Core product capabilities in a responsive grid. */
export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Features
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Built for operators who cannot afford blind spots
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            The persistent backbone your apps rely on—concurrent, secure, and
            optimized from the metal up.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 transition hover:border-cyan-500/30 hover:bg-slate-900/60"
            >
              <feature.icon
                className="h-8 w-8 text-cyan-400 transition group-hover:text-cyan-300"
                aria-hidden
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-100">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
