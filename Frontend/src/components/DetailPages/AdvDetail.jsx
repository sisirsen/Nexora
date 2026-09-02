import React from "react";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {icon} from '../../assets/images'

function AdvDetail() {
  const [VisibleTopics, setVisibleTopics] = useState(10);

  let defaultImage=icon.advimage

  const advancedTopics = [
    {
      id: 1,
      title: "Smart Money Concept (SMC)",
      description:
        "Understand how institutional traders influence market movements.",
    },
    {
      id: 2,
      title: "Market Structure Shift (MSS)",
      description: "Learn how to identify shifts in market direction.",
    },
    {
      id: 3,
      title: "Break of Structure (BOS)",
      description: "Recognize strong trend continuation using BOS.",
    },
    {
      id: 4,
      title: "Change of Character (CHoCH)",
      description: "Identify potential market reversals using CHoCH.",
    },
    {
      id: 5,
      title: "Order Blocks",
      description:
        "Learn how institutions leave footprints through order blocks.",
    },
    {
      id: 6,
      title: "Breaker Blocks",
      description:
        "Understand breaker blocks and their role in trend continuation.",
    },
    {
      id: 7,
      title: "Mitigation Blocks",
      description:
        "Discover how mitigation blocks are used in Smart Money trading.",
    },
    {
      id: 8,
      title: "Liquidity Zones",
      description: "Find areas where large traders place their orders.",
    },
    {
      id: 9,
      title: "Liquidity Sweep",
      description: "Understand how stop-loss hunting occurs in the market.",
    },
    {
      id: 10,
      title: "Equal Highs & Equal Lows",
      description: "Learn why equal highs and lows attract liquidity.",
    },
    {
      id: 11,
      title: "Fair Value Gap (FVG)",
      description: "Understand price imbalances and fair value gaps.",
    },
    {
      id: 12,
      title: "Premium & Discount Zones",
      description: "Identify premium and discount pricing using Fibonacci.",
    },
    {
      id: 13,
      title: "Institutional Trading",
      description: "Learn how banks and institutions trade the market.",
    },
    {
      id: 14,
      title: "Market Maker Model",
      description: "Understand how market makers create liquidity.",
    },
    {
      id: 15,
      title: "Wyckoff Theory",
      description: "Study accumulation, distribution, and market cycles.",
    },
    {
      id: 16,
      title: "Dow Theory",
      description: "Learn the foundation of trend analysis.",
    },
    {
      id: 17,
      title: "Elliott Wave Theory",
      description: "Understand impulsive and corrective market waves.",
    },
    {
      id: 18,
      title: "Advanced Fibonacci",
      description: "Master Fibonacci extensions and retracement levels.",
    },
    {
      id: 19,
      title: "Volume Profile",
      description: "Analyze market activity using volume distribution.",
    },
    {
      id: 20,
      title: "VWAP",
      description: "Use Volume Weighted Average Price for better entries.",
    },
    {
      id: 21,
      title: "Open Interest Analysis",
      description: "Analyze futures participation through open interest.",
    },
    {
      id: 22,
      title: "Funding Rate Analysis",
      description: "Interpret funding rates to understand market sentiment.",
    },
    {
      id: 23,
      title: "Long vs Short Ratio",
      description: "Track market positioning using long-short data.",
    },
    {
      id: 24,
      title: "Liquidation Heatmap",
      description: "Use liquidation maps to predict market volatility.",
    },
    {
      id: 25,
      title: "On-Chain Analysis",
      description: "Analyze blockchain data to understand market behavior.",
    },
    {
      id: 26,
      title: "Whale Tracking",
      description: "Monitor large crypto holders and their transactions.",
    },
    {
      id: 27,
      title: "Tokenomics",
      description: "Evaluate cryptocurrency supply and demand models.",
    },
    {
      id: 28,
      title: "Vesting Schedules",
      description: "Understand token unlocks and market impact.",
    },
    {
      id: 29,
      title: "Inflation vs Deflation Tokens",
      description: "Compare token supply models and their effects.",
    },
    {
      id: 30,
      title: "Crypto Market Cycles",
      description:
        "Identify accumulation, markup, distribution, and markdown phases.",
    },
    {
      id: 31,
      title: "Advanced Risk Management",
      description: "Protect your capital using professional risk strategies.",
    },
    {
      id: 32,
      title: "Portfolio Allocation",
      description: "Learn how professionals diversify crypto investments.",
    },
    {
      id: 33,
      title: "Correlation Analysis",
      description: "Analyze relationships between crypto assets.",
    },
    {
      id: 34,
      title: "Hedging Strategies",
      description: "Reduce trading risk using hedging techniques.",
    },
    {
      id: 35,
      title: "Options Trading Basics",
      description: "Introduction to crypto options trading.",
    },
    {
      id: 36,
      title: "Perpetual Futures",
      description: "Understand perpetual futures contracts in crypto.",
    },
    {
      id: 37,
      title: "Algorithmic Trading",
      description: "Learn how automated trading systems operate.",
    },
    {
      id: 38,
      title: "Trading Bots",
      description: "Understand crypto trading bots and automation.",
    },
    {
      id: 39,
      title: "Backtesting Strategies",
      description: "Test trading ideas using historical market data.",
    },
    {
      id: 40,
      title: "Building a Trading Strategy",
      description: "Create a complete rule-based trading system.",
    },
    {
      id: 41,
      title: "Advanced Trading Psychology",
      description: "Master emotional discipline and consistency.",
    },
    {
      id: 42,
      title: "Professional Trade Journaling",
      description: "Improve performance by tracking every trade.",
    },
    {
      id: 43,
      title: "Common Institutional Setups",
      description: "Study setups commonly used by professional traders.",
    },
    {
      id: 44,
      title: "Multi-Timeframe Analysis",
      description: "Combine higher and lower timeframes for precision entries.",
    },
    {
      id: 45,
      title: "News Trading",
      description: "Trade around economic and crypto news events.",
    },
    {
      id: 46,
      title: "Bitcoin Dominance Analysis",
      description: "Use BTC dominance to anticipate altcoin trends.",
    },
    {
      id: 47,
      title: "Advanced Altcoin Analysis",
      description: "Evaluate altcoins using technical and fundamental factors.",
    },
    {
      id: 48,
      title: "Creating a Professional Trading Plan",
      description:
        "Develop a complete trading blueprint for long-term success.",
    },
    {
      id: 49,
      title: "Professional Trading Routine",
      description: "Build daily habits followed by experienced traders.",
    },
    {
      id: 50,
      title: "Becoming a Consistent Trader",
      description:
        "Combine analysis, psychology, and risk management into a sustainable trading approach.",
    },
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="min-h-screen bg-[#050816] text-white py-25 md:py-35 px-6 lg:px-10">
        {/* Hero */}

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold">
            Advance <span className="text-[#FE4136]">Learning Hub</span>
          </h1>

          <p className="text-gray-400 mt-6 text-md leading-8">
            Master professional cryptocurrency trading through advanced lessons
            designed for experienced traders. Learn Smart Money Concepts,
            institutional trading, on-chain analysis, advanced risk management,
            and professional market strategies.
          </p>
        </div>

        {/* Search Bar */}

        {/* <div className="max-w-2xl mx-auto mt-14">
          <div className="flex items-center bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 focus-within:border-[#FE4136]">
            <FiSearch className="text-2xl text-gray-400" />

            <input
              type="text"
              placeholder="Search topics..."
              className="bg-transparent outline-none w-full ml-4 placeholder:text-gray-500 "
            />
          </div>
        </div> */}

        {/* Section Heading */}

        <div className="mt-16 mb-10">
          <h2 className="text-3xl font-bold">50 Advanced Lessons</h2>

          <p className="text-gray-400 mt-2">
            Build your crypto knowledge one lesson at a time.
          </p>
        </div>

        {/* Cards */}


        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {advancedTopics.slice(0, VisibleTopics).map((topic) => (
            <div
              key={topic.id}
              className="bg-[#111827] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FE4136] transition-all ease-in-out duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}

              <div className="h-52 bg-[#1f2937] flex items-center justify-center hover:scale-105 transition-all duration-500 overflow-hidden">
                <img className="h-full w-full" src={defaultImage} alt={topic.title} />
              </div>

              {/* Content */}

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold mb-4">{topic.title}</h2>

                <p className="text-gray-400 leading-7 line-clamp-3">
                  {topic.description}
                </p>

                <button className="mt-auto text-[#FE4136] hover:underline underline-offset-4 text-left font-semibold transition-all duration-500">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          {VisibleTopics < advancedTopics.length ? (
            <button
              onClick={() => setVisibleTopics((prev) => prev + 5)}
              className="
               bg-[#FE4136]
               hover:bg-red-700
               text-white
               px-8
               py-3
               rounded-xl
               font-semibold
               transition-all
               duration-300
               hover:scale-105
               active:scale-95
             "
            >
              Load More
            </button>
          ) : (
            <div className="text-gray-500 font-medium">
              You've reached the end 🚀
            </div>
          )}
        </div>

        <div className="flex justify-center mt-25 ">
          <span className="text-3xl font-semibold flex items-center gap-2 group">
            Go To{" "}
            <Link
              to="/learn"
              className="text-[#FE4136] group-hover:underline underline-offset-8"
            >
              Learning
            </Link>{" "}
            Page{" "}
            <span className="mt-2 animate-pulse transition-all duration-500">
              <FiArrowRight />
            </span>
          </span>
        </div>
      </section>
    </motion.div>
  );
}

export default AdvDetail;
