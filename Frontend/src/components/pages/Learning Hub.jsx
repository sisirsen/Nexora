import React from "react";
import { FaPlayCircle, FaArrowRight} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { icon } from "../../assets/images";
import { motion } from "framer-motion";
import { NavLink,Link } from "react-router-dom";
import { button, div, img } from "framer-motion/client";
import { useEffect } from "react";

function LearningHub() {
  

  const beginnerCard = [
    {
      id: 1,
      picture: icon.crypto,
      title: "What is crypto trading?",
      ans: "Crypto trading is the process of buying and selling cryptocurrencies to make profit from price movements. Traders analyze the market and try to earn profit when crypto prices go up or down.",
      button: "Learn more",
    },

    {
      id: 2,
      picture: icon.startcrypto,
      title: "How to Start Crypto Trading?",
      ans: "Crypto trading may look confusing at first, but beginners can start safely by following a few simple steps. Learning the basics, understanding market trends, and practicing risk management can help build confidence over time.",
      button: "Learn more",
    },

    {
      id: 3,
      picture: icon.candelstick,
      title: "Candlestick Charts?",
      ans: "Candlestick charts are one of the most important tools in crypto trading. They help traders understand price movement and market trends. By analyzing candle patterns and chart behavior, traders can make better buying and selling decisions.",
      button: "Learn more",
    },

    {
      id: 4,
      picture: icon.spotvsfuture,
      title: "Spot vs Futures Trading",
      ans: "Spot Trading means buying and owning cryptocurrency directly, while Futures Trading involves trading price movements without ownership, often using leverage for bigger profits, higher risks, and faster market opportunities.",
      button: "Learn more",
    },
  ];

  const interCard = [
    {
      id: 1,
      picture: icon.support,
      title: "What are Support and Resistance Levels?",
      ans: "Support and resistance are important price levels in crypto trading that help traders predict market movement. Support is a price level where buying pressure may stop prices from falling, while resistance is where selling pressure may stop prices from rising. Traders use these levels to find better entry and exit points.",
      button: "Learn more",
    },

    {
      id: 2,
      picture: icon.techindicator,
      title: "What are Technical Indicators in Crypto Trading?",
      ans: "Technical indicators are tools traders use to analyze price movement and market trends in crypto trading. Popular indicators like RSI, MACD, and Moving Averages help traders identify buying opportunities, selling signals, and possible trend reversals in the market.",
      button: "Learn more",
    },

    {
      id: 3,
      picture: icon.riskmanage,
      title: "What is Risk Management in Crypto Trading?",
      ans: "Risk management is the process of protecting your money while trading cryptocurrencies. It includes setting stop-loss levels, managing investment size, and avoiding emotional decisions. Good risk management helps traders reduce losses and survive market volatility for the long term.",
      button: "Learn more",
    },

    {
      id: 4,
      picture: icon.psycology,
      title: "What is Trading Psychology?",
      ans: "Trading psychology refers to the emotions and mindset involved in crypto trading. Fear, greed, FOMO, and panic can lead to poor decisions. Successful traders learn emotional control, patience, and discipline to make smarter trading decisions over time.",
      button: "Learn more",
    },
  ];

  const advCard = [
    {
      id: 1,
      picture: icon.liquidity,
      title: "What is Liquidity in Crypto Trading?",
      ans: "Liquidity in crypto trading refers to how easily a cryptocurrency can be bought or sold without significantly affecting its price. High liquidity means faster transactions and smaller price changes, while low liquidity can lead to slippage and unstable price movement.",
      button: "Learn more",
    },

    {
      id: 2,
      picture: icon.marketstructures,
      title: "What is Market Structure in Crypto Trading?",
      ans: "Market structure is the way price moves in the market and helps traders understand trends. It includes higher highs, lower lows, support, and resistance levels. Traders use market structure to identify whether the market is bullish, bearish, or moving sideways.",
      button: "Learn more",
    },

    {
      id: 3,
      picture: icon.riskreward,
      title: "What is Risk-to-Reward Ratio in Trading?",
      ans: "Risk-to-reward ratio measures how much a trader is willing to risk compared to the potential profit of a trade. For example, risking ₹100 to make ₹300 creates a 1:3 ratio. Traders use this strategy to improve long-term profitability and reduce unnecessary losses.",
      button: "Learn more",
    },

    {
      id: 4,
      picture: icon.leverage,
      title: "What is Leverage and Margin Trading?",
      ans: "Leverage and margin trading allow traders to borrow funds to open larger positions with smaller capital. While leverage can increase profits, it also increases losses and liquidation risk. Advanced traders use leverage carefully with strong risk management strategies.",
      button: "Learn more",
    },
  ];

  const videos = [
    {
      title: "Crypto For Beginners",
      creator: "Neeraj Joshi",
      link: 'https://www.youtube.com/watch?v=hnS5sjqXXIc',
      image:
        icon.crypvid,
    },
    {
      title: "Candlestick Patterns",
      creator: "The Trading Channel",
      link:'https://www.youtube.com/watch?v=eynxyoKgpng', 
      image:
        icon.candel,
    },
    {
      title: "Support & Resistance",
      creator: "Pushkar Raj Thakur",
     link:'https://youtu.be/r2LzjTUs3lo',
      
      image:
        icon.sandr,
    },
    {
      title: "Risk Management",
      creator: "Pushkar Raj Thakur",
     link:'https://youtu.be/s7KApswForA',
      
      image:
        icon.risk,
    },
    {
      title: "Trading Psychology",
      creator: "Pushkar Raj Thakur",
     link:'https://youtu.be/whe0B7hJJJ0',
      
      image:
        icon.psycotrade,
    },
    {
      title: "Market Structure / Price Action",
      creator: "Pushkar Raj Thakur",
     link:'https://youtu.be/aE9HrZT3Dmk',
      
      image:
        icon.marketstructure,
    },
  ];

  useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-white px-5 md:px-10 py-20 md:py-35">
        <section className="md:flex justify-between items-center">
          <div className="max-w-[650px]">
            <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight text-center mx-auto md:text-left">
              Learn Crypto The
              <span className="text-[#FE4136]"> Smart & Safe </span>
              Way
            </h1>

            <p className="text-gray-400 text-md mt-6 leading-8 max-w-[550px] text-center md:text-left">
              Master crypto investing with expert-curated videos,
              beginner-friendly guides, demo trading platforms, and trusted
              learning resources.
            </p>

            <div className="flex gap-5 mt-10 mb-10 justify-center md:justify-normal">
              <NavLink
                to="/market"
                className=" text-sm bg-[#FE4136] cursor-pointer hover:bg-orange-800 active:scale-90 px-4 py-3 rounded-xl flex items-center gap-2 hover:border-[#FE4136] transition-all duration-500"
              >
                Explore Markets
                <FaArrowRight />
              </NavLink>
            </div>
          </div>

          <div>
            <img
              src={icon.learn}
              alt="crypto"
              className="w-[550px] rounded-[30px] object-cover border border-gray-800"
            />
          </div>
        </section>


        {/*what we provide */}

        <section className="mt-10 md:mt-30 ">
          <div className="flex justify-center">
            <span className="text-white text-3xl md:text-4xl font-bold">
              What We <span className="text-[#FE4136]">Provide</span>
            </span>{" "}
          </div>
          <div className="mt-5 md:mt-15 md:flex justify-center gap-25">
            <div className="bg-[#111111] border hover:border-[#FE4136] border-gray-800 p-8 rounded-3xl  space-y-3 transition-all duration-500">
              <h2 className="text-3xl font-bold text-[#FE4136]">
                Learning Roadmap
              </h2>
              <p className="text-gray-400 mt-2">
                Learning Resources Available.
              </p>
              <p className="text-gray-400 mt-2">
                Beginner, Intermediate, Advanced.
              </p>
            </div>

            <div className="mt-5 md:mt-0 bg-[#111111] border  border-gray-800 rounded-3xl hover:border-[#FE4136] md:px-14 p-8 space-y-3 transition-all duration-500">
              <h2 className="text-3xl font-bold text-[#FE4136]">
                Crypto Videos
              </h2>
              <p className="text-gray-400 mt-2">Beginner Friendly Tutorials.</p>
              <p className="text-gray-400 mt-2">And Suitable Guidance.</p>
            </div>
          </div>
        </section>

        {/* Learning Roadmap */}
        <section className="mt-10 md:mt-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold">
              Structured Learning
              <span className="text-[#FE4136]"> Roadmap</span>
            </h2>

            <p className="text-gray-400 mt-5 md:text-lg">
              Follow a guided path from beginner to advanced crypto knowledge.
            </p>
          </div>


            {/* beginner */}


          <div className="mt-15 md:mt-15">
            <div className="md:flex justify-between items-center text-center md:text-left">
              <span className="text-[#FE4136] py-4 px-22 md:py-4 md:px-4 bg-[#111111] text-2xl md:text-3xl rounded-2xl border border-white/10 font-semibold hover:border-[#FE4136] transition-all duration-500 ">
                Level: <span className="text-white ">Beginner</span>
              </span>
              <Link to='beginnerDetail' className="md:mt-0 mt-10 border-2 border-white/10 py-4 md:px-6 md:py-3  rounded-xl hover:border-[#FE4136] transition-all duration-300 cursor-pointer flex items-center justify-center">
                    View All 
                  </Link>
            </div>

            <div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-5 mt-10 md:mt-15  ">
                  {beginnerCard.map((items) => (
                    <div key={items.id} className="bg-[#111111] rounded-xl w-[320px] h-[480px] overflow-hidden">
                      <div  className="h-[200px] w-full overflow-hidden">
                        <img
                          src={items.picture}
                          alt={items.title}
                          className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
                        />
                      </div>

                      {/* Text Container */}
                      <div className="p-5">
                        <h2 className="text-white text-xl font-semibold">
                          {items.title}
                        </h2>

                        <p className="text-gray-400 mt-3">{items.ans}</p>

                        <div className="mt-2 text-[#FE4136] ">
                          <button className="hover:underline underline-offset-4 cursor-pointer">
                            {items.button}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                
              </div>
            </div>
          </div>
{/* intermediate */}
          <div className="mt-15 md:mt-30 ">
            <div className="md:flex justify-between text-center">
              <span className="text-[#FE4136] md:px-4 md:py-4 px-16 py-4 bg-[#111111] text-2xl md:text-3xl rounded-2xl border border-white/10 font-semibold hover:border-[#FE4136] transition-all duration-500">
                Level: <span className="text-white ">Intermediate</span>
              </span>
              <Link to='intermediateDetail' className="mt-10 md:mt-0 border-2 border-white/10 px-6 h-[55px] rounded-xl hover:border-[#FE4136] transition-all duration-300 cursor-pointer flex justify-center items-center">
                    View All 
                  </Link>
            </div>

            
                <div className="grid grid-cols-1 md:grid-cols-4 mt-10 place-items-center gap-5 ">
                  {interCard.map((items) => (
                    <div key={items.id} className="bg-[#111111] rounded-xl w-[320px] h-[550px] overflow-hidden">
                      <div className="h-[200px] w-full overflow-hidden">
                        <img
                          src={items.picture}
                          alt={items.title}
                          className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
                        />
                      </div>

                      {/* Text Container */}
                      <div className="p-5">
                        <h2 className="text-white text-xl font-semibold">
                          {items.title}
                        </h2>

                        <p className="text-gray-400 mt-3">{items.ans}</p>

                        <div className="mt-2 text-[#FE4136] ">
                          <button className="hover:underline underline-offset-4 cursor-pointer">
                            {items.button}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                
              
          </div>
{/* Advanced */}
          <div className="mt-15 md:mt-20 ">
            <div className=" md:flex justify-between text-center">
              <span className="text-[#FE4136] px-20 py-4 md:px-4 md:py-4 bg-[#111111] text-2xl md:text-3xl rounded-2xl border border-white/10 font-semibold hover:border-[#FE4136] transition-all duration-500">
                Level: <span className="text-white ">Advanced</span>
              </span>
              <Link to='advDetail' className="mt-10 md:mt-0 border-2 border-white/10 px-6 h-[55px] rounded-xl hover:border-[#FE4136] transition-all duration-300 cursor-pointer flex justify-center items-center ">
                    View All 
                  </Link>
            </div>

            <div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-4 mt-10 place-items-center gap-5">
                  {advCard.map((items) => (
                    <div key={items.id} className="bg-[#111111] rounded-xl w-[320px] h-[530px] overflow-hidden">
                      <div className="h-[200px] w-full overflow-hidden">
                        <img
                          src={items.picture}
                          alt={items.title}
                          className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
                        />
                      </div>

                      {/* Text Container */}
                      <div className="p-5">
                        <h2 className="text-white text-xl font-semibold">
                          {items.title}
                        </h2>

                        <p className="text-gray-400 mt-3">{items.ans}</p>

                        <div className="mt-2 text-[#FE4136] ">
                          <button className="hover:underline underline-offset-4 cursor-pointer">
                            {items.button}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* Recommended Videos */}
        <section className="mt-10 md:mt-20">
          <div className="md:flex justify-between items-center text-center md:text-left ">
            <div className="">
              <h2 className="text-3xl md:text-5xl font-bold">
                Expert Recommended
                <span className="text-[#FE4136]"> Videos</span>
              </h2>

              <p className="text-gray-400 mt-4 md:text-lg">
                Learn from trusted creators and beginner-friendly crypto
                content.
              </p>
            </div>

            <Link to='allVideos' className="mt-5 pl-35 py-3 flex border-2 border-white/10 md:px-6 md:py-3 rounded-xl hover:border-[#FE4136] transition-all duration-300 cursor-pointer">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#FE4136] transition-all duration-500 group"
              >
                <div className="relative">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-[250px] object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <FaPlayCircle className="text-6xl text-[#FE4136]" />
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex justify-between">
                    

                  </div>

                  <h3 className="text-2xl font-semibold mt-5">{video.title}</h3>

                  <p className="text-gray-400 mt-3">Creator: {video.creator}</p>

                  <a href={video.link} target="_blank" rel="noopener noreferrer" className="mt-6 text-[#FE4136] flex items-center gap-2 hover:gap-4 transition-all duration-300">
                    Watch Video
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-10 md:mt-20 md:flex justify-between text-center space-y-10'>
            <div className='w-fit h-fit p-10 rounded-4xl bg-[#18181A] border border-white/10 hover:border-[#FE4136] transition-all duration-500'> 
            <div className="flex justify-center"><span className='text-white text-3xl font-semibold'>Go & Explore Our <span className='text-[#FE4136]'>Features</span> Page</span></div>
          
          <NavLink to='/features' className='flex justify-center mt-4 '>
            <div className='w-fit h-fit flex gap-1 items-center bg-[#FE4136] py-3 px-6 rounded-3xl text-sm text-white cursor-pointer active:scale-90 transition-all duration-300 hover:-translate-y-1 hover:ease-in-out hover:shadow-[0px_0px_40px_#2F2F2F]'>Click To Explore<FiArrowRight/></div>
            </NavLink>
          </div>
          
          
            <div className='w-fit h-fit p-10 rounded-4xl bg-[#18181A] border border-white/10 hover:border-[#FE4136] transition-all duration-500'> 
            <div><span className='text-white text-3xl font-semibold'>Report a <span className='text-[#FE4136]'>Problem</span> You Are Facing</span></div>
           
          
          <NavLink to='/contact' className='flex justify-center mt-4  '>
            <div className='w-fit h-fit flex gap-1 items-center bg-[#FE4136] py-3 px-6 rounded-3xl text-sm text-white cursor-pointer active:scale-90 transition-all duration-300 hover:-translate-y-1 hover:ease-in-out hover:shadow-[0px_0px_40px_#2F2F2F]'>Click To Report <FiArrowRight/></div>
            </NavLink>
          </div>
          
          
          
          
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default LearningHub;
