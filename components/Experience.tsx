import Image from "next/image";
import { Images } from "@/public/index";
import Link from "next/link";

export function Experience() {
    return (
        <section className="relative w-full bg-[#050624] py-24 px-6 md:px-20 overflow-hidden min-h-screen flex flex-col items-center">
            <div className="absolute inset-0 z-1 select-none pointer-events-none flex items-center justify-center md:justify-end">
                <Image
                    src={Images.rings}
                    alt="Glow Pattern"
                    className="absolute w-[200%] sm:w-[150%] md:w-[120%] lg:w-[190%] max-w-none h-auto object-contain mix-blend-screen -md:translate-x-[1000rem]  pointer-events-none"
                />
            </div>
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-start gap-8 z-20">
                    <h2 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] max-w-lg">
                        Be Part of the Experience
                    </h2>

                    <p className="text-white/80 text-lg font-light max-w-md">
                        Join SCF 6.0 and take a step toward building a career that stands out in a global world.
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                        <Link href="#sponsor" className="bg-white text-[#070831] px-8 py-4 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors">
                            Be a Sponsor
                        </Link>
                        <Link href="#ticket" className="brown-gradient text-white px-8 py-4 rounded-lg text-sm font-semibold transition-colors">
                            Get Ticket
                        </Link>
                    </div>
                </div>

                {/* Orange Shape Graphic */}
                <div className="w-full md:w-1/2 md:relative h-[400px] md:h-[600px] z-10 hidden md:block ">
                    <Image
                        src={Images.star3d}
                        alt="Join Us"
                        layout="fill"
                        objectFit="contain"
                        className="filter hue-rotate-15 scale-125 md:scale-150 origin-right translate-y-100 translate-x-10 md:translate-x-100"
                    />
                </div>

            </div>
        </section>
    );
}
