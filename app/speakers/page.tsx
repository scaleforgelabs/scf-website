"use client";

import React from "react";
import Image from "next/image";
import { Images } from "@/public/index";
import { SpeakerCard } from "@/components/SpeakerCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Globe, Twitter, Linkedin } from "lucide-react";
import { Experience } from "@/components/Experience";
import Link from "next/link";

const speakers = [
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
];

const moderators = [
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
    { name: "Mr. Kayode Qasim Olowu", role: "Keynote Speaker", image: Images.person },
];

export default function SpeakersPage() {
    return (
        <main className="min-h-screen bg-[#070831] relat">
            <Navbar />

            <div className="absolute inset-x-0 top-0 z-0 select-none pointer-events-none flex items-center justify-center h-full">
                <Image
                    src={Images.glowRing}
                    alt="Glow Pattern"
                    className="absolute object-cover w-[170%] h-[160%] mix-blend-screen translate-y-180"
                />
            </div>
            {/* Hero Section / Glow */}
            <div className="relative pt-32 pb-20 px-6">
                {/* Background Rings */}

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center ">
                    <h1 className="text-white text-4xl md:text-7xl font-bold mb-4 tracking-tight">
                        <span className="text-[#F26B2E]">Meet Our</span><br />
                        <span className="text-white">Speakers</span>
                    </h1>
                    <p className="text-white/70 max-w-xl text-lg font-light">
                        Learn from professionals who have built careers beyond the ordinary.
                    </p>
                </div>
            </div>

            {/* Keynote Speaker Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-10">Keynote Speaker</h2>

                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    <div className="lg:col-span-4 w-full max-w-md mx-auto lg:mx-0">
                        <SpeakerCard
                            name="Mr. Kayode Qasim Olowu"
                            role="Keynote Speaker"
                            image={Images.person}
                        />
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <h3 className="text-white text-3xl md:text-4xl font-bold">Mr. Kayode Qasim Olowu</h3>
                        <div className="text-white/80 space-y-6 text-base md:text-lg leading-relaxed font-light">
                            <p>
                                Mr. Kayode Qasim Olowu is the founder and creative director at ONEWILDCARD, a multidisciplinary design agency based in Lagos, Nigeria.
                            </p>
                            <p>
                                He is a top-notch creative who has led diverse teams to deliver strategy, oversee planning and execution of design, marketing and digital communications projects within and outside Africa.
                            </p>
                            <p>
                                Mr. Kayode's works have been recognised at several international design and creativity awards, including ADC (Germany), CLIO, Graphis (USA), D&AD (UK), and YGA (Australia).
                            </p>
                            <p>
                                His works have also been featured in various design publications including Luerzer's Archive, Applied Arts Magazine, Luerzer's Archive Special (200 Best Packaging Design Worldwide).
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                                <Globe size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                                <Twitter size={18} fill="currentColor" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                                <Linkedin size={18} fill="currentColor" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Panel Speakers Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-12">Panel Speakers</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {speakers.map((speaker, index) => (
                        <SpeakerCard
                            key={index}
                            name={speaker.name}
                            role={speaker.role}
                            image={speaker.image}
                        />
                    ))}
                </div>
            </section>

            <div className="relative">


                <div>
                    {/* <div className="absolute inset-x-0 top-0 z-0 select-none pointer-events-none flex items-center justify-center h-full">
                        <Image
                            src={Images.rings}
                            alt="Glow Pattern"
                            className="absolute object-cover w-[170%] h-[160%] mix-blend-screen translate-y-200 translate-x-[30rem] w-full " 
                        />
                    </div> */}
                    {/* Moderators Section */}
                    <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
                        <h2 className="text-white text-2xl md:text-3xl font-bold mb-12">Moderators</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                            {moderators.map((moderator, index) => (
                                <SpeakerCard
                                    key={index}
                                    name={moderator.name}
                                    role={moderator.role}
                                    image={moderator.image}
                                />
                            ))}
                        </div>
                    </section>
                    <section className=" w-full  py-24 px-6 md:px-20 overflow-hidden min-h-screen flex flex-col items-center">

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
                </div>
            </div>
        </main>
    );
}
