import React, { useState, useEffect } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

function MarketCoins() {
  const [marketCoins, setMarketCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [visibleCoins, setVisibleCoins] = useState(4);
  

  // ---------------- Loading ----------------

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

  // ---------------- Error ----------------

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
            onClick={fetchMarketCoins}
            className="mt-6 px-6 py-3 bg-[#FE4136] rounded-lg text-white hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  };

  // ---------------- Fetch ----------------

  async function fetchMarketCoins() {
    try {
      setLoading(true);
     

      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h",
      );

      const data = await response.json();

      setMarketCoins(data);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMarketCoins();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  if (errorMsg) {
    return <ErrorComponent />;
  }

  return (
    <section className="w-full mt-5 md:mt-10">
      {/* Heading */}


      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {marketCoins.slice(0, visibleCoins).map((coin) => {
          const chartData = coin.sparkline_in_7d?.price || [];

          const chartColor =
            coin.price_change_percentage_24h > 0 ? "#22c55e" : "#ef4444";
          return (
            <Link
              key={coin.id}
              to={`/market/coin/${coin.id}`}
              className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-[#FE4136] hover:shadow-lg hover:shadow-[#FE4136]/20 transition-all duration-300"
            >
              {/* Header */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={coin.image}
                    alt={`${coin.name} logo`}
                    className="w-12 h-12 rounded-full"
                  />

                  <div>
                    <h2 className="text-white text-xl font-bold">
                      {coin.name}
                    </h2>

                    <p className="uppercase text-gray-400">{coin.symbol}</p>
                  </div>
                </div>

                <div className="text-right ">
                  <p className="text-[#FE4136] font-semibold">
                    Rank  #{coin.market_cap_rank}
                  </p>
                </div>
              </div>

              {/* Divider */}

              <div className="border-t border-white/10 my-5"></div>

              {/* Information */}

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Price</span>

                  <span className="text-white font-semibold">
                    ₹{coin.current_price?.toLocaleString()}
                  </span>
                </div>

                <div className="md:flex justify-between hidden ">
                  <span className="text-gray-400">Market Cap</span>

                  <span className="text-white">
                    ₹{coin.market_cap?.toLocaleString()}
                  </span>
                </div>

                <div className="hidden md:flex justify-between">
                  <span className="text-gray-400">High 24H</span>

                  <span className="text-green-400 font-medium">
                    ₹{coin.high_24h?.toLocaleString()}
                  </span>
                </div>

                <div className="hidden md:flex justify-between">
                  <span className="text-gray-400">Low 24H</span>

                  <span className="text-red-400 font-medium">
                    ₹{coin.low_24h?.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">24H Change</span>

                  <span
                    className={
                      coin.price_change_percentage_24h > 0
                        ? "text-green-400 font-bold"
                        : "text-red-400 font-bold"
                    }
                  >
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                  </span>
                </div>
              </div>

              {/* Divider */}

              <div className="border-t border-white/10 my-6"></div>

              {/* Sparkline */}

              <div>
                <h3 className="text-center text-[#FE4136] font-semibold mb-3">
                  7 Day Performance
                </h3>

                <div className="flex justify-center">
                  <Sparklines data={chartData} svgWidth={220} svgHeight={70}>
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
        })}
      </div>

      {/* Load More */}

      <div className="flex justify-center mt-12">
        {visibleCoins < marketCoins.length ? (
          <button
            onClick={() => setVisibleCoins((prev) => prev + 16)}
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
    </section>
  );
}

export default MarketCoins;
