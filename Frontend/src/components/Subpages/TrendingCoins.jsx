import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TRENDING_API = "https://api.coingecko.com/api/v3/search/trending";

const USD_API = "https://open.er-api.com/v6/latest/USD";

const TRENDING_CACHE_KEY = "trending_coins_cache";
const USD_CACHE_KEY = "usd_inr_cache";

const CACHE_DURATION = 2 * 60 * 1000; // 2 minutes

// ============================================================
// Cache Helper
// ============================================================

function getCache(key) {
  try {
    const cached = localStorage.getItem(key);

    if (!cached) return null;

    const parsed = JSON.parse(cached);

    const isExpired = Date.now() - parsed.timestamp > CACHE_DURATION;

    if (isExpired) {
      localStorage.removeItem(key);
      return null;
    }

    return parsed.data;
  } catch (error) {
    console.error("Cache read error:", error);
    return null;
  }
}

// ============================================================
// Save Cache
// ============================================================

function setCache(key, data) {
  try {
    localStorage.setItem(
      key,
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
    <div className="mt-29 flex w-full items-center justify-center">
      <div className="flex h-[525px] w-full items-center justify-center rounded-xl border border-white/10 bg-[#111111] px-10 py-8 transition-all duration-500 hover:border-[#FE4136] md:w-[600px]">
        <div className="flex flex-col items-center gap-5">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#FE4136] border-t-transparent" />

          <p className="text-lg text-white">Fetching trending data...</p>
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
    <div className="mt-29 flex w-full justify-center">
      <div className="grid h-[525px] w-full place-content-center rounded-xl border border-red-500 bg-[#111111] p-8 text-center md:w-[600px]">
        <h2 className="text-xl font-bold text-red-500">
          Failed to load market data
        </h2>

        <p className="mt-2 text-gray-400">{message || "Please try again."}</p>

        <button
          onClick={onRetry}
          className="mx-auto mt-6 rounded-lg bg-[#FE4136] px-6 py-3 text-white transition hover:bg-red-700 active:scale-95"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

// ============================================================
// Trending Coin Row
// ============================================================

function TrendingCoinRow({ coin, index, usdToInr }) {
  const item = coin.item;

  const price = Number(item?.data?.price ?? 0) * usdToInr;

  const priceChange = item?.data?.price_change_percentage_24h?.inr ?? 0;

  const isPositive = priceChange >= 0;

  return (
    <tr className="border-b border-white/10 transition-all duration-300 hover:bg-white/[0.03]">
      {/* Rank */}
      <td className="px-4 py-5 text-center text-gray-400">#{index + 1}</td>

      {/* Coin */}
      <td className="py-3 md:py-5.5">
        <Link
          to={`/market/coin/${item.id}`}
          className="flex items-center gap-3"
        >
          <img
            src={item?.thumb}
            alt={`${item?.name} logo`}
            className="hidden md:flex h-9 w-9 rounded-full"
            loading="lazy"
          />

          <div>
            <div className="font-semibold text-white transition-colors duration-200 hover:text-[#FE4136]">
              {item.name}

              <p className="text-xs uppercase text-gray-500">{item.symbol}</p>
            </div>
          </div>
        </Link>
      </td>

      {/* Price */}
      <td className="px-4 py-5 text-center font-medium text-white">
        ₹{price.toLocaleString("en-IN")}
      </td>

      {/* 24h Change */}
      <td
        className={`px-4 py-5 text-center font-semibold ${
          isPositive ? "text-green-500" : "text-red-400"
        }`}
      >
        {priceChange.toFixed(2)}%
      </td>
    </tr>
  );
}

// ============================================================
// Main Component
// ============================================================

function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [usdToInr, setUsdToInr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  // ==========================================================
  // Fetch Data
  // ==========================================================

  const fetchData = useCallback(async (forceRefresh = false) => {
    try {
      setErrorMsg("");

      // --------------------------------------------------------
      // Check cache first
      // --------------------------------------------------------

      if (!forceRefresh) {
        const cachedTrending = getCache(TRENDING_CACHE_KEY);

        const cachedUsd = getCache(USD_CACHE_KEY);

        if (cachedTrending) {
          setTrendingCoins(cachedTrending);
        }

        if (cachedUsd) {
          setUsdToInr(cachedUsd);
        }

        // If both caches are valid, no API request required
        if (cachedTrending && cachedUsd) {
          setLoading(false);
          return;
        }
      }

      setLoading(true);

      // --------------------------------------------------------
      // API Requests
      // --------------------------------------------------------

      const requests = [];

      if (forceRefresh || !getCache(TRENDING_CACHE_KEY)) {
        requests.push(
          fetch(TRENDING_API)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Trending API failed: ${response.status}`);
              }

              return response.json();
            })
            .then((data) => {
              if (!data?.coins) {
                throw new Error("Invalid trending API response.");
              }

              setTrendingCoins(data.coins);

              setCache(TRENDING_CACHE_KEY, data.coins);
            }),
        );
      }

      if (forceRefresh || !getCache(USD_CACHE_KEY)) {
        requests.push(
          fetch(USD_API)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Currency API failed: ${response.status}`);
              }

              return response.json();
            })
            .then((data) => {
              const rate = data?.rates?.INR;

              if (!rate) {
                throw new Error("INR conversion rate unavailable.");
              }

              setUsdToInr(rate);

              setCache(USD_CACHE_KEY, rate);
            }),
        );
      }

      // Run both requests together
      await Promise.all(requests);
    } catch (error) {
      console.error(error);

      /*
        Try cached data as fallback.
      */

      const cachedTrending = getCache(TRENDING_CACHE_KEY);

      const cachedUsd = getCache(USD_CACHE_KEY);

      if (cachedTrending) {
        setTrendingCoins(cachedTrending);
      }

      if (cachedUsd) {
        setUsdToInr(cachedUsd);
      }

      /*
        Only show the error screen if
        we have no usable data at all.
      */

      if (!cachedTrending || !cachedUsd) {
        setErrorMsg(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // ==========================================================
  // Initial Fetch
  // ==========================================================

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ==========================================================
  // Loading
  // ==========================================================

  if (loading && trendingCoins.length === 0) {
    return <LoadingComponent />;
  }

  // ==========================================================
  // Error
  // ==========================================================

  if (errorMsg && trendingCoins.length === 0) {
    return (
      <ErrorComponent message={errorMsg} onRetry={() => fetchData(true)} />
    );
  }

  // ==========================================================
  // UI
  // ==========================================================

  return (
    <div className="mt-10 md:mt-30 md:w-full md:min-w-[600px]">
      <div className="mt-7 w-full rounded-xl border border-white/10 bg-[#111111] py-4 transition-all duration-500 hover:border-[#FE4136] md:p-6">
        {/* Header */}
        <div className="mb-7 flex items-center justify-center">
          <span className="md:text-2xl text-lg font-semibold text-white">
            Trending Coins 🔥
          </span>
        </div>

        {/* Trending Coins */}
        <div className="overflow-x-auto">
          <table className="w-full  border-collapse text-sm text-white">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-4 md:text-lg text-center font-semibold text-[#FE4136]">
                  Rank
                </th>

                <th className="px-4 py-4 md:text-lg text-left font-semibold text-[#FE4136]">
                  Coin
                </th>

                <th className="px-4 py-4 text-center md:text-lg font-semibold text-[#FE4136]">
                  Price
                </th>

                <th className="px-4 py-4 text-center md:text-lg font-semibold text-[#FE4136]">
                  24h %
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {trendingCoins.slice(0, 4).map((coin, index) => (
                <TrendingCoinRow
                  key={coin.item.id}
                  coin={coin}
                  index={index}
                  usdToInr={usdToInr || 0}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TrendingCoins;
