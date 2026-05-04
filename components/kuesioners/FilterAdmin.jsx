"use client";

import { Search, ChevronDown } from "lucide-react";

export default function FilterAdmin({ search, setSearch, sortBy, setSortBy, filterData, setFilterData }) {
  const inputStyle = {
    backgroundColor: "transparent",
    border: "1.5px solid #334155",
    borderRadius: "999px",
    color: "#000000",
    padding: "10px 16px",
    fontSize: "0.875rem",
    outline: "none",
    width: "100%",
  };

  const selectStyle = {
    backgroundColor: "transparent",
    border: "1.5px solid #334155",
    borderRadius: "999px",
    color: "#94a3b8",
    padding: "10px 40px 10px 16px",
    fontSize: "0.875rem",
    outline: "none",
    width: "100%",
    appearance: "none",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "12px",
        marginBottom: "24px",
      }}
    >
      {/* Search Input */}
      <div style={{ position: "relative" }}>
        <Search
          size={16}
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#64748b",
          }}
        />
        <input
          type="text"
          placeholder="masukkan nama loker disini..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ ...inputStyle, paddingLeft: "44px" }}
        />
      </div>

      {/* Sort Dropdown */}
      <div style={{ position: "relative" }}>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={selectStyle}
        >
          <option value="terbaru" style={{ backgroundColor: "#0f172a" }}>Terbaru</option>
          <option value="terlama" style={{ backgroundColor: "#0f172a" }}>Terlama</option>
          <option value="nama" style={{ backgroundColor: "#0f172a" }}>Nama A-Z</option>
        </select>
        <ChevronDown
          size={16}
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#64748b",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Filter Dropdown */}
      <div style={{ position: "relative" }}>
        <select
          value={filterData}
          onChange={(e) => setFilterData(e.target.value)}
          style={selectStyle}
        >
          <option value="" style={{ backgroundColor: "#0f172a" }}>Filter Data</option>
          <option value="sudah" style={{ backgroundColor: "#0f172a" }}>Sudah Isi</option>
          <option value="belum" style={{ backgroundColor: "#0f172a" }}>Belum Isi</option>
        </select>
        <ChevronDown
          size={16}
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#64748b",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}