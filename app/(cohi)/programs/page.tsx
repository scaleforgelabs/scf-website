import Image from "next/image";
import Link from "next/link";
import { Images } from "@/public/index";

const programs = [
    {
        title: "Higher Institutions Convention of Muslim Students",
        tag: "Annual",
        desc: "An assembly of Muslim students staged for the purpose of bringing new ideas on how to improve schools' Islamic activities. It also serves as a reportorial platform for COHI officers, followed by election of new officers for the next administrative year.",
        register: null,
    },
    {
        title: "Campus Interactive Forum",
        tag: "Recurring",
        desc: "A platform where students of higher institutions come together to solve general problems faced by the institutions as regards Islamic work. It fosters unity and collaborative problem-solving across campuses.",
        register: null,
    },
    {
        title: "Capacity Building Course",
        tag: "Open",
        desc: "An empowerment and enlightening event to equip students with intellectual tools required in the modern labour market. Participants gain practical skills and industry insights.",
        register: "https://forms.gle/WX7RaDdWu3QUvsTLA",
    },
    {
        title: "COHI Championship",
        tag: "Sports",
        desc: "The annual championship consists of group stage, quarter final, semi-final and final. Teams register 15 players and 5 management staff. Full guidelines and rules are shared with participating institutions.",
        register: "https://forms.gle/h1WeHZa6xEmBKiAh9",
    },
    {
        title: "Student Career Fair (SCF)",
        tag: "Featured",
        desc: "The flagship annual initiative organized by COHI to bridge the gap between academic learning and real-world opportunities. Through career talks, networking, and workshops, SCF empowers students to design careers that stand out globally.",
        register: "/scf",
        featured: true,
    },
];

export default function ProgramsPage() {
    return (
        <div className="relative min-h-screen w-full flex flex-col bg-[#0B0A1F]">

            {/* Hero */}
            <section className="relative w-full bg-[#050624] py-32 px-6 md:px-20 overflow-hidden flex flex-col items-center">
                <div className="absolute inset-x-0 top-0 z-0 pointer-events-none flex items-center justify-center h-full">
                    <Image src={Images.glowRing} alt="" className="absolute object-cover w-[170%] h-[160%] mix-blend-screen translate-y-40" />
                </div>
                <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center">
                    <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
                    <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">Our Programmes</h1>
                    <p className="text-white/60 text-xl font-light max-w-2xl">
                        Platforms designed to develop, connect, and empower Muslim students across Lagos State.
                    </p>
                </div>
            </section>

            {/* Programs List */}
            <section className="w-full bg-[#0B0A1F] py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto flex flex-col gap-6">
                    {programs.map((prog, i) => (
                        <div
                            key={i}
                            className={`relative group rounded-2xl border p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all hover:scale-[1.01] ${
                                prog.featured
                                    ? "border-[#F26B2E]/40 bg-[#F26B2E]/5"
                                    : "border-white/10 bg-white/3 hover:border-white/20"
                            }`}
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${prog.featured ? "bg-[#F26B2E] text-white" : "bg-white/10 text-white/60"}`}>
                                        {prog.tag}
                                    </span>
                                </div>
                                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">{prog.title}</h3>
                                <p className="text-white/60 font-light leading-relaxed max-w-2xl">{prog.desc}</p>
                            </div>
                            {prog.register && (
                                <div className="shrink-0">
                                    <Link
                                        href={prog.register}
                                        target={prog.register.startsWith("http") ? "_blank" : undefined}
                                        className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all hover:scale-105 ${
                                            prog.featured
                                                ? "brown-gradient text-white hover:shadow-[0_0_20px_rgba(242,107,46,0.4)]"
                                                : "bg-white text-[#0B0A1F] hover:bg-white/90"
                                        }`}
                                    >
                                        {prog.featured ? "Explore SCF 6.0 →" : "Register →"}
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
