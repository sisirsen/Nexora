import { useState, useEffect } from "react";
import React from "react";
import { FaPlayCircle, FaArrowRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { icon } from "../../assets/images";

function AllVideos() {
  const [VisibleVids, setVisibleVids] = useState(8);

  let defaultImage = icon.videoCrypto;

  const Videos=[
    {
  id: 1,
  title: "What is Cryptocurrency?",
  creator: "Whiteboard Crypto",
  link: "https://www.youtube.com/results?search_query=Whiteboard+Crypto+What+is+Cryptocurrency",
},
{
  id: 2,
  title: "What is Blockchain?",
  creator: "Whiteboard Crypto",
  link: "https://www.youtube.com/results?search_query=Whiteboard+Crypto+Blockchain",
},
{
  id: 3,
  title: "What is Bitcoin?",
  creator: "Whiteboard Crypto",
  link: "https://www.youtube.com/results?search_query=Whiteboard+Crypto+Bitcoin",
},
{
  id: 4,
  title: "What is Ethereum?",
  creator: "Whiteboard Crypto",
  link: "https://www.youtube.com/results?search_query=Whiteboard+Crypto+Ethereum",
},
{
  id: 5,
  title: "Crypto Wallets Explained",
  creator: "Whiteboard Crypto",
  link: "https://www.youtube.com/results?search_query=Whiteboard+Crypto+Wallets",
},
{
  id: 6,
  title: "How Crypto Exchanges Work",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Coin+Bureau+Crypto+Exchanges",
},
{
  id: 7,
  title: "How to Buy Your First Crypto",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=How+to+Buy+Bitcoin+Coin+Bureau",
},
{
  id: 8,
  title: "Spot Trading Basics",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Spot+Trading+Crypto+Coin+Bureau",
},
{
  id: 9,
  title: "Introduction to Candlesticks",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Rayner+Teo+Candlestick+Basics",
},
{
  id: 10,
  title: "Support & Resistance",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Rayner+Teo+Support+Resistance",
},
{
  id: 11,
  title: "Trend Lines Explained",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Rayner+Teo+Trend+Lines",
},
{
  id: 12,
  title: "Trading Volume",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Rayner+Teo+Volume+Trading",
},
{
  id: 13,
  title: "Market Orders vs Limit Orders",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Market+Order+vs+Limit+Order+Rayner+Teo",
},
{
  id: 14,
  title: "Stop Loss & Take Profit",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Stop+Loss+Take+Profit+Rayner+Teo",
},
{
  id: 15,
  title: "Risk Management Basics",
  creator: "The Trading Channel",
  link: "https://www.youtube.com/results?search_query=Risk+Management+The+Trading+Channel",
},
{
  id: 16,
  title: "Moving Average (MA)",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Moving+Average+Rayner+Teo",
},
{
  id: 17,
  title: "Exponential Moving Average (EMA)",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=EMA+Trading+Rayner+Teo",
},
{
  id: 18,
  title: "Relative Strength Index (RSI)",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=RSI+Indicator+Rayner+Teo",
},
{
  id: 19,
  title: "MACD Indicator",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=MACD+Indicator+Rayner+Teo",
},
{
  id: 20,
  title: "Bollinger Bands",
  creator: "The Trading Channel",
  link: "https://www.youtube.com/results?search_query=Bollinger+Bands+The+Trading+Channel",
},
{
  id: 21,
  title: "Fibonacci Retracement",
  creator: "The Trading Channel",
  link: "https://www.youtube.com/results?search_query=Fibonacci+Retracement+The+Trading+Channel",
},
{
  id: 22,
  title: "Chart Patterns Explained",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Chart+Patterns+Rayner+Teo",
},
{
  id: 23,
  title: "Head and Shoulders Pattern",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Head+and+Shoulders+Pattern+Rayner+Teo",
},
{
  id: 24,
  title: "Double Top & Double Bottom",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Double+Top+Double+Bottom+Rayner+Teo",
},
{
  id: 25,
  title: "Triangle Chart Patterns",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Triangle+Chart+Patterns+Rayner+Teo",
},
{
  id: 26,
  title: "Flags & Pennants",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Flags+and+Pennants+Rayner+Teo",
},
{
  id: 27,
  title: "Breakout Trading Strategy",
  creator: "The Trading Channel",
  link: "https://www.youtube.com/results?search_query=Breakout+Trading+Strategy+The+Trading+Channel",
},
{
  id: 28,
  title: "How to Avoid Fake Breakouts",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Fake+Breakout+Rayner+Teo",
},
{
  id: 29,
  title: "Multi-Timeframe Analysis",
  creator: "The Trading Channel",
  link: "https://www.youtube.com/results?search_query=Multi+Timeframe+Analysis+The+Trading+Channel",
},
{
  id: 30,
  title: "Trading Psychology for Beginners",
  creator: "Mark Douglas",
  link: "https://www.youtube.com/results?search_query=Mark+Douglas+Trading+Psychology",
},
{
  id: 31,
  title: "Volume Profile",
  creator: "TraderSZ",
  link: "https://www.youtube.com/results?search_query=Volume+Profile+TraderSZ",
},
{
  id: 32,
  title: "VWAP (Volume Weighted Average Price)",
  creator: "The Trading Channel",
  link: "https://www.youtube.com/results?search_query=VWAP+Trading+The+Trading+Channel",
},
{
  id: 33,
  title: "Open Interest Analysis",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Open+Interest+Crypto+Coin+Bureau",
},
{
  id: 34,
  title: "Funding Rate Analysis",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Funding+Rate+Crypto+Coin+Bureau",
},
{
  id: 35,
  title: "Long vs Short Ratio",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Long+vs+Short+Ratio+Crypto",
},
{
  id: 36,
  title: "Liquidation Heatmap",
  creator: "CryptoCred",
  link: "https://www.youtube.com/results?search_query=Liquidation+Heatmap+CryptoCred",
},
{
  id: 37,
  title: "Bitcoin Dominance",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Bitcoin+Dominance+Coin+Bureau",
},
{
  id: 38,
  title: "Crypto Market Cycles",
  creator: "Benjamin Cowen",
  link: "https://www.youtube.com/results?search_query=Benjamin+Cowen+Crypto+Market+Cycles",
},
{
  id: 39,
  title: "On-Chain Analysis",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=On+Chain+Analysis+Coin+Bureau",
},
{
  id: 40,
  title: "Whale Tracking",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Whale+Tracking+Crypto+Coin+Bureau",
},
{
  id: 41,
  title: "Tokenomics Explained",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Tokenomics+Coin+Bureau",
},
{
  id: 42,
  title: "Vesting Schedules",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Crypto+Vesting+Schedule+Coin+Bureau",
},
{
  id: 43,
  title: "Portfolio Allocation",
  creator: "Benjamin Cowen",
  link: "https://www.youtube.com/results?search_query=Crypto+Portfolio+Allocation+Benjamin+Cowen",
},
{
  id: 44,
  title: "Hedging Strategies",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Crypto+Hedging+Strategies+Coin+Bureau",
},
{
  id: 45,
  title: "Options Trading Basics",
  creator: "ProjectFinance",
  link: "https://www.youtube.com/results?search_query=Crypto+Options+Trading+ProjectFinance",
},
{
  id: 46,
  title: "Perpetual Futures",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Perpetual+Futures+Crypto+Coin+Bureau",
},
{
  id: 47,
  title: "Algorithmic Trading",
  creator: "freeCodeCamp",
  link: "https://www.youtube.com/results?search_query=Algorithmic+Trading+Python+freeCodeCamp",
},
{
  id: 48,
  title: "Trading Bots",
  creator: "3Commas",
  link: "https://www.youtube.com/results?search_query=Crypto+Trading+Bots+3Commas",
},
{
  id: 49,
  title: "Backtesting Trading Strategies",
  creator: "TradingView",
  link: "https://www.youtube.com/results?search_query=TradingView+Backtesting+Strategies",
},
{
  id: 50,
  title: "Building a Profitable Trading Strategy",
  creator: "The Trading Channel",
  link: "https://www.youtube.com/results?search_query=Build+Profitable+Trading+Strategy+The+Trading+Channel",
},
{
  id: 51,
  title: "What is Smart Money Concepts (SMC)?",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Smart+Money+Concepts",
},
{
  id: 52,
  title: "Market Structure",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Market+Structure",
},
{
  id: 53,
  title: "Break of Structure (BOS)",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Break+of+Structure",
},
{
  id: 54,
  title: "Change of Character (CHoCH)",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+CHoCH",
},
{
  id: 55,
  title: "Market Structure Shift (MSS)",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Market+Structure+Shift",
},
{
  id: 56,
  title: "Liquidity Explained",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Liquidity",
},
{
  id: 57,
  title: "Liquidity Sweep",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Liquidity+Sweep",
},
{
  id: 58,
  title: "Equal Highs & Equal Lows",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Equal+Highs+Equal+Lows",
},
{
  id: 59,
  title: "Internal vs External Liquidity",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Internal+External+Liquidity",
},
{
  id: 60,
  title: "Inducement",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Inducement",
},
{
  id: 61,
  title: "Order Blocks",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Order+Blocks",
},
{
  id: 62,
  title: "Breaker Blocks",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Breaker+Blocks",
},
{
  id: 63,
  title: "Mitigation Blocks",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Mitigation+Blocks",
},
{
  id: 64,
  title: "Fair Value Gap (FVG)",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Fair+Value+Gap",
},
{
  id: 65,
  title: "Inverse Fair Value Gap (IFVG)",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Inverse+Fair+Value+Gap",
},
{
  id: 66,
  title: "Premium & Discount Zones",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Premium+Discount+Zones",
},
{
  id: 67,
  title: "Optimal Trade Entry (OTE)",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Optimal+Trade+Entry",
},
{
  id: 68,
  title: "Balanced Price Range (BPR)",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Balanced+Price+Range",
},
{
  id: 69,
  title: "Institutional Order Flow",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Institutional+Order+Flow",
},
{
  id: 70,
  title: "Market Maker Model",
  creator: "Inner Circle Trader (ICT)",
  link: "https://www.youtube.com/results?search_query=ICT+Market+Maker+Model",
},
{
  id: 71,
  title: "Wyckoff Method",
  creator: "TraderLion",
  link: "https://www.youtube.com/results?search_query=TraderLion+Wyckoff+Method",
},
{
  id: 72,
  title: "Wyckoff Accumulation",
  creator: "TraderLion",
  link: "https://www.youtube.com/results?search_query=Wyckoff+Accumulation+TraderLion",
},
{
  id: 73,
  title: "Wyckoff Distribution",
  creator: "TraderLion",
  link: "https://www.youtube.com/results?search_query=Wyckoff+Distribution+TraderLion",
},
{
  id: 74,
  title: "Dow Theory",
  creator: "Rayner Teo",
  link: "https://www.youtube.com/results?search_query=Dow+Theory+Rayner+Teo",
},
{
  id: 75,
  title: "Elliott Wave Theory",
  creator: "Elliott Wave International",
  link: "https://www.youtube.com/results?search_query=Elliott+Wave+Theory",
},
{
  id: 76,
  title: "Advanced Fibonacci",
  creator: "The Trading Channel",
  link: "https://www.youtube.com/results?search_query=Advanced+Fibonacci+Trading",
},
{
  id: 77,
  title: "Volume Profile",
  creator: "TraderSZ",
  link: "https://www.youtube.com/results?search_query=Volume+Profile+TraderSZ",
},
{
  id: 78,
  title: "Volume Spread Analysis (VSA)",
  creator: "TraderSZ",
  link: "https://www.youtube.com/results?search_query=Volume+Spread+Analysis",
},
{
  id: 79,
  title: "Footprint Charts",
  creator: "TraderSZ",
  link: "https://www.youtube.com/results?search_query=Footprint+Charts+Trading",
},
{
  id: 80,
  title: "Cumulative Volume Delta (CVD)",
  creator: "TraderSZ",
  link: "https://www.youtube.com/results?search_query=CVD+Trading",
},
{
  id: 81,
  title: "Delta Analysis",
  creator: "TraderSZ",
  link: "https://www.youtube.com/results?search_query=Delta+Analysis+Trading",
},
{
  id: 82,
  title: "Depth of Market (DOM)",
  creator: "TraderSZ",
  link: "https://www.youtube.com/results?search_query=Depth+of+Market+Trading",
},
{
  id: 83,
  title: "Auction Market Theory",
  creator: "TraderSZ",
  link: "https://www.youtube.com/results?search_query=Auction+Market+Theory",
},
{
  id: 84,
  title: "Market Profile",
  creator: "TraderSZ",
  link: "https://www.youtube.com/results?search_query=Market+Profile+Trading",
},
{
  id: 85,
  title: "Order Flow Trading",
  creator: "TraderSZ",
  link: "https://www.youtube.com/results?search_query=Order+Flow+Trading",
},
{
  id: 86,
  title: "Liquidity Void",
  creator: "ICT",
  link: "https://www.youtube.com/results?search_query=ICT+Liquidity+Void",
},
{
  id: 87,
  title: "Power of Three (AMD)",
  creator: "ICT",
  link: "https://www.youtube.com/results?search_query=ICT+Power+of+Three+AMD",
},
{
  id: 88,
  title: "Silver Bullet Strategy",
  creator: "ICT",
  link: "https://www.youtube.com/results?search_query=ICT+Silver+Bullet",
},
{
  id: 89,
  title: "Kill Zones",
  creator: "ICT",
  link: "https://www.youtube.com/results?search_query=ICT+Kill+Zones",
},
{
  id: 90,
  title: "ICT Daily Bias",
  creator: "ICT",
  link: "https://www.youtube.com/results?search_query=ICT+Daily+Bias",
},
{
  id: 91,
  title: "MEV (Maximal Extractable Value)",
  creator: "Finematics",
  link: "https://www.youtube.com/results?search_query=MEV+Explained+Finematics",
},
{
  id: 92,
  title: "Sandwich Attacks",
  creator: "Finematics",
  link: "https://www.youtube.com/results?search_query=Sandwich+Attack+Crypto+Finematics",
},
{
  id: 93,
  title: "Cross-Chain Bridges",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Cross+Chain+Bridge+Crypto+Coin+Bureau",
},
{
  id: 94,
  title: "Layer 2 Ecosystem",
  creator: "Coin Bureau",
  link: "https://www.youtube.com/results?search_query=Ethereum+Layer+2+Explained+Coin+Bureau",
},
{
  id: 95,
  title: "Smart Contract Security",
  creator: "Patrick Collins",
  link: "https://www.youtube.com/results?search_query=Smart+Contract+Security+Patrick+Collins",
},
{
  id: 96,
  title: "Solidity for Beginners",
  creator: "freeCodeCamp",
  link: "https://www.youtube.com/results?search_query=Solidity+Course+freeCodeCamp",
},
{
  id: 97,
  title: "Algorithmic Trading",
  creator: "freeCodeCamp",
  link: "https://www.youtube.com/results?search_query=Algorithmic+Trading+Python+freeCodeCamp",
},
{
  id: 98,
  title: "Trading Bots & Automation",
  creator: "3Commas",
  link: "https://www.youtube.com/results?search_query=Crypto+Trading+Bots+3Commas",
},
{
  id: 99,
  title: "Professional Trading Routine",
  creator: "TraderSZ",
  link: "https://www.youtube.com/results?search_query=Professional+Trading+Routine",
},
{
  id: 100,
  title: "Becoming a Consistent Trader",
  creator: "Mark Douglas",
  link: "https://www.youtube.com/results?search_query=Become+Consistent+Trader+Mark+Douglas",
}];

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
      <div className="py-30 px-10">
        <div className="mb-16">
          {/* Heading */}

          <div className="text-center max-w-6xl mx-auto">

            <h1 className="text-5xl text-white lg:text-5xl font-bold mt-4">
              Watch & Learn <span className="text-red-500">Crypto</span> Like a Pro
            </h1>
          </div>

          <div className="mt-26 mb-5">
          <h2 className="text-3xl font-bold text-white">100 Video Lessons</h2>

          <p className="text-gray-400 mt-2">
            Build your crypto knowledge one lesson at a time.
          </p>
        </div>

          {/* Search Bar */}

          {/* <div className="max-w-2xl mx-auto mt-12 ">
            <div className="flex items-center bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 transition-all duration-300 focus-within:border-[#FE4136]">
              <FiSearch className="text-2xl text-gray-400" />

              <input
                type="text"
                placeholder="Search videos..."
                className="bg-transparent outline-none w-full ml-4 text-white placeholder:text-gray-500"
              />
            </div>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">
          {Videos.slice(0, VisibleVids).map((video, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-[30px] overflow-hidden hover:border-[#FE4136] transition-all duration-500 group"
            >
              <div className="relative">
                <img
                  src={defaultImage}
                  alt={video.title}
                  className="w-full h-[250px] object-cover"
                />

                <div className="absolute inset-0 bg-black/30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <FaPlayCircle className="text-6xl text-[#FE4136]" />
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl text-white font-semibold mt-2">
                  {video.title}
                </h3>

                <p className="text-gray-400 mt-3">Creator: {video.creator}</p>

                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-[#FE4136] flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  Watch Video
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          {VisibleVids < Videos.length ? (
            <button
              onClick={() => setVisibleVids((prev) => prev + 4)}
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
      </div>
    </motion.div>
  );
}

export default AllVideos;
