"use client";
import { useState, useEffect } from "react";
import EventHeader from "@/components/admin/news_event/EventHeader";
import EventFilter from "@/components/admin/news_event/EventFilter";
import EventList from "@/components/admin/news_event/EventList";
import { newsService } from "@/services/news_service";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AlertCircleFreeIcons,
  CheckmarkCircle03FreeIcons,
} from "@hugeicons/core-free-icons";

export default function EventPage() {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Efek alert (Sama seperti di Login/Create)
  useEffect(() => {
    if (status) {
      setIsVisible(true);
      const hideTimer = setTimeout(() => setIsVisible(false), 3000);
      const removeTimer = setTimeout(() => setStatus(null), 3500);
      return () => {
        clearTimeout(hideTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [status]);

  const fetchEvents = async () => {
    try {
      const result = await newsService.getAllNews();
      if (result.success) {
        const filteredEvents = result
        .data.filter(
          (item) => item.category === "event",
        );
        setEventData(filteredEvents);
      }
    } catch (error) {
      console.error("Gagal mengambil data event:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDeleteEvent = async (id) => {
    try {
      await newsService.deleteNews(id);
      setStatus({
        type: "success",
        message: "Event berhasil dihapus dari sistem.",
      });
      fetchEvents(); // Refresh data
    } catch (error) {
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Gagal menghapus event.",
      });
    }
  };

  return (
    <div className="px-6 py-4 bg-slate-50 min-h-screen">
      {/* Alert Notification */}
      {status && (
        <div
          className={`fixed top-10 left-1/2 -translate-x-1/2 z-[100] px-5 w-full max-w-md duration-500 ease-out
          ${isVisible ? "animate-in fade-in slide-in-from-top-2" : "animate-out fade-out slide-out-to-top-2"}`}
        >
          <Alert
            variant={status.type === "error" ? "destructive" : "default"}
            className={
              status.type === "error"
                ? "border-red-300 bg-red-50 shadow-xl text-red-700"
                : "border-green-300 bg-green-50 shadow-xl text-green-700"
            }
          >
            <HugeiconsIcon
              icon={
                status.type === "error"
                  ? AlertCircleFreeIcons
                  : CheckmarkCircle03FreeIcons
              }
            />
            <AlertTitle className="font-bold">
              {status.type === "error" ? "Gagal" : "Berhasil"}
            </AlertTitle>
            <AlertDescription>{status.message}</AlertDescription>
          </Alert>
        </div>
      )}

      <EventHeader />
      <EventFilter />
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
        </div>
      ) : (
        <EventList events={eventData} onDelete={handleDeleteEvent} />
      )}
    </div>
  );
}
