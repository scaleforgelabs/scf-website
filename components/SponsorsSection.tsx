"use client";
import React from "react";
import Image from "next/image";
import { Images } from "@/public/index";

export function SponsorsSection() {
    // Creating array for a grid of 8 sponsors as shown in the design
    const sponsors = Array.from({ length: 8 });

    return (
        <section className="w-full bg-white py-24 px-6 md:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col">

                <h2 className="text-[#070831] text-3xl md:text-5xl font-semibold mb-12 max-w-md leading-tight">
                    Sponsors Patners<br />& Exhibitors
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-4 mt-8 place-items-center w-full">
                    {sponsors.map((_, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center gap-4 group">
                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
                                <Image
                                    src={Images.cohiLogo}
                                    alt="Sponsor Logo"
                                    className="w-[80%] h-[80%] object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
