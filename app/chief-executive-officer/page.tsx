import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ateef Shaikh - CEO & Technical Head Associate",
  description:
    "Ateef Shaikh — Network & Cyber Security Specialist, Trainer, and Career Mentor. CEO & Technical Head Associate at AS Career Consultancy.",
};

const protocols = [
  "BGP",
  "OSPF",
  "MPLS",
  "NAT",
  "IPSec VPN",
  "SD-WAN",
  "Cisco R&S",
  "Check Point",
  "Viptela",
  "Zscaler",
  "CCNA",
  "CCNP",
];

const engineeringPoints = [
  "Network & Security Engineer with 10+ years of experience designing, implementing, and supporting enterprise network infrastructure across data centers, cloud, and branch environments.",
  "Skilled in configuring and troubleshooting firewalls, VPNs, routing & switching, and next-gen security solutions.",
  "Hands-on expertise with Cisco (R&S) and Check Point firewalls, alongside SD-WAN technologies (Cisco Viptela, Zscaler).",
  "Strong background in BGP, OSPF, MPLS, NAT, and IPSec VPN, with advanced troubleshooting across multi-vendor environments.",
];

const leadershipPoints = [
  "Leads a team of network engineers delivering network deployment, configuration, and operational support for AT&T infrastructure.",
  "Ensures Incident Management goals are achieved — restoring normal service as fast as possible, from the customer's perspective, within defined SLAs.",
  "As CEO & Technical Head Associate, defines and executes the company's strategic vision, business goals, and long-term growth plans.",
  "Builds, mentors, and manages cross-functional teams — trainers, consultants, project managers, and operations staff — while negotiating contracts and driving client retention.",
  "Designs and expands training programs across technical, leadership, and professional development domains, monitoring resourcing and delivery timelines.",
  "Represents the organization at industry events and strategic partnerships, analyzing market trends to guide business decisions and reporting performance to stakeholders.",
];

const path = [
  { label: "Network Engineer", detail: "Routing, switching, firewalls" },
  { label: "Lead Engineer", detail: "AT&T infrastructure delivery" },
  { label: "Technical Head", detail: "Training & consulting operations" },
  { label: "CEO", detail: "Strategy & growth" },
];

export default function CeoPage() {
  return (
    <main className="bg-[#0A0F1C] text-[#EDEAE0]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* circuit-grid backdrop */}
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
                CEO &amp; Technical Head Associate
              </span>
            </div>

            <h1 className="font-[Sora,ui-sans-serif] text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Ateef Shaikh
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#AEB4C4]">
              Network &amp; cyber security specialist, trainer, and career
              mentor with a degree in Engineering and a Certified Network
              Consultant credential — now leading strategy, training, and
              consulting operations at{" "}
              <span className="text-[#EDEAE0]">AS Career Consultancy</span>.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="tel:+918867683772"
                className="group flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-[#EDEAE0] transition hover:border-[#C9A34E]/50 hover:bg-[#C9A34E]/10"
              >
                <span className="font-mono text-[#C9A34E]">
                  +91 88676 83772
                </span>
              </a>
              <a
                href="mailto:ateefshaikh@as-consultancy.co.in"
                className="group flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-[#EDEAE0] transition hover:border-[#C9A34E]/50 hover:bg-[#C9A34E]/10"
              >
                <span className="font-mono">
                  ateefshaikh@as-consultancy.co.in
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
                  src="/assets/ateef-shaikh-ceo-as-career-consultancy.png"
                  alt="Ateef Shaikh — CEO & Technical Head Associate"
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
                  10+ yrs · active
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
            Ateef Shaikh is an experienced IT professional, network &amp; cyber
            security specialist, trainer, and career mentor with a degree in
            Engineering and a Certified Network Consultant credential. Over a
            decade in the field, he has moved from hands-on enterprise network
            engineering into leading technical teams, training programs, and
            business strategy.
          </p>
        </div>

        {/* protocol / skill tags styled as config chips */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {protocols.map((tag) => (
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
            From the network floor to the boardroom
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

      {/* ============ ENGINEERING + LEADERSHIP ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A34E]">
              Engineering
            </span>
            <h2 className="mt-3 font-[Sora,ui-sans-serif] text-2xl font-semibold text-white">
              Network &amp; Security Engineering
            </h2>
            <ul className="mt-8 space-y-6">
              {engineeringPoints.map((point) => (
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
              Lead Engineer &amp; Executive Leadership
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
                Let&rsquo;s talk strategy, training, or your network.
              </h3>
              <p className="mt-2 text-[#8A93A8]">
                AS Career Consultancy — guiding you from opportunity to success.
              </p>
            </div>
            <a
              href="mailto:ateefshaikh@as-consultancy.co.in"
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
