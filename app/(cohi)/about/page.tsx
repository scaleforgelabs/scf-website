import Image from "next/image";
import { Images } from "@/public/index";

const executives = [
    { role: "Coordinator", name: "Odusanya Abdulhafeez", school: "Lagos State University", dept: "Education Management · 200L" },
    { role: "Secretary General", name: "Abdulraheem Sodiq Abiola", school: "Yaba College of Technology", dept: "ND3" },
    { role: "Public Relations Officer", name: "Salimon Toheeb", school: "Lagos State University", dept: "Electronics & Computer Engineering · 500L" },
    { role: "Financial Secretary", name: "Bakare Yusuf Olatunji", school: "FCE(T) Akoka", dept: "Business Education" },
    { role: "Welfare (Male)", name: "Mustapha Muhammad Jamiu", school: "University of Lagos", dept: "Islamic Studies Education" },
    { role: "Editor", name: "Fawole Fuad Ayomide", school: "AOCOED", dept: "English/Political Science Education · 200L" },
    { role: "Female Coordinator", name: "Ahmad Aminah Abike", school: "Lagos State University", dept: "Biochemistry · 400L" },
    { role: "Deputy Female Coordinator", name: "Zaynab Gaji", school: "LASUCOM", dept: "Medicine and Surgery" },
    { role: "Female Secretary", name: "Abdulazeez Wasilah", school: "Yabatech", dept: "Statistics" },
    { role: "Treasurer", name: "Abdullateef Khadijah Folashade", school: "Ansar-ud-deen College of Education Isolo", dept: "Math/Eco" },
    { role: "Female PRO", name: "", school: "FCET Akoka", dept: "Integrated Science Biology · 300L" },
    { role: "Welfare Officer", name: "Olashege Hussainat Oluwatimilehin", school: "LASPOTECH Ikorodu", dept: "Science Laboratory Technology" },
];

export default function AboutPage() {
    return (
        <div className="relative min-h-screen w-full flex flex-col bg-[#0B0A1F]">

            {/* Hero */}
            <section className="relative w-full bg-[#050624] py-32 px-6 md:px-20 overflow-hidden flex flex-col items-center">
                <div className="absolute inset-x-0 top-0 z-0 pointer-events-none flex items-center justify-center h-full">
                    <Image src={Images.glowRing} alt="" className="absolute object-cover w-[170%] h-[160%] mix-blend-screen translate-y-40" />
                </div>
                <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center">
                    <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
                    <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
                        Council of Higher Institutions
                    </h1>
                    <p className="text-white/60 text-xl font-light max-w-2xl">
                        An Organ of Muslim Students&apos; Society of Nigeria, Lagos State Area Unit
                    </p>
                </div>
            </section>

            {/* About + Mission */}
            <section className="w-full bg-[#0B0A1F] py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4">About COHI</p>
                        <p className="text-white/80 text-lg font-light leading-relaxed">
                            The Council of Higher Institutions (COHI) is an organ of Muslim Students&apos; Society of Nigeria, Lagos State Area Unit. Its utmost goal is the unification of all Muslim students on various campuses across Lagos State. Our core values are academic excellence, students&apos; welfare, moral rectitude, and spiritual uplift. For over two decades of existence, COHI have been at the forefront of bringing together Muslims in various campuses, maintaining the core values of Islam without compromise despite the overwhelming influence of divergent civilization on students.
                        </p>
                    </div>
                    <div>
                        <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4">Mission Statement</p>
                        <p className="text-white/80 text-lg font-light leading-relaxed">
                            The emergence of COHI was as a result of the large communication gap that existed within the higher institution circle and their inability to exist as a single functional unit. COHI thus emerged to represent the united voice of Muslim students in our institutions, championing their rights and earning them a consideration with policy making bodies of the schools.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision / Mission Cards */}
            <section className="w-full bg-[#050624] py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-10 md:p-16 rounded-3xl">
                        <h3 className="text-[#070831] text-4xl font-bold mb-6">Our Vision</h3>
                        <p className="text-[#070831] text-lg font-medium leading-relaxed">
                            To inspire students to build impactful, innovative, and globally relevant careers beyond the traditional expectations of academic success.
                        </p>
                    </div>
                    <div className="bg-[#F26B2E] p-10 md:p-16 rounded-3xl">
                        <h3 className="text-white text-4xl font-bold mb-6">Our Mission</h3>
                        <ul className="text-white text-base font-medium space-y-3 list-disc pl-5">
                            <li>Unify all Muslim students across Lagos State campuses</li>
                            <li>Champion students&apos; rights and welfare</li>
                            <li>Promote academic excellence and moral rectitude</li>
                            <li>Provide platforms for spiritual and professional growth</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Executive Cabinet */}
            <section className="w-full bg-[#0B0A1F] py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4 text-center">Leadership</p>
                    <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-4">COHI Executive Cabinet</h2>
                    <p className="text-white/50 text-center mb-16 font-light">The Inclusiveness and Dynamism Team</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {executives.map((exec, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#F26B2E]/30 hover:bg-white/8 transition-all">
                                <div className="w-16 h-16 rounded-full bg-[#F26B2E]/10 border border-[#F26B2E]/20 flex items-center justify-center">
                                    <Image src={Images.person} alt={exec.name || exec.role} width={64} height={64} className="rounded-full object-cover object-top" />
                                </div>
                                <div>
                                    <p className="text-[#F26B2E] text-xs font-bold uppercase tracking-wide">{exec.role}</p>
                                    {exec.name && <h4 className="text-white font-semibold mt-1">{exec.name}</h4>}
                                    <p className="text-white/50 text-sm mt-1">{exec.school}</p>
                                    <p className="text-white/40 text-xs mt-0.5">{exec.dept}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
