import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
  Filler,
} from "chart.js";

import "chartjs-adapter-date-fns";

// ============================================================
// Chart.js Registration
// ============================================================

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
  Filler,
);

// ============================================================
// Constants
// ============================================================

const CACHE_DURATION = 2 * 60 * 1000;

const getCacheKey = (id) => `coin_chart_${id}`;

// ============================================================
// Cache Helpers
// ============================================================

function getCachedChart(id) {
  try {
    const cached = localStorage.getItem(getCacheKey(id));

    if (!cached) {
      return null;
    }

    const parsed = JSON.parse(cached);

    if (Date.now() - parsed.timestamp > CACHE_DURATION) {
      localStorage.removeItem(getCacheKey(id));

      return null;
    }

    return parsed.data;
  } catch (error) {
    console.error("Chart cache read error:", error);

    return null;
  }
}

function saveCachedChart(id, data) {
  try {
    localStorage.setItem(
      getCacheKey(id),
      JSON.stringify({
        data,
        timestamp: Date.now(),
      }),
    );
  } catch (error) {
    console.error("Chart cache save error:", error);
  }
}

// ============================================================
// Loading
// ============================================================

function LoadingComponent() {
  return (
    <div className="mt-10 flex h-[320px] w-full items-center justify-center rounded-2xl border border-white/10 bg-[#0B1120] md:h-[470px]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-9 w-9 animate-spin rounded-xl border-4 border-[#FE4136] border-t-transparent" />

        <p className="text-sm text-gray-400">Loading price chart...</p>
      </div>
    </div>
  );
}

// ============================================================
// Error
// ============================================================

