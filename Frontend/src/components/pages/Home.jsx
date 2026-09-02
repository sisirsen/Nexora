import {React,useEffect} from 'react'
import { IoPlay } from 'react-icons/io5'
import {icon} from '../../assets/images'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import MarketCoins from '../Subpages/MarketCoins'
import ServiceCards from '../Subpages/ServiceCards'
import { RiShieldCheckLine } from 'react-icons/ri'
import { TbChartLine } from 'react-icons/tb'
import { HiOutlineUserGroup } from 'react-icons/hi'
import {
  FaUserPlus,
  FaSignInAlt,
  FaStar,
} from "react-icons/fa";
import {
  FaChartLine,
  FaFire,
  FaGlobe,
  FaMobileAlt,
} from "react-icons/fa";


function Home() {
  useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    

    const whyChoose = [
  {
    id: 1,
    heading: "Live Market Data",
    description:
      "Track real-time cryptocurrency prices, market capitalization, and 24-hour performance.",
    logo: <FaChartLine />,
  },
  {
    id: 2,
    heading: "Trending Coins",
    description:
      "Discover the most searched and fastest-growing cryptocurrencies in the market.",
    logo: <FaFire />,
  },
  {
    id: 3,
    heading: "Market Insights",
    description:
      "Stay informed with key market statistics, price trends, and global crypto activity.",
    logo: <FaGlobe />,
  },
  {
    id: 4,
    heading: "Responsive Dashboard",
    description:
      "Enjoy a seamless experience across desktop, tablet, and mobile devices.",
    logo: <FaMobileAlt />,
  },
];

const howItWorks = [
  {
    id: 1,
    step: "01",
    title: "Create Account",
    description:
      "Sign up securely to unlock your personalized crypto dashboard and access all platform features.",
    icon: <FaUserPlus />,
  },
  {
    id: 2,
    step: "02",
    title: "Login Securely",
    description:
      "Access your account with secure authentication and continue tracking the crypto market anytime.",
    icon: <FaSignInAlt />,
  },
  {
    id: 3,
    step: "03",
    title: "Explore Market",
    description:
      "Browse live cryptocurrency prices, trending coins, market rankings, and interactive charts in real time.",
    icon: <FaChartLine />,
  },
  {
    id: 4,
    step: "04",
    title: "Build Watchlist",
    description:
      "Save your favorite cryptocurrencies, monitor their performance, and keep everything organized in one place.",
    icon: <FaStar />,
  },
];
  return (
    <motion.div
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0}}
    transition={{duration:0.6}}
    className='px-5 md:px-10'
    >
    <div className='md:flex items-center gap-30 justify-between md:mt-50 mt-25 '>
<div className='space-y-7'>
  <div>
        <span className='text-[15px] md:text-md font-semibold flex justify-center md:justify-normal text-gray-400 animate-pulse'>Your trusted gateway to digital assets is here</span>
      </div>

      
      <div className="text-center md:text-left">
  <h1 className="text-3xl md:text-[50px] font-bold text-white leading-tight">
    Unlock the future of {" "}
    <span className="text-[#FE4136]">crypto</span>{" "}
    investing.
  </h1>
</div>

      <div className='flex-col'>
        <span className=' md:text-[16px] lg:text-[16px] text-[11px] grid place-content-center text-gray-400 md:justify-normal'>Buy, trade, and manage digital assets with real-time insights, <span className='md:flex-col lg:flex-col flex justify-center'>advanced security, and seamless transactions.</span></span>
      </div>


      <div className='mt-10 flex justify-center md:justify-normal lg:justify-normal gap-4'>
        <NavLink to='/features' className='py-3 px-5 flex items-center justify-center rounded-lg text-gray-200 text-[14px] font-semibold bg-[#FE4136] cursor-pointer hover:bg-orange-800 hover:shadow-lg  active:scale-90 transition-all duration-300 animate-pulse'>Get Started</NavLink>


        <NavLink to='/market' className='flex gap-2 items-center py-3 px-4  rounded-lg text-gray-200 text-[14px] border-2 border-white/20 cursor-pointer hover:border-[#FE4136] hover:shadow-lg active:scale-90 transition-all duration-300'><IoPlay/>Live Market</NavLink>
      </div>


</div>
      
