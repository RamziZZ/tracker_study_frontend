"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registrasi elemen yang dibutuhkan oleh Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProgressKuisionerChart({ value }) {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ["yellow", "#f1f5f9"], // slate-900 (isi) dan slate-100 (background)
        borderWidth: 0,
        borderRadius: 10,
        cutout: "85%", // Menentukan ketebalan ring
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="relative flex h-full w-auto items-center justify-center">
      <Doughnut data={data} options={options} />
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-bold text-gray-900">{value}%</span>
        <span className="text-[10px] font-semibold text-yellow-500 uppercase tracking-widest">
          Lengkap
        </span>
      </div>
    </div>
  );
}
