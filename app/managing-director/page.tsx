import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Azhar Killedar - MD & Communication Training Head",
  description:
    "Azhar Killedar — Communication Expert & Talent Acquisition Specialist. MD & Communication Training Head at AS Career Consultancy.",
};

const expertiseTags = [
  "Talent Acquisition",
  "Recruitment & Selection",
  "Mentoring",
  "Employee Relations",
  "Boolean Sourcing",
  "Employer Branding",
  "Negotiation",
  "Instructional Design",
];

const focusPoints = [
  "Specialized in Training, Recruitment & Selection, Mentoring, Managing, Administration, Employee Relations, Team Handling, Counselling, Personnel Management, Compensation Management, Training & Development, Performance Management System & Appraisal, Industrial Relations and Organization Development.",
  "Self-motivated and goal-oriented, with strong communication skills, a high degree of flexibility, resourcefulness, commitment, and optimism.",
  "As Managing Director, the focus is on the macro-level success and sustainability of the consultancy — strong administrative acumen and business leadership. As Head of Training, the focus shifts to the service: deep expertise in educational psychology, instructional design, and measurable skill development.",
];

const sourcingPoints = [
  {
    title: "Proactive Sourcing",
    body: "Finding top candidates requires active outreach, not just waiting for applications to roll in — using Boolean search strings, LinkedIn Recruiter, and specialized platforms to find passive candidates who aren't actively looking for jobs.",
  },
  {
    title: "Employer Branding",
    body: "Knowing how to market the organization's culture, values, and benefits to make it an attractive place to work.",
  },
];

const softSkills = [
  {
    title: "Relational Core",
    body: "At its core, hiring is about people, making relational skills non-negotiable.",
  },
  {
    title: "Negotiation & Persuasion",
    body: "Navigating complex offer stages, managing salary expectations, and closing the deal with top candidates.",
  },
  {
    title: "Relationship Management",
    body: "Building trust not just with candidates — ensuring a great candidate experience — but also acting as an advisor to internal hiring managers.",
  },
  {
    title: "Active Listening & Empathy",
    body: "Reading between the lines during conversations to understand what a candidate truly values in their next career move.",
  },
];

const path = [
  {
    label: "Recruitment & Selection",
    detail: "Talent acquisition foundations",
  },
  { label: "Training & Development", detail: "Mentoring & skill building" },
  {
    label: "Head of Communication Training",
    detail: "Educational psychology & design",
  },
  { label: "Managing Director", detail: "Strategy & business leadership" },
];

