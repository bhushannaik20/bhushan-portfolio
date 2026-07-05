import { COURSES } from "@/lib/data/courses";
import { CourseCard } from "./CourseCard";

export function CoursesSection() {
  return (
    <section id="courses" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy">
          Courses
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold text-navy lg:text-5xl">
          Professional Development
        </h2>
        <p className="mt-4 max-w-[700px] text-base text-text-muted lg:text-lg">
          Selected programmes completed to strengthen analytical, consulting
          and business capabilities.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}