"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/site-content";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-[radial-gradient(circle_at_top_left,_rgba(200,151,43,0.28),_transparent_30%),linear-gradient(135deg,_#ffffff_0%,_#f8f5ee_100%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-[#c8972b]/35 bg-[#fff7e6] px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e0f]">
            <BadgeCheck size={16} /> A clearer path to your next role
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[0.95] text-[#1a2a4a] sm:text-5xl lg:text-6xl">
            Guiding You From Opportunity To Success.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We combine expert-led training, placement support, and employer
            connections to help ambitious learners move forward with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="default" className="px-6 py-4 text-base">
              <Link href="/courses">
                Explore Courses <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" className="px-6 py-4 text-base">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Career Coaching", "Placement Readiness", "Employer Network"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600"
                >
                  {chip}
                </span>
              ),
            )}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-[0_10px_30px_-12px_rgba(26,42,74,0.25)]"
              >
                <p className="text-2xl font-semibold text-[#1a2a4a]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.2rem] border border-white/20 bg-gradient-to-br from-[#13213f] via-[#1a2a4a] to-[#213b62] p-6 text-white shadow-[0_20px_70px_-24px_rgba(26,42,74,0.9)]"
        >
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#f5c96c]">
                  What you get from us
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  A sharper path to employment
                </h3>
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-medium text-slate-100">
                + 200 placed
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {[
                {
                  title: "Career-focused training",
                  text: "Programs designed for job readiness and growth.",
                },
                {
                  title: "Placement assistance",
                  text: "Direct guidance from application to interview.",
                },
                {
                  title: "Industry tie-ups",
                  text: "Connect with employers and hiring networks.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <Building2 className="mt-1 text-[#c8972b]" size={18} />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
