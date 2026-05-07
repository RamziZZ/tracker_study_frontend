import HeroHome from "@/components/landing/home/heroHome";
import Collaboration from "@/components/landing/home/Collaboration";
import JobList from "@/components/landing/home/JobList";
import EventList from "@/components/landing/home/eventList";

import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <div className="bg-blue-50 w-full">
        <HeroHome />
        <Collaboration />
        <JobList />
        <EventList />
        <Footer />
      </div>
    </>
  );
}