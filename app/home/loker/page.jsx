import SearchSection from "@/components/landing/SearchSection";
import ResultSection from "@/components/landing/ResultSection";
import Footer from "@/components/landing/Footer";

export default function LokerPage() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <SearchSection />
      <ResultSection />
      <Footer />
    </div>
  );
}