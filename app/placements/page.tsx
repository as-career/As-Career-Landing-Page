import type { Metadata } from "next";
import {
  Users,
  Building2,
  BriefcaseBusiness,
  MapPin,
  TrendingUp,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { PlacementCard } from "@/components/placement-card";
import { placements } from "@/data/site-content";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Placements | AS Career Consultancy",
  description:
    "Explore placement opportunities and career outcomes of candidates placed through AS Career Consultancy.",
};

export default function PlacementsPage() {
  /*
   * -------------------------------------------------------
   * PLACEMENT STATISTICS
   * These are calculated from the placement dataset.
   * -------------------------------------------------------
   */

  const totalPlacements = placements.length;

  const companies = new Set(
    placements
      .map((placement) => placement.company?.trim())
      .filter((company) => company && company !== "—"),
  );

  const locations = new Set(
    placements.map((placement) => placement.location?.trim()).filter(Boolean),
  );

  const roles = new Set(
    placements.map((placement) => placement.role?.trim()).filter(Boolean),
  );

  /*
   * Count company occurrences
   */
  const companyCounts = placements.reduce<Record<string, number>>(
    (acc, placement) => {
      const company = placement.company?.trim();

      if (company && company !== "—") {
        acc[company] = (acc[company] || 0) + 1;
      }

      return acc;
    },
    {},
  );

  /*
   * Get companies ordered by number of placements.
   * This is descriptive data only — not a ranking of company quality.
   */
  const companySummary = Object.entries(companyCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* =====================================================
          HERO / INTRO
      ====================================================== */}

      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#c8972b]/10 blur-3xl" />

          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#17345f]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Placement Success"
            title="Real opportunities. Real career journeys."
            description="Explore placement outcomes across different companies, roles, locations, and career opportunities facilitated through AS Career Consultancy."
          />

          {/* =================================================
              STATISTICS
          ================================================== */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total Placements */}
            <Card
              className="
                group
                overflow-hidden
                rounded-3xl
                border-slate-200
                bg-[#17345f]
                text-white
                shadow-lg
                shadow-[#17345f]/10
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5c56d]">
                      Placements
                    </p>

                    <p className="mt-3 text-4xl font-bold">
                      {totalPlacements}+
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      Records currently displayed
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-3">
                    <Users className="h-6 w-6 text-[#e5c56d]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Companies */}
            <Card
              className="
                rounded-3xl
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b17d19]">
                      Companies
                    </p>

                    <p className="mt-3 text-4xl font-bold text-[#17345f]">
                      {companies.size}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Organizations represented
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7ecd4] p-3">
                    <Building2 className="h-6 w-6 text-[#b17d19]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Roles */}
            <Card
              className="
                rounded-3xl
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b17d19]">
                      Career Roles
                    </p>

                    <p className="mt-3 text-4xl font-bold text-[#17345f]">
                      {roles.size}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Different job profiles
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#17345f]/10 p-3">
                    <BriefcaseBusiness className="h-6 w-6 text-[#17345f]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <Card
              className="
                rounded-3xl
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b17d19]">
                      Locations
                    </p>

                    <p className="mt-3 text-4xl font-bold text-[#17345f]">
                      {locations.size}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Work locations represented
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7ecd4] p-3">
                    <MapPin className="h-6 w-6 text-[#b17d19]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY OVERVIEW
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <Card className="overflow-hidden rounded-3xl border-slate-200 bg-white shadow-sm">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-[1fr_1.4fr]">
              {/* Left */}
              <div className="bg-[#17345f] p-8 text-white sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <TrendingUp className="h-6 w-6 text-[#e5c56d]" />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-[#e5c56d]">
                  Placement Network
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Opportunities across multiple industries
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  Our placement records represent candidates moving into
                  different professional roles across technology, customer
                  support, business development, quality control and other
                  functions.
                </p>
              </div>

              {/* Right */}
              <div className="p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b17d19]">
                  Companies represented
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {companySummary.map(([company, count]) => (
                    <div
                      key={company}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-5
                        py-4
                        transition-colors
                        hover:border-[#d8bd7c]
                        hover:bg-[#faf7ef]
                      "
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#17345f] text-xs font-bold text-white">
                          {company.charAt(0)}
                        </div>

                        <span className="text-sm font-bold text-[#17345f]">
                          {company}
                        </span>
                      </div>

                      <span className="rounded-full bg-[#f7ecd4] px-3 py-1 text-xs font-bold text-[#9a6c12]">
                        {count} {count === 1 ? "placement" : "placements"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* =====================================================
          PLACEMENT LIST
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b17d19]">
              Placement Records
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#17345f]">
              Recent Career Placements
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Candidate, company, role, location and package information based on
            the placement records currently available.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {placements.map((placement) => (
            <PlacementCard key={placement.id} placement={placement} />
          ))}
        </div>
      </section>
    </main>
  );
}
