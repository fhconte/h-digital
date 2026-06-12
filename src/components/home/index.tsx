import { SiteHeader } from "@/components/site-header";
import { ContactFooter } from "@/components/home/contact-footer";
import { ExperienceSection } from "@/components/home/experience-section";
import { HeroSection } from "@/components/home/hero-section";
import { StackSection } from "@/components/home/stack-section";

export function HomePage() {
  return (
    <div className="min-h-full bg-white text-neutral-900">
      <SiteHeader />
      <main className="w-full">
        <HeroSection />
        <StackSection />
        <ExperienceSection />
      </main>
      <ContactFooter />
    </div>
  );
}
