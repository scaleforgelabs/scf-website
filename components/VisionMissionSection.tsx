import Image from "next/image";
import { Images } from "@/public/index";

export function VisionMissionSection() {
    return (
        <section className="relative z-3 w-full bg-[#050624] py-24 px-6 md:px-20 overflow-hidden flex flex-col items-center">
                {/* Background Rings */}
                <div className="absolute inset-x-0 top-0 z-0 select-none pointer-events-none flex items-center justify-center h-full">
                    <Image
                        src={Images.glowRing}
                        alt="Glow Pattern"
                        className="absolute object-cover w-[170%] h-[160%] mix-blend-screen translate-y-180"
                    />
                </div>
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center">

                {/* Top Heading */}
                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-16 z-3 max-w-5xl">
                    Empowering students to design careers that stand out globally.
                </h2>

                {/* Large Image */}
                <div className="w-full relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-24">
                    {/* Using a placeholder since we don't have the specific students image */}
                    <div className="absolute inset-0 bg-[#E0DEFA]" />
                    <Image
                        src={Images.people}
                        alt="Students"
                        className="w-full h-full object-cover mix-blend-multiply"
                    />
                </div>

                {/* About Content */}
                <div className="w-full flex flex-col md:flex-row items-start justify-between gap-16 mb-24 z-3">
                    <div className="w-full md:w-1/3 flex flex-col items-start gap-4">
                        <h2 className="text-white text-5xl md:text-6xl font-black">About</h2>
                        <Image src={Images.scfLogo} alt="SCF Logo" className="w-48 md:w-64 h-auto" />
                    </div>

                    <div className="w-full md:w-2/3 space-y-6 text-white/80 text-lg font-light leading-relaxed">
                        <p>
                            <strong className="font-semibold text-white">The Student Career Fair (SCF)</strong> is an annual initiative organized by COHI to bridge the gap between academic learning and the realities of the professional world.
                        </p>
                        <p>
                            SCF was created with the goal of helping students move beyond the traditional path of simply earning a degree. Through career talks, networking opportunities, workshops, and mentorship sessions, the event equips students with insights, practical skills, and industry exposure needed to thrive in today&apos;s competitive and evolving job market.
                        </p>
                        <p>
                            Over the years, SCF has grown into a platform where students connect with professionals, discover opportunities, and gain clarity about their career paths.
                        </p>
                        <p>
                            Now in its <strong className="font-semibold text-white">6th edition</strong>, SCF continues to inspire students to think bigger about their future.
                        </p>
                    </div>
                </div>

                {/* Vision / Mission Cards */}
                <div className="w-full flex flex-col md:flex-row items-stretch gap-8 mb-24 relative z-10">

                    {/* Left Column: Vision + Logo */}
                    <div className="w-full md:w-1/2 flex flex-col gap-8">
                        {/* Vision Card */}
                        <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-center">
                            <h3 className="text-[#070831] text-4xl font-bold mb-6">Our Vision</h3>
                            <p className="text-[#070831] text-lg font-medium leading-relaxed">
                                To inspire students to build impactful, innovative, and globally relevant careers beyond the traditional expectations of academic success.
                            </p>
                        </div>

                        {/* Bottom Logo Text */}
                        <div className="flex-none mt-auto">
                            <Image
                                src={Images.scfOrangePrimary}
                                alt="SCF 60"
                                className="w-full max-w-2xl h-auto z-10"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Mission Card */}
                    <div className="w-full md:w-1/2 bg-[#F26B2E] p-8 md:p-16 flex flex-col justify-center">
                        <h3 className="text-white text-4xl font-bold mb-6">Our Mission</h3>
                        <p className="text-white text-lg font-medium leading-relaxed mb-4">
                            Our mission is to provide a platform where students can:
                        </p>
                        <ul className="text-white text-base font-medium space-y-2 list-disc pl-5">
                            <li>Connect with industry professionals and mentors</li>
                            <li>Gain practical knowledge about career development</li>
                            <li>Discover opportunities beyond the classroom</li>
                            <li>Develop the skills required to thrive in the modern workforce</li>
                        </ul>
                        <p className="text-white text-lg font-medium mt-6">
                            SCF aims to empower students to become professionals who are not only qualified but also exceptional.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
