"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Shield,
  Phone,
  Clock,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF, INTAKE_URL } from "@/lib/utils";

const MINI_STATS = [
  { icon: TrendingUp, label: "100+ Claims" },
  { icon: DollarSign, label: "$35K–$60K Avg Increase" },
  { icon: Clock, label: "90-Day Resolution Goal" },
];

export function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-950 px-5 pt-28 pb-12 text-center sm:px-8 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-2xl">
          <Badge variant="gold" className="mb-5">
            <Shield className="h-3.5 w-3.5" />
            Free Consultation
          </Badge>
          <h1 className="font-display text-2xl font-bold leading-tight text-cream-50 sm:text-3xl md:text-4xl lg:text-5xl">
            Ready To Get What You&apos;re Actually Owed?
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream-200/60 sm:mt-5 sm:max-w-lg sm:text-base">
            Click below to start your FREE claim review. It takes less than 5
            minutes. No obligations, no pressure, just expert guidance.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-cream-100 px-5 py-10 sm:px-8 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            {/* CTA Column */}
            <div className="min-w-0 flex-1">
              <div className="rounded-2xl border border-cream-300/60 bg-white p-6 text-center shadow-lg sm:p-10">
                <h2 className="font-display text-xl font-bold text-forest-900 sm:text-2xl">
                  Schedule Your FREE Claim Review
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-forest-800/60 sm:text-base">
                  Answer a few quick questions about your property and your
                  claim, and our team will reach out to schedule your free
                  review.
                </p>
                <div className="mt-8">
                  <Button
                    href={INTAKE_URL}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Get My FREE Claim Review Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full shrink-0 lg:w-72 xl:w-80">
              <div className="space-y-4 lg:sticky lg:top-28">
                {/* Why Free */}
                <div className="rounded-2xl border border-cream-300/60 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-forest-900">
                    Why is this free?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-800/55">
                    This consultation is completely free and there&apos;s no
                    obligation to work with us. We&apos;ll give you honest
                    feedback about your claim, even if we can&apos;t help,
                    you&apos;ll walk away knowing more than you did before.
                  </p>
                </div>

                {/* Mini stats */}
                <div className="rounded-2xl border border-cream-300/60 bg-white p-5 shadow-sm">
                  <div className="flex flex-row items-center justify-around gap-3 lg:flex-col lg:items-start lg:justify-start lg:gap-4">
                    {MINI_STATS.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col items-center gap-1.5 lg:flex-row lg:gap-3"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-900/5">
                          <stat.icon className="h-4 w-4 text-forest-700" />
                        </div>
                        <span className="text-center text-xs font-medium text-forest-800 lg:text-left lg:text-sm">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone alternative */}
                <div className="rounded-2xl border border-gold-500/20 bg-gold-500/5 p-5">
                  <p className="text-sm font-medium text-forest-800">
                    Prefer to talk?
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-1.5 flex items-center gap-2 text-base font-bold text-forest-900 transition-colors hover:text-gold-600 lg:text-lg"
                  >
                    <Phone className="h-4 w-4 lg:h-5 lg:w-5" />
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
