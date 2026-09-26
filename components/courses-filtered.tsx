"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { CourseCard } from "@/components/course-card";
import { courses } from "@/data/site-content";

const categories = [
  "All",
  "IT & Technical",
  "Spoken English",
  "Soft Skills",
  "Professional Certifications",
];

export function CoursesFiltered() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    if (activeCategory === "All") {
      return courses;
    }

    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Course Catalog"
        title="Programs tailored for career readiness"
        description="Explore practical training options for interviews, certifications, communication, and digital skills."
      />
      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "border-[#c8972b] bg-[#fff7e6] text-[#8b5e0f]"
                : "border-slate-200 bg-white text-slate-700 hover:border-[#c8972b] hover:text-[#c8972b]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
      <div className="mt-12 rounded-4xl border border-slate-200 bg-[#f9f6ed] p-8 text-center">
        <h2 className="text-3xl font-semibold text-[#1a2a4a]">
          Need help selecting the right program?
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          Let our mentors guide you toward the best training path for your
          goals.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-[#1a2a4a] px-6 py-3 font-semibold text-white"
        >
          Talk to an Advisor
        </Link>
      </div>
    </main>
  );
}
