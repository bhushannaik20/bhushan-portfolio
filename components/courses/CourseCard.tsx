import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Course } from "@/lib/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
      <h3 className="font-serif text-xl font-semibold text-navy">
        {course.title}
      </h3>
      <p className="mt-2 text-sm text-text-muted">{course.institution}</p>
      <p className="mt-1 text-sm text-text-muted">Issued {course.issued}</p>

      <Link
        href={course.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-navy px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-surface"
      >
        Verify Certificate
        <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
      </Link>
    </div>
  );
}