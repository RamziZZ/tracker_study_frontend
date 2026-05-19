"use client";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Registrasi komponen dasar Chart.js dan plugin datalabels
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function AlumniDonutChart() {
  // Plugin Custom untuk menampilkan angka di tengah lubang Donut
  const centerTextPlugin = {
    id: "centerText",
    afterDraw: (chart) => {
      const { ctx } = chart;
      // Mengambil koordinat pusat dari elemen pertama dataset
      const meta = chart.getDatasetMeta(0);
      if (meta.data.length > 0) {
        const x = meta.data[0].x;
        const y = meta.data[0].y;

        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "bold 32px sans-serif";
        ctx.fillStyle = "#1e3a8a"; // Navy color
        ctx.fillText("100", x, y);
        ctx.restore();
      }
    },
  };

  const data = {
    labels: ["Lokal", "Nasional", "Internasional"],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ["#475569", "#1e3a8a", "#93c5fd"], // Slate, Navy, Light Blue
        hoverOffset: 4,
        borderWidth: 0,
        cutout: "70%", // Mengatur besarnya lubang donat
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      // Memberikan ruang di luar chart agar label tidak terpotong
      padding: 40,
    },
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
      tooltip: {
        enabled: true,
      },
      // Konfigurasi Label di luar chart
      datalabels: {
        color: "#475569", // Slate color
        anchor: "end", // Titik jangkar di ujung segmen
        align: "end", // Posisi label di luar ujung jangkar
        offset: 0, // Jarak teks dari chart
        font: {
          size: 12,
          weight: "medium",
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}\n${value}`;
        },
        textAlign: "center",
      },
    },
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Doughnut 
        data={data} 
        options={options} 
        plugins={[centerTextPlugin]} 
      />
    </div>
  );
}
