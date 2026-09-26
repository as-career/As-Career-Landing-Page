import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { leaders } from "@/data/site-content";
import { Card, CardContent } from "@/components/ui/card";
import { MotionCard } from "@/components/motion-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | AS Career Consultancy",
  description:
    "Learn about AS Career Consultancy, our mission, vision, leadership, and commitment to career development, professional training, and placement.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO / INTRODUCTION
      ========================================================= */}
      <section className="relative bg-[#f9f6ed]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#c8972b]">
              About AS Career Consultancy
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#17345f] sm:text-5xl lg:text-6xl">
              Bridging exceptional talent with outstanding opportunities.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              We are committed to helping individuals achieve meaningful career
              advancement while supporting organizations in finding talented,
              skilled and dedicated professionals.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Decorative visual */}
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-3xl bg-[#c8972b]/10" />

            <div className="relative rounded-[2rem] bg-[#17345f] p-8 shadow-xl shadow-slate-200/60 sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c8972b] text-2xl font-bold text-white">
                AS
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#f4d06f]">
                AS Career Consultancy
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Your bridge to career growth and professional opportunity.
              </h2>

              <div className="mt-8 h-px bg-white/20" />

              <p className="mt-6 text-base leading-7 text-slate-200">
                Career guidance, professional development, talent solutions and
                placement-focused support designed around the needs of modern
                professionals and growing businesses.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8972b]">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17345f] sm:text-4xl">
              Connecting talent, skills and opportunity
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                At{" "}
                <strong className="text-[#17345f]">
                  AS Career Consultancy
                </strong>
                , we are committed to bridging the gap between exceptional
                talent and outstanding opportunities.
              </p>

              <p>
                Based in the heart of{" "}
                <strong className="text-[#17345f]">Belgaum</strong>, we serve as
                a premier destination for individuals seeking career advancement
                and organizations in pursuit of top-tier professionals.
              </p>

              <p>
                Led by a leadership team with deep academic and professional
                foundations — including{" "}
                <strong className="text-[#17345f]">
                  IT professionals, domain specialists and management experts
                </strong>{" "}
                — we bring practical insight into the developmental needs of
                modern professionals and the strategic requirements of growing
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Guided by purpose. Focused on progress."
            description="Our mission and vision shape the way we support candidates, professionals and organizations."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <MotionCard className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17345f] text-xl font-bold text-white">
                    M
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c8972b]">
                      Our Mission
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-[#17345f]">
                      Empowering people and organizations
                    </h3>
                  </div>
                </div>

                <p className="mt-7 text-lg leading-8 text-slate-600">
                  To empower candidates through strategic guidance and skill
                  enhancement, while providing corporations with the highly
                  trained, dedicated talent they need to excel in competitive
                  markets.
                </p>

                <div className="mt-8 h-1 w-16 rounded-full bg-[#c8972b]" />
              </CardContent>
            </MotionCard>

            {/* Vision */}
            <MotionCard className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-[#17345f] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c8972b] text-xl font-bold text-white">
                    V
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f4d06f]">
                      Our Vision
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-white">
                      A trusted partner for career success
                    </h3>
                  </div>
                </div>

                <p className="mt-7 text-lg leading-8 text-slate-200">
                  To be the most trusted and impactful career development and
                  placement partner in the region, recognized for our commitment
                  to quality, educational excellence, and sustained professional
                  success.
                </p>

                <div className="mt-8 h-1 w-16 rounded-full bg-[#c8972b]" />
              </CardContent>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* =========================================================
          AS CAREER ADVANTAGE
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          {/* Heading */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8972b]">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17345f] sm:text-4xl">
              The AS Career Advantage
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We combine professional expertise, practical training and
              personalized career guidance to help individuals and organizations
              move forward with clarity and confidence.
            </p>
          </div>

          {/* Advantages */}
          <div className="grid gap-5">
            {/* Expert Leadership */}
            <Card className="rounded-3xl border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="flex gap-5 p-6 sm:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c8972b]/10 text-xl font-bold text-[#c8972b]">
                  01
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#17345f]">
                    Expert Leadership
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Mentorship and training guided by highly qualified educators
                    and industry veterans.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Holistic Development */}
            <Card className="rounded-3xl border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="flex gap-5 p-6 sm:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#17345f]/10 text-xl font-bold text-[#17345f]">
                  02
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#17345f]">
                    Holistic Development
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    We focus on overall personality development, public
                    speaking, communication and technical readiness.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tailored Solutions */}
            <Card className="rounded-3xl border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="flex gap-5 p-6 sm:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c8972b]/10 text-xl font-bold text-[#c8972b]">
                  03
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#17345f]">
                    Tailored Solutions
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Customized recruitment strategies for businesses and
                    personalized career maps for job seekers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP — EXISTING SECTION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet the mentors guiding your next chapter"
          description="Our leadership team combines placement expertise, training excellence, and career strategy in one trusted experience."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {leaders.map((leader) => (
            <MotionCard
              key={leader.id}
              className="
                group
                overflow-hidden
                rounded-4xl
                border border-slate-200/70
                bg-linear-to-b
                from-white
                via-slate-50
                to-white
                shadow-lg
                shadow-slate-200/40
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-slate-300/40
              "
            >
              {/* Image */}
              <div className="p-5 pb-0">
                <div className="relative h-80 overflow-hidden rounded-3xl bg-slate-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-white/10" />
                </div>
              </div>

              {/* Content */}
              <div className="px-7 py-6">
                <div className="mb-5 h-1 w-14 rounded-full bg-linear-to-r from-[#c8972b] to-[#f4d06f]" />

                <h3 className="text-2xl font-bold tracking-tight text-[#17345f]">
                  {leader.name}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase text-[#c8972b]">
                  {leader.title}
                </p>

                <p className="mt-5 line-clamp-4 text-[15px] leading-7 text-slate-600">
                  {leader.bio}
                </p>

                <div className="my-6 border-t border-slate-200" />

                <Button
                  asChild
                  className="
                    w-full
                    rounded-xl
                    bg-[#17345f]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#0d2243]
                    hover:shadow-lg
                  "
                >
                  <Link href={leader.url}>Read Profile</Link>
                </Button>
              </div>
            </MotionCard>
          ))}
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#17345f] px-8 py-12 sm:px-12 lg:px-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#c8972b]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4d06f]">
              Start Your Journey
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to take the next step in your career?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              Explore our career-focused programs, develop industry-relevant
              skills and get the guidance you need to move confidently toward
              your professional goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-xl bg-[#c8972b] px-6 text-white hover:bg-[#b48622]"
              >
                <Link href="/courses">Explore Courses</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-xl border-white/30 bg-transparent px-6 text-white hover:bg-white hover:text-[#17345f]"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
