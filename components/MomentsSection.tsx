import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Images } from "@/public/index";

export function MomentsSection() {
    return (
        <section className="relative w-full bg-[#050624] py-24 px-6 md:px-20 overflow-hidden min-h-screen flex flex-col items-center">
            <div className="absolute inset-0 z-1 select-none pointer-events-none flex items-center justify-center md:justify-end">
                <Image
                    src={Images.rings}
                    alt="Glow Pattern"
                    className="absolute w-[200%] sm:w-[150%] md:w-[120%] lg:w-[190%] max-w-none h-auto object-contain mix-blend-screen -md:translate-x-[1000rem]  pointer-events-none"
                />
            </div>


            <div className="max-w-7xl w-full mx-auto flex flex-col relative z-10">

                {/* Header Area */}
                <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12">
                    <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-xl">
                        Moments From<br />Previous Editions
                    </h2>

                    <div className="flex flex-col items-start md:items-end gap-6 max-w-md">
                        <p className="text-white/80 text-base md:text-lg font-light md:text-right">
                            Explore highlights from past Student Career Fairs and see how students connected, learned, and grew.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#sponsor" className="bg-white text-[#070831] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors">
                                Be a Sponsor
                            </Link>
                            <Link href="#ticket" className="brown-gradient text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors">
                                Get Ticket
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Dashed Separator */}
                <div className="w-full border-t-[3px] border-dashed border-white/20 my-8" />

                {/* View Gallery Link */}
                <div className="w-full flex justify-end mb-8">
                    <Link href="#gallery" className="text-white hover:text-white/80 transition-colors text-sm font-medium">
                        View Gallery
                    </Link>
                </div>

                {/* Cards Grid / Carousel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-20">

                    {/* Card 1 */}
                    <div className="relative w-full aspect-3/4 group flex items-center justify-center translate-y-2">
                        {/* Border SVG Background */}
                        <Image
                            src={Images.imageBorder}
                            alt="Border"
                            layout="fill"
                            objectFit="contain"
                            className="absolute inset-0 z-0 drop-shadow-2xl"
                        />

                        {/* Inner Plate SVG and Content */}
                        <div className="relative z-10 w-[95%] h-[95%] flex flex-col items-center justify-end overflow-hidden mt-[-2%] ml-[1%]">
                            <Image
                                src={Images.imagePlate}
                                alt="Plate"
                                layout="fill"
                                objectFit="contain"
                                className="absolute inset-0 z-0"
                            />

                            {/* Inner Clamping for the content to match the visible plate area */}
                            <div className="absolute inset-[4%] overflow-hidden rounded-2xl z-10 flex flex-col justify-end">
                                {/* Speaker Image */}
                                <Image
                                    src={Images.person}
                                    alt="Mr. Kayode Qasim Olowu"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                    className="absolute inset-0 -z-10 transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Speaker Info Panel */}
                                <div className="w-full bg-black/40 backdrop-blur-md p-4 md:p-5 text-center border-t border-white/20">
                                    <h3 className="text-white font-bold text-base md:text-lg truncate">Mr. Kayode Qasim Olowu</h3>
                                    <p className="text-white/90 text-sm font-semibold mt-1">Keynote Speaker</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-full aspect-3/4 group flex items-center justify-center translate-y-2">
                        {/* Border SVG Background */}
                        <Image
                            src={Images.imageBorder}
                            alt="Border"
                            layout="fill"
                            objectFit="contain"
                            className="absolute inset-0 z-0 drop-shadow-2xl"
                        />

                        {/* Inner Plate SVG and Content */}
                        <div className="relative z-10 w-[95%] h-[95%] flex flex-col items-center justify-end overflow-hidden mt-[-2%] ml-[1%]">
                            <Image
                                src={Images.imagePlate}
                                alt="Plate"
                                layout="fill"
                                objectFit="contain"
                                className="absolute inset-0 z-0"
                            />

                            {/* Inner Clamping for the content to match the visible plate area */}
                            <div className="absolute inset-[4%] overflow-hidden rounded-2xl z-10 flex flex-col justify-end">
                                {/* Speaker Image */}
                                <Image
                                    src={Images.person}
                                    alt="Mr. Kayode Qasim Olowu"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                    className="absolute inset-0 -z-10 transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Speaker Info Panel */}
                                <div className="w-full bg-black/40 backdrop-blur-md p-4 md:p-5 text-center border-t border-white/20">
                                    <h3 className="text-white font-bold text-base md:text-lg truncate">Mr. Kayode Qasim Olowu</h3>
                                    <p className="text-white/90 text-sm font-semibold mt-1">Keynote Speaker</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative w-full aspect-3/4 group flex items-center justify-center translate-y-2">
                        {/* Border SVG Background */}
                        <Image
                            src={Images.imageBorder}
                            alt="Border"
                            layout="fill"
                            objectFit="contain"
                            className="absolute inset-0 z-0 drop-shadow-2xl"
                        />

                        {/* Inner Plate SVG and Content */}
                        <div className="relative z-10 w-[95%] h-[95%] flex flex-col items-center justify-end overflow-hidden mt-[-2%] ml-[1%]">
                            <Image
                                src={Images.imagePlate}
                                alt="Plate"
                                layout="fill"
                                objectFit="contain"
                                className="absolute inset-0 z-0"
                            />

                            {/* Inner Clamping for the content to match the visible plate area */}
                            <div className="absolute inset-[4%] overflow-hidden rounded-2xl z-10 flex flex-col justify-end">
                                {/* Speaker Image */}
                                <Image
                                    src={Images.person}
                                    alt="Mr. Kayode Qasim Olowu"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                    className="absolute inset-0 -z-10 transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Speaker Info Panel */}
                                <div className="w-full bg-black/40 backdrop-blur-md p-4 md:p-5 text-center border-t border-white/20">
                                    <h3 className="text-white font-bold text-base md:text-lg truncate">Mr. Kayode Qasim Olowu</h3>
                                    <p className="text-white/90 text-sm font-semibold mt-1">Keynote Speaker</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Carousel Controls */}
                <div className="flex justify-end gap-4 mt-8">
                    <button className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

            </div>
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
