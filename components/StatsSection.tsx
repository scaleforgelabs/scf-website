import { Images } from "@/public";
import Image from "next/image";
import React from "react";

const stats = [
    {
        value: "500+",
        label: "Attendees",
        bg: "bg-[#0A0E3F] rounded-l-[56px] rounded-br-[56px]",
        text: "text-white",
    },
    {
        value: "30",
        label: "Internship Opportunities",
        bg: "bg-[#B8BCE6] rounded-l-[56px] rounded-br-[56px]",
        text: "text-black",
    },
    {
        value: "20",
        label: "Speakers",
        bg: "bg-[#F26522] rounded-b-[56px]",
        text: "text-white",
    },
    {
        value: "200+",
        label: "Connects",
        bg: "bg-[#EBC1A9] rounded-r-[56px] rounded-bl-[56px]",
        text: "text-black",
    },
    {
        value: "10",
        label: "Vendors",
        bg: "bg-[#F26522] rounded-l-[56px] rounded-br-[56px]",
        text: "text-white",
    },
];

export const StatsSection = () => {
    return (
        <section className="relative w-full bg-[#EBECFF] py-20 overflow-hidden">
            {/* Color Grading Gradient Overlay */}
            <div className="absolute inset-x-0 top-0 h-full bg-linear-to-b from-white via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-white/50 to-transparent z-10 pointer-events-none" />

            {/* Background Illustration */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-40">
                <div className="absolute inset-0 bg-linear-to-b from-[#EBECFF] via-[#EBECFF]/50 to-transparent z-10" />
                <Image
                    src={Images.illustration}
                    alt="illustration"
                    fill
                    className="object-cover object-bottom mix-blend-multiply"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-center text-[40px] font-semibold text-[#0A0E3F] mb-14">
                    SCF in Numbers
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`${stat.bg} ${stat.text}  flex flex-col justify-center items-center py-10 px-6 text-center`}
                        >
                            <h3 className="text-[48px] font-bold leading-none">
                                {stat.value}
                            </h3>

                            <p className="text-[14px] mt-2 leading-tight max-w-[120px]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
