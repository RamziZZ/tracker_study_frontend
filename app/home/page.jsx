import Hero from "@/components/landing/Hero_Home";
import Collaboration from "@/components/landing/Collaboration";
import JobList from "@/components/landing/JobList";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collaboration />
      <JobList />
      <Footer />
    </>
  );
}