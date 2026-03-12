import Image from "next/image";
import { Images } from "@/public/index";

export function AboutSection() {
    return (
        <section className="relative w-full bg-[#050624] py-24 px-6 md:px-20 overflow-hidden flex flex-col justify-center min-h-[70vh]">
            <div className="absolute inset-0 z-1 select-none pointer-events-none flex items-center justify-center md:justify-end">
                <Image
                    src={Images.rings}
                    alt="Glow Pattern"
                    className="absolute w-[200%] sm:w-[150%] md:w-[120%] lg:w-[100%] max-w-none h-auto object-contain mix-blend-screen translate-y-20 md:translate-y-200 md:translate-x-200  pointer-events-none"
                />
            </div>
            <div className="absolute inset-0 z-0 select-none pointer-events-none flex items-center justify-center md:justify-end">
                <Image
                    src={Images.glowRing}
                    alt="Glow Pattern"
                    className="absolute w-[200%] sm:w-[150%] md:w-[120%] lg:w-[100%] max-w-none h-auto object-contain mix-blend-screen translate-y-20 md:translate-y-270 pointer-events-none"
                />
            </div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent shadow-[0_0_30px_rgba(59,130,246,0.5)] z-0" />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-12">
                        About Student Career Fair
                    </h2>

                    <div className="space-y-6 text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                        <p>
                            The Student Career Fair (SCF) is an annual initiative
                            organized by COHI to bridge the gap between
                            academic learning and real-world opportunities.
                        </p>
                        <p>
                            Through engaging sessions, career talks, and
                            networking opportunities, SCF empowers
                            students to gain insights from industry
                            professionals, develop essential skills, and explore
                            pathways to impactful careers.
                        </p>
                        <p>
                            Each edition of SCF is designed to challenge
                            students to think bigger about their future.
                        </p>
                    </div>
                </div>

                {/* Logos Display */}
                <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end gap-12 lg:gap-20">
                    <Image
                        src={Images.logos}
                        alt="COHI Logo"
                        className="w-auto md:h-64 object-cover"
                    />

                </div>

            </div>
        </section>
    );
}
