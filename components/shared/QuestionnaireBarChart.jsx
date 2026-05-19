"use client";

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Registrasi modul Chart.js yang diperlukan
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export default function QuestionnaireBarChart() {
  const data = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Total Kuisioner",
        data: [60, 120, 180],
        backgroundColor: "#93c5fd", // Biru Muda
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0,
        },
        barPercentage: 1,
        categoryPercentage: 0.6, // Tetap 0.6 untuk jarak antar grup tahun
      },
      {
        label: "Total Diisi",
        data: [55, 120, 150],
        backgroundColor: "#475569", // Biru Navy/Abu gelap
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0,
        },
        barPercentage: 1, // Diubah menjadi 0.4 untuk memperlebar jarak antar bar dalam satu tahun
        categoryPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false, // Judul akan dihandle di luar komponen
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        display: true,
        position: "bottom", // Legenda di bawah
        align: "center", // Tengah
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            size: 12,
            weight: "medium",
          },
        },
      },
      datalabels: {
        display: false, // Pastikan datalabels tidak aktif secara default di sini
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 200,
        ticks: {
          stepSize: 40,
        },
        grid: {
          borderDash: [5, 5], // Garis grid horizontal putus-putus
          drawBorder: false, // Hilangkan garis vertikal sumbu Y
        },
      },
      x: {
        grid: {
          display: false, // Hilangkan garis grid vertikal
          drawBorder: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
