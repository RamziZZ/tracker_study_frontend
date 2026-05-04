"use client";

import { Bell, ClipboardEdit } from "lucide-react";

export default function HeaderAdmin() {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1
        style={{
          fontFamily: "'DM Sans', arial",
          fontSize: "2rem",
          fontWeight: "700",
          color: "#000000",
          letterSpacing: "-0.5px",
        }}
      >
        Manajemen Kuisioner
      </h1>

      <div className="flex gap-3">
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#1e3a5f",
            color: "#ffffff",
            border: "none",
            borderRadius: "999px",
            padding: "10px 20px",
            fontSize: "0.875rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#254e80")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e3a5f")}
        >
          <Bell size={16} />
          Kirim Pengingat
        </button>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#1e3a5f",
            color: "#ffffff",
            border: "none",
            borderRadius: "999px",
            padding: "10px 20px",
            fontSize: "0.875rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#254e80")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e3a5f")}
        >
          <ClipboardEdit size={16} />
          Edit Pertanyaan Kuisioner
        </button>
      </div>
    </div>
  );
}