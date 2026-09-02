import React, { useEffect, useState } from "react";
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
} from "chart.js";

import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale
);

function Chart() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchChart = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=7`
      );

      const result = await response.json();

      const formattedData = result.prices.map((item) => ({
        x: item[0],
        y: item[1],
      }));

      setData(formattedData);
      setLoading(false)
    } catch (error) {
      setError(error.message)
    }
  };

   const ErrorComponent = () => {
    return (
      <div className="w-full flex justify-center py-40">
        <div className="bg-[#111111] border border-red-500 rounded-xl p-8 text-center">
          <h2 className="text-red-500 text-xl font-bold">
            Failed to load chart data
          </h2>

          <p className="text-gray-400 mt-2">
            Please check your internet connection.
          </p>

          <button
            onClick={fetchChart}
            className="mt-6 px-6 py-3 bg-[#FE4136] rounded-lg text-white hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  };

    const LoadingComponent = () => {
    return (
      <div className="w-full flex justify-center items-center py-40">
        <div className="bg-[#111111] border border-white/10 hover:border-[#FE4136] rounded-xl px-10 py-8 flex flex-col items-center gap-5 transition-all duration-500">
          <div className="w-10 h-10 border-4 border-[#FE4136] rounded-[16px] animate-spin"></div>

          <p className="text-white text-lg">Fetching chart data...</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetchChart();
  }, [id]);

 if (loading) {
  return <LoadingComponent />
 }

 if (error) {
  return <ErrorComponent />
 }

  const isPositive = data[data.length - 1].y >= data[0].y;

const lineColor = isPositive ? "#22C55E" : "#FE4136";

  const chartData = {
    datasets: [
      {
        label: "Price",
        data: data,
        borderColor: lineColor,
        backgroundColor: lineColor,
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4,
        
      },
    ],
  };

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
      },
       grid: {
        display: true,
        color: "#1E293B", // Grid line color
      },
    },
    y: {
 grid: {
        display: true,
        color: "#1E293B", // Grid line color
      
      },
      ticks: {
        callback: (value) =>
          new Intl.NumberFormat("en-IN", {
            notation: "compact",
          }).format(value),
      },
    },
  },
};
  

  return (
   
    <div className="md:w-[720px] md:h-[470px] h-[320px] bg-[#0B1120] rounded-xl p-4 mt-10">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default Chart;