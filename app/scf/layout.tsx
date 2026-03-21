import { SCFNavbar } from "@/components/SCFNavbar";
import { Footer } from "@/components/Footer";

export default function SCFLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SCFNavbar />
            <main className="min-h-screen pt-20">
                {children}
            </main>
            <Footer />
        </>
    );
}
