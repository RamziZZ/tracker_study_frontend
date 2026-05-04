"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function AdminPage() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  return (
    <div className="px-1 py-1">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Dashboard
      </h1>

      {/* ===== TOP CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-gray-900 font-medium">Total Alumni</h2>
                <Image
                  src="/icons/Total-alumni.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
          </div>
          <p className="text-3xl font-bold text-blue-900">145</p>
          <p className="text-sm text-gray-500 mt-5">
            Jumlah seluruh alumni yang telah terdaftar
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-gray-900 font-medium">Total Alumni Bekerja</h2>
                <Image
                  src="/icons/Alumni-bekerja.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
          </div>
          <p className="text-3xl font-bold text-blue-900">145</p>
          <p className="text-sm text-gray-500 mt-1">
            Jumlah alumni yang telah bekerja berdasarkan hasil pengisian kuesioner
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-gray-900 font-medium">Total Alumni Studi Lanjut</h2>
                <Image
                  src="/icons/Alumni-Studi-Lanjut.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
          </div>
          <p className="text-3xl font-bold text-blue-900">145</p>
          <p className="text-sm text-gray-500 mt-1">
            Jumlah alumni yang telah studi lanjut berdasarkan hasil pengisian kuesioner
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-gray-900 font-medium">Total Kuesioner</h2>
                <Image
                  src="/icons/Total-Kuesioner.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
          </div>
          <p className="text-3xl font-bold text-blue-900">145</p>
          <p className="text-sm text-gray-500 mt-5">
            Jumlah alumni yang telah mengisi kuesioner tracer study
          </p>
        </div>
      </div>

      {/* ===== MIDDLE ===== */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-900 font-medium">Sebaran Alumni</h2>

            {/* DROPDOWN */}
            <div className="relative">
              <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="bg-blue-900 text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-2 cursor-pointer"
              >
              Isi Kuisioner

                <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                openDropdown ? "rotate-180" : ""
                }`}
              />
              </button>

              {/* DROPDOWN CONTENT */}
              {openDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-10">
              {/* Nanti isi dropdown di sini */}
            </div>
          )}
        </div>
      </div>

      <div className="h-56 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
      Chart Area {/* aku ga iso gae diagram */}
      </div>
    </div>

    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <h2 className="text-gray-900 font-medium">Kesesuaian Kerja Alumni</h2>
        <div className="h-56 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
        Pie Chart
        </div>
    </div>
  </div>

{/* ===== LOWER ===== */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-10">

  {/* CARD 1 */}
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-gray-900 font-medium">Lokasi Kerja Alumni</h2>

      <div className="relative">
        <button
          onClick={() => setOpenDropdown1(!openDropdown1)}
          className="bg-blue-900 text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-2 cursor-pointer"
        >
          Cakupan Wilayah
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              openDropdown1 ? "rotate-180" : ""
            }`}
          />
        </button>

        {openDropdown1 && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-10">
            {/* Nanti isi dropdown di sini */}
          </div>
        )}
      </div>
    </div>

    <div className="h-56 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
      Donut Chart {/* aku ga iso gae diagram */}
    </div>
  </div>

  {/* CARD 2 */}
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-gray-900 font-medium">Total Kuisioner</h2>

      <div className="relative">
        <button
          onClick={() => setOpenDropdown2(!openDropdown2)}
          className="bg-blue-900 text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-2 cursor-pointer"
        >
          Lokasi Kerja Alumni
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              openDropdown2 ? "rotate-180" : ""
            }`}
          />
        </button>

        {openDropdown2 && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-10">
            {/* Nanti isi dropdown di sini */}
          </div>
        )}
      </div>
    </div>

    <div className="h-56 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
      Bar Chart {/* aku ga iso gae diagram */}
    </div>
  </div>
</div>

{/* ===== HEADER ===== */}
<div className="flex justify-between items-center mb-5">
  <h2 className="text-2xl font-semibold text-gray-800">
    Pengisian Kuisioner Terbaru
  </h2>

  <button className="bg-blue-900 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm flex items-center gap-2 cursor-pointer">
    <Image
      src="/icons/lonceng.png"
      alt="Lonceng"
      width={18}
      height={18}
    />
    Kirim Pengingat Pengisian
  </button>
</div>

{/* ===== TABLE ===== */}
<div className="bg-white rounded-xl overflow-hidden">
  <table className="w-full text-sm">

    {/* TABLE HEAD */}
    <thead className="bg-blue-100 text-blue-900">
      <tr>
        <th className="py-4 px-4 w-10">
          <input
            type="checkbox"
            className="w-5 h-5 appearance-none rounded-full border-2 bg-gray-200 border-gray-500 
            checked:bg-blue-900 checked:border-blue-900 
            relative cursor-pointer
            after:content-[''] after:absolute after:w-2 after:h-2 
            after:bg-white after:rounded-full after:top-1 after:left-1 
            after:opacity-0 checked:after:opacity-100"
          />
        </th>

        <th className="text-left py-4">NIM</th>
        <th className="text-left py-4">Nama Alumni</th>
        <th className="text-left py-4">Tanggal Isi</th>
        <th className="text-center py-4">Action</th>
      </tr>
    </thead>

    {/* TABLE BODY */}
    <tbody className="text-gray-700">
     
     
    </tbody>

  </table>
</div>

</div>
  
  );
}