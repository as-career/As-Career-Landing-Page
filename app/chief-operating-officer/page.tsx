import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shoaib Ankalgi - COO & Head of IT-Operations, Training & Placements",
  description:
    "Shoaib Ankalgi — Cybersecurity Specialist, Trainer, and Career Mentor. COO & Head of IT-Operations, Training & Placements at AS Career Consultancy.",
};

const expertiseTags = [
  "CCNA",
  "PCNSE",
  "WAF",
  "SOC",
  "Threat Monitoring",
  "Incident Response",
  "Network Security",
  "Cybersecurity",
];

const securityPoints = [
  "Senior Security Analyst at Dynova, a Dubai-based organization, specializing in cybersecurity operations, network security, threat monitoring, incident response, and infrastructure protection.",
  "Previously a Security Architect at Akamai Technologies, gaining extensive expertise in Web Application Firewall (WAF), Security Operations, application security, and enterprise-level cyber defense solutions.",
  "Holds globally recognized certifications including CCNA (Cisco Certified Network Associate) and PCNSE (Palo Alto Networks Certified Network Security Engineer).",
  "Over 3 years of experience across IT Networking, Cybersecurity, and Enterprise Security, delivering secure, scalable, industry-driven technology solutions.",
];

const leadershipPoints = [
  "As COO & Director — Training, IT Operations & Placements, dedicated to developing industry-ready professionals by bridging the gap between academic learning and practical IT skills.",
  "As a CCNA trainer and career mentor, has successfully trained and guided aspiring IT professionals, helping 60+ candidates secure positions at leading multinational companies.",
  "Placements include Accenture, Infosys, Wipro, NTT DATA, and other reputed organizations.",
  "Expertise spans Cybersecurity, Network Security, Security Operations Center (SOC), Web Application Security, IT Infrastructure Management, Technical Training, Career Development, and Placement Support.",
];

const path = [
  {
    label: "Security Architect",
    detail: "Akamai Technologies · WAF & app security",
  },
  {
    label: "Senior Security Analyst",
    detail: "Dynova, Dubai · SOC & incident response",
  },
  { label: "CCNA Trainer & Mentor", detail: "60+ candidates placed" },
  { label: "COO & Director", detail: "IT Operations, Training & Placements" },
];

export default function CooPage() {
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
                COO &amp; Head of IT-Operations, Training &amp; Placements
              </span>
            </div>

            <h1 className="font-[Sora,ui-sans-serif] text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Shoaib Ankalgi
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#AEB4C4]">
              Cybersecurity specialist, trainer, and career mentor with an MCA
              from Belgaum, Karnataka — building secure enterprise systems and
              the next generation of IT talent at{" "}
              <span className="text-[#EDEAE0]">AS Career Consultancy</span>.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="tel:+918867375152"
                className="group flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-[#EDEAE0] transition hover:border-[#C9A34E]/50 hover:bg-[#C9A34E]/10"
              >
                <span className="font-mono text-[#C9A34E]">
                  +91 88673 75152
                </span>
              </a>
              <a
                href="mailto:shoaibankalgi@as-consultancy.co.in"
                className="group flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-[#EDEAE0] transition hover:border-[#C9A34E]/50 hover:bg-[#C9A34E]/10"
              >
                <span className="font-mono">
                  shoaibankalgi@as-consultancy.co.in
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
                  src="/assets/shoaib-as-career-consultancy.png"
                  alt="Shoaib Ankalgi — COO & Head of IT-Operations, Training & Placements"
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
                  3+ yrs · active
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
              Professional Summary
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#C3C8D6]">
            Shoaib Ankalgi is an accomplished IT professional, cybersecurity
            specialist, trainer, and career mentor with a Master of Computer
            Applications (MCA) degree from Belgaum, Karnataka. With over 3 years
            of experience in IT Networking, Cybersecurity, and Enterprise
            Security, he has built a strong reputation for delivering secure,
            scalable, and industry-driven technology solutions.
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
            From security operations to IT leadership
          </h2>

          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-[13px] hidden h-px bg-gradient-to-r from-transparent via-[#C9A34E]/40 to-transparent sm:block" />
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

      {/* ============ SECURITY + LEADERSHIP ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A34E]">
              Security
            </span>
            <h2 className="mt-3 font-[Sora,ui-sans-serif] text-2xl font-semibold text-white">
              Cybersecurity &amp; Security Operations
            </h2>
            <ul className="mt-8 space-y-6">
              {securityPoints.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A34E]" />
                  <p className="text-[#C3C8D6] leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A34E]">
              Leadership
            </span>
            <h2 className="mt-3 font-[Sora,ui-sans-serif] text-2xl font-semibold text-white">
              Training, Operations &amp; Placements
            </h2>
            <ul className="mt-8 space-y-6">
              {leadershipPoints.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A34E]" />
                  <p className="text-[#C3C8D6] leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-[#C9A34E]/25 bg-gradient-to-br from-[#101A2E] to-[#0A0F1C] p-10 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-[Sora,ui-sans-serif] text-2xl font-semibold text-white">
                Let&rsquo;s talk security, training, or placements.
              </h3>
              <p className="mt-2 text-[#8A93A8]">
                AS Career Consultancy — guiding you from opportunity to success.
              </p>
            </div>
            <a
              href="mailto:shoaibankalgi@as-consultancy.co.in"
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
