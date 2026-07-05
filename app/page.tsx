import { Hero } from "@/components/home/Hero";
import { SelectedImpact } from "@/components/home/SelectedImpact";
import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { InnovationSection } from "@/components/innovation/InnovationSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedImpact />
      <About />
      <Experience />
      <InnovationSection />
    </main>
  );
}