export default function MdPage() {
  return (
    <main className="bg-[#0A0F1C] text-[#EDEAE0]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A34E 1px, transparent 1px), linear-gradient(90deg, #C9A34E 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(201,163,78,0.16), transparent 70%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
          {/* Left: identity */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A34E]/30 bg-[#C9A34E]/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A34E]" />
              <span className="font-mono text-lg uppercase text-[#C9A34E]">
                MD &amp; Communication Training Head
              </span>
            </div>

            <h1 className="font-[Sora,ui-sans-serif] text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Azhar Killedar
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#AEB4C4]">
              Communication expert and talent acquisition specialist with 16
              years across recruitment and education industry — leading strategy
              on one side and training craft on the other at{" "}
              <span className="text-[#EDEAE0]">AS Career Consultancy</span>.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="tel:+917411973800"
                className="group flex items-center gap-2 rounded-lg border border-white/15 bg-white/3 px-4 py-2.5 text-sm text-[#EDEAE0] transition hover:border-[#C9A34E]/50 hover:bg-[#C9A34E]/10"
              >
                <span className="font-mono text-[#C9A34E]">
                  +91 74119 73800
                </span>
              </a>
              <a
                href="mailto:azharkilledar@as-consultancy.co.in"
                className="group flex items-center gap-2 rounded-lg border border-white/15 bg-white/3 px-4 py-2.5 text-sm text-[#EDEAE0] transition hover:border-[#C9A34E]/50 hover:bg-[#C9A34E]/10"
              >
                <span className="font-mono">
                  azharkilledar@as-consultancy.co.in
                </span>
              </a>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-2xl border border-[#C9A34E]/30" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#101A2E]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/assets/azhar-md-as-career-consultany.png"
                  alt="Azhar Killedar — MD & Communication Training Head"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center justify-between border-t border-white/10 bg-[#0A0F1C] px-4 py-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#8A93A8]">
                  Status
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#C9A34E]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A34E]" />
                  16 yrs · active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SUMMARY ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.3fr_0.7fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A34E]">
              Profile
            </span>
            <h2 className="mt-3 font-[Sora,ui-sans-serif] text-3xl font-semibold text-white">
              Summary of Skills
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#C3C8D6]">
            Azhar Killedar is a communication expert and talent acquisition
            specialist with 16 years of experience across the recruitment and
            education industry.
          </p>
        </div>

        {/* skill tags styled as config chips */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {expertiseTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-[#101A2E] px-3 py-1.5 font-mono text-xs text-[#C3C8D6] transition hover:border-[#C9A34E]/40 hover:text-[#C9A34E]"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ============ CAREER PATH (signature element) ============ */}
      <section className="border-y border-white/10 bg-[#0D1424] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A34E]">
            Route
          </span>
          <h2 className="mt-3 font-[Sora,ui-sans-serif] text-3xl font-semibold text-white">
            From talent acquisition to organization leadership
          </h2>

          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-3.25 hidden h-px bg-linear-to-r from-transparent via-[#C9A34E]/40 to-transparent sm:block" />
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-4">
              {path.map((step, i) => (
                <div key={step.label} className="relative">
                  <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-full border border-[#C9A34E]/50 bg-[#0A0F1C] font-mono text-[11px] text-[#C9A34E]">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-sm text-[#8A93A8]">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE FOCUS ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A34E]">
          Dual Mandate
        </span>
        <h2 className="mt-3 max-w-2xl font-[Sora,ui-sans-serif] text-2xl font-semibold text-white">
          Running the business while shaping the service
        </h2>
        <ul className="mt-8 max-w-3xl space-y-6">
          {focusPoints.map((point) => (
            <li key={point} className="flex gap-4">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A34E]" />
              <p className="text-[#C3C8D6] leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ STRATEGIC SOURCING & SOFT SKILLS ============ */}
      <section className="border-t border-white/10 bg-[#0D1424] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Strategic Sourcing and Marketing */}
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A34E]">
                Sourcing
              </span>
              <h2 className="mt-3 font-[Sora,ui-sans-serif] text-2xl font-semibold text-white">
                Strategic Sourcing &amp; Marketing
              </h2>
              <div className="mt-8 space-y-5">
                {sourcingPoints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-[#0A0F1C] p-5"
                  >
                    <h3 className="font-mono text-sm text-[#C9A34E]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#C3C8D6]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Level Soft Skills */}
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A34E]">
                Craft
              </span>
              <h2 className="mt-3 font-[Sora,ui-sans-serif] text-2xl font-semibold text-white">
                High-Level Soft Skills
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {softSkills.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-[#0A0F1C] p-5"
                  >
                    <h3 className="font-mono text-sm text-[#C9A34E]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#C3C8D6]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-[#C9A34E]/25 bg-linear-to-br from-[#101A2E] to-[#0A0F1C] p-10 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-[Sora,ui-sans-serif] text-2xl font-semibold text-white">
                Let&rsquo;s talk talent, training, or team building.
              </h3>
              <p className="mt-2 text-[#8A93A8]">
                AS Career Consultancy — guiding you from opportunity to success.
              </p>
            </div>
            <a
              href="mailto:azharkilledar@as-consultancy.co.in"
              className="shrink-0 rounded-lg bg-[#C9A34E] px-6 py-3 text-sm font-semibold text-[#0A0F1C] transition hover:bg-[#DAB35F]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
