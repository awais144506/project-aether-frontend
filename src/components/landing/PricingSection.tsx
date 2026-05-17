"use client";

import { SignInButton } from "@/components/auth/SignInButton";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For side projects and early experiments.",
    features: [
      "Up to 25 monitored URLs",
      "5-minute check intervals",
      "7-day data retention",
      "Email alerts",
      "Community support",
    ],
    highlighted: false,
    cta: "Get started free",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For teams shipping production workloads.",
    features: [
      "Up to 500 monitored URLs",
      "30-second check intervals",
      "90-day data retention",
      "Slack & webhook integrations",
      "Custom SLO dashboards",
      "Priority support",
    ],
    highlighted: true,
    cta: "Start Pro trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations at planetary scale.",
    features: [
      "Unlimited URLs & regions",
      "Sub-second intervals",
      "Unlimited retention",
      "Dedicated collectors",
      "SSO & audit logs",
      "24/7 SLA-backed support",
    ],
    highlighted: false,
    cta: "Contact sales",
  },
] as const;

/** Tiered pricing cards with highlighted Pro plan. */
export function PricingSection() {
  return (
    <section id="pricing" className="relative bg-slate-950 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(34,211,238,0.08),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Pricing
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Scale with your monitoring needs
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Start free, upgrade when your traffic demands it. No hidden probe
            fees.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-slate-900/80 shadow-xl shadow-cyan-500/10"
                  : "border-slate-800/80 bg-slate-900/40"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-3 py-0.5 text-xs font-semibold text-slate-950">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-slate-100">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{plan.description}</p>

              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-50">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-slate-500">{plan.period}</span>
                )}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 w-full">
                <SignInButton variant="navbar" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
