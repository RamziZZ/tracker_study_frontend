"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // Required for fill: true
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function GraduateStatusChart() {
  // Helper function to create a gradient background
  const createGradient = (context, color) => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;

    if (!chartArea) {
      // This case happens on initial render or when chartArea is not yet defined
      return null;
    }

    const gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top,
    );
    gradient.addColorStop(0, `${color}00`); // Transparent at the bottom
    gradient.addColorStop(1, `${color}80`); // Semi-opaque at the top (80 is ~50% opacity)

    return gradient;
  };

  const data = {
    labels: ["2021", "2022", "2023", "2024"],
    // labels: ["Wirausaha", "Studi Lanjut", "Nganggur"],
    datasets: [
      {
        label: "Wirausaha",
        data: [20, 18, 95, 92],
        borderColor: "#1E3A8A", // Dark gray
        backgroundColor: (context) => createGradient(context, "#1E3A8A"),
        fill: true,
        borderWidth: 1.5, // Atur ketebalan garis di sini (dalam pixel)
        tension: 0.4, // Smooth curves
        pointRadius: 4,
        pointBackgroundColor: "white",
        pointBorderColor: "#1E3A8A",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "#1E3A8A",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
      },
      {
        label: "Studi Lanjut",
        data: [70, 25, 45, 100],
        borderColor: "#3B82F6", // Dark blue
        backgroundColor: (context) => createGradient(context, "#3B82F6"),
        fill: true,
        borderWidth: 1.5, // Atur ketebalan garis di sini
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "white",
        pointBorderColor: "#3B82F6",
        pointBorderWidth: 2,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#3B82F6",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
      },
      {
        label: "Bekerja",
        data: [80, 26, 70, 95],
        borderColor: "#93C5FD", // Light blue
        backgroundColor: (context) => createGradient(context, "#93C5FD"),
        fill: true,
        borderWidth: 1.5, // Atur ketebalan garis di sini
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "white",
        pointBorderColor: "#93C5FD",
        pointBorderWidth: 2,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#93C5FD",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
      },
      {
        label: "Belum Bekerja",
        data: [40, 20, 79, 55],
        borderColor: "#6B7280", // Light blue
        backgroundColor: (context) => createGradient(context, "#6B7280"),
        fill: true,
        borderWidth: 1.5, // Atur ketebalan garis di sini
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "white",
        pointBorderColor: "#6B7280",
        pointBorderWidth: 2,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#6B7280",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      // Mematikan datalabels agar tidak muncul angka di atas point
      datalabels: {
        display: false,
      },
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          usePointStyle: true, // Use point style for legend items
          pointStyle: "circle", // Make legend markers circular
          boxWidth: 12, // Diperkecil untuk membuat lingkaran legend lebih proporsional
          padding: 20, // Padding between legend items
          font: {
            size: 12, // Ubah ini untuk mengatur ukuran teks label (misal: "Tahun 2021")
            weight: "semibold",
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size:12,
          weight: "bold",
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        cornerRadius: 5,
      },
      title: {
        display: false, // No title for the chart itself, as per request
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          borderDash: [5, 5], // Dashed grid lines
          drawBorder: false, // Do not draw the axis line itself
          color: "rgba(0, 0, 0, 0.1)", // Light gray grid lines
        },
        ticks: {
          stepSize: 20,
          color: "#6b7280", // Gray-500 for tick labels
          font: {
            size: 12,
          },
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false, // No vertical grid lines
        },
        ticks: {
          color: "#6b7280", // Gray-500 for tick labels
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="relative h-full w-full">
      {" "}
      {/* Adjust height as needed */}
      <Line data={data} options={options} />
    </div>
  );
}
