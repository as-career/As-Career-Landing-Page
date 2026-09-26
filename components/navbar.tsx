"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "../public/assets/logo.webp"

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/placements", label: "Placements" },
  { href: "/tieups", label: "Tie-Ups" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_-20px_rgba(26,42,74,0.4)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#1a2a4a] to-[#274062] text-lg font-semibold text-white shadow-lg">
            <Image src={logo} alt="Career Consultancy logo" className="h-full w-full rounded-full object-cover" priority />
          </div>
          <div>
            <p className="text-lg font-semibold text-[#1a2a4a]">
              Career Consultancy
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#c8972b]">
              Training & Placements
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition hover:text-[#c8972b]",
                pathname === link.href ? "text-[#c8972b]" : "text-slate-700",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="rounded-full border border-slate-200 bg-white p-2 text-[#1a2a4a] shadow-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-2xl px-3 py-2 text-sm font-medium",
                pathname === link.href
                  ? "bg-[#1a2a4a] text-white"
                  : "text-slate-700",
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
