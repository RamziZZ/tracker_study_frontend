import Hero from "@/components/landing/home/Hero_Home";
import Collaboration from "@/components/landing/home/Collaboration";
import JobList from "@/components/landing/home/JobList";
import Footer from "@/components/landing/Footer";

// import Navbar from "@/components/shared/navbar";

export default function HomePage() {
  return (
    <>
      <div className="bg-blue-50 w-full">
        <Hero />
        <Collaboration />
        <JobList />
        <Footer />
      </div>
    </>
  );
}