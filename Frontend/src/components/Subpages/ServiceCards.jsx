import React from "react";
import {
  FaBookOpen,
  FaChartLine,
  FaNewspaper,
  FaChartBar,
  FaQuestionCircle,
} from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { BsBookmarkStarFill } from "react-icons/bs";

function ServiceCards() {
  const services = [
  {
    id: 1,
    title: "Crypto Learning",
    desc: "Master cryptocurrency and blockchain concepts through beginner-friendly guides, tutorials, and educational resources.",
    link: "/learn",
    icon: <FaBookOpen />,
  },
  {
    id: 2,
    title: "Live Market",
    desc: "Monitor live cryptocurrency prices, market trends, and real-time updates powered by CoinGecko.",
    link: "/market",
    icon: <FaChartLine />,
  },
  {
    id: 3,
    title: "Crypto News",
    desc: "Stay informed with the latest cryptocurrency news, market updates, and industry developments.",
    link: "cryptoNews",
    icon: <FaNewspaper />,
  },
{
  id: 4,
  title: "Watchlist",
  desc: "Save and monitor your favorite cryptocurrencies in one convenient place.",
  link: "watchlist",
  icon: <BsBookmarkStarFill />,
},

  {
    id: 5,
    title: "Daily Quiz",
    desc: "Test your crypto knowledge with interactive quizzes designed for beginners and experienced learners.",
    link: "quiz",
    icon: <FaQuestionCircle />,
  },
  {
    id: 6,
    title: "Event Calender",
    desc: "Track upcoming crypto events, network upgrades, and major market developments with our crypto calendar.",
    link: "cryptocalender",
    icon: <FiCalendar />,
  },
];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <NavLink
  to={service.link}
  key={service.id}
  className="
  bg-[#1A1A1A]
  border
  border-gray-800
  rounded-3xl
  p-5 md:p-8
  hover:border-[#FE4136]
  hover:-translate-y-2
  active:scale-95
  transition-all
  duration-500
  shadow-lg
  cursor-pointer
  text-center
  md:text-left
  flex
  flex-col
  h-full
  "
>
  <div
    className="
    mx-auto
    md:mx-0
    md:w-16
    md:h-16
    rounded-2xl
   md:bg-[#FE4136]/20
    flex
    items-center
    justify-center
    text-[#FE4136]
    md:text-3xl
    text-4xl
    mb-6
    hover:scale-105
    transition-all
    duration-500
    "
  >
    {service.icon}
  </div>

  <h2 className="text-md md:text-2xl mt-auto font-semibold text-white mb-3">
    {service.title}
  </h2>

  <p className="hidden md:flex text-gray-400 leading-7 text-sm md:text-base">
    {service.desc}
  </p>
</NavLink>
            ))}
          </div>
  )
}

export default ServiceCards