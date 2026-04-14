"use client";

import { useState } from "react";

export default function HeroTracking({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <section className="px-10 py-16 bg-gray-100 flex flex-col md:flex-row items-center justify-between">
      
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-6">
          Temukan Talenta di <br />
          Prodi Teknik Informatika kami
        </h1>

        <p className="text-gray-600 mb-6">
          Masukkan nama dari alumni yang akan kamu cari
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="masukkan nama disini..."
            className="px-4 py-3 rounded-full border border-gray-300 outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-700 text-white py-3 rounded-full hover:bg-blue-800"
          >
            Cari Alumni
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src="/images/hero-tracking.png"
          alt="hero"
          className="w-[400px]"
        />
      </div>
    </section>
  );
}