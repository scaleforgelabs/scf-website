"use client";
import React from "react";
import Image from "next/image";
import { Images } from "@/public/index";

export function SpeakersSection() {
    return (
        <section className="relative w-full bg-[#090B64] py-24 overflow-hidden min-h-screen">

            <div className="absolute inset-0 z-0 select-none pointer-events-none flex items-center justify-center md:justify-end">
                <Image
                    src={Images.rings}
                    alt="Glow Pattern"
                    className="absolute w-[200%] sm:w-[150%] md:w-[120%] lg:w-[100%] max-w-none h-auto object-contain mix-blend-screen translate-y-60 md:translate-y-0 md:translate-x-170 opacity-80 pointer-events-none"
                />
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col">

                {/* Header Content */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-sm">
                        Meet Our<br />Speakers
                    </h2>

                    <div className="max-w-xl flex flex-col items-start md:items-end text-left md:text-left">
                        <p className="text-white/80 text-base md:text-lg font-light mb-6">
                            SCF 6.0 brings together professionals, innovators, and industry leaders who are building careers that go beyond the ordinary. Learn from their experiences and gain insights that will help you design your own path.
                        </p>
                        <button className="brown-gradient text-white px-8 py-3 rounded-lg font-medium transition-colors">
                            Get Ticket Now
                        </button>
                    </div>
                </div>

                {/* Carousel / Grid of Speakers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 relative z-20">

                    {/* Speaker Card 1 (Active) */}
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

                    {/* Placeholder Card 2 */}
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

                    {/* Placeholder Card 3 */}
                    <div className="relative w-full aspect-3/4 group items-center justify-center translate-y-2 hidden md:flex">
                        <Image
                            src={Images.imageBorder}
                            alt="Border"
                            layout="fill"
                            objectFit="contain"
                            className="absolute inset-0 z-0 drop-shadow-2xl opacity-50"
                        />
                        <div className="relative z-10 w-[95%] h-[95%] flex flex-col items-center justify-end overflow-hidden mt-[-2%] ml-[1%]">
                            <Image
                                src={Images.imagePlate}
                                alt="Plate"
                                layout="fill"
                                objectFit="contain"
                                className="absolute inset-0 z-0 opacity-50"
                            />
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
        </section>
    );
}
