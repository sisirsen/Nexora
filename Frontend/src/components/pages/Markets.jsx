import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FiAlertOctagon } from "react-icons/fi";

import GlobalStats from "../Subpages/GlobalStats";
import MarketPageExplain from "../Subpages/MarketPageExplain";
import TrendingCoins from "../Subpages/TrendingCoins";
import MarketCoins from "../Subpages/MarketCoins";

// ============================================================
// Skeleton
// ============================================================

// ============================================================
// Markets Page
// ============================================================

function Markets() {
  // ==========================================================
  // State
  // ==========================================================
  const [online, setOnline] = useState(navigator.onLine);

  const [pageLoading, setPageLoading] = useState(
    !sessionStorage.getItem("market_visited"),
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!sessionStorage.getItem("market_visited")) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("market_visited", "true");
        setPageLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // ==========================================================
  // Online / Offline Detection
  // ==========================================================

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
    };

    const handleOffline = () => {
      setOnline(false);
    };

    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);

      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (pageLoading) {
    return <MarketSkeleton />;
  }

  function MarketSkeleton() {
    return (
      <div className="min-h-screen animate-pulse bg-[#020617] px-5 py-25 md:px-10 md:py-30">
        {/* ======================================================
          Page Heading
      ====================================================== */}

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="h-10 w-72 rounded-lg bg-gray-800 md:h-12 md:w-96" />

          <div className="h-5 w-32 rounded-md bg-gray-800" />
        </div>

        {/* ======================================================
          Description
      ====================================================== */}

        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-3">
          <div className="h-4 w-full rounded bg-gray-800" />
          <div className="h-4 w-5/6 rounded bg-gray-800" />
        </div>

        {/* ======================================================
          Search
      ====================================================== */}

        {/* ======================================================
          Global Stats + Trending
      ====================================================== */}

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="h-[200px] rounded-xl bg-gray-800" />

          <div className="h-[300px] rounded-xl bg-gray-800" />
        </div>

        {/* ======================================================
          Market Heading
      ====================================================== */}

        <div className="mx-auto mt-16 flex flex-col items-center gap-3">
          <div className="h-8 w-64 rounded-lg bg-gray-800" />

          <div className="h-4 w-96 max-w-full rounded bg-gray-800" />
        </div>

        {/* ======================================================
          Market Table
      ====================================================== */}

        <div className="mt-10 overflow-hidden rounded-xl border border-white/5">
          {/* Table Header */}
          <div className="h-14 bg-gray-800" />

          {/* Rows */}
          <div className="space-y-1 bg-[#0B1120] p-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-16 rounded-lg bg-gray-800/60" />
            ))}
          </div>
        </div>

        {/* ======================================================
          Risk Warning
      ====================================================== */}

        <div className="mt-14 h-48 rounded-[30px] bg-gray-800" />
      </div>
    );
  }

  // ==========================================================
  // Main Page
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
      <div className="p-5 py-25 md:py-30">
        {/* ==================================================
            PAGE HEADER
        ================================================== */}

        <div className="flex items-center justify-center gap-3">
          <div className="flex items-end justify-center gap-3">
            <span className="flex gap-2 text-4xl font-bold text-red-500 md:text-5xl">
              Crypto
              <span className="text-white">Market</span>
            </span>

            {/* Online Status */}

            <div>
              {online ? (
                <span className="text-lg text-red-500">
                  Live <span className="animate-pulse">.</span>
                </span>
              ) : (
                <span className="flex items-center gap-2 text-lg text-red-500">
                  <FiAlertOctagon />
                  No Internet
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ==================================================
            DESCRIPTION
        ================================================== */}

        <div className="mx-auto mt-10 flex w-full max-w-4xl items-center justify-center text-center">
          <span className="text-sm text-gray-400 md:text-base">
            Track live cryptocurrency prices, monitor market trends, analyze
            coin performance, and stay updated with real-time market movements
            all in one place.
          </span>
        </div>

        {/* ==================================================
            SEARCH
        ================================================== */}

        {/* ==================================================
            GLOBAL + TRENDING
        ================================================== */}

        <div>
          <div className="gap-6 md:flex">
            {/* Left */}
            <div className="md:space-y-4">
              <GlobalStats />

              <div className="hidden md:flex">
                <MarketPageExplain />
              </div>
            </div>

            {/* Right */}
            <div className="w-full">
              <TrendingCoins />
            </div>
          </div>

          {/* =================================================
              MARKET SECTION TITLE
          ================================================= */}

          <div className="mt-10 text-center md:mt-20">
            <div className="text-2xl font-bold text-white md:text-4xl">
              <span className="text-red-500">Crypto</span> Market 📈
            </div>

            <p className="mx-auto mt-3 hidden max-w-2xl text-gray-400 md:flex lg:flex">
              Track live cryptocurrency prices, market movements and performance
              trends in real time.
            </p>
          </div>

          {/* =================================================
              MARKET COINS
          ================================================= */}

          <MarketCoins />
        </div>

        {/* ==================================================
            RISK WARNING
        ================================================== */}

        <div className="mt-14 w-full rounded-[30px] border-2 border-white/20 p-6 text-center shadow-[0_0_30px_rgba(254,65,54,0.08)] transition-all duration-500 hover:border-[#FE4136]/30 md:p-8 md:text-left">
          <h2 className="mb-4 flex items-center justify-center gap-2 text-xl font-semibold text-[#FE4136] md:justify-start md:text-2xl">
            Important Risk Warning
            <FiAlertOctagon className="mt-1" />
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

export default Markets;
