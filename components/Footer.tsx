import Image from "next/image";
import Link from "next/link";
import { Images } from "@/public/index";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 overflow-hidden relative border-t">
            <div className=" relative z-10 flex flex-col items-center">

                {/* Main Graphic Section */}
                <div className="w-full relative flex justify-between items-center mt-8">

                    <Image src={Images.footerbg} alt="Students" className="object-contain h-auto w-[90%] object-bottom origin-bottom-left" />


                </div>

                {/* Bottom Section */}
                <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-8 ">
                    <p className="text-[#0B0A1F] font-medium text-sm">
                        ©2026 Council of Higher Institutions COHI
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="text-[#0B0A1F] font-semibold text-sm mr-2">Follow Us on</span>

                        <Link href="#" className="w-10 h-10 rounded-full bg-[#0B0A1F] flex items-center justify-center text-white hover:bg-[#D85E29] transition-colors">
                            <Facebook size={18} fill="currentColor" strokeWidth={0} />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-[#0B0A1F] flex items-center justify-center text-white hover:bg-[#D85E29] transition-colors">
                            <Instagram size={18} />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-[#0B0A1F] flex items-center justify-center text-white hover:bg-[#D85E29] transition-colors">
                            <Twitter size={18} fill="currentColor" strokeWidth={0} />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-[#0B0A1F] flex items-center justify-center text-white hover:bg-[#D85E29] transition-colors">
                            <Youtube size={18} />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-[#0B0A1F] flex items-center justify-center text-white hover:bg-[#D85E29] transition-colors">
                            <Linkedin size={18} fill="currentColor" strokeWidth={0} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
