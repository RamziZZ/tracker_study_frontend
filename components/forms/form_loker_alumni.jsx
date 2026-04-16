"use client";

import { useState } from "react";

// Icons
const SearchIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ExternalIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M19 8L8 19M19 8V15M19 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Dummy data for job postings
const jobPostings = [
  {
    id: 1,
    title: "Front End Developer",
    company: "X Platform",
    logo: "X",
    period: "7 Maret - 7 Mei 2026",
    type1: "Onsite",
    type2: "Full Time",
    bgColor: "bg-black",
    showTypeIcons: true,
  },
  {
    id: 2,
    title: "Front End Developer",
    company: "Figma",
    logo: "🎨",
    period: "7 Maret - 7 Mei 2026",
    type1: "Onsite",
    type2: "Part Time",
    bgColor: "bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400",
    showTypeIcons: true,
  },
  {
    id: 3,
    title: "Front End Developer",
    company: "Adobe",
    logo: "A",
    period: "7 Maret - 7 Mei 2026",
    type1: "Onsite",
    type2: "Full Time",
    bgColor: "bg-red-600",
    showTypeIcons: true,
  },
  {
    id: 4,
    title: "Front End Developer",
    company: "Canva",
    logo: "C",
    period: "7 Maret - 7 Mei 2026",
    type1: "Remote",
    type2: "Full Time",
    bgColor: "bg-cyan-400",
    showTypeIcons: false,
  },
  {
    id: 5,
    title: "Front End Developer",
    company: "Ferrari",
    logo: "🐎",
    period: "7 Maret - 7 Mei 2026",
    type1: "Onsite",
    type2: "Full Time",
    bgColor: "bg-gradient-to-br from-yellow-300 via-amber-400 to-red-500",
    showTypeIcons: false,
  },
  {
    id: 6,
    title: "Front End Developer",
    company: "Nike",
    logo: "N",
    period: "7 Maret - 7 Mei 2026",
    type1: "Remote",
    type2: "Full Time",
    bgColor: "bg-black",
    showTypeIcons: false,
  },
  {
    id: 7,
    title: "Front End Developer",
    company: "Airbnb",
    logo: "🏠",
    period: "7 Maret - 7 Mei 2026",
    type1: "Onsite",
    type2: "Full Time",
    bgColor: "bg-gradient-to-br from-red-400 via-pink-300 to-orange-200",
    showTypeIcons: false,
  },
  {
    id: 8,
    title: "Front End Developer",
    company: "Spotify",
    logo: "🎵",
    period: "7 Maret - 7 Mei 2026",
    type1: "Remote",
    type2: "Full Time",
    bgColor: "bg-green-500",
    showTypeIcons: false,
  },
];

function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Logo Area */}
      <div className={`${job.bgColor} h-16 flex items-center justify-center text-white text-2xl font-bold`}>
        {job.logo}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-slate-900">{job.title}</h3>
        <p className="text-sm text-slate-600 mt-1">{job.company}</p>
        <p className="text-xs text-slate-500 mt-2">{job.period}</p>

        {/* Type Buttons */}
        <div className="flex gap-2 mt-4 mb-4">
          <button className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs rounded-md hover:bg-slate-200 transition flex items-center gap-1">
            {job.showTypeIcons && <ExternalIcon className="w-3 h-3" />}
            {job.type1}
          </button>
          <button className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs rounded-md hover:bg-slate-200 transition flex items-center gap-1">
            {job.showTypeIcons && <ExternalIcon className="w-3 h-3" />}
            {job.type2}
          </button>
        </div>

        {/* Detail Button */}
        <button className="w-full bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold py-2.5 rounded-lg transition">
          Selengkapnya
        </button>
      </div>
    </div>
  );
}

export function LokerAlumniCard() {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Informasi Loker Terbaru</h2>
        </div>
        <button className="px-4 py-2 border border-slate-300 rounded-full text-slate-700 text-sm font-medium hover:bg-slate-50 transition">
          Lihat Loker Lainnya
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari loker..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
        </div>
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobPostings.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
