import React from "react";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {icon} from "../../assets/images";

const BeginnerDetail = () => {
  const [VisibleTopics, setVisibleTopics] = useState(10);

  const defaultImage = icon.beginnerimage;

  const beginnerTopics = [
    {
      id: 1,
      title: "What is Cryptocurrency?",
      description:
        "Learn what cryptocurrency is, how digital currencies work, and why they are changing finance.",
      // image: icon.beginnerimage,
    },
    {
      id: 2,
      title: "What is Blockchain?",
      description:
        "Understand blockchain technology and why it is the backbone of cryptocurrencies.",
      // image: img2,
    },
    {
      id: 3,
      title: "What is Bitcoin?",
      description:
        "Discover Bitcoin, the first cryptocurrency, and why it is the market leader.",
      // image: img3,
    },
    {
      id: 4,
      title: "What is Ethereum?",
      description:
        "Learn about Ethereum, smart contracts, and decentralized applications.",
      // image: icon.beginnerimage,
    },
    {
      id: 5,
      title: "What is Crypto Trading?",
      description:
        "Understand the basics of buying and selling cryptocurrencies for profit.",
      // image: img1,
    },
    {
      id: 6,
      title: "How to Start Crypto Trading?",
      description:
        "A beginner-friendly guide to entering the cryptocurrency market safely.",
      // image: img2,
    },
    {
      id: 7,
      title: "Centralized vs Decentralized",
      description:
        "Compare centralized systems with decentralized blockchain networks.",
      // image: img3,
    },
    {
      id: 8,
      title: "What are Stablecoins?",
      description: "Learn how stablecoins reduce price volatility in crypto.",
      // image: img4,
    },
    {
      id: 9,
      title: "What are Altcoins?",
      description:
        "Explore cryptocurrencies other than Bitcoin and understand their purpose.",
      // image: img1,
    },
    {
      id: 10,
      title: "What are Meme Coins?",
      description:
        "Learn why meme coins become popular and the risks behind them.",
      // image: img2,
    },
    {
      id: 11,
      title: "What is Binance?",
      description:
        "Explore one of the world's biggest cryptocurrency exchanges.",
      // image: img3,
    },
    {
      id: 12,
      title: "What is Bybit?",
      description:
        "Learn about the Bybit exchange and its beginner-friendly features.",
      // image: img4,
    },
    {
      id: 13,
      title: "How to Create an Exchange Account?",
      description:
        "Step-by-step overview of opening your first crypto exchange account.",
      // image: img1,
    },
    {
      id: 14,
      title: "What is KYC?",
      description:
        "Understand Know Your Customer verification and why exchanges require it.",
      // image: img2,
    },
    {
      id: 15,
      title: "How to Deposit Money?",
      description:
        "Learn different methods of adding funds to your crypto exchange account.",
      // image: img3,
    },
    {
      id: 16,
      title: "How to Buy Cryptocurrency?",
      description:
        "Learn how beginners can purchase their first cryptocurrency safely.",
      // image: img4,
    },
    {
      id: 17,
      title: "How to Sell Cryptocurrency?",
      description:
        "Understand how to sell crypto and convert it back into cash.",
      // image: img1,
    },
    {
      id: 18,
      title: "Withdrawal Process",
      description: "Learn how to withdraw cryptocurrency or money securely.",
      // image: img2,
    },
    {
      id: 19,
      title: "Exchange Fees",
      description:
        "Understand trading fees, withdrawal fees, and hidden charges.",
      // image: img3,
    },
    {
      id: 20,
      title: "What is a Crypto Wallet?",
      description:
        "Learn what crypto wallets are and why every investor needs one.",
      // image: img4,
    },
    {
      id: 21,
      title: "Hot Wallet",
      description:
        "Learn what hot wallets are, how they work, and when you should use them.",
      // image: img1,
    },
    {
      id: 22,
      title: "Cold Wallet",
      description:
        "Understand cold wallets and why they are considered the safest storage option.",
      // image: img2,
    },
    {
      id: 23,
      title: "MetaMask Wallet",
      description:
        "Explore MetaMask and learn how to connect it with decentralized applications.",
      // image: img3,
    },
    {
      id: 24,
      title: "Trust Wallet",
      description:
        "Learn about Trust Wallet and its features for storing digital assets securely.",
      // image: img4,
    },
    {
      id: 25,
      title: "Seed Phrase",
      description:
        "Understand the importance of seed phrases and how to keep them safe.",
      // image: img1,
    },
    {
      id: 26,
      title: "Private Key",
      description:
        "Learn what a private key is and why you should never share it.",
      // image: img2,
    },
    {
      id: 27,
      title: "Public Key",
      description:
        "Discover how public keys are used to receive cryptocurrencies securely.",
      // image: img3,
    },
    {
      id: 28,
      title: "Hardware Wallet",
      description:
        "Learn why hardware wallets offer one of the highest levels of crypto security.",
      // image: img4,
    },
    {
      id: 29,
      title: "Wallet Security",
      description:
        "Best practices to protect your crypto wallet from hackers and scams.",
      // image: img1,
    },
    {
      id: 30,
      title: "What is Spot Trading?",
      description:
        "Understand spot trading and how cryptocurrencies are bought and sold instantly.",
      // image: img2,
    },
    {
      id: 31,
      title: "What is Futures Trading?",
      description:
        "Learn how futures trading works and why it carries higher risk.",
      // image: img3,
    },
    {
      id: 32,
      title: "What is Margin Trading?",
      description:
        "Understand borrowing funds for trading and the risks involved.",
      // image: img4,
    },
    {
      id: 33,
      title: "What is Leverage?",
      description:
        "Learn how leverage increases both potential profits and potential losses.",
      // image: img1,
    },
    {
      id: 34,
      title: "Long Position",
      description:
        "Discover how traders profit when cryptocurrency prices increase.",
      // image: img2,
    },
    {
      id: 35,
      title: "Short Position",
      description:
        "Learn how traders can potentially profit from falling cryptocurrency prices.",
      // image: img3,
    },
    {
      id: 36,
      title: "Market Order",
      description:
        "Understand market orders and when they should be used while trading.",
      // image: img4,
    },
    {
      id: 37,
      title: "Limit Order",
      description:
        "Learn how limit orders help you buy or sell at your desired price.",
      // image: img1,
    },
    {
      id: 38,
      title: "Stop Loss",
      description:
        "Discover how stop-loss orders help reduce losses during market downturns.",
      // image: img2,
    },
    {
      id: 39,
      title: "Take Profit",
      description:
        "Learn how take-profit orders automatically lock in your profits.",
      // image: img3,
    },
    {
      id: 40,
      title: "Risk Management",
      description:
        "Understand why managing risk is more important than chasing profits.",
      // image: img4,
    },
    {
      id: 41,
      title: "Candlestick Charts",
      description:
        "Learn how candlestick charts represent price movements and help traders analyze the market.",
      // image: img1,
    },
    {
      id: 42,
      title: "Support Level",
      description:
        "Understand support levels and why prices often bounce from these zones.",
      // image: img2,
    },
    {
      id: 43,
      title: "Resistance Level",
      description:
        "Learn how resistance levels can stop prices from moving higher.",
      // image: img3,
    },
    {
      id: 44,
      title: "Trend Lines",
      description:
        "Discover how trend lines help identify market direction and momentum.",
      // image: img4,
    },
    {
      id: 45,
      title: "Trading Volume",
      description:
        "Understand why trading volume is important when analyzing market strength.",
      // image: img1,
    },
    {
      id: 46,
      title: "Bull Market",
      description:
        "Learn what a bull market is and why prices continue rising during this phase.",
      // image: img2,
    },
    {
      id: 47,
      title: "Bear Market",
      description:
        "Understand bear markets and how experienced traders manage risk during downturns.",
      // image: img3,
    },
    {
      id: 48,
      title: "Market Capitalization",
      description:
        "Learn what market cap means and why investors use it to compare cryptocurrencies.",
      // image: img4,
    },
    {
      id: 49,
      title: "Liquidity",
      description:
        "Understand liquidity and why highly liquid markets are easier to trade.",
      // image: img1,
    },
    {
      id: 50,
      title: "Volatility",
      description:
        "Learn why cryptocurrency prices move rapidly and how volatility affects trading.",
      // image: img2,
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
            Beginner <span className="text-[#FE4136]">Learning Hub</span>
          </h1>

          <p className="text-gray-400 mt-6 text-md leading-8">
            Start your cryptocurrency journey with beginner-friendly lessons.
            Learn blockchain, wallets, exchanges, trading basics, charts.
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
          <h2 className="text-3xl font-bold">50 Beginner Lessons</h2>

          <p className="text-gray-400 mt-2">
            Build your crypto knowledge one lesson at a time.
          </p>
        </div>

        {/* Cards */}

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {beginnerTopics.slice(0, VisibleTopics).map((topic) => (
            <div
              key={topic.id}
              className="bg-[#111827] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FE4136] transition-all ease-in-out duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}

              <div className="h-52 bg-[#1f2937] flex items-center justify-center hover:scale-105 transition-all duration-500 overflow-hidden">
                <img src={defaultImage} alt={topic.title} />
              </div>

              {/* Content */}

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold mb-4">{topic.title}</h2>

                <p className="text-gray-400 leading-7 line-clamp-3">
                  {topic.description}
                </p>

                <button className="mt-auto text-[#FE4136] hover:underline underline-offset-4 text-left font-semibold transition-all duration-500 cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* load more */}
        <div className="flex justify-center mt-12">
          {VisibleTopics < beginnerTopics.length ? (
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
              to="/learn/intermediateDetail"
              className="text-[#FE4136] group-hover:underline"
            >
              Intermediate
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
};

export default BeginnerDetail;
