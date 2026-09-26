"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type StatCounterProps = {
  value: number;
  label: string;
  suffix?: string;
};

export function StatCounter({ value, label, suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const stepTime = 16;
    const totalSteps = Math.ceil(duration / stepTime);
    const increment = value / totalSteps;

    const interval = window.setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
    >
      <p className="text-3xl font-semibold text-[#1a2a4a]">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </motion.div>
  );
}
