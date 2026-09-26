"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MotionCard } from "@/components/motion-card";
import { HeroBanner } from "@/components/hero-banner";
import { SectionHeading } from "@/components/section-heading";
import { CourseCard } from "@/components/course-card";
import { PlacementCard } from "@/components/placement-card";
import { PartnerLogoGrid } from "@/components/partner-logo-grid";
import {
  leaders,
  courses,
  placements,
  partners,
  reviews,
} from "@/data/site-content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

const galleryImages = [
  {
    src: "/assets/campus/one.jpeg",
    alt: "office One",
  },
  {
    src: "/assets/campus/two.jpeg",
    alt: "office Two",
  },
  {
    src: "/assets/campus/three.jpeg",
    alt: "office Three",
  },
  {
    src: "/assets/campus/four.jpeg",
    alt: "office Four",
  },
  {
    src: "/assets/campus/five.jpeg",
    alt: "office Five",
  },
  {
    src: "/assets/campus/six.jpeg",
    alt: "office Six",
  },
  {
    src: "/assets/campus/seven.jpeg",
    alt: "office Seven",
  },
  {
    src: "/assets/campus/eight.jpeg",
    alt: "office Eight",
  },
];

export default function Home() {
  const [activeImage, setActiveImage] = useState<
    (typeof galleryImages)[number] | null
  >(null);

  return (
    <main>
      <HeroBanner />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.25rem] border border-slate-200/70 bg-gradient-to-br from-[#fdfbf7] via-[#f8f2e6] to-[#f5efe0] p-6 shadow-[0_20px_60px_-24px_rgba(26,42,74,0.35)] md:p-8">
          <div className="flex flex-col gap-4 border-b border-slate-200/70 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c8972b]">
                Why clients choose us
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#1a2a4a] sm:text-3xl">
                A calm and confident route to career growth
              </h2>
            </div>
            <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600">
              Career clarity • Placement support • Employer access
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              {
                label: "Call us",
                value: "+91 72044 49752, +91 88673 75152",
                icon: Phone,
              },
              {
                label: "Visit us",
                value: "Ist Floor, S Tower #3714/1 Darbar Galli Belgaum",
                icon: MapPin,
              },
              {
                label: "Open hours",
                value: "Mon-Fri 9AM-6PM , Sat 9AM-2PM",
                icon: CalendarDays,
              },
              {
                label: "Support",
                value: "info@ascareerconsultancy.com",
                icon: Sparkles,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3 text-[#1a2a4a]">
                    <Icon size={18} />
                    <p className="text-sm font-semibold">{item.label}</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
                <div className="relative h-80 overflow-hidden rounded-[24px] bg-slate-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Soft Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                </div>
              </div>

              {/* Content */}
              <div className="px-7 py-6">
                {/* Gold Accent */}
                <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-[#c8972b] to-[#f4d06f]" />

                <h3 className="text-2xl font-bold tracking-tight text-[#17345f]">
                  {leader.name}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase text-[#c8972b]">
                  {leader.title}
                </p>

                <p className="mt-5 line-clamp-4 text-[15px] leading-7 text-slate-600">
                  {leader.bio}
                </p>

                {/* Divider */}
                <div className="my-6 border-t border-slate-200" />

                {/* Button */}
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus View"
          title="A professional environment for focused growth"
          description="Experience modern training spaces that support practical learning and confident career preparation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {galleryImages.map((image) => (
            <button
              key={image.alt}
              type="button"
              onClick={() => setActiveImage(image)}
              className="group relative h-72 overflow-hidden rounded-4xl text-left"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a4a]/70 via-[#1a2a4a]/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                {/* <p className="text-lg font-semibold text-white">{image.alt}</p> */}
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {activeImage ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0f172a]/80 px-4 py-8 backdrop-blur-sm"
              onClick={() => setActiveImage(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-4xl overflow-hidden rounded-4xl bg-white"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <p className="text-sm text-slate-600">
                      Explore this space in the campus gallery.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveImage(null)}
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Featured Programs"
            title="Training that turns ambition into opportunity"
            description="Choose from programs built for real-world careers and faster placement outcomes."
          />
          <Button asChild variant="ghost">
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {courses.slice(0, 4).map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Students placed in leading companies"
          description="The results speak for themselves — from communication to technical careers, our learners are thriving."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {placements.map((placement) => (
            <PlacementCard key={placement.id} placement={placement} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Our Network"
            title="Trusted by leading employers"
            description="We work with hiring and training partners across technology, support, and service roles."
          />
          <Button asChild variant="ghost">
            <Link href="/tieups">View All Partners</Link>
          </Button>
        </div>
        <div className="mt-10">
          <PartnerLogoGrid partners={partners} />
        </div>
      </section>

      {/* <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learner Reviews"
          title="What our learners say"
          description="Real feedback from candidates who trusted our guidance and stepped into new careers."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card
              key={review.name}
              className="rounded-4xl border-slate-200 p-6 shadow-sm"
            >
              <CardContent className="p-0">
                <div className="flex gap-1 text-[#c8972b]">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Sparkles key={index} size={16} />
                  ))}
                </div>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  “{review.quote}”
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-[#1a2a4a]">{review.name}</p>
                  <p className="text-sm text-slate-500">
                    Placed at {review.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#112445] via-[#1a2a4a] to-[#274062] px-8 py-12 text-center text-white shadow-[0_24px_80px_-24px_rgba(26,42,74,0.85)]">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to start your next chapter?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Let’s build your career roadmap with practical training, placement
            support, and long-term guidance.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild variant="gold" className="px-6 py-4">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/25 text-white hover:bg-white hover:text-[#1a2a4a] px-6 py-4"
            >
              <Link href="/courses">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
