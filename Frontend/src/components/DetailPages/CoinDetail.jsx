import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaGlobe, FaGithub, FaDiscord, FaReddit } from "react-icons/fa";
import { motion } from "framer-motion";
import Chart from "../Subpages/Chart";
import { FiAlertOctagon } from "react-icons/fi";

import { SiX } from "react-icons/si";

import { HiDocumentText } from "react-icons/hi2";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { div } from "framer-motion/client";

function CoinDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 const exchanges = [
  {
    id:1,
    name: "Binance",
    logo: "https://cdn.simpleicons.org/binance/F3BA2F",
    desc: "Trade on the world's largest crypto exchange.",
    link: "https://www.binance.com/",
  },
  {
    id:2,
    name: "Bybit",
    logo: "https://images.seeklogo.com/logo-png/41/1/bybit-logo-png_seeklogo-412982.png",
    desc: "Buy and trade cryptocurrencies with low fees.",
    link: "https://www.bybit.com/",
  },
  {
    id:3,
    name: "Coinbase",
    logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    desc: "Beginner-friendly cryptocurrency exchange.",
    link: "https://www.coinbase.com/",
  },
  {
    id:4,
    name: "KuCoin",
    logo: "https://cryptologos.cc/logos/kucoin-token-kcs-logo.png",
    desc: "Trade hundreds of digital assets.",
    link: "https://www.kucoin.com/",
  }
];



  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState("");
  const [readMore, setReadMore] = useState(false)
  const [showWatchlist, setshowWatchlist] = useState(false)

  async function fetchCoin() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`,
      );

      const data = await response.json();

      setCoin(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const LoadingComponent = () => {
    return (
      <div className="w-full flex justify-center items-center py-40">
        <div className="bg-[#111111] border border-white/10 hover:border-[#FE4136] rounded-xl px-10 py-8 flex flex-col items-center gap-5 transition-all duration-500">
          <div className="w-10 h-10 border-4 border-[#FE4136] rounded-[16px] animate-spin"></div>

          <p className="text-white text-lg">Fetching live market data...</p>
        </div>
      </div>
    );
  };

  const ErrorComponent = () => {
    return (
      <div className="w-full flex justify-center py-40">
        <div className="bg-[#111111] border border-red-500 rounded-xl p-8 text-center">
          <h2 className="text-red-500 text-xl font-bold">
            Failed to load market data
          </h2>

          <p className="text-gray-400 mt-2">
            Please check your internet connection.
          </p>

          <button
            onClick={fetchCoin}
            className="mt-6 px-6 py-3 bg-[#FE4136] rounded-lg text-white hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetchCoin();
  }, [id]);

  if (loading) {
    return <LoadingComponent />;
  }

  if (Error) {
    return <ErrorComponent />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-[#020617] min-h-screen text-white py-32 px-7">
        <div className="">
          {/* Header */}
          <div className="flex flex-row justify-center md:justify-normal items-center gap-6">
            <img src={coin.image.large} alt={coin.name} className="w-20 h-20" />

            <div>
              <h1 className=" text-3xl font-bold">
                {coin.name} {" "}
                <span className="text-[#FE4136] text-2xl rounded-full mt-3">
                  #{coin.market_cap_rank}
                </span>
              </h1>

              <p className="uppercase text-gray-400 text-xl mt-2">
                {coin.symbol}
              </p>
            </div>
          </div>

          {/* Price */}

          <div className="mt-5 pl-3 flex gap-3 md:justify-normal justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              ₹ {coin.market_data.current_price.inr.toLocaleString()}
            </h2>

            <p
              className={`md:text-xl flex items-center gap-1 font-semibold ${
                coin.market_data.price_change_percentage_24h >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {coin.market_data.price_change_percentage_24h >= 0 ? (
                <FaArrowUp />
              ) : (
                <FaArrowDown />
              )}
              {coin.market_data.price_change_percentage_24h.toFixed(2)}%
            </p>

           <div className="relative group w-fit">
             <button onClick={()=> setshowWatchlist(!showWatchlist)} className="text-white text-3xl cursor-pointer transition-all duration-500">
              {showWatchlist? <FaStar /> : <FiStar/>}
            </button>

            {showWatchlist ? 
    <div
      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                 hidden group-hover:block
                 bg-gray-700 font-bold text-white text-xs
                 px-3 py-2 rounded-md whitespace-nowrap transition-all duration-500"
    >
      Coin Is Added To Watchlist
    </div>

    :

    <div
      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                 hidden group-hover:block
                 bg-gray-700 font-bold text-white text-xs
                 px-3 py-2 rounded-md whitespace-nowrap transition-all duration-500"
    >
      Add To Watchlist
    </div>
  }
           </div>
          </div>

          <div className="md:flex justify-between ">
            <div className="">
            <Chart />
          </div>

          {/* Stats */}

          <div className="mt-10 md:w-[720px]">
            <h2 className="text-3xl font-bold mb-6">Market Statistics</h2>

            <div className="space-y-4">
              {/* Market Cap */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">Market Cap</span>
                <span className="font-semibold">
                  ₹ {coin.market_data.market_cap.inr.toLocaleString()}
                </span>
              </div>

              {/* 24H Volume */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">24H Volume</span>
                <span className="font-semibold">
                  ₹ {coin.market_data.total_volume.inr.toLocaleString()}
                </span>
              </div>

              {/* Circulating Supply */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">Circulating Supply</span>
                <span className="font-semibold">
                  {coin.market_data.circulating_supply.toLocaleString()}{" "}
                  {coin.symbol.toUpperCase()}
                </span>
              </div>

              {/* Total Supply */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">Total Supply</span>
                <span className="font-semibold">
                  {coin.market_data.total_supply
                    ? `${coin.market_data.total_supply.toLocaleString()} ${coin.symbol.toUpperCase()}`
                    : "N/A"}
                </span>
              </div>

              {/* Max Supply */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">Max Supply</span>
                <span className="font-semibold">
                  {coin.market_data.max_supply
                    ? `${coin.market_data.max_supply.toLocaleString()} ${coin.symbol.toUpperCase()}`
                    : "Unlimited"}
                </span>
              </div>

              {/* Fully Diluted Valuation */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">Fully Diluted Valuation</span>
                <span className="font-semibold">
                  {coin.market_data.fully_diluted_valuation?.inr
                    ? `₹ ${coin.market_data.fully_diluted_valuation.inr.toLocaleString()}`
                    : "N/A"}
                </span>
              </div>

              {/* 24H High */}
              {/* <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">24H High</span>
                <span className="font-semibold text-green-500">
                  ₹ {coin.market_data.high_24h.inr.toLocaleString()}
                </span>
              </div> */}

              {/* 24H Low */}
              {/* <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">24H Low</span>
                <span className="font-semibold text-red-500">
                  ₹ {coin.market_data.low_24h.inr.toLocaleString()}
                </span>
              </div> */}

              {/* All Time High */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">All-Time High (ATH)</span>
                <span className="font-semibold text-green-500">
                  ₹ {coin.market_data.ath.inr.toLocaleString()}
                </span>
              </div>

              {/* ATH Date */}
              {/* <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">ATH Date</span>
                <span className="font-semibold">
                  {new Date(coin.market_data.ath_date.inr).toLocaleDateString()}
                </span>
              </div> */}

              {/* All Time Low */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-400">All-Time Low (ATL)</span>
                <span className="font-semibold text-red-500">
                  ₹ {coin.market_data.atl.inr.toLocaleString()}
                </span>
              </div>

              {/* ATL Date */}
              {/* <div className="flex justify-between items-center">
                <span className="text-gray-400">ATL Date</span>
                <span className="font-semibold">
                  {new Date(coin.market_data.atl_date.inr).toLocaleDateString()}
                </span>
              </div> */}
            </div>
          </div>
          </div>

          {/* Description */}

          <div className="mt-10">
            <span className="text-3xl font-bold">Description</span>
            <p className="text-lg text-gray-400 mt-5">{readMore? coin.description.en : coin.description.en.slice(0, 300) + "..."} <button className="hover:underline text-white" onClick={()=>setReadMore(!readMore)}>{readMore ? "Read Less": "Read More" }</button></p>

          </div>
          {/* official links */}

          <div className="mt-10 ">
            <h2 className="text-3xl font-bold mb-4">Official Links</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
              {/* Website */}

              {coin.links.homepage[0] && (
                <a
                  href={coin.links.homepage[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl bg-[#1f2937] hover:bg-[#FE4136] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <FaGlobe size={24} />
                    <span className="font-semibold">Website</span>
                  </div>

                  <BsBoxArrowUpRight className="group-hover:rotate-45 transition-all" />
                </a>
              )}

              {/* Whitepaper */}

              {coin.links.whitepaper && (
                <a
                  href={coin.links.whitepaper}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl bg-[#1f2937] hover:bg-[#FE4136] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <HiDocumentText size={24} />
                    <span className="font-semibold">Whitepaper</span>
                  </div>

                  <BsBoxArrowUpRight className="group-hover:rotate-45 transition-all" />
                </a>
              )}

              {/* Twitter / X */}

              {coin.links.twitter_screen_name && (
                <a
                  href={`https://x.com/${coin.links.twitter_screen_name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl bg-[#1f2937] hover:bg-[#FE4136] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <SiX size={22} />
                    <span className="font-semibold">Twitter / X</span>
                  </div>

                  <BsBoxArrowUpRight className="group-hover:rotate-45 transition-all" />
                </a>
              )}

              {/* Reddit */}

              {coin.links.subreddit_url && (
                <a
                  href={coin.links.subreddit_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl bg-[#1f2937] hover:bg-[#FE4136] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <FaReddit size={24} />
                    <span className="font-semibold">Reddit</span>
                  </div>

                  <BsBoxArrowUpRight className="group-hover:rotate-45 transition-all" />
                </a>
              )}

              {/* Discord */}

              {coin.links.chat_url[0] && (
                <a
                  href={coin.links.chat_url[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl bg-[#1f2937] hover:bg-[#FE4136] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <FaDiscord size={24} />
                    <span className="font-semibold">Discord</span>
                  </div>

                  <BsBoxArrowUpRight className="group-hover:rotate-45 transition-all" />
                </a>
              )}

              {/* Explorer */}

              {coin.links.blockchain_site[0] && (
                <a
                  href={coin.links.blockchain_site[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl bg-[#1f2937] hover:bg-[#FE4136] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <FaGlobe size={24} />
                    <span className="font-semibold">Explorer</span>
                  </div>

                  <BsBoxArrowUpRight className="group-hover:rotate-45 transition-all" />
                </a>
              )}

              {/* GitHub */}

              {coin.links.repos_url.github[0] && (
                <a
                  href={coin.links.repos_url.github[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl bg-[#1f2937] hover:bg-[#FE4136] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <FaGithub size={24} />
                    <span className="font-semibold">GitHub</span>
                  </div>

                  <BsBoxArrowUpRight className="group-hover:rotate-45 transition-all" />
                </a>
              )}
            </div>
          </div>

          <div className="mt-10 mx-auto text-center md:text-left">
  <h2 className="text-3xl md:text-4xl font-bold text-white">
    <span className="text-red-500">Trade</span> Here
  </h2>

  <p className="text-gray-400 mt-3 max-w-3xl leading-7">
    Nexora does not provide cryptocurrency trading services. However, you can
    explore the trusted exchanges below to buy, sell, and trade cryptocurrencies
    securely.
  </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
  {exchanges.map((item) => (
    <div
      key={item.id}
      className="bg-[#0B1120] border border-slate-700 rounded-2xl p-6 hover:border-[#FE4136] hover:shadow-lg hover:shadow-[#FE4136]/20 transition-all duration-300"
    >
      {/* Logo */}
      <div className="flex justify-center">
        <img
          src={item.logo}
          alt={item.name}
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Exchange Name */}
      <h2 className="text-white text-xl font-bold text-center mt-5">
        {item.name}
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm text-center mt-3 leading-6">
        {item.desc}
      </p>

      {/* Button */}
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center gap-2 bg-[#FE4136] hover:bg-[#e63a30] text-white font-semibold py-3 rounded-xl transition"
      >
        Trade Now →
      </a>
    </div>
  ))}
</div>

<div
          className="  w-full
          mx-auto
          border-2
          border-white/20
          hover:border-[#FE4136]/30
          rounded-[30px]
          p-6 md:p-8
          mt-14
          text-center
          md:text-left
          shadow-[0_0_30px_rgba(254,65,54,0.08)]
          transition-all
          duration-500 group"
        >
          <h2
            className="flex
        items-center
        justify-center
        md:justify-start
        gap-2
        text-xl
        md:text-2xl
        font-semibold
        text-[#FE4136]
        mb-4"
          >
            Important Risk Warning <FiAlertOctagon className="mt-1 group-hover:animate-pulse" />
          </h2>

          <p className="text-gray-300 leading-8">
            Cryptocurrency investments are highly volatile and involve
            significant financial risk. Never invest money you cannot afford to
            lose. Always research carefully before making investment decisions.
          </p>
        </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CoinDetails;
