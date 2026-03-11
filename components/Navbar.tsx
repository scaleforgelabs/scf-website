"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Images } from "@/public/index";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-5 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Left Side: Logos */}
                <div className="flex items-center gap-3">
                    <Image src={Images.compoundLogo} alt="COHI Logo" className="h-14 w-auto" />
                </div>

                {/* Center: Desktop Navigation */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 bg-white/5 border border-white/10 backdrop-blur-md px-8 py-6 rounded-md shadow-lg">
                    <Link href="#about" className="text-sm font-medium text-white/90 hover:text-white transition-colors">About us</Link>
                    <Link href="#speakers" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Speakers</Link>
                    <Link href="#gallery" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Gallery</Link>
                    <Link href="#shop" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Shop</Link>
                </div>

                {/* Right Side: Action Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="#sponsor" className="bg-white text-[#0B0A1F] px-5 py-4 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors">
                        Be a Sponsor
                    </Link>
                    <Link href="#ticket" className="brown-gradient text-white px-5 py-4 rounded-lg text-sm font-semibold 0 transition-colors">
                        Get Ticket
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0B0A1F]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <Link href="#about" className="text-base font-medium text-white/90 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>About us</Link>
                        <Link href="#speakers" className="text-base font-medium text-white/90 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Speakers</Link>
                        <Link href="#gallery" className="text-base font-medium text-white/90 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Gallery</Link>
                        <Link href="#shop" className="text-base font-medium text-white/90 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Shop</Link>
                    </div>
                    <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                        <Link href="#sponsor" className="bg-white text-[#0B0A1F] text-center px-5 py-3 rounded-lg text-base font-semibold hover:bg-white/90 transition-colors" onClick={() => setIsOpen(false)}>
                            Be a Sponsor
                        </Link>
                        <Link href="#ticket" className="bg-[#D85E29] text-white text-center px-5 py-3 rounded-lg text-base font-semibold hover:bg-[#D85E29]/90 transition-colors" onClick={() => setIsOpen(false)}>
                            Get Ticket
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
