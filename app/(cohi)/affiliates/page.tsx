import Image from "next/image";
import { Images } from "@/public/index";

const categories = [
    {
        title: "Universities",
        schools: [
            { name: "University of Lagos", abbr: "UNILAG", url: "https://unilag.edu.ng" },
            { name: "Lagos State University, Epe Campus", abbr: "LASU", url: "http://lasu.edu.ng/" },
        ],
    },
    {
        title: "Colleges of Medicine",
        schools: [
            { name: "Lagos University College of Medicine", abbr: "LASUCOM", url: "https://lasucom.edu.ng" },
            { name: "College of Medicine, University of Lagos", abbr: "CMUL", url: "http://cmul.unilag.edu.ng/" },
        ],
    },
    {
        title: "Polytechnics",
        schools: [
            { name: "Yaba College of Technology", abbr: "Yabatech", url: "https://yabatech.edu.ng" },
            { name: "Lagos State Polytechnic, Isolo", abbr: "LASPOTECH", url: "https://www.mylaspotech.edu.ng/" },
            { name: "Lagos State Polytechnic, Ikorodu", abbr: "LASPOTECH", url: "https://www.mylaspotech.edu.ng/" },
            { name: "Lagos State Polytechnic, Ikeja", abbr: "LASPOTECH", url: "https://www.mylaspotech.edu.ng/" },
            { name: "Lagos City Polytechnic", abbr: "LagosCity", url: "https://lagoscitypolytechnic.edu.ng/" },
            { name: "Grace Polytechnic", abbr: "GracePoly", url: "https://gracepolytechnic.com/" },
        ],
    },
    {
        title: "Colleges of Education",
        schools: [
            { name: "Federal College of Education (Technical), Akoka", abbr: "FCET", url: "#" },
            { name: "Adeniran Ogunsanya College of Education", abbr: "AOCED", url: "http://aocoed.edu.ng" },
            { name: "Michael Otedola College of Primary Education", abbr: "MOCPED", url: "http://mocped.edu.ng" },
            { name: "St Augustine's College of Education", abbr: "SACOED", url: "http://sacoed.edu.ng" },
        ],
    },
    {
        title: "Colleges & Institutes",
        schools: [
            { name: "Federal College of Fisheries", abbr: "FCFMT", url: "#" },
            { name: "Federal College of Orthopedic Technology, Igbobi", abbr: "FECOT", url: "#" },
            { name: "Lagos State College of Health Technology", abbr: "LASCOHET", url: "http://lascohet.com" },
            { name: "Nigerian Army College of Nursing", abbr: "NACON", url: "#" },
            { name: "Federal School of Occupational Therapy", abbr: "FSOT", url: "#" },
            { name: "Nigerian Institute of Journalism", abbr: "NIJ", url: "http://nij.edu.ng" },
            { name: "Nigeria Law School", abbr: "NLS", url: "http://www.lawschoollagos.org/" },
        ],
    },
];

export default function AffiliatesPage() {
    return (
        <div className="relative min-h-screen w-full flex flex-col bg-[#0B0A1F]">

            {/* Hero */}
            <section className="relative w-full bg-[#050624] py-32 px-6 md:px-20 overflow-hidden flex flex-col items-center">
                <div className="absolute inset-x-0 top-0 z-0 pointer-events-none flex items-center justify-center h-full">
                    <Image src={Images.glowRing} alt="" className="absolute object-cover w-[170%] h-[160%] mix-blend-screen translate-y-40" />
                </div>
                <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center">
                    <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4">Our Network</p>
                    <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">Our Affiliates</h1>
                    <p className="text-white/60 text-xl font-light max-w-2xl">
                        2 Universities · 2 Colleges of Medicine · 6 Polytechnics · 4 Colleges of Education · 7 Other Institutes
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="w-full bg-[#0B0A1F] py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto flex flex-col gap-20">
                    {categories.map((cat) => (
                        <div key={cat.title}>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-1 h-8 bg-[#F26B2E] rounded-full" />
                                <h2 className="text-white text-3xl font-bold">{cat.title}</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {cat.schools.map((school) => (
                                    <a
                                        key={school.name}
                                        href={school.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#F26B2E]/40 hover:bg-[#F26B2E]/5 transition-all hover:scale-[1.02]"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                            <Image src={Images.cohiLogo} alt={school.abbr} width={32} height={32} className="object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div>
                                            <p className="text-[#F26B2E] text-xs font-bold uppercase tracking-wide">{school.abbr}</p>
                                            <h3 className="text-white font-semibold text-sm mt-1 leading-snug">{school.name}</h3>
                                        </div>
                                        <span className="text-white/30 text-xs group-hover:text-[#F26B2E] transition-colors mt-auto">Visit Website →</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
