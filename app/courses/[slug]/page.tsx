import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const course = courses.find((item) => item.slug === params.slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Link
        href="/courses"
        className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8972b]"
      >
        ← Back to all courses
      </Link>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8972b]">
            {course.category}
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[#1a2a4a]">
            {course.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {course.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-[#f9f6ed] px-4 py-2 text-slate-700">
              {course.duration}
            </span>
            <span className="rounded-full bg-[#f9f6ed] px-4 py-2 text-slate-700">
              {course.mode}
            </span>
            {/* <span className="rounded-full bg-[#f9f6ed] px-4 py-2 text-slate-700">
              {course.fee}
            </span> */}
          </div>
        </div>

        <Card className="rounded-4xl border-slate-200 p-6 shadow-sm">
          <CardContent className="p-0">
            <h2 className="text-2xl font-semibold text-[#1a2a4a]">
              Enrollment Details
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Instructor: {course.instructor}
            </p>
            <Button asChild className="mt-6 w-full">
              <Link href="/contact">Reserve Your Seat</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <Card className="rounded-4xl border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-[#1a2a4a]">Highlights</h3>
          <ul className="mt-4 space-y-2 text-slate-600">
            {course.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
        <Card className="rounded-4xl border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-[#1a2a4a]">Curriculum</h3>
          <ul className="mt-4 space-y-2 text-slate-600">
            {course.curriculum.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
        <Card className="rounded-4xl border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-[#1a2a4a]">Eligibility</h3>
          <ul className="mt-4 space-y-2 text-slate-600">
            {course.eligibility.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  );
}
