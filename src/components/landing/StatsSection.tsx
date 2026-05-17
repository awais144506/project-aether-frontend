"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "10M+", label: "Checks per minute" },
  { value: "<5ms", label: "Collector overhead" },
  { value: "48", label: "Global regions" },
  { value: "99.99%", label: "Platform uptime" },
] as const;

/** Social-proof metrics band. */
export function StatsSection() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center"
            >
              <dt className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-slate-500">{stat.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
