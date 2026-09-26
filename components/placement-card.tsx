import {
  Building2,
  MapPin,
  BriefcaseBusiness,
  IndianRupee,
  CheckCircle2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Placement } from "@/types/content";

export function PlacementCard({ placement }: { placement: Placement }) {
  return (
    <Card
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#d8bd7c]
        hover:shadow-xl
        hover:shadow-[#17345f]/10
      "
    >
      {/* Top Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#17345f] via-[#c8972b] to-[#17345f]" />

      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            {/* Candidate Initial */}
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#17345f]
                text-lg
                font-bold
                text-white
                shadow-md
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              {getInitials(placement.name)}
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-xl font-bold text-[#17345f]">
                {placement.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-[#b17d19]">
                {placement.role}
              </p>
            </div>
          </div>

          {/* Placement Badge */}
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Placed
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-slate-100" />

        {/* Company */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f7ecd4] text-[#b17d19]">
            <Building2 className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Company
            </p>

            <p className="mt-1 truncate text-sm font-bold text-[#17345f]">
              {placement.company || "—"}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-5 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#17345f]">
            <MapPin className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Location
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-700">
              {placement.location}
            </p>
          </div>
        </div>

        {/* Role */}
        <div className="mt-5 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#17345f]/10 text-[#17345f]">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Position
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-700">
              {placement.role}
            </p>
          </div>
        </div>

        {/* Package */}
        <div
          className="
            mt-6
            rounded-2xl
            border
            border-[#e5d5ae]
            bg-[#faf7ef]
            p-5
          "
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b17d19]">
                Package
              </p>

              <p className="mt-1 text-2xl font-bold text-[#17345f]">
                {formatPackage(placement.package)}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17345f] text-white">
              <IndianRupee className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Bottom Label */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Career Placement
          </p>

          <span className="text-xs font-semibold text-[#b17d19]">
            AS Career Consultancy
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

function formatPackage(value: string) {
  if (!value) return "—";

  // Already formatted values
  if (
    value.toLowerCase().includes("lpa") ||
    value.includes("₹") ||
    value.toLowerCase().includes("k")
  ) {
    return value;
  }

  return `${value} LPA`;
}
