import Link from "next/link";
import { ArrowRight, Clock3, MonitorPlay } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Course } from "@/types/content";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="group h-full overflow-hidden border-slate-200/80 bg-gradient-to-br from-white to-[#fcf8ef] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-24px_rgba(26,42,74,0.45)]">
      <CardHeader>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8972b]">
          {course.category}
        </p>
        <CardTitle className="mt-2 text-2xl text-[#1a2a4a]">
          {course.title}
        </CardTitle>
        <CardDescription className="mt-3 text-base">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
            <Clock3 size={14} /> {course.duration}
          </span>
          <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
            <MonitorPlay size={14} /> {course.mode}
          </span>
        </div>
        {/* <div className="text-lg font-semibold text-[#1a2a4a]">{course.fee}</div> */}
      </CardContent>
      <CardFooter className="justify-between">
        <Link
          href={`/courses/${course.slug}`}
          className="text-sm font-semibold text-[#1a2a4a] hover:text-[#c8972b]"
        >
          View details
        </Link>
        <Button asChild variant="gold">
          <Link href="/contact">Enroll Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
