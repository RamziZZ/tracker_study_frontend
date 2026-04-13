import HeroTentang from "@/components/landing/Hero_Tentang";
import AboutCampus from "@/components/landing/AboutCampus";
import GraduateProfile from "@/components/landing/GraduateProfile";
import ProgramStudy from "@/components/landing/ProgramStudy";
import Accreditation from "@/components/landing/Accreditation";
import Footer from "@/components/landing/Footer";

export default function TentangPage() {
  return (
    <>
      <HeroTentang />
      <AboutCampus />

      {/* WRAPPER GRID */}
      <section className="bg-gray-100 py-16 px-6">
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