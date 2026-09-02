import { FaGlobe } from "react-icons/fa";
import React, { useState, useEffect } from "react";

function Globalstats() {
  const [GlobalData, setGlobalData] = useState(null);
  const [Error, setError] = useState("");
  const [Loading, setLoading] = useState(true);

  const loading = () => {
    return (
      <div className="mt-30">
        <div className=" bg-[#111111] w-full h-[200px] border p-5 border-white/10 hover:border-[#FE4136] rounded-xl flex justify-center items-center transition-all duration-500">
          <div className="w-10 h-10 border-4 border-[#FE4136] rounded-[16px] animate-spin"></div>
          <div className="pl-5 text-white">Fetching live market data... </div>
        </div>
      </div>
    );
  };

  const ErrorComponent = () => {
    return (
      <div className="w-full flex justify-center items-center mt-30">
        <div className="bg-[#111111] w-full h-[200px] border border-red-500 rounded-xl p-8 text-center">
          <h2 className="text-red-500 text-xl font-bold">
            Failed to load market data
          </h2>

          <p className="text-gray-400 mt-2">
            Please check your internet connection.
          </p>

          <button
            onClick={fetchData}
            className="mt-6 px-6 py-3 bg-[#FE4136] rounded-lg text-white hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  };

  async function fetchData() {
    try {
      setLoading(true);

      let response = await fetch("https://api.coingecko.com/api/v3/global");

      let data = await response.json();

      setGlobalData(data.data);
    } catch (error) {
      setError(loading())
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (Loading) {
    return loading();
  }

  if (Error) {
    return ErrorComponent();
  }

  return (
    <div>
      <div className=" mt-10 md:mt-30 bg-[#111111] w-full h-fit p-5 border border-white/10 hover:border-[#FE4136] rounded-xl ">
        <div className="flex justify-center mb-7">
          <span className="text-2xl flex items-center gap-1  text-white font-semibold">
            Global Status🌏
          </span>
        </div>

        <div className="text-white flex gap-8 justify-center text-[15px] flex-wrap">
          <div className="w-fit text-center">
            <span className="text-[#FE4136] font-semibold md:text-lg">
              Active Coins
            </span>
            <div className="mt-4">{GlobalData?.active_cryptocurrencies}</div>
          </div>

          <div className="w-fit text-center">
            <div className="text-[#FE4136] font-semibold md:text-lg">Markets</div>
            <div className="mt-4">{GlobalData?.markets}</div>
          </div>

          <div className="w-fit text-center hidden md:block">
            <span className="text-[#FE4136] font-semibold text-lg">
              Market Cap
            </span>
            <div className="mt-4 ">
              ₹{GlobalData?.total_market_cap?.inr?.toLocaleString()}
            </div>
          </div>

          <div className="w-fit text-center hidden md:block">
            <span className="text-[#FE4136] font-semibold text-lg">
              Total Volume
            </span>
            <div className="mt-4">
              ₹{GlobalData?.total_volume?.inr?.toLocaleString()}
            </div>
          </div>

          <div className="w-fit text-center">
            <span className="text-[#FE4136] font-semibold md:text-lg">
              BTC(%)
            </span>
            <div className="mt-4">
              {GlobalData?.market_cap_percentage?.btc?.toFixed(2)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Globalstats;
