import { Hero } from "@/components/home/Hero";
import { SelectedImpact } from "@/components/home/SelectedImpact";
import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { InnovationSection } from "@/components/innovation/InnovationSection";
import { ConsultingSection } from "@/components/consulting/ConsultingSection";
import { RecognitionSection } from "@/components/recognition/RecognitionSection";
import { PublicationsSection } from "@/components/publications/PublicationsSection";
import { CoursesSection } from "@/components/courses/CoursesSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedImpact />
      <About />
      <Experience />
      <InnovationSection />
      <ConsultingSection />
      <RecognitionSection />
      <PublicationsSection />
      <CoursesSection />
      <ContactSection />
    </main>
  );
}