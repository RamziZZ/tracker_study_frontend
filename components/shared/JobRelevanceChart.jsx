"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Registrasi komponen Chart.js dan plugin datalabels
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function JobRelevanceChart() {
  const data = {
    labels: ["Sesuai", "Tidak Sesuai"],
    datasets: [
      {
        data: [77, 23],
        backgroundColor: ["#1d3d6b", "#6b7280"],
        hoverBackgroundColor: ["#1b3f75", "#6e7481"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
      // Konfigurasi khusus untuk menampilkan label di dalam Pie
      datalabels: {
        color: "#ffffff",
        anchor: "center",
        align: "center",
        textAlign: "center",
        font: {
          size: 14,
          weight: "medium",
          family: "sans-serif",
        },
        formatter: (value, context) => {
          // Menggabungkan Label + Baris Baru + Nilai
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}\n${value}`;
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 10,
        cornerRadius: 4,
        displayColors: false,
      },
    },
    // Animasi agar terlihat halus saat pertama kali dimuat
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center p-2">
      <Pie data={data} options={options} />
    </div>
  );
}
