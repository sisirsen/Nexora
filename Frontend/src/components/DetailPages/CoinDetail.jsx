import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

import {
  FaArrowUp,
  FaArrowDown,
  FaGlobe,
  FaGithub,
  FaDiscord,
  FaReddit,
  FaStar,
} from "react-icons/fa";

import { FiStar, FiAlertOctagon } from "react-icons/fi";

import { SiX } from "react-icons/si";

import { HiDocumentText } from "react-icons/hi2";

import { BsBoxArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import Chart from "../Subpages/Chart";

// ============================================================
// API
// ============================================================

const API_URL = "https://api.coingecko.com/api/v3/coins";

// ============================================================
// CACHE
// ============================================================

const CACHE_DURATION = 2 * 60 * 1000; // 2 minutes

const getCacheKey = (coinId) => {
  return `coin_details_${coinId}`;
};

function getCachedCoin(coinId) {
  try {
    const cached = localStorage.getItem(getCacheKey(coinId));

    if (!cached) {
      return null;
    }

    const parsed = JSON.parse(cached);

    const age = Date.now() - parsed.timestamp;

    if (age > CACHE_DURATION) {
      localStorage.removeItem(getCacheKey(coinId));

      return null;
    }

    return parsed.data;
  } catch (error) {
    console.error("Cache read error:", error);

    return null;
  }
}

function saveCachedCoin(coinId, data) {
  try {
    localStorage.setItem(
      getCacheKey(coinId),
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
// EXCHANGES
// ============================================================

const exchanges = [
  {
    id: 1,
    name: "Binance",
    logo: "https://cdn.simpleicons.org/binance/F3BA2F",
    desc: "Trade on the world's largest crypto exchange.",
    link: "https://www.binance.com/",
  },

  {
    id: 2,
    name: "Bybit",
    logo: "https://images.seeklogo.com/logo-png/41/1/bybit-logo-png_seeklogo-412982.png",
    desc: "Buy and trade cryptocurrencies with low fees.",
    link: "https://www.bybit.com/",
  },

  {
    id: 3,
    name: "Coinbase",
    logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    desc: "Beginner-friendly cryptocurrency exchange.",
    link: "https://www.coinbase.com/",
  },

  {
    id: 4,
    name: "KuCoin",
    logo: "https://cryptologos.cc/logos/kucoin-token-kcs-logo.png",
    desc: "Trade hundreds of digital assets.",
    link: "https://www.kucoin.com/",
  },
];

// ============================================================
// LOADING COMPONENT
// ============================================================

function LoadingComponent() {
  return (
    <div className="flex w-full items-center justify-center py-40">
      <div className="flex flex-col items-center gap-5 rounded-xl border border-white/10 bg-[#111111] px-10 py-8 transition-all duration-500 hover:border-[#FE4136]">
        <div className="h-10 w-10 animate-spin rounded-[16px] border-4 border-[#FE4136] border-t-transparent" />

        <p className="text-lg text-white">Fetching live market data...</p>
      </div>
    </div>
  );
}

// ============================================================
// ERROR COMPONENT
// ============================================================

function ErrorComponent({ message, onRetry }) {
  return (
    <div className="flex w-full justify-center py-40">
      <div className="rounded-xl border border-red-500 bg-[#111111] p-8 text-center">
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
// MAIN COMPONENT
// ============================================================

function CoinDetails() {
  const { id } = useParams();

  // ==========================================================
  // STATE
  // ==========================================================

  const [coin, setCoin] = useState(null);

  const [loading, setLoading] = useState(true);

  const [errorMsg, setErrorMsg] = useState("");

  const [readMore, setReadMore] = useState(false);

  const [showWatchlist, setShowWatchlist] = useState(false);

  // ==========================================================
  // FETCH COIN
  // ==========================================================

  const fetchCoin = useCallback(
    async (forceRefresh = false) => {
      try {
        setErrorMsg("");

        // ------------------------------------------------------
        // CHECK CACHE
        // ------------------------------------------------------

        if (!forceRefresh) {
          const cachedCoin = getCachedCoin(id);

          if (cachedCoin) {
            setCoin(cachedCoin);
            setLoading(false);

            return;
          }
        }

        // ------------------------------------------------------
        // FETCH API
        // ------------------------------------------------------

        setLoading(true);

        const controller = new AbortController();

        const timeout = setTimeout(() => {
          controller.abort();
        }, 10000);

        const response = await fetch(`${API_URL}/${id}`, {
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (!data) {
          throw new Error("Invalid response from CoinGecko.");
        }

        // ------------------------------------------------------
        // UPDATE STATE
        // ------------------------------------------------------

        setCoin(data);

        // ------------------------------------------------------
        // SAVE CACHE
        // ------------------------------------------------------

        saveCachedCoin(id, data);
      } catch (error) {
        console.error(error);

        if (error.name === "AbortError") {
          setErrorMsg("Request timed out.");
        } else {
          setErrorMsg(error.message || "Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    },
    [id],
  );

  // ==========================================================
  // FETCH WHEN COIN ID CHANGES
  // ==========================================================

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchCoin();
  }, [id, fetchCoin]);

  // ==========================================================
  // LOADING
  // ==========================================================

  if (loading && !coin) {
    return <LoadingComponent />;
  }

  // ==========================================================
  // ERROR
  // ==========================================================

  if (errorMsg && !coin) {
    return (
      <ErrorComponent message={errorMsg} onRetry={() => fetchCoin(true)} />
    );
  }

  // ==========================================================
  // MARKET DATA SHORTCUT
  // ==========================================================

  const marketData = coin?.market_data;

  const priceChange = marketData?.price_change_percentage_24h ?? 0;

  const isPositive = priceChange >= 0;

  const description = coin?.description?.en || "";

  // ==========================================================
  // UI
  // ==========================================================

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="min-h-screen bg-[#020617] px-7 py-32 text-white">
        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="flex items-center justify-center gap-6 md:justify-normal">
          <img src={coin.image?.large} alt={coin.name} className="h-20 w-20" />

          <div>
            <h1 className="text-3xl font-bold">
              {coin.name}{" "}
              <span className="rounded-full text-2xl text-[#FE4136]">
                #{coin.market_cap_rank}
              </span>
            </h1>

            <p className="mt-2 text-xl uppercase text-gray-400">
              {coin.symbol}
            </p>
          </div>
        </div>

        {/* ==================================================
            PRICE
        ================================================== */}

        <div className="mt-5 flex items-center justify-center gap-3 pl-3 md:justify-normal">
          <h2 className="text-3xl font-bold md:text-4xl">
            ₹ {marketData?.current_price?.inr?.toLocaleString("en-IN")}
          </h2>

          <p
            className={`flex items-center gap-1 font-semibold md:text-xl ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? <FaArrowUp /> : <FaArrowDown />}
            {priceChange.toFixed(2)}%
          </p>

          {/* WATCHLIST */}
          <div className="relative w-fit">
            <button
              type="button"
              onClick={() => {
                setShowWatchlist((prev) => {
                  const newState = !prev;

                  if (newState) {
                    toast.success("Coin added to watchlist!");
                  } else {
                    toast("Coin removed from watchlist");
                  }

                  return newState;
                });
              }}
              className="cursor-pointer text-3xl text-white transition-all duration-300 hover:scale-110"
              aria-label="Toggle watchlist"
            >
              {showWatchlist ? <FaStar /> : <FiStar />}
            </button>
          </div>
        </div>

        {/* ==================================================
            CHART
        ================================================== */}

        <div className="md:flex md:justify-between gap-6">
          <div className="w-full max-w-[750px]">
            <Chart />
          </div>

          {/* ==================================================
            MARKET STATISTICS
        ================================================== */}

          <div className="mt-10 md:w-[720px]">
            <h2 className="mb-6 text-3xl font-bold">Market Statistics</h2>

            <div className="space-y-4">
              {/* Market Cap */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Market Cap</span>

                <span className="font-semibold">
                  ₹ {marketData?.market_cap?.inr?.toLocaleString("en-IN")}
                </span>
              </div>

              {/* 24H Volume */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">24H Volume</span>

                <span className="font-semibold">
                  ₹ {marketData?.total_volume?.inr?.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Circulating Supply */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Circulating Supply</span>

                <span className="font-semibold">
                  {marketData?.circulating_supply?.toLocaleString("en-IN")}{" "}
                  {coin.symbol?.toUpperCase()}
                </span>
              </div>

              {/* Total Supply */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Total Supply</span>

                <span className="font-semibold">
                  {marketData?.total_supply
                    ? `${marketData.total_supply.toLocaleString(
                        "en-IN",
                      )} ${coin.symbol?.toUpperCase()}`
                    : "N/A"}
                </span>
              </div>

              {/* Max Supply */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Max Supply</span>

                <span className="font-semibold">
                  {marketData?.max_supply
                    ? `${marketData.max_supply.toLocaleString(
                        "en-IN",
                      )} ${coin.symbol?.toUpperCase()}`
                    : "Unlimited"}
                </span>
              </div>

              {/* Fully Diluted Valuation */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Fully Diluted Valuation</span>

                <span className="font-semibold">
                  {marketData?.fully_diluted_valuation?.inr
                    ? `₹ ${marketData.fully_diluted_valuation.inr.toLocaleString(
                        "en-IN",
                      )}`
                    : "N/A"}
                </span>
              </div>

              {/* ATH */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">All-Time High (ATH)</span>

                <span className="font-semibold text-green-500">
                  ₹ {marketData?.ath?.inr?.toLocaleString("en-IN")}
                </span>
              </div>

              {/* ATL */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">All-Time Low (ATL)</span>

                <span className="font-semibold text-red-500">
                  ₹ {marketData?.atl?.inr?.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            DESCRIPTION
        ================================================== */}

        <div className="mt-10">
          <span className="text-3xl font-bold">Description</span>

          <p className="mt-5 text-lg text-gray-400">
            {readMore
              ? description
              : `${description.slice(0, 300)}${
                  description.length > 300 ? "..." : ""
                }`}

            {description.length > 300 && (
              <button
                type="button"
                className="ml-2 text-white hover:underline"
                onClick={() => setReadMore((prev) => !prev)}
              >
                {readMore ? "Read Less" : "Read More"}
              </button>
            )}
          </p>
        </div>

        {/* ==================================================
            OFFICIAL LINKS
        ================================================== */}

        <div className="mt-10">
          <h2 className="mb-4 text-3xl font-bold">Official Links</h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
            {/* Website */}
            {coin?.links?.homepage?.[0] && (
              <a
                href={coin.links.homepage[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#1f2937] p-5 transition-all duration-300 hover:bg-[#FE4136]"
              >
                <div className="flex items-center gap-4">
                  <FaGlobe size={24} />

                  <span className="font-semibold">Website</span>
                </div>

                <BsBoxArrowUpRight className="transition-all group-hover:rotate-45" />
              </a>
            )}

            {/* Whitepaper */}
            {coin?.links?.whitepaper && (
              <a
                href={coin.links.whitepaper}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#1f2937] p-5 transition-all duration-300 hover:bg-[#FE4136]"
              >
                <div className="flex items-center gap-4">
                  <HiDocumentText size={24} />

                  <span className="font-semibold">Whitepaper</span>
                </div>

                <BsBoxArrowUpRight className="transition-all group-hover:rotate-45" />
              </a>
            )}

            {/* Twitter / X */}
            {coin?.links?.twitter_screen_name && (
              <a
                href={`https://x.com/${coin.links.twitter_screen_name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#1f2937] p-5 transition-all duration-300 hover:bg-[#FE4136]"
              >
                <div className="flex items-center gap-4">
                  <SiX size={22} />

                  <span className="font-semibold">Twitter / X</span>
                </div>

                <BsBoxArrowUpRight className="transition-all group-hover:rotate-45" />
              </a>
            )}

            {/* Reddit */}
            {coin?.links?.subreddit_url && (
              <a
                href={coin.links.subreddit_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#1f2937] p-5 transition-all duration-300 hover:bg-[#FE4136]"
              >
                <div className="flex items-center gap-4">
                  <FaReddit size={24} />

                  <span className="font-semibold">Reddit</span>
                </div>

                <BsBoxArrowUpRight className="transition-all group-hover:rotate-45" />
              </a>
            )}

            {/* Discord */}
            {coin?.links?.chat_url?.[0] && (
              <a
                href={coin.links.chat_url[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#1f2937] p-5 transition-all duration-300 hover:bg-[#FE4136]"
              >
                <div className="flex items-center gap-4">
                  <FaDiscord size={24} />

                  <span className="font-semibold">Discord</span>
                </div>

                <BsBoxArrowUpRight className="transition-all group-hover:rotate-45" />
              </a>
            )}

            {/* Explorer */}
            {coin?.links?.blockchain_site?.[0] && (
              <a
                href={coin.links.blockchain_site[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#1f2937] p-5 transition-all duration-300 hover:bg-[#FE4136]"
              >
                <div className="flex items-center gap-4">
                  <FaGlobe size={24} />

                  <span className="font-semibold">Explorer</span>
                </div>

                <BsBoxArrowUpRight className="transition-all group-hover:rotate-45" />
              </a>
            )}

            {/* GitHub */}
            {coin?.links?.repos_url?.github?.[0] && (
              <a
                href={coin.links.repos_url.github[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#1f2937] p-5 transition-all duration-300 hover:bg-[#FE4136]"
              >
                <div className="flex items-center gap-4">
                  <FaGithub size={24} />

                  <span className="font-semibold">GitHub</span>
                </div>

                <BsBoxArrowUpRight className="transition-all group-hover:rotate-45" />
              </a>
            )}
          </div>
        </div>
        {/* ==================================================
            TRADE SECTION
        ================================================== */}

        <div className="mx-auto mt-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            <span className="text-red-500">Trade</span> Here
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-gray-400">
            Nexora does not provide cryptocurrency trading services. However,
            you can explore the trusted exchanges below to buy, sell, and trade
            cryptocurrencies securely.
          </p>
        </div>

        {/* ==================================================
            EXCHANGE CARDS
        ================================================== */}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exchanges.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-700 bg-[#0B1120] p-6 transition-all duration-300 hover:border-[#FE4136] hover:shadow-lg hover:shadow-[#FE4136]/20"
            >
              {/* Logo */}
              <div className="flex justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-16 w-16 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Exchange Name */}
              <h2 className="mt-5 text-center text-xl font-bold text-white">
                {item.name}
              </h2>

              {/* Description */}
              <p className="mt-3 text-center text-sm leading-6 text-gray-400">
                {item.desc}
              </p>

              {/* Trade Button */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#FE4136] py-3 font-semibold text-white transition hover:bg-[#e63a30]"
              >
                Trade Now →
              </a>
            </div>
          ))}
        </div>

        {/* ==================================================
            RISK WARNING
        ================================================== */}

        <div className="group mx-auto mt-14 w-full rounded-[30px] border-2 border-white/20 p-6 text-center shadow-[0_0_30px_rgba(254,65,54,0.08)] transition-all duration-500 hover:border-[#FE4136]/30 md:p-8 md:text-left">
          <h2 className="mb-4 flex items-center justify-center gap-2 text-xl font-semibold text-[#FE4136] md:justify-start md:text-2xl">
            Important Risk Warning
            <FiAlertOctagon className="mt-1 group-hover:animate-pulse" />
          </h2>

          <p className="leading-8 text-gray-300">
            Cryptocurrency investments are highly volatile and involve
            significant financial risk. Never invest money you cannot afford to
            lose. Always research carefully before making investment decisions.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default CoinDetails;
