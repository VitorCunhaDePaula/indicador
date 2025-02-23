import FearGreedIndex from "@/components/Fear/Hero";
import Footer from "@/components/Footer/Hero";
import AltseasonIndex from "@/components/Hero/Hero";
import Hero from "@/components/Inicio/Hero";

export default function Home() {
  return (
    <div className=" pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
      <Hero />
      <AltseasonIndex />
      <FearGreedIndex />
      <Footer />
    </div>
  );
}
