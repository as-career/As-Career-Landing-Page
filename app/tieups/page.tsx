import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { PartnerLogoGrid } from "@/components/partner-logo-grid";
import { partners } from "@/data/site-content";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tie-Ups",
  description:
    "Discover our employer and training partnerships that support placement-focused careers.",
};

export default function TieUpsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Strategic Partnerships"
        title="Employer and training collaborations that open doors"
        description="Our tie-ups help learners access placements, exposure, and career pathways across leading organizations."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Card className="rounded-4xl border-slate-200 bg-[#f9f6ed] p-8">
          <CardContent className="p-0">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8972b]">
              MOU Highlights
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-[#1a2a4a]">
              Placement-ready pipelines with industry leaders
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We partner with employers to create interview-ready candidates
              through curated training, domain support, and practical
              preparation.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-4xl border-slate-200 p-8">
          <CardContent className="p-0">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8972b]">
              Our commitment
            </p>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Structured placement pathways with employer engagement</li>
              <li>• Career readiness training aligned to market demand</li>
              <li>
                • Ongoing support for interviews, onboarding, and progress
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12">
        <PartnerLogoGrid partners={partners} />
      </div>
    </main>
  );
}
