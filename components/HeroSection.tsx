import Image from "next/image";
import { Images } from "@/public/index";

export function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-[#06072C] md:pb-64">
            {/* Background Rings */}
            <div className="absolute inset-x-0 top-0 z-0 select-none pointer-events-none flex items-center justify-center h-full">
                <Image
                    src={Images.glowRing}
                    alt="Glow Pattern"
                    className="absolute object-cover w-[170%] h-[160%] mix-blend-screen translate-y-120"
                /> 
            </div>
            
                {/* <Image
                    src={Images.glowRing}
                    alt="Glow Pattern"
                    className="absolute object-cover w-[170%] h-[160%] mix-blend-screen translate-y-120"
                /> */}

            <div className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl px-6 pt-10">
                {/* Title */}
                <Image
                    src={Images.scfOrange}
                    alt="SCF 60"
                    className="w-full max-w-4xl h-auto z-10"
                    priority
                />

                {/* 60 Image & Overlay Text */}
                <div className="relative w-full max-w-7xl mt-12 flex justify-center items-center">
                    {/* The giant 60 */}
                    <Image
                        src={Images.six}
                        alt="SCF 60"
                        className="w-full max-w-[800px] h-auto z-10 px-4 md:px-0"
                        priority
                    />
                    {/* Side Texts */}
                    <div className="absolute left-0 md:-left-8 top-10  w-60 text-left z-20 hidden md:block">
                        <p className="text-white text-lg leading-relaxed font-extralight">
                            The Student Career Fair
                            (SCF) organized by COHI is
                            a platform built to prepare
                            students for a future
                            beyond the classroom.
                        </p>
                    </div>
                    <div className="absolute right-6 md:-right-8  -translate-y-1/2 w-48 text-left z-20 hidden md:block">
                        <p className="text-white text-md leading-relaxed font-light">
                            SCF 6.0 challenges
                            students to move
                            beyond the
                            ordinary path and
                            design careers that
                            stand out globally.
                        </p>
                    </div>

                    {/* Countdown timer placeholder overlay on the 60 */}
                    <div className="absolute -bottom-24 md:-bottom-24 w-full flex items-stretch justify-center gap-1 md:gap-2 z-30 px-2 md:px-0">
                        {/* Date Side */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-l-2xl md:rounded-l-[2.5rem] px-3 py-6 md:px-10 md:py-10 flex flex-col items-center justify-center shrink-0 shadow-2xl">
                            <p className="text-white text-sm sm:text-lg md:text-2xl font-bold whitespace-nowrap">April 18</p>
                            <p className="text-[#F26B2E] text-xl sm:text-2xl md:text-5xl font-black">2026</p>
                        </div>

                        {/* Timer Section */}
                        <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 flex justify-center items-center gap-1 sm:gap-4 md:gap-8 px-2 md:px-4 py-4 md:py-8 shadow-2xl overflow-hidden">
                            <div className="flex flex-col items-center">
                                <span className="text-xl sm:text-4xl md:text-7xl font-bold text-white">30</span>
                                <span className="text-white/80 text-[10px] md:text-sm mt-1 md:mt-2">Days</span>
                            </div>
                            <span className="text-xl md:text-6xl text-white font-bold opacity-50 mb-4 md:mb-6">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-xl sm:text-4xl md:text-7xl font-bold text-white">07</span>
                                <span className="text-white/80 text-[10px] md:text-sm mt-1 md:mt-2">Hours</span>
                            </div>
                            <span className="text-xl md:text-6xl text-white font-bold opacity-50 mb-4 md:mb-6">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-xl sm:text-4xl md:text-7xl font-bold text-white">04</span>
                                <span className="text-white/80 text-[10px] md:text-sm mt-1 md:mt-2">Mins</span>
                            </div>
                            <span className="text-xl md:text-6xl text-white font-bold opacity-50 mb-4 md:mb-6">:</span>
                            <div className="flex flex-col items-center">
                                <span className="text-xl sm:text-4xl md:text-7xl font-bold text-white">24</span>
                                <span className="text-white/80 text-[10px] md:text-sm mt-1 md:mt-2">Secs</span>
                            </div>
                        </div>

                        {/* To be Revealed Side */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-r-2xl md:rounded-r-[2.5rem] px-3 py-6 md:px-10 md:py-10 flex flex-col items-center justify-center shrink-0 text-center shadow-2xl">
                            <p className="text-white text-xs sm:text-lg md:text-xl leading-tight">To be</p>
                            <p className="text-white text-xs sm:text-lg md:text-xl mb-1">Revealed</p>
                            <p className="text-[#F26B2E] text-sm sm:text-2xl md:text-4xl font-black uppercase">SOON</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
