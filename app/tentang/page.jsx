import HeroTentang from "@/components/landing/tentang/Hero_Tentang";
import AboutCampus from "@/components/landing/tentang/AboutCampus";
import GraduateProfile from "@/components/landing/tentang/GraduateProfile";
import ProgramStudy from "@/components/landing/tentang/ProgramStudy";
import Accreditation from "@/components/landing/tentang/Accreditation";
import Footer from "@/components/landing/Footer";

export default function TentangPage() {
  return (
    <>
      <HeroTentang />
      <AboutCampus />

      {/* WRAPPER GRID */}
      <section className="bg-transparent py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          
          {/* KIRI */}
          <div>
            <ProgramStudy />
          </div>

          {/* KANAN */}
          <div>
            <GraduateProfile />
          </div>

        </div>
      </section>

      <Accreditation />
      <Footer />
    </>
  );
}