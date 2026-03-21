import Image from "next/image";
import Link from "next/link";
import { Images } from "@/public/index";

const galleryImages = [
    Images.image1, Images.image2, Images.image3,
    Images.image4, Images.image5, Images.image6,
    Images.image7, Images.image8, Images.image9,
];

export default function GalleryPage() {
    return (
        <div className="relative min-h-screen w-full flex flex-col bg-[#0B0A1F]">

            {/* Hero */}
            <section className="relative w-full bg-[#050624] py-32 px-6 md:px-20 overflow-hidden flex flex-col items-center">
                <div className="absolute inset-x-0 top-0 z-0 pointer-events-none flex items-center justify-center h-full">
                    <Image src={Images.glowRing} alt="" className="absolute object-cover w-[170%] h-[160%] mix-blend-screen translate-y-40" />
                </div>
                <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center">
                    <p className="text-[#F26B2E] font-semibold text-sm uppercase tracking-widest mb-4">Memories</p>
                    <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">Gallery</h1>
                    <p className="text-white/60 text-xl font-light max-w-2xl">
                        Moments from COHI events, programmes, and the Student Career Fair across the years.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="w-full bg-[#0B0A1F] py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

                        {/* Row 1 */}
                        <div className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded-2xl md:row-span-2">
                            <Image src={galleryImages[0]} alt="Gallery 1" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="md:col-span-4 grid grid-rows-2 gap-4 md:gap-6">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                <Image src={galleryImages[1]} alt="Gallery 2" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                <Image src={galleryImages[2]} alt="Gallery 3" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                        <div className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded-2xl md:row-span-2">
                            <Image src={galleryImages[3]} alt="Gallery 4" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>

                        {/* Wide */}
                        <div className="md:col-span-12 relative aspect-video md:aspect-[3/1] overflow-hidden rounded-2xl mt-4">
                            <Image src={galleryImages[4]} alt="Gallery 5" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>

                        {/* Row 2 */}
                        <div className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded-2xl">
                            <Image src={galleryImages[5]} alt="Gallery 6" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="md:col-span-4 grid grid-rows-2 gap-4 md:gap-6">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                <Image src={galleryImages[6]} alt="Gallery 7" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                <Image src={galleryImages[7]} alt="Gallery 8" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                        <div className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded-2xl">
                            <Image src={galleryImages[8]} alt="Gallery 9" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>

                    </div>

                    {/* SCF Gallery CTA */}
                    <div className="mt-16 flex flex-col items-center gap-4 text-center">
                        <p className="text-white/50 font-light">Looking for SCF event photos?</p>
                        <Link href="/scf/gallery" className="brown-gradient text-white px-8 py-4 rounded-xl text-sm font-bold hover:shadow-[0_0_20px_rgba(242,107,46,0.4)] transition-all hover:scale-105">
                            View SCF Gallery →
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