function ErrorComponent({ onRetry }) {
  return (
    <div className="mt-10 flex h-[320px] w-full items-center justify-center rounded-2xl border border-red-500/40 bg-[#0B1120] md:h-[470px]">
      <div className="text-center">
        <h2 className="font-semibold text-red-400">Failed to load chart</h2>

        <p className="mt-2 text-sm text-gray-500">
          Unable to fetch price history.
        </p>

        <button
          onClick={onRetry}
          className="mt-5 rounded-xl bg-[#FE4136] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 active:scale-95"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

// ============================================================
// Chart Component
// ============================================================

function Chart() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================================================
  // Fetch Chart
  // ==========================================================

  const fetchChart = useCallback(
    async (forceRefresh = false) => {
      try {
        setError("");

        // ----------------------------------------------------
        // Cache
        // ----------------------------------------------------

        if (!forceRefresh) {
          const cached = getCachedChart(id);

          if (cached) {
            setData(cached);
            setLoading(false);

            return;
          }
        }

        setLoading(true);

        // ----------------------------------------------------
        // Request
        // ----------------------------------------------------

        const controller = new AbortController();

        const timeout = setTimeout(() => {
          controller.abort();
        }, 10000);

        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=7`,
          {
            signal: controller.signal,
          },
        );

        clearTimeout(timeout);

        if (!response.ok) {
          throw new Error(`Chart request failed: ${response.status}`);
        }

        const result = await response.json();

        if (!result?.prices?.length) {
          throw new Error("No chart data available.");
        }

        // ----------------------------------------------------
        // Format data
        // ----------------------------------------------------

        const formattedData = result.prices.map(([timestamp, price]) => ({
          x: timestamp,
          y: price,
        }));

        setData(formattedData);

        // ----------------------------------------------------
        // Cache
        // ----------------------------------------------------

        saveCachedChart(id, formattedData);
      } catch (error) {
        console.error(error);

        if (error.name === "AbortError") {
          setError("Request timed out.");
        } else {
          setError(error.message || "Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    },
    [id],
  );

  // ==========================================================
  // Effect
  // ==========================================================

  useEffect(() => {
    setData([]);
    fetchChart();
  }, [id, fetchChart]);

  // ==========================================================
  // Loading
  // ==========================================================

  if (loading && data.length === 0) {
    return <LoadingComponent />;
  }

  // ==========================================================
  // Error
  // ==========================================================

  if (error && data.length === 0) {
    return <ErrorComponent onRetry={() => fetchChart(true)} />;
  }

  // ==========================================================
  // Empty State
  // ==========================================================

  if (!data.length) {
    return null;
  }

  // ==========================================================
  // Price Direction
  // ==========================================================

  const firstPrice = data[0].y;
  const lastPrice = data[data.length - 1].y;

  const isPositive = lastPrice >= firstPrice;

  const lineColor = isPositive ? "#22C55E" : "#FE4136";

  // ==========================================================
  // Chart Data
  // ==========================================================

  const chartData = {
    datasets: [
      {
        label: "Price",

        data,

        borderColor: lineColor,

        borderWidth: 2.5,

        tension: 0.35,

        fill: true,

        pointRadius: 0,

        pointHoverRadius: 5,

        pointHoverBorderWidth: 2,

        pointHoverBackgroundColor: "#020617",

        pointHoverBorderColor: lineColor,

        backgroundColor: (context) => {
          const chart = context.chart;

          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return "transparent";
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom,
          );

          gradient.addColorStop(
            0,
            isPositive ? "rgba(34,197,94,0.20)" : "rgba(254,65,54,0.20)",
          );

          gradient.addColorStop(
            1,
            isPositive ? "rgba(34,197,94,0.00)" : "rgba(254,65,54,0.00)",
          );

          return gradient;
        },
      },
    ],
  };

  // ==========================================================
  // Chart Options
  // ==========================================================

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    animation: {
      duration: 900,
      easing: "easeOutQuart",
    },

    interaction: {
      mode: "index",
      intersect: false,
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,

        displayColors: false,

        backgroundColor: "#111827",

        borderColor: lineColor,

        borderWidth: 1,

        titleColor: "#9CA3AF",

        bodyColor: "#FFFFFF",

        padding: 12,

        cornerRadius: 10,

        titleFont: {
          size: 11,
          weight: "500",
        },

        bodyFont: {
          size: 14,
          weight: "600",
        },

        callbacks: {
          title: (tooltipItems) => {
            const timestamp = tooltipItems[0]?.parsed?.x;

            if (!timestamp) {
              return "";
            }

            return new Date(timestamp).toLocaleString("en-IN", {
              day: "2-digit",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            });
          },

          label: (context) => {
            return `₹${Number(context.parsed.y).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`;
          },
        },
      },
    },

    scales: {
      x: {
        type: "time",

        time: {
          unit: "day",

          tooltipFormat: "dd MMM, HH:mm",
        },

        border: {
          display: false,
        },

        grid: {
          display: true,

          color: "rgba(255,255,255,0.05)",

          drawTicks: false,
        },

        ticks: {
          color: "#64748B",

          maxTicksLimit: 7,

          font: {
            size: 11,
          },

          padding: 8,
        },
      },

      y: {
        beginAtZero: false,

        border: {
          display: false,
        },

        grid: {
          display: true,

          color: "rgba(255,255,255,0.05)",

          drawTicks: false,
        },

        ticks: {
          color: "#64748B",

          maxTicksLimit: 6,

          padding: 10,

          font: {
            size: 11,
          },

          callback: (value) => {
            return `₹${new Intl.NumberFormat("en-IN", {
              notation: "compact",
              maximumFractionDigits: 1,
            }).format(value)}`;
          },
        },
      },
    },

    elements: {
      line: {
        capBezierPoints: true,
      },
    },
  };

  // ==========================================================
  // UI
  // ==========================================================

  return (
    <div className="mt-10 w-full">
      <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120] p-3 shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-white/20 sm:p-4 md:h-[470px] md:p-5">
        {/* Header */}
        <div className="mb-2 flex items-center justify-between px-2">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">
              7 Day Price
            </p>

            <p
              className={`mt-1 text-sm font-semibold ${
                isPositive ? "text-green-500" : "text-[#FE4136]"
              }`}
            >
              {isPositive ? "7D Up" : "7D Down"}
            </p>
          </div>

          <button
            type="button"
            onClick={() => fetchChart(true)}
            disabled={loading}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition hover:border-white/20 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Updating..." : "↻ Refresh"}
          </button>
        </div>

        {/* Chart */}
        <div className="h-[245px] w-full sm:h-[255px] md:h-[385px]">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Chart;
