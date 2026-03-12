import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Images } from "@/public/index";

export function CtaSection() {
    return (
        <section className="relative w-full bg-[#050624] py-32 px-6 md:px-20 overflow-hidden flex flex-col items-center">

            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-start gap-8 z-20">
                    <h2 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] max-w-lg">
                        Don&apos;t Settle for Ordinary
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
                <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] z-10">
                    <Image
                        src={Images.star3d}
                        alt="Join Us"
                        layout="fill"
                        objectFit="contain"
                        className="filter hue-rotate-15 scale-125 md:scale-150 origin-right translate-x-10 md:translate-x-20"
                    />
                </div>

            </div>
        </section>
    );
}
