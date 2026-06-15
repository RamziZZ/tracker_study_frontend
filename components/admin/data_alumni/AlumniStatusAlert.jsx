"use client";

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
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AlertCircleFreeIcons,
  CheckmarkCircle03FreeIcons,
} from "@hugeicons/core-free-icons";

export default function AlumniStatusAlert({ status, onClose }) {
  if (!status) return null;

  return (
    <AlertDialog open={!!status} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent
        className={`w-full p-6 border shadow-lg z-100 flex flex-col items-center text-center gap-4 animate-in zoom-in-95 duration-300 ${
          status.type === "success"
            ? "border-green-300 bg-green-50 text-green-700 shadow-green-500/25"
            : "border-red-300 bg-red-50 text-red-700 shadow-red-500/25"
        }`}
      >
        <AlertDialogHeader className="flex flex-col items-center gap-2">
          <HugeiconsIcon
            size={48}
            icon={
              status.type === "success"
                ? CheckmarkCircle03FreeIcons
                : AlertCircleFreeIcons
            }
          />
          <AlertDialogTitle className="text-lg font-semibold">
            {status.type === "success" ? "Berhasil" : "Perhatian"}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-muted-foreground opacity-90">
            {status.message}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex flex-row justify-center gap-3 mt-4 w-full">
          {status.type === "confirm" ? (
            <>
              <AlertDialogCancel className="px-4 py-2 rounded-full font-medium bg-gray-100 text-gray-900 hover:bg-gray-200 border-none transition-all cursor-pointer m-0">
                Batal
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={status.onConfirm}
                className="px-4 py-2 rounded-full font-medium bg-red-600 text-white hover:bg-red-700 shadow-sm border-none transition-all cursor-pointer m-0"
              >
                Ya, Hapus
              </AlertDialogAction>
            </>
          ) : (
            <AlertDialogAction
              onClick={onClose}
              className={`px-6 py-2 rounded-full font-medium text-white border-none transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-sm ${
                status.type === "success"
                  ? "bg-green-600 hover:bg-green-700 shadow-green-500/25"
                  : "bg-red-600 hover:bg-red-700 shadow-red-500/25"
              }`}
            >
              Selesai
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
