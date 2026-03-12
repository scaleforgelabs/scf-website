import { CohiExperienceSection } from "@/components/CohiExperienceSection";
import { ThemeSection } from "@/components/ThemeSection";
import { VisionMissionSection } from "@/components/VisionMissionSection";

export default function AboutUsPage() {
    return (
        <div className="relative min-h-screen w-full flex flex-col font-sans">
            <VisionMissionSection />
            <ThemeSection />
            <CohiExperienceSection />
        </div>
    );
}
