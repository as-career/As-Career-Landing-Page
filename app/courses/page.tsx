import type { Metadata } from "next";
import { CoursesFiltered } from "@/components/courses-filtered";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore practical training programs in networking, spoken English, IELTS, and digital skills.",
};

export default function CoursesPage() {
  return <CoursesFiltered />;
}
