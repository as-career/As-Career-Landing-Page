"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function MotionCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.01,
        boxShadow: "0 20px 50px -20px rgba(26,42,74,0.35)",
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
      className={className}
    >
      {children}
    </motion.article>
  );
}
