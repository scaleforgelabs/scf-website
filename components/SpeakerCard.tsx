import React from "react";
import Image from "next/image";
import { Images } from "@/public/index";

interface SpeakerCardProps {
    name: string;
    role: string;
    image: any;
    className?: string;
}

export const SpeakerCard = ({ name, role, image, className = "" }: SpeakerCardProps) => {
    return (
        <div className={`relative w-full aspect-[3/4] group flex items-center justify-center ${className}`}>
            {/* Border SVG Background */}
            <Image
                src={Images.imageBorder}
                alt="Border"
                fill
                style={{ objectFit: 'contain' }}
                className="absolute inset-0 z-0 drop-shadow-2xl"
            />

            {/* Inner Plate SVG and Content */}
            <div className="relative z-10 w-[95%] h-[95%] flex flex-col items-center justify-end overflow-hidden mt-[-2%] ml-[1%]">
                <Image
                    src={Images.imagePlate}
                    alt="Plate"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="absolute inset-0 z-0"
                />

                {/* Inner Clamping for the content to match the visible plate area */}
                <div className="absolute inset-[4%] overflow-hidden rounded-2xl z-10 flex flex-col justify-end">
                    {/* Speaker Image */}
                    <Image
                        src={image}
                        alt={name}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        className="absolute inset-0 -z-10 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Speaker Info Panel */}
                    <div className="w-full bg-black/40 backdrop-blur-md p-4 md:p-5 text-center border-t border-white/20">
                        <h3 className="text-white font-bold text-base md:text-lg truncate">{name}</h3>
                        <p className="text-white/90 text-sm font-semibold mt-1">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
