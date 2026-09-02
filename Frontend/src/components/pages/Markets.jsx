import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { ArrowRight } from "lucide-react";
import Globalstats from "../Subpages/GlobalStats";
import MarketPageExplain from "../Subpages/MarketPageExplain";
import TrendingCoins from "../Subpages/TrendingCoins";
import { NavLink } from "react-router-dom";
import MarketCoins from "../Subpages/MarketCoins";
import { FiAlertOctagon } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { icon } from "../../assets/images";

function Markets() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [Online, setonline] = useState(navigator.onLine);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handelOnline = () => {
      setonline(true);
    };
    const handelOffline = () => {
      setonline(false);
    };

    window.addEventListener("online", handelOnline);
    window.addEventListener("offline", handelOffline);

    return () => {
      window.removeEventListener("online", handelOnline);
      window.removeEventListener("offline", handelOffline);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="py-25 md:py-30 p-5">
        <div className="flex justify-center items-center gap-3 ">
          <div className="flex justify-center items-end gap-3">
            <span className="text-4xl md:text-5xl flex gap-2 text-red-500 font-bold">
              Crypto
              <span className="text-white">Market</span>
            </span>
            <div>
              {Online ? (
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

          {/* <div className="mt-3">
            <span className=" flex gap-2 items-center text-lg px-4 py-1 rounded-lg font-semibold text-white bg-gray-600 hover:scale-105 active:scale-90 transition-all duration-500">
              ₹INR <IoMdArrowDropdown className="text-2xl" />{" "}
            </span>
          </div> */}
        </div>

        <div className="flex justify-center mt-10 items-center gap-3 w-full mx-auto text-center">
          <span className="text-sm md:text-md text-gray-400 ">
            Track live cryptocurrency prices, monitor market trends, analyze
            coin performance, and stay updated with real-time market movements
            all in one place.
          </span>
        </div>

<div className="flex justify-center">
<div className="mt-10 flex justify-center items-center gap-1 border
              border-red-500 w-fit rounded-xl px-4">

          <button className=" text-red-500">
            <FaSearch />
          </button>
          <input
            value={search}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handelSearch();
              }
            }}
            onChange={(e) => setSearch(e.target.value)}
            className="
             w-[280px] 
             md:w-[500px]
              outline-none
              p-3
              
              text-white
              bg-transparent
              rounded-xl
              placeholder:text-gray-400
              
              "
            type="text"
            placeholder="Search coins here..."
          />
        </div>
</div>
        

        <div>
          <div className=" md:flex gap-6">
            <div className="md:space-y-4">
              <div className="">
                <Globalstats />
              </div>
              <div className="hidden md:flex">
                <MarketPageExplain />
              </div>
            </div>
            <div>
              <TrendingCoins />
            </div>
          </div>

          <div className="text-center mt-10 md:mt-20 ">
            <div className="text-white text-2xl md:text-4xl font-bold">
              <span className="text-red-500">Crypto</span> Market 📈
            </div>

            <p className="text-gray-400 hidden md:flex lg:flex mt-3 max-w-2xl mx-auto">
              Track live cryptocurrency prices, market movements and performance
              trends in real time.
            </p>
          </div>

          <MarketCoins />
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
          duration-500"
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
            Important Risk Warning <FiAlertOctagon className="mt-1" />
          </h2>

          <p className="text-gray-300 leading-8">
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
