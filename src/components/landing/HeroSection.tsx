"use client";

import { SignInButton } from "@/components/auth/SignInButton";
import { GlobeScene } from "@/components/landing/globe/GlobeScene";
import { SITE_TAGLINE } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap } from "lucide-react";
import Link from "next/link";

/** Hero with 3D globe backdrop, headline, and primary OAuth CTA. */
export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <GlobeScene />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-20 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm text-cyan-300/90"
        >
          <Zap className="h-3.5 w-3.5" aria-hidden />
          Real-time latency at planetary scale
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Monitor every URL.{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-slate-400 bg-clip-text text-transparent">
            Miss nothing.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
        >
          {SITE_TAGLINE} Project Aether is a high-performance, scalable URL
          monitoring system built for massive real-time latency data—with
          concurrency, security, and low-level optimization at its core.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <SignInButton variant="hero" />
          <Link
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-8 py-3.5 text-base font-medium text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-300"
          >
            Explore features
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-500"
        >
          <li className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-cyan-500/80" aria-hidden />
            Enterprise-grade security
          </li>
          <li className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-cyan-500/80" aria-hidden />
            Sub-millisecond collectors
          </li>
          <li>99.99% uptime SLA</li>
        </motion.ul>
      </div>
    </section>
  );
}
