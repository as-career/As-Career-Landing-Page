import type { ReactNode } from "react";

export function RichSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-20px_rgba(26,42,74,0.25)] backdrop-blur-sm sm:p-10 ${className}`}
    >
      {children}
    </section>
  );
}
