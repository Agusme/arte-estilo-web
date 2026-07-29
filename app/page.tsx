import Benefits from "@/components/Benefits";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Workshops from "@/components/workshops/Workshops";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff7f3] text-[#5b4636]">
      <Header />
      <main id="inicio">
        <Hero />
        <Benefits />
        <Workshops />
      </main>
    </div>
  );
}
