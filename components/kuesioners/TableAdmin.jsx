"use client";

import { useState } from "react";

export const DUMMY_DATA = [
  { id: 1, nim: "E41232454", nama: "Praditya Ivan",      tanggal: "10-Mar-26" },
  { id: 2, nim: "E41232454", nama: "Aditya Pradana",       tanggal: "08-Mar-26" },
  { id: 3, nim: "E41232454", nama: "Dimas Saputra",   tanggal: "25-Feb-26" },
  { id: 4, nim: "E41232454", nama: "Hesti Nurhayati",        tanggal: "28-Feb-26" },
  { id: 5, nim: "E41232454", nama: "Shinta Maria",     tanggal: "05-Mar-26" },
  { id: 6, nim: "E41232454", nama: "Rana Bagaskara",         tanggal: "04-Mar-26" },
  { id: 7, nim: "E41232454", nama: "Ramzi Farhan",           tanggal: "03-Mar-26" },
  { id: 8, nim: "E41232454", nama: "Dwi Cahyo",      tanggal: "02-Mar-26" },
  { id: 9, nim: "E41232454", nama: "Gilang Setiawan",         tanggal: "01-Mar-26" },
  { id: 10, nim: "E41232454", nama: "Fajar Ramadhani",       tanggal: "28-Feb-26" },
];

export default function TableAdmin({ search = "", sortBy = "terbaru", onView }) {
  const [selected, setSelected] = useState([]);

  const filtered = DUMMY_DATA.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase()) ||
    item.nim.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "nama")    return a.nama.localeCompare(b.nama);
    if (sortBy === "terlama") return a.id - b.id;
    return b.id - a.id;
  });

  const allSelected = sorted.length > 0 && sorted.every((item) => selected.includes(item.id));

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelected((prev) => prev.filter((id) => !sorted.map((s) => s.id).includes(id)));
    } else {
      setSelected((prev) => [...new Set([...prev, ...sorted.map((s) => s.id)])]);
    }
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const thClass = "px-4 py-3 text-sm font-semibold text-[#1e3a5f] text-center";
  const tdClass = "px-4 py-3 text-sm text-center text-slate-800 border-b border-slate-200";

  return (
    <div className="rounded-xl overflow-hidden border border-slate-800">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className={`${thClass} w-12`}>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleSelectAll}
                className="w-4 h-4 cursor-pointer accent-[#1e3a5f]"
              />
            </th>
            <th className={thClass}>NIM</th>
            <th className={thClass}>Nama Alumni</th>
            <th className={thClass}>Tanggal Isi</th>
            <th className={`${thClass} text-black`}>Action</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((item, index) => (
            <tr
              key={item.id}
              className={`transition-colors duration-150 hover:bg-blue-200 ${
                index % 2 === 0 ? "bg-[#fafafa]" : "bg-white"
              }`}
            >
              <td className={tdClass}>
                <input
                  type="checkbox"
                  checked={selected.includes(item.id)}
                  onChange={() => toggleSelect(item.id)}
                  className="w-4 h-4 cursor-pointer accent-[#1e3a5f]"
                />
              </td>
              <td className={tdClass}>{item.nim}</td>
              <td className={tdClass}>{item.nama}</td>
              <td className={tdClass}>{item.tanggal}</td>
              <td className={tdClass}>
                <button
                  onClick={() => onView?.(item)}
                  className="border border-slate-400 rounded-full text-black text-xs px-5 py-1.5 transition-colors hover:border-blue-500 hover:text-blue-500 bg-transparent cursor-pointer"
                >
                  Lihat
                </button>
              </td>
            </tr>
          ))}

          {sorted.length === 0 && (
            <tr>
              <td colSpan={5} className="py-10 text-center text-sm text-slate-500">
                Tidak ada data ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}