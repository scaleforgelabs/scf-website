import Image from "next/image";
import { Images } from "@/public/index";
import Link from "next/link";

export function CohiExperienceSection() {
    return (
        <section className="relative w-full bg-[#050624] py-6 px-6 md:px-20 md:py-24 overflow-hidden flex flex-col items-center">

            <div className="absolute inset-0 z-0 select-none pointer-events-none flex items-center justify-center">
                <Image
                    src={Images.rings}
                    alt="Glow Pattern"
                    className="absolute w-[200%] sm:w-[150%] md:w-[120%] lg:w-[100%] max-w-none h-auto object-contain mix-blend-screen opacity-80 translate-x-200"
                />
            </div>

            <div className="max-w-7xl w-full mx-auto flex flex-col relative ">

                {/* About COHI */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between md:gap-16 gap-8">
                    <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-4">
                        <h2 className="text-white text-5xl md:text-6xl font-black">About</h2>
                        <Image
                            src={Images.cohiWhite}
                            alt="Sponsor Logo"
                            className="  object-contain"
                        />
                    </div>

                    <div className="w-full md:w-2/3 space-y-6 text-white/80 text-lg font-light leading-relaxed">
                        <p>
                            <strong className="font-semibold text-white">COHI</strong> is committed to developing students not only academically but also professionally and personally.
                        </p>
                        <p>
                            Through initiatives like the <strong className="font-semibold text-white">Student Career Fair, COHI</strong> provides opportunities that help students gain exposure, develop relevant skills, and connect with the wider professional world.
                        </p>
                        <p>
                            The organization believes that education should go beyond the classroom and empower students to become leaders, innovators, and change-makers in society.
                        </p>
                    </div>
                </div>

                {/* Experience */}
                <div className="w-full flex justify-between items-end gap-8">
                    <div className="flex flex-col items-start max-w-xl z-20">
                        <h2 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                            Be Part of the Experience
                        </h2>
                        <p className="text-white/80 text-lg font-light mb-10">
                            Join hundreds of students, professionals, and innovators at SCF 6.0 as we explore what it means to build careers that go beyond the ordinary.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#sponsor" className="bg-white text-[#070831] px-6 py-4 rounded-lg text-sm text-nowrap font-semibold hover:bg-white/90 transition-colors">
                                Be a Sponsor
                            </Link>
                            <Link href="#ticket" className="brown-gradient text-white px-6 py-4 rounded-lg text-sm text-nowrap font-semibold transition-colors">
                                Get Ticket
                            </Link>
                        </div>
                    </div>

                    {/* Orange Shape Graphic */}
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] z-10">
                        <Image
                            src={Images.star3d}
                            alt="Join Us"
                            layout="fill"
                            objectFit="contain"
                            className="filter hue-rotate-15 scale-125 md:scale-150 origin-right translate-y-100 translate-x-10 md:translate-x-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
