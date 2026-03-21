"use client";

import React from "react";
import Image from "next/image";
import { Images } from "@/public/index";
import { Experience } from "@/components/Experience";

export default function SCFGalleryPage() {
    return (
        <main className="min-h-screen bg-[#070831] overflow-x-hidden">
            <div className="absolute inset-x-0 top-0 z-0 select-none pointer-events-none flex items-center justify-center h-full">
                <Image
                    src={Images.glowRing}
                    alt="Glow Pattern"
                    className="absolute object-cover w-[170%] h-[160%] mix-blend-screen translate-y-[20%]"
                />
            </div>

            {/* Hero */}
            <div className="relative pt-32 pb-16 px-6">
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold mb-2 tracking-tight">
                        Moments from past editions of the
                    </h1>
                    <h2 className="text-white text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter">
                        Student Career Fair.
                    </h2>
                </div>
            </div>

            {/* Gallery Grid */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
                    <div className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded-2xl md:row-span-2">
                        <Image src={Images.image1} alt="Gallery 1" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="md:col-span-4 grid grid-rows-2 gap-4 md:gap-6">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image src={Images.image2} alt="Gallery 2" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image src={Images.image3} alt="Gallery 3" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                    <div className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded-2xl md:row-span-2">
                        <Image src={Images.image4} alt="Gallery 4" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="md:col-span-12 relative aspect-video md:aspect-[3/1] overflow-hidden rounded-2xl mt-4">
                        <Image src={Images.image5} alt="Gallery 5" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded-2xl">
                        <Image src={Images.image6} alt="Gallery 6" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="md:col-span-4 grid grid-rows-2 gap-4 md:gap-6">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image src={Images.image7} alt="Gallery 7" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image src={Images.image8} alt="Gallery 8" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                    <div className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded-2xl">
                        <Image src={Images.image9} alt="Gallery 9" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>
            </section>

            <Experience />
        </main>
    );
}
