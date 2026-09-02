import React from "react";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {icon} from '../../assets/images'
function IntermediateDetail() {
  const [VisibleTopics, setVisibleTopics] = useState(10);

  let defaultimage= icon.intermediateimage
  const intermediateTopics = [
    {
      id: 1,
      title: "Introduction to Technical Analysis",
      description:
        "Learn how traders analyze price charts to predict market movements.",
    },
    {
      id: 2,
      title: "Reading Candlestick Patterns",
      description:
        "Understand popular candlestick patterns like Doji, Hammer, and Engulfing.",
    },
    {
      id: 3,
      title: "Support & Resistance in Depth",
      description: "Master identifying strong support and resistance zones.",
    },
    {
      id: 4,
      title: "Trend Identification",
      description:
        "Learn to identify uptrends, downtrends, and sideways markets.",
    },
    {
      id: 5,
      title: "Trendline Trading",
      description: "Use trendlines to spot entries, exits, and reversals.",
    },
    {
      id: 6,
      title: "Moving Average (MA)",
      description: "Understand how moving averages smooth price action.",
    },
    {
      id: 7,
      title: "Exponential Moving Average (EMA)",
      description: "Learn why traders prefer EMA for short-term analysis.",
    },
    {
      id: 8,
      title: "Relative Strength Index (RSI)",
      description: "Identify overbought and oversold market conditions.",
    },
    {
      id: 9,
      title: "MACD Indicator",
      description: "Use MACD to identify momentum and trend reversals.",
    },
    {
      id: 10,
      title: "Bollinger Bands",
      description: "Understand market volatility using Bollinger Bands.",
    },
    {
      id: 11,
      title: "Volume Analysis",
      description: "Learn how trading volume confirms price movements.",
    },
    {
      id: 12,
      title: "Fibonacci Retracement",
      description: "Use Fibonacci levels to find support and resistance.",
    },
    {
      id: 13,
      title: "Breakout Trading",
      description: "Identify and trade breakout opportunities.",
    },
    {
      id: 14,
      title: "Fake Breakouts",
      description: "Learn how to avoid false breakout traps.",
    },
    {
      id: 15,
      title: "Chart Patterns",
      description: "Recognize common chart formations used by traders.",
    },
    {
      id: 16,
      title: "Head and Shoulders",
      description: "Understand one of the strongest reversal patterns.",
    },
    {
      id: 17,
      title: "Double Top & Double Bottom",
      description: "Learn to identify market reversal formations.",
    },
    {
      id: 18,
      title: "Triangles",
      description: "Trade ascending, descending, and symmetrical triangles.",
    },
    {
      id: 19,
      title: "Flags & Pennants",
      description: "Spot continuation patterns during strong trends.",
    },
    {
      id: 20,
      title: "Risk to Reward Ratio",
      description: "Calculate profitable trades using risk-reward analysis.",
    },
    {
      id: 21,
      title: "Position Sizing",
      description: "Determine the correct trade size for your account.",
    },
    {
      id: 22,
      title: "Trading Psychology",
      description: "Understand how emotions affect trading decisions.",
    },
    {
      id: 23,
      title: "Fear & Greed",
      description: "Recognize emotional market cycles.",
    },
    {
      id: 24,
      title: "FOMO Trading",
      description: "Learn how to avoid Fear Of Missing Out.",
    },
    {
      id: 25,
      title: "Overtrading",
      description: "Understand why trading too much reduces profits.",
    },
    {
      id: 26,
      title: "Trading Journal",
      description: "Track every trade to improve performance.",
    },
    {
      id: 27,
      title: "Scalping",
      description: "Learn short-term trading strategies.",
    },
    {
      id: 28,
      title: "Day Trading",
      description: "Understand buying and selling within a single day.",
    },
    {
      id: 29,
      title: "Swing Trading",
      description: "Capture larger market movements over several days.",
    },
    {
      id: 30,
      title: "Position Trading",
      description: "Hold trades for weeks or months based on trends.",
    },
    {
      id: 31,
      title: "Support Flip & Resistance Flip",
      description: "Use flipped levels as new trading opportunities.",
    },
    {
      id: 32,
      title: "Liquidity Zones",
      description: "Find areas where large traders place orders.",
    },
    {
      id: 33,
      title: "Market Structure",
      description: "Understand higher highs, lower lows, and trend shifts.",
    },
    {
      id: 34,
      title: "Supply & Demand",
      description: "Learn institutional buying and selling zones.",
    },
    {
      id: 35,
      title: "Order Blocks",
      description: "Identify institutional order block areas.",
    },
    {
      id: 36,
      title: "Fair Value Gap (FVG)",
      description: "Understand price imbalances in the market.",
    },
    {
      id: 37,
      title: "Liquidity Sweep",
      description: "Recognize stop-loss hunting by large players.",
    },
    {
      id: 38,
      title: "Market Sessions",
      description:
        "Learn the differences between Asian, London, and New York sessions.",
    },
    {
      id: 39,
      title: "Correlation Between Coins",
      description: "Understand how Bitcoin influences altcoins.",
    },
    {
      id: 40,
      title: "Bitcoin Dominance",
      description: "Use BTC dominance to analyze market direction.",
    },
    {
      id: 41,
      title: "Funding Rate",
      description: "Learn how funding rates affect futures trading.",
    },
    {
      id: 42,
      title: "Open Interest",
      description: "Understand open interest and market participation.",
    },
    {
      id: 43,
      title: "Liquidation",
      description: "Learn why leveraged positions get liquidated.",
    },
    {
      id: 44,
      title: "Leverage Risks",
      description: "Understand the dangers of excessive leverage.",
    },
    {
      id: 45,
      title: "Portfolio Diversification",
      description: "Reduce risk by investing across multiple assets.",
    },
    {
      id: 46,
      title: "Dollar Cost Averaging (DCA)",
      description: "Build long-term positions through regular investments.",
    },
    {
      id: 47,
      title: "Profit Booking",
      description: "Learn when to take profits instead of holding forever.",
    },
    {
      id: 48,
      title: "Common Trading Mistakes",
      description: "Avoid the mistakes that most intermediate traders make.",
    },
    {
      id: 49,
      title: "Building a Trading Plan",
      description: "Create a structured plan before entering any trade.",
    },
    {
      id: 50,
      title: "Complete Trade Setup",
      description:
        "Combine technical analysis, risk management, and psychology into one trading strategy.",
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
            Intermediate <span className="text-[#FE4136]">Learning Hub</span>
          </h1>

          <p className="text-gray-400 mt-6 text-md leading-8">
            Take your crypto knowledge to the next level with comprehensive
            intermediate lessons covering technical analysis, market psychology,
            trading strategies, and essential risk management techniques.
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
          <h2 className="text-3xl font-bold">50 Intermediate Lessons</h2>

          <p className="text-gray-400 mt-2">
            Build your crypto knowledge one lesson at a time.
          </p>
        </div>

        {/* Cards */}

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {intermediateTopics.slice(0, VisibleTopics).map((topic) => (
            <div
              key={topic.id}
              className="bg-[#111827] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FE4136] transition-all ease-in-out duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}

              <div className="h-52 bg-[#1f2937] flex items-center justify-center hover:scale-105 transition-all duration-500 overflow-hidden">
                <img className="h-full w-full" src={defaultimage} alt={topic.title} />
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

        {/* load more */}
        <div className="flex justify-center mt-12">
          {VisibleTopics < intermediateTopics.length ? (
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
              to="/learn/advDetail"
              className="text-[#FE4136] group-hover:underline"
            >
              Advance
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

export default IntermediateDetail;
