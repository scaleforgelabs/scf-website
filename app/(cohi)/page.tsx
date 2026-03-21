import Image from "next/image";
import Link from "next/link";
import { Images } from "@/public/index";

export default function COHIHomePage() {
    return (
        <div className="relative min-h-screen w-full flex flex-col bg-[#0B0A1F]">

            {/* Hero */}
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#06072C]">
                <div className="absolute inset-x-0 top-0 z-0 pointer-events-none flex items-center justify-center h-full">
                    <Image src={Images.glowRing} alt="Glow" className="absolute object-cover w-[170%] h-[160%] mix-blend-screen translate-y-40" />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
                    <Image src={Images.cohiLogo} alt="COHI Logo" className="h-24 w-auto mb-8" />
                    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        Council of <span className="text-[#F26B2E]">Higher</span><br />Institutions
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mb-10">
                        An Organ of Muslim Students&apos; Society of Nigeria, Lagos State Area Unit — unifying Muslim students across 21 higher institutions in Lagos.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/about" className="bg-white text-[#0B0A1F] px-8 py-4 rounded-xl text-sm font-bold hover:bg-white/90 transition-all hover:scale-105">
                            Learn More
                        </Link>
                        <Link href="/scf" className="brown-gradient text-white px-8 py-4 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(242,107,46,0.4)]">
                            SCF 6.0 →
                        </Link>
                    </div>
                </div>
                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
                    <span>Scroll</span>
                    <div className="w-px h-10 bg-white/20" />
                </div>
            </section>

            {/* About COHI */}
            <section className="relative w-full bg-[#050624] py-24 px-6 md:px-20 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-end">
                    <Image src={Images.rings} alt="" className="absolute w-[100%] max-w-none h-auto object-contain mix-blend-screen opacity-30 translate-x-60" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4">Who We Are</p>
                        <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-8">
                            Over 2 decades of unifying Muslim students in Lagos
                        </h2>
                        <div className="space-y-4 text-white/70 text-lg font-light leading-relaxed">
                            <p>
                                The Council of Higher Institutions (COHI) is an organ of Muslim Students&apos; Society of Nigeria, Lagos State Area Unit. Its utmost goal is the unification of all Muslim students on various campuses across Lagos State.
                            </p>
                            <p>
                                Our core values are academic excellence, students&apos; welfare, moral rectitude, and spiritual uplift.
                            </p>
                        </div>
                        <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-white font-semibold border border-white/20 px-6 py-3 rounded-xl hover:bg-white/5 transition-colors">
                            Read More <span>→</span>
                        </Link>
                    </div>
                    <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-[#E0DEFA]" />
                        <Image src={Images.people} alt="Students" fill className="object-cover mix-blend-multiply" />
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="w-full bg-[#EBECFF] py-20 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4 text-center">COHI by the Numbers</p>
                    <h2 className="text-[#0A0E3F] text-4xl md:text-5xl font-bold text-center mb-16">Our Impact</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "21+", label: "Affiliate Institutions", bg: "bg-[#0A0E3F]", text: "text-white" },
                            { value: "2+", label: "Decades of Existence", bg: "bg-[#F26522]", text: "text-white" },
                            { value: "1000+", label: "Muslim Students", bg: "bg-[#B8BCE6]", text: "text-[#0A0E3F]" },
                            { value: "6", label: "SCF Editions", bg: "bg-[#EBC1A9]", text: "text-[#0A0E3F]" },
                        ].map((stat, i) => (
                            <div key={i} className={`${stat.bg} ${stat.text} rounded-3xl flex flex-col items-center justify-center py-12 px-6 text-center`}>
                                <h3 className="text-5xl font-bold">{stat.value}</h3>
                                <p className="text-sm mt-2 leading-tight max-w-[120px]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCF Promo Banner */}
            <section className="relative w-full bg-[#050624] py-24 px-6 md:px-20 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image src={Images.glowRing} alt="" className="absolute object-cover w-[170%] h-[160%] mix-blend-screen -translate-y-20 opacity-60" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col gap-6 max-w-xl">
                        <div className="inline-flex items-center gap-2 bg-[#F26B2E]/10 border border-[#F26B2E]/30 px-4 py-2 rounded-full w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#F26B2E] animate-pulse" />
                            <span className="text-[#F26B2E] text-sm font-semibold">Coming April 18, 2026</span>
                        </div>
                        <h2 className="text-white text-5xl md:text-7xl font-black leading-tight">
                            SCF <span className="text-[#F26B2E]">6.0</span>
                        </h2>
                        <p className="text-white/70 text-xl font-light italic">
                            &quot;Pas Ordinaires: Global by Design&quot;
                        </p>
                        <p className="text-white/60 text-base font-light">
                            The Student Career Fair is back. Connect with industry professionals, discover opportunities, and design a career that stands out globally.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <Link href="/scf" className="brown-gradient text-white px-8 py-4 rounded-xl text-sm font-bold hover:shadow-[0_0_20px_rgba(242,107,46,0.4)] transition-all hover:scale-105">
                                Explore SCF 6.0
                            </Link>
                            <Link href="#ticket" className="text-white border border-white/20 px-8 py-4 rounded-xl text-sm font-semibold hover:bg-white/5 transition-colors">
                                Get Ticket
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-full md:w-[400px] h-[300px] md:h-[400px]">
                        <Image src={Images.star3d} alt="SCF" fill className="object-contain scale-110" />
                    </div>
                </div>
            </section>

            {/* Affiliates Preview */}
            <section className="w-full bg-[#0B0A1F] py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4">Our Network</p>
                    <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-4">Our Affiliates</h2>
                    <p className="text-white/60 text-lg font-light text-center max-w-xl mb-16">
                        2 Universities · 2 Colleges of Medicine · 6 Polytechnics · 4 Colleges of Education · 7 Other Institutes
                    </p>
                    <Image src={Images.logos} alt="Affiliate Logos" className="w-full max-w-4xl h-auto object-contain opacity-80" />
                    <Link href="/affiliates" className="mt-12 inline-flex items-center gap-2 text-white font-semibold border border-white/20 px-8 py-4 rounded-xl hover:bg-white/5 transition-colors">
                        View All Affiliates <span>→</span>
                    </Link>
                </div>
            </section>

            {/* Programs Preview */}
            <section className="relative w-full bg-[#050624] py-24 px-6 md:px-20 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-end">
                    <Image src={Images.rings} alt="" className="absolute w-[80%] max-w-none h-auto object-contain mix-blend-screen opacity-20 translate-x-40" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto">
                    <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-16">Our Programmes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Higher Institutions Convention", desc: "An assembly of Muslim students to bring new ideas on how to improve Islamic activities across campuses." },
                            { title: "Campus Interactive Forum", desc: "A platform where students come together to solve general problems faced by institutions regarding Islamic work." },
                            { title: "Capacity Building Course", desc: "An empowerment event to equip students with intellectual tools required in the modern labour market." },
                            { title: "Student Career Fair (SCF)", desc: "Annual career fair bridging the gap between academic learning and real-world professional opportunities.", highlight: true },
                        ].map((prog, i) => (
                            <div key={i} className={`p-8 rounded-2xl border transition-all hover:scale-[1.02] ${prog.highlight ? "border-[#F26B2E]/40 bg-[#F26B2E]/5" : "border-white/10 bg-white/3 hover:border-white/20"}`}>
                                {prog.highlight && <span className="text-[#F26B2E] text-xs font-bold uppercase tracking-widest mb-3 block">Featured</span>}
                                <h3 className="text-white text-xl font-bold mb-3">{prog.title}</h3>
                                <p className="text-white/60 font-light leading-relaxed">{prog.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 flex justify-center">
                        <Link href="/programs" className="inline-flex items-center gap-2 text-white font-semibold border border-white/20 px-8 py-4 rounded-xl hover:bg-white/5 transition-colors">
                            View All Programs <span>→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Coordinator Message */}
            <section className="w-full bg-[#0B0A1F] py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4">
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-white/10">
                            <Image src={Images.person} alt="Coordinator" fill className="object-cover object-top" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Odusanya Abdulhafeez</h4>
                            <p className="text-[#F26B2E] text-sm font-medium">COHI Coordinator</p>
                            <p className="text-white/50 text-sm">Lagos State University</p>
                        </div>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4">From the Coordinator</p>
                        <div className="text-4xl text-white/20 font-serif mb-4">&ldquo;</div>
                        <p className="text-white/80 text-lg font-light leading-relaxed mb-6">
                            It is my pleasure to welcome you to the website of the Council of Higher Institutions, where you stay more connected to the organ&apos;s activities and get the latest information across our affiliate institutions.
                        </p>
                        <p className="text-white/60 text-base font-light leading-relaxed">
                            COHI is charged with the responsibility of coordinating the activities of all tertiary institutions across the state. We are concerned with student development, welfarism and strengthening the bond of brotherhood among members.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
