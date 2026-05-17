"use client";

import { SignInButton } from "@/components/auth/SignInButton";
import { motion } from "framer-motion";

/** Final conversion band before the footer. */
export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-900/50 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(34,211,238,0.1),transparent)]"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl px-6 text-center lg:px-8"
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Ready to see every millisecond?
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Join teams who trust Project Aether as the persistent monitoring
          backbone. Sign in with Google or GitHub in one click.
        </p>
        <div className="mt-10 flex justify-center">
          <SignInButton variant="cta" />
        </div>
      </motion.div>
    </section>
  );
}
