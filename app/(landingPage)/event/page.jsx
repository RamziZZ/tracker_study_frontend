import Footer from "@/components/landing/Footer";
import HeroEvent from "@/components/landing/event/heroEvent.jsx";
import EventList from '@/components/landing/event/eventList.jsx'

export default function EventPage() {
  return (
    <>
      <div className="flex flex-col gap-0">
        <HeroEvent/>
        <EventList/>
        <Footer />
      </div>
    </>
  );
}