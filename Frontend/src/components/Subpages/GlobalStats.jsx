import React, { useCallback, useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";

const API_URL = "https://api.coingecko.com/api/v3/global";

const CACHE_KEY = "global_market_cache";
const CACHE_DURATION = 2 * 60 * 1000; // 2 minutes

// ============================================================
// Cache Helpers
// ============================================================

function getCachedData() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);

    if (!cached) {
      return null;
    }

    const parsed = JSON.parse(cached);

    const age = Date.now() - parsed.timestamp;

    if (age > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return parsed;
  } catch (error) {
    console.error("Cache read error:", error);
    return null;
  }
}

function saveCachedData(data) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      }),
    );
  } catch (error) {
    console.error("Cache save error:", error);
  }
}

// ============================================================
// Loading Component
// ============================================================

function LoadingComponent() {
  return (
    <div className="mt-10 md:mt-30">
      <div className="flex h-[200px] w-full items-center justify-center rounded-xl border border-white/10 bg-[#111111] p-5 transition-all duration-500 hover:border-[#FE4136]">
        <div className="flex items-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#FE4136] border-t-transparent" />

          <div className="pl-5 text-white">Fetching live market data...</div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Error Component
// ============================================================

function ErrorComponent({ message, onRetry }) {
  return (
    <div className="mt-10 flex w-full items-center justify-center md:mt-30">
      <div className="flex h-[200px] w-full flex-col items-center justify-center rounded-xl border border-red-500 bg-[#111111] p-8 text-center">
        <h2 className="text-xl font-bold text-red-500">
          Failed to load market data
        </h2>

        <p className="mt-2 text-gray-400">
          {message || "Please check your internet connection."}
        </p>

        <button
          onClick={onRetry}
          className="mt-6 rounded-lg bg-[#FE4136] px-6 py-3 text-white transition hover:bg-red-700 active:scale-95"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

// ============================================================
// Main Component
// ============================================================

function GlobalStats() {
  const [globalData, setGlobalData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  // ==========================================================
  // Fetch Global Data
  // ==========================================================

  const fetchData = useCallback(async (forceRefresh = false) => {
    try {
      setErrorMsg("");

      // --------------------------------------------------------
      // Check Cache
      // --------------------------------------------------------

      if (!forceRefresh) {
        const cached = getCachedData();

        if (cached) {
          setGlobalData(cached.data);
          setLoading(false);

          return;
        }
      }

      // --------------------------------------------------------
      // Fetch API
      // --------------------------------------------------------

      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();

      if (!result?.data) {
        throw new Error("Invalid API response.");
      }

      // --------------------------------------------------------
      // Update State
      // --------------------------------------------------------

      setGlobalData(result.data);

      // --------------------------------------------------------
      // Save Cache
      // --------------------------------------------------------

      saveCachedData(result.data);
    } catch (error) {
      console.error(error);

      /*
        Try cached data if API fails.
      */

      const cached = getCachedData();

      if (cached) {
        setGlobalData(cached.data);
        setErrorMsg("Showing recently cached data.");
      } else {
        setErrorMsg(error.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // ==========================================================
  // Initial Load
  // ==========================================================

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ==========================================================
  // Loading
  // ==========================================================

  if (loading && !globalData) {
    return <LoadingComponent />;
  }

  // ==========================================================
  // Error
  // ==========================================================

  if (errorMsg && !globalData) {
    return (
      <ErrorComponent message={errorMsg} onRetry={() => fetchData(true)} />
    );
  }

  // ==========================================================
  // UI
  // ==========================================================

  return (
    <div>
      <div className="mt-10 w-full rounded-xl border border-white/10 bg-[#111111] p-5 transition-all duration-500 hover:border-[#FE4136] md:mt-30">
        {/* Header */}
        <div className="mb-7 flex items-center justify-center">
          <span className="flex items-center gap-2 md:text-2xl text-lg font-semibold text-white">
            Global Stats 🌏
          </span>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center text-[15px] text-white">
          {/* Active Coins */}
          <div className="w-fit">
            <span className="font-semibold text-[#FE4136] md:text-lg">
              Active Coins
            </span>

            <div className="mt-4">
              {globalData?.active_cryptocurrencies?.toLocaleString("en-IN")}
            </div>
          </div>

          {/* Markets */}
          <div className="w-fit">
            <span className="font-semibold text-[#FE4136] md:text-lg">
              Markets
            </span>

            <div className="mt-4">
              {globalData?.markets?.toLocaleString("en-IN")}
            </div>
          </div>

          {/* Market Cap */}
          <div className="hidden w-fit text-center md:block">
            <span className="font-semibold text-[#FE4136] md:text-lg">
              Market Cap
            </span>

            <div className="mt-4">
              ₹{globalData?.total_market_cap?.inr?.toLocaleString("en-IN")}
            </div>
          </div>

          {/* Total Volume */}
          <div className="hidden w-fit text-center md:block">
            <span className="font-semibold text-[#FE4136] md:text-lg">
              Total Volume
            </span>

            <div className="mt-4">
              ₹{globalData?.total_volume?.inr?.toLocaleString("en-IN")}
            </div>
          </div>

          {/* BTC Dominance */}
          <div className="w-fit text-center">
            <span className="font-semibold text-[#FE4136] md:text-lg">
              BTC (%)
            </span>

            <div className="mt-4">
              {globalData?.market_cap_percentage?.btc?.toFixed(2)}%
            </div>
          </div>
        </div>

        {/* Cache fallback message */}
        {errorMsg && globalData && (
          <p className="mt-5 text-center text-xs text-yellow-500">{errorMsg}</p>
        )}
      </div>
    </div>
  );
}

export default GlobalStats;
