"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Images } from "@/public/index";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Affiliates", href: "/affiliates" },
    { label: "Programs", href: "/programs" },
    { label: "Gallery", href: "/gallery" },
    { label: "Our Magazine", href: "https://drive.google.com/drive/u/1/folders/1nY81Dhs1eSXrpkTrhO1vvkZY58mQRyJ4", external: true },
];

export const COHINavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? "bg-[#0B0A1F]/90 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image src={Images.cohiLogo} alt="COHI Logo" className="h-12 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* SCF Button */}
                <div className="hidden lg:flex items-center">
                    <Link
                        href="/scf"
                        className="relative group overflow-hidden brown-gradient text-white px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(242,107,46,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded font-black">SCF</span>
                            6.0
                        </span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0B0A1F]/98 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            className="text-base font-medium text-white/80 hover:text-white transition-colors py-2 border-b border-white/5"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/scf"
                        className="brown-gradient text-white text-center px-5 py-3 rounded-xl text-base font-bold mt-2"
                        onClick={() => setIsOpen(false)}
                    >
                        SCF 6.0
                    </Link>
                </div>
            )}
        </nav>
    );
};
