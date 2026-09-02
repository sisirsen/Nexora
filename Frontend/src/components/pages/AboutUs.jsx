import { React, useEffect } from "react";
import { TbChartLine, TbBrandWebflow } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";
import { RiCoinsLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function AboutUs() {
 const whyChoose = [
  {
    id: 1,
    logo: <TbChartLine />,
    heading: "Live Market Tracking",
    description:
      "Monitor cryptocurrency prices, trends, market capitalization, and performance with real-time updates.",
  },
  {
    id: 2,
    logo: <MdOutlineSchool />,
    heading: "Structured Learning",
    description:
      "Learn blockchain, Web3, DeFi, NFTs, and cryptocurrency concepts from beginner to advanced levels.",
  },
  {
    id: 3,
    logo: <HiOutlineNewspaper />,
    heading: "Latest Crypto News",
    description:
      "Stay informed with the latest cryptocurrency news, market developments, and industry insights.",
  },
  {
    id: 4,
    logo: <RiCoinsLine />,
    heading: "Trending Coins",
    description:
      "Discover which coins are currently in trend in the market.",
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
      <div className="py-25 md:py-30">

  {/* ================= HERO SECTION ================= */}

  <div className="flex justify-center text-center px-6">
    <span className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
      Building the Future of{" "}
      <span className="text-[#FE4136]">Crypto Intelligence</span>
    </span>
  </div>

  {/* ================= WHO WE ARE ================= */}

  <div className="md:flex px-5 md:px-20 mt-10 md:mt-20 gap-10 ">

    {/* Left Content */}

    <div className="mb-10 md:text-left text-center mx-auto">

      <span className="text-[#FE4136] text-sm tracking-widest animate-pulse">
        WHO WE ARE
      </span>

      <h2 className="text-white flex gap-2 md:justify-normal justify-center items-center text-2xl lg:text-5xl font-semibold mt-5 leading-tight ">
        Modern
        <span className="text-[#FE4136]">
          Crypto
        </span>
        <span className="text-white text-2xl lg:text-5xl font-bold">
          Dashboard
        </span>
      </h2>

      <p className="text-gray-400 mt-6 leading-8">
  Nexora is a modern cryptocurrency dashboard designed to help users
  monitor live market trends, track digital assets, and stay informed
  with real-time crypto insights.
</p>

<p className="text-gray-400 mt-3 leading-8">
  Our platform brings together live market data, breaking crypto news,
  market analytics, and educational resources into one intuitive
  dashboard, making it easier to explore and understand the crypto
  ecosystem.
</p>

    </div>

    {/* Right Cards */}

    <div className=" grid grid-cols-2 gap-5 bg-[#18181A] p-8 rounded-3xl border border-white/10 hover:border-[#FE4136] transition-all duration-500 w-full">

      {/* Card */}

      <div className=" rounded-2xl bg-[#272729] p-5 text-white">

        <TbChartLine className="text-[#FE4136] text-3xl" />

        <h3 className="mt-4 font-semibold">
          Live Market Data
        </h3>

      </div>

      {/* Card */}

      <div className=" rounded-2xl bg-[#272729] p-5 text-white">

        <MdOutlineSchool className="text-[#FE4136] text-3xl" />

        <h3 className="mt-4 font-semibold">
          Learning Hub
        </h3>

      </div>

      {/* Card */}

      <div className=" rounded-2xl bg-[#272729] p-5 text-white">

        <HiOutlineNewspaper className="text-[#FE4136] text-3xl" />

        <h3 className="mt-4 font-semibold">
          Crypto News
        </h3>

      </div>

      {/* Card */}

      <div className=" rounded-2xl bg-[#272729] p-5 text-white">


       <RiCoinsLine className="text-[#FE4136] text-3xl" />

<h3 className="mt-4 font-semibold">
  Trending Coins
</h3>

      </div>

    </div>

  </div>

  {/* ================= MISSION & VISION ================= */}

  <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10 md:mt-20 px-6">

  {/* Mission */}

  <div className="w-full lg:w-[520px] bg-[#18181A] rounded-3xl p-10 border border-white/10 hover:border-[#FE4136] transition-all duration-500">

    <h2 className="text-[#FE4136] text-3xl font-bold text-center mx-auto md:text-left">
      Our Mission
    </h2>

    <p className="text-gray-400 mt-6 leading-8 text-center mx-auto md:text-left">
      To simplify the cryptocurrency ecosystem by delivering real-time
      market data, trusted news, insightful analytics, and valuable
      resources through one powerful and easy-to-use dashboard.
    </p>

  </div>

  {/* Vision */}

  <div className="w-full lg:w-[520px] bg-[#18181A] rounded-3xl p-10 border border-white/10 hover:border-[#FE4136] transition-all duration-500">

    <h2 className="text-[#FE4136] text-3xl font-bold text-center mx-auto md:text-left">
      Our Vision
    </h2>

    <p className="text-gray-400 mt-6 leading-8 text-center mx-auto md:text-left">
      To become the most trusted cryptocurrency dashboard where users
      can monitor markets, discover trends, explore blockchain
      technology, and stay informed with confidence.
    </p>

  </div>

</div>
  {/* ================= WHY CHOOSE US ================= */}

<div className="mt-10 md:mt-20">

  <div className="flex justify-center">
    <span className="text-[#FE4136] text-md tracking-widest animate-pulse">
      WHY CHOOSE NEXORA
    </span>
  </div>

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-6 lg:px-20">
  {whyChoose.map((items) => (
    <div
      key={items.id}
      className="bg-[#18181A] rounded-3xl border border-white/10 hover:border-[#FE4136] transition-all duration-500 hover:-translate-y-2 p-8"
    >
      <div className="text-[#FE4136] text-4xl mb-5">
        {items.logo}
      </div>

      <h2 className="text-white text-xl font-semibold">
        {items.heading}
      </h2>

      <p className="text-gray-400 mt-4 leading-7 text-sm">
        {items.description}
      </p>

    </div>
  ))}
</div>

{/* ================= STATS ================= */}

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10 md:mt-20 bg-[#18181A] p-10">

  <div className="text-center">
    <h2 className="text-[#FE4136] text-4xl font-bold ">
      90+
    </h2>

    <p className="text-gray-400 mt-3 ">
      Supported Coins
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-[#FE4136] text-4xl font-bold">
      100+
    </h2>

    <p className="text-gray-400 mt-3">
      Learning Resources
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-[#FE4136] text-4xl font-bold">
      Daily
    </h2>

    <p className="text-gray-400 mt-3">
      Market Updates
    </p>
  </div>

  <div className="text-center">
    <h2 className="text-[#FE4136] text-4xl font-bold">
      24/7
    </h2>

    <p className="text-gray-400 mt-3">
      Learning Access
    </p>
  </div>

</div>

{/* ================= INFORMATION SECTION ================= */}

<div className="mt-10 md:mt-20">

  <div className="flex justify-center">
    <FiBookOpen className="text-[#FE4136] text-5xl" />
  </div>

  <div className="flex justify-center mt-6 px-6">
    <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
      Reliable Information Comes First
    </h2>
  </div>

  <div className="flex justify-center mt-6 px-6">
    <p className="text-gray-400 text-center max-w-3xl leading-8">
  We prioritize accurate market data, real-time cryptocurrency updates,
  trusted news sources, and powerful analytics to help users make
  informed decisions and stay ahead in the fast-moving crypto market.
</p>
  </div>

</div>

{/* ================= CTA SECTION ================= */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 md:mt-20 px-6 lg:px-10">

  {/* Card 1 */}

  <div className="bg-[#18181A] rounded-[35px] border border-white/10 hover:border-[#FE4136] transition-all duration-500 p-10">

    <h2 className="text-white text-2xl lg:text-4xl font-bold leading-tight text-center md:text-left">
      Ready To Start Your
      <span className="text-[#FE4136]"> Crypto Learning </span>
      Journey?
    </h2>

    <p className="text-gray-400 mt-6 leading-8 text-center mx-auto md:text-left">
      Explore blockchain technology, understand cryptocurrencies,
      follow live markets, and strengthen your knowledge through
      structured learning resources.
    </p>

    <NavLink
      to="/learn"
      className="flex items-center gap-2 bg-[#FE4136] text-white px-7 py-3 rounded-full mt-8 hover:-translate-y-1 transition-all duration-300 pl-16 md:px-7 md:active:pl-115"
    >
      Start Learning
      <FiArrowRight />
    </NavLink>

  </div>

  {/* Card 2 */}

  <div className="bg-[#18181A] rounded-[35px] border border-white/10 hover:border-[#FE4136] transition-all duration-500 p-10">

    <h2 className="text-white text-2xl lg:text-4xl font-bold leading-tight text-center md:text-left ">
      Have Feedback, Need
      <span className="text-[#FE4136]"> Help?,</span>
      <span className="pl-2">Talk With Us..</span>
    </h2>

    <p className="text-gray-400 mt-6 leading-8 text-center mx-auto md:text-left">
      Found an issue, have a suggestion, or want to improve Nexora?
      We'd love to hear from you and make the platform even better.
    </p>

    <NavLink
      to="/contact"
      className="flex items-center gap-2 bg-[#FE4136] text-white px-7 py-3 rounded-full mt-8 hover:-translate-y-1 transition-all duration-300 pl-19 md:px-7 md:active:pl-115"
    >
      Contact Us
      <FiArrowRight />
    </NavLink>

  </div>

</div>

</div>
    </motion.div>
  );
}

export default AboutUs;
