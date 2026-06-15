"use client";

import { useState } from "react";
import Footer from "@/components/landing/Footer";
import HeroEvent from "@/components/landing/event/heroEvent.jsx";
import EventList from '@/components/landing/event/eventList.jsx'

export default function EventPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between gap-0">
        <HeroEvent activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <EventList activeCategory={activeCategory} />
        <Footer />
      </div>
    </>
  );
}