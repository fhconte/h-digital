import { SiteHeader } from "@/components/site-header";
import { ContactFooter } from "@/components/home/contact-footer";
import { DeliveriesSection } from "@/components/home/deliveries-section";
import { HeroSection } from "@/components/home/hero-section";
import { SolutionsSection } from "@/components/home/solutions-section";

export function HomePage() {
  return (
    <div className="min-h-full bg-white text-neutral-900">
      <SiteHeader />
      <main className="w-full">
        <HeroSection />
        <SolutionsSection />
        <DeliveriesSection />
      </main>
      <ContactFooter />
    </div>
  );
}
