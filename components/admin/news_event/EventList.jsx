import { useState } from "react";
import EventCardAdmin from "./eventCardAdmin";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function EventList({ events, onDelete }) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({ id: null, label: "" });

  if (!events || events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 bg-white rounded-[32px] border-2 border-dashed border-gray-100">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
          <span className="text-3xl">📅</span>
        </div>
        <p className="text-gray-400 font-medium">
          Belum ada data event tersedia.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Grid List Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {events.map((event) => (
          <EventCardAdmin
            key={event.id}
            id={event.id}
            slug={event.slug}
            label={event.title}
            comp_image={
              event.thumbnail
                ? `${process.env.NEXT_PUBLIC_API_URL?.replace("/api", "")}${event.thumbnail}`
                : "/avatar_default.png"
            }
            type={event.category}
            calender={event.created_at}
            onDeleteClick={(id, label) => {
              setSelectedEvent({ id, label });
              setIsDeleteDialogOpen(true);
            }}
          />
        ))}
      </div>

      {/* Centralized AlertDialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="rounded-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold">
              Apakah anda yakin?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. Ini akan menghapus data
              event{" "}
              <span className="font-semibold text-gray-900">
                {/* "{selectedEvent.label}" */}
                {"\""}{selectedEvent.label}{"\""}
              </span>{" "}
              secara permanen dari server.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel className="rounded-full px-6 transition cursor-pointer">
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                onDelete(selectedEvent.id);
                setIsDeleteDialogOpen(false);
              }}
              className="rounded-full px-6 bg-red-600 hover:bg-red-700 transition cursor-pointer"
            >
              Hapus Sekarang
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}