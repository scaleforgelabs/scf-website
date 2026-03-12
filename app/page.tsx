import { HeroSection } from "@/components/HeroSection";
import { ThemeSection } from "@/components/ThemeSection";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { MomentsSection } from "@/components/MomentsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans">
      <HeroSection />
      <ThemeSection />
      <AboutSection />
      <StatsSection />
      <SpeakersSection />
      <SponsorsSection />
      <MomentsSection />
    </div>
  );
}
