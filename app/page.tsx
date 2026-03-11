import Image from "next/image";
import { Images } from "@/public/index";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background image/pattern */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none w-[80%] ">
        <Image
          src={Images.glowRing}
          alt="Background Pattern"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Placeholder */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl">
          Welcome to the Students&apos; Career Fair
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl">
          The ultimate platform for students to connect with top employers, sponsors, and opportunities.
        </p>
      </div>
    </div>
  );
}
