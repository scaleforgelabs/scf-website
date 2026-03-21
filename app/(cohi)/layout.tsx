import { COHINavbar } from "@/components/COHINavbar";
import { Footer } from "@/components/Footer";

export default function COHILayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <COHINavbar />
            <main className="min-h-screen pt-20">
                {children}
            </main>
            <Footer />
        </>
    );
}
