import React, { memo, useCallback, useEffect, useState } from "react";

import { Sparklines, SparklinesLine } from "react-sparklines";

import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h";

const CACHE_KEY = "market_coins_cache";
const CACHE_DURATION = 2 * 60 * 1000; // 2 minutes

/* =========================================================
   Loading Component
========================================================= */

function LoadingComponent() {
  return (
    <div className="flex w-full items-center justify-center py-40">
      <div className="flex flex-col items-center gap-5 rounded-xl border border-white/10 bg-[#111111] px-10 py-8 transition-all duration-500 hover:border-[#FE4136]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#FE4136] border-t-transparent" />

        <p className="text-lg text-white">Fetching live market data...</p>
      </div>
    </div>
  );
}

/* =========================================================
   Error Component
========================================================= */

function ErrorComponent({ message, onRetry }) {
  return (
    <div className="flex w-full justify-center py-40">
      <div className="rounded-xl border border-red-500 bg-[#111111] p-8 text-center">
        <h2 className="text-xl font-bold text-red-500">
          Failed to load market data
        </h2>

        <p className="mt-2 text-gray-400">
          {message || "Something went wrong."}
        </p>

        <button
          onClick={onRetry}
          className="mt-6 rounded-lg bg-[#FE4136] px-6 py-3 text-white transition hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   Coin Card
========================================================= */

const CoinCard = memo(function CoinCard({ coin }) {
  const chartData = coin.sparkline_in_7d?.price ?? [];

  const isPositive = coin.price_change_percentage_24h > 0;

  const chartColor = isPositive ? "#22c55e" : "#ef4444";

  return (
    <Link
      to={`/market/coin/${coin.id}`}
      className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:border-[#FE4136] hover:shadow-lg hover:shadow-[#FE4136]/20"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={coin.image}
            alt={`${coin.name} logo`}
            className="h-12 w-12 rounded-full"
            loading="lazy"
            decoding="async"
          />

          <div>
            <h2 className="text-xl font-bold text-white">{coin.name}</h2>

            <p className="uppercase text-gray-400">{coin.symbol}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-semibold text-[#FE4136]">
            Rank #{coin.market_cap_rank}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-white/10" />

      {/* Information */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-400">Current Price</span>

          <span className="font-semibold text-white">
            ₹{coin.current_price?.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="hidden justify-between md:flex">
          <span className="text-gray-400">Market Cap</span>

          <span className="text-white">
            ₹{coin.market_cap?.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="hidden justify-between md:flex">
          <span className="text-gray-400">High 24H</span>

          <span className="font-medium text-green-400">
            ₹{coin.high_24h?.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="hidden justify-between md:flex">
          <span className="text-gray-400">Low 24H</span>

          <span className="font-medium text-red-400">
            ₹{coin.low_24h?.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">24H Change</span>

          <span
            className={`font-bold ${
              isPositive ? "text-green-400" : "text-red-400"
            }`}
          >
            {coin.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-white/10" />

      {/* Sparkline */}
      <div>
        <h3 className="mb-3 text-center font-semibold text-[#FE4136]">
          7 Day Performance
        </h3>

        <div className="flex justify-center">
          <Sparklines data={chartData} width={220} height={70} margin={5}>
            <SparklinesLine
              color={chartColor}
              style={{
                fill: "none",
                strokeWidth: 3,
              }}
            />
          </Sparklines>
        </div>
      </div>
    </Link>
  );
});

/* =========================================================
   Main Component
========================================================= */

function MarketCoins() {
  const [marketCoins, setMarketCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [visibleCoins, setVisibleCoins] = useState(4);
  const [lastUpdated, setLastUpdated] = useState(null);

  /* =======================================================
     Fetch Market Data
  ======================================================= */

  const fetchMarketCoins = useCallback(async (forceRefresh = false) => {
    try {
      setErrorMsg("");

      /*
          Check cache first unless
          explicitly asking for refresh.
        */

      if (!forceRefresh) {
        const cached = localStorage.getItem(CACHE_KEY);

        if (cached) {
          const parsedCache = JSON.parse(cached);

          const cacheAge = Date.now() - parsedCache.timestamp;

          if (cacheAge < CACHE_DURATION) {
            setMarketCoins(parsedCache.data);
            setLastUpdated(parsedCache.timestamp);
            setLoading(false);

            return;
          }
        }
      }

      setLoading(true);

      const controller = new AbortController();

      const timeout = setTimeout(() => {
        controller.abort();
      }, 10000);

      const response = await fetch(API_URL, {
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`API request failed (${response.status})`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid API response.");
      }

      /*
          Update state
        */

      setMarketCoins(data);

      /*
          Save response in cache
        */

      const cacheObject = {
        data,
        timestamp: Date.now(),
      };

      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject));

      setLastUpdated(cacheObject.timestamp);
    } catch (error) {
      if (error.name === "AbortError") {
        setErrorMsg("Request timed out.");
      } else {
        setErrorMsg(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  /* =======================================================
     Initial Fetch
  ======================================================= */

  useEffect(() => {
    fetchMarketCoins();
  }, [fetchMarketCoins]);

  /* =======================================================
     Loading
  ======================================================= */

  if (loading && marketCoins.length === 0) {
    return <LoadingComponent />;
  }

  /* =======================================================
     Error
  ======================================================= */

  if (errorMsg && marketCoins.length === 0) {
    return (
      <ErrorComponent
        message={errorMsg}
        onRetry={() => fetchMarketCoins(true)}
      />
    );
  }

  /* =======================================================
     UI
  ======================================================= */

  return (
    <section className="mt-5 w-full md:mt-10">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-end">
        <div className="flex justify-center">
          {lastUpdated && (
            <p className="mt-1 text-xs text-gray-500">
              Updated {new Date(lastUpdated).toLocaleTimeString()}
            </p>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {marketCoins.slice(0, visibleCoins).map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>

      {/* Load More */}
      <div className="mt-12 flex justify-center">
        {visibleCoins < marketCoins.length ? (
          <button
            onClick={() => setVisibleCoins((prev) => prev + 16)}
            className="rounded-xl bg-[#FE4136] px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700 active:scale-95"
          >
            Load More
          </button>
        ) : (
          <div className="font-medium text-gray-500">
            You've reached the end 🚀
          </div>
        )}
      </div>
    </section>
  );
}

export default MarketCoins;
