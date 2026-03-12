import Image from "next/image";
import { Images } from "@/public/index";
import Link from "next/link";

export function ThemeSection() {
    return (
        <section className="relative w-full bg-[#EBECFF] py-24 px-6 md:px-20 flex flex-col md:flex-row items-center overflow-hidden min-h-screen">
            {/* Blended Background Image - right side */}
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-20 md:opacity-100 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#EBECFF] via-[#EBECFF]/80 to-transparent z-10 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#EBECFF]/50 to-[#EBECFF] z-10 md:hidden" />
                <Image
                    src={Images.upshot}
                    alt="Lecture Hall"
                    className="w-full h-full object-cover object-left opacity-30 mix-blend-multiply"
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
                <p className="text-black font-semibold text-lg md:text-xl mb-6">
                    SCF 6.0 Theme
                </p>

                <h2 className="text-[#101828] text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-2">
                    Pas Ordinaires:
                </h2>
                <h2 className="text-[#F26B2E] text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-12">
                    Global by Design
                </h2>

                <div className="space-y-6 text-[#475467] text-lg max-w-3xl font-light">
                    <p>
                        In the lecture room, success often feels predictable — follow the syllabus, pass the tests, and graduate.
                    </p>
                    <p>
                        But the real world doesn&apos;t follow a script.<br />
                        The theme &quot;Pas Ordinaire: Global by Design&quot; challenges students to step beyond the traditional path and build careers that are exceptional, innovative, and globally relevant.
                    </p>
                    <p>
                        The French phrase <em>Pas Ordinaire</em> means not ordinary. It reminds us that while the university provides the foundation, the future belongs to those who dare to create something unique on top of it.
                    </p>
                    <p>
                        At SCF 6.0, we are not just preparing students for jobs — we are inspiring them to design careers that stand out in a global world.
                    </p>
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="#sponsor" className="blue-gradient text-white px-5 py-4 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors">
                            Be a Sponsor
                        </Link>
                        <Link href="#ticket" className="brown-gradient text-white px-5 py-4 rounded-lg text-sm font-semibold 0 transition-colors">
                            Get Ticket
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
