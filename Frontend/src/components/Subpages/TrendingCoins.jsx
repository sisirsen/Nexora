import React from "react";
import { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

function TrendingCoins() {
  const [TrendingCoins, setTrendingCoins] = useState([]);

  const [Errormsg, setErrormsg] = useState("");

  const [UsdtoInr, setUsdtoInr] = useState(90);

  const [Loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      setLoading(true);
      let response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending",
      );
      let data = await response.json();
      setTrendingCoins(data.coins);
      
    } catch (error) {
      setErrormsg(error.message);
    }
    finally{
      setLoading(false);
    }
  }

  async function convertCoin() {
    let response2 = await fetch("https://open.er-api.com/v6/latest/USD");
    let data2 = await response2.json();
    setUsdtoInr(data2.rates.INR);
  }

  useEffect(() => {
    fetchData();

    convertCoin();
  }, []);

  const loading = () => {
    return (
      <div className="w-full flex justify-center items-center mt-29">
        <div className="bg-[#111111] border w-[600px] h-[525px] border-white/10 hover:border-[#FE4136] rounded-xl px-10 py-8 flex justify-center items-center gap-5 transition-all duration-500">
          <div className="w-10 h-10 border-4 border-[#FE4136] rounded-[16px] animate-spin"></div>

          <p className="text-white text-lg">Fetching live market data...</p>
        </div>
      </div>
    );
  };

  const ErrorComponent = () => {
    return (
      <div className="w-full flex justify-center mt-29">
        <div className="bg-[#111111] w-[600px] h-[525px] grid place-content-center border border-red-500 rounded-xl p-8  text-center">
          <h2 className="text-red-500 text-xl font-bold">
            Failed to load market data
          </h2>

          <p className="text-gray-400 mt-2">
            Please check your internet connection.
          </p>

          <div>
            <button
            onClick={fetchData}
            className="mt-6 px-6 py-3 w-23 bg-[#FE4136] rounded-lg text-white hover:bg-red-700 transition"
          >
            Retry
          </button>
          </div>
        </div>
      </div>
    );
  };

  if (Loading) {
    return loading();
  }
  if (Errormsg) {
    return ErrorComponent();
  }

  return (
    <div className="mt-10 md:mt-30">
      <div className="mt-7 bg-[#111111] w-full h-fit p-3 md:p-7 border border-white/10 hover:border-[#FE4136] rounded-xl">
        <div className="flex justify-center mb-7">
          <span className="text-2xl text-white font-semibold">
            Trending Coins 🔥
          </span>
        </div>

        <div className="text-white flex flex-col gap-2 justify-between">
          {TrendingCoins.slice(0, 5).map((coin, index) => (
            <Link
              key={coin.item.id}
              to={`coin/${coin.item.id}`}
              className="flex items-center border-b border-white/10 pb-4 rounded-xl hover:border-b hover:border-red-500 transition-all duration-500"
            >
              <div className="text-center w-[135px]">
                <div className="text-[#FE4136] font-semibold md:text-lg">Rank</div>
                <div className="mt-1 text-sm">{index + 1}</div>
              </div>

              <div className="text-center w-[135px]">
                <div className="text-[#FE4136] font-semibold md:text-lg">Coin</div>

                <div className="mt-1">
                  <div className="font-medium text-sm">{coin.item.name}</div>
                </div>
              </div>

              <div className="text-center w-[135px]">
                <div className="text-[#FE4136] font-semibold md:text-lg">
                  Price
                </div>

                <div className="mt-1 text-sm">
                  ₹
                  {(Number(coin?.item?.data?.price) * UsdtoInr).toLocaleString(
                    "en-IN",
                  )}
                </div>
              </div>

              <div className="text-center w-[135px]">
                <div className="text-[#FE4136] font-semibold md:text-lg">
                  24h %
                </div>

                <div
                  className={`mt-1 text-sm font-medium ${
                    coin?.item?.data?.price_change_percentage_24h?.inr > 0
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                >
                  {coin?.item?.data?.price_change_percentage_24h?.inr?.toFixed(
                    2,
                  )}
                  %
                </div>
              </div>
            </Link>
          ))}

          {/* <div className="flex justify-center gap-1 cursor-pointer mt-2">
            <span className="bg-[#FE4136] flex items-center px-4 py-2 rounded-xl active:scale-90 hover:scale-105 transition-all duration-500 text-sm">
              See More
              <IoMdArrowDropdown className="text-lg" />
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TrendingCoins;