{/* image */}
<div className="flex justify-center">
  <img
    className="
      mt-10 md:mt-0
      w-full
      max-w-[320px]
      sm:max-w-[450px]
      md:max-w-[550px]
      lg:max-w-[700px]
      h-auto
      rounded-xl
      object-cover
      hover:shadow-[0_0_40px_#434465]
      transition-all duration-500
    "
    src={icon.homeimg}
    alt="Home"
  />
</div>

{/* live market */}

    </div>
    <div className='flex justify-center mt-10 md:mt-20 '>
      <span className='text-white text-2xl lg:text-5xl font-bold '>Live <span className='text-red-500'>Market</span></span>
    </div>
  <div>
    <MarketCoins />
  </div>

  {/* why choose */}

  <div className="mt-10 md:mt-20">
          <div className="flex items-center justify-center">
            <span className=" text-2xl lg:text-5xl text-white font-bold">Why Choose <span className='text-[#FE4136]'>NEXORA</span></span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mt-16 lg:mt-16 mt-10 mb-10 md:mb-20">
  {whyChoose.map((items) => (
    <div
      key={items.id}
      className="bg-[#18181A] rounded-3xl border border-white/10 hover:border-[#FE4136] transition-all duration-500 hover:-translate-y-2 p-7 min-h-[40px]  flex flex-col"
    >
      <div className="text-[#FE4136] flex justify-center md:justify-normal lg:justify-normal text-3xl md:text-4xl lg:text-4xl mb-5">
        {items.logo}
      </div>

      <h2 className="text-[14px] text-center md:text-left lg:text-left md:text-xl lg:text-xl font-semibold text-white mb-3">
        {items.heading}
      </h2>

      <p className="text-gray-400 hidden md:flex lg:flex text-sm leading-7">
        {items.description}
      </p>
    </div>
  ))}
</div>

{/* service cards */}

  <div className='mb-10 md:mb-20'>
    <div className='mb-10 flex justify-center gap-2'>
    <span className='text-[#FE4136] font-bold text-2xl lg:text-5xl '>Crypto <span className='text-white'>Services</span></span>

   
  </div>
    <ServiceCards />



{/* what we prefer */}

<section className="mt-20 ">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Card 1 */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:border-[#FE4136] ease-in-out transition-all duration-500 hover:-translate-y-1 h-[160px] md:h-[220px]">
        <h2 className="md:text-5xl text-3xl font-bold text-[#FE4136]">90+</h2>
        <h3 className="md:text-xl font-semibold text-white mt-3">
          Supported Coins
        </h3>
        <p className="hidden md:flex text-gray-400 mt-3 leading-relaxed">
          Explore a wide range of leading cryptocurrencies.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:border-[#FE4136] transition-all duration-300 hover:-translate-y-2 h-[160px] md:h-[220px]">
        <h2 className="text-3xl md:text-5xl font-bold text-[#FE4136]">20+</h2>
        <h3 className=" text-md md:text-xl font-semibold text-white mt-3">
          Trading Guides
        </h3>
        <p className="hidden md:flex text-gray-400 mt-3 leading-relaxed">
          Learn essential trading concepts and market strategies.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:border-[#FE4136] transition-all duration-300 hover:-translate-y-2 h-[160px] md:h-[220px]">
        <h2 className="text-3xl md:text-5xl font-bold text-[#FE4136]">24/7</h2>
        <h3 className="text-md md:text-xl font-semibold text-white mt-3">
          Market Access
        </h3>
        <p className="hidden md:flex text-gray-400 mt-3 leading-relaxed">
          Stay connected to the crypto market anytime.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:border-[#FE4136] transition-all duration-300 hover:-translate-y-2 h-[160px] md:h-[220px]">
        <h2 className="text-3xl md:text-5xl font-bold text-[#FE4136]">99.9%</h2>
        <h3 className="text-md md:text-xl font-semibold text-white mt-3">
          Service Availability
        </h3>
        <p className="hidden md:flex text-gray-400 mt-3 leading-relaxed">
          Designed for a seamless and reliable experience.
        </p>
      </div>

    </div>
  </div>
</section>

{/* how it works */}

<section className="mt-10 md:mt-20">

  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-bold text-white">
      How It <span className="text-[#FE4136]">Works</span>
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

    {howItWorks.map((item, index) => (

      <div
        key={item.id}
        className="
        relative
        bg-[#18181A]
        border
        border-white/10
        rounded-3xl
        p-8
        hover:border-[#FE4136]
        hover:-translate-y-2
        transition-all
        duration-500
        overflow-hidden
        group
        "
      >

        {/* Step */}
        <div className="absolute top-5 right-5 text-6xl font-black text-white/5">
          {item.step}
        </div>

        {/* Circle */}

        <div className="w-18 h-18 rounded-full bg-[#FE4136]/10 border border-[#FE4136]/30 flex items-center justify-center text-[#FE4136] text-3xl mb-6 group-hover:rotate-12 transition duration-500">

          {item.icon}

        </div>

        <h3 className="text-2xl font-bold text-white mb-3">
          {item.title}
        </h3>

        <p className="hidden md:flex text-gray-400 leading-8">
          {item.description}
        </p>

        {/* Bottom Accent */}

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FE4136] md:group-hover:w-full transition-all duration-500"></div>

      </div>

    ))}

  </div>

</section>

{/* button to go explore market */}

<section className="mt-10 md:mt-20">
  <div className="max-w-6xl mx-auto bg-[#111111] border border-white/10 hover:border-[#FE4136]/50 rounded-3xl p-12 text-center transition-all duration-500">

    <h2 className="text-xl md:text-5xl font-bold text-white">
      Ready to Explore the <span className="text-[#FE4136]">Crypto Market?</span>
    </h2>

    <p className="hidden md:flex text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-8">
      Stay ahead with live cryptocurrency prices, market insights, and educational resources designed to help you navigate the digital asset ecosystem.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

      <NavLink
        to="/market"
        className="px-8 py-4 rounded-xl bg-[#FE4136] text-white font-semibold hover:bg-red-600 transition-all duration-300 hover:shadow-[0_0_25px_rgba(254,65,54,0.35)]"
      >
        Explore Market
      </NavLink>

      <NavLink
        to="/services"
        className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:border-[#FE4136] transition-all duration-300"
      >
        Learn More
      </NavLink>

    </div>

  </div>
</section>

  </div>


    </motion.div>
  )
}

export default Home