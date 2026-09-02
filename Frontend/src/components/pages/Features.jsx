import {React,useEffect} from "react";  
import { FiAlertOctagon } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCards from "../Subpages/ServiceCards";

function Features() {
  

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
      <section className="py-25 md:py-30 px-4 md:px-10">
        <div>
          <div className="w-full text-center mx-auto">
            <h1 className="text-4xl flex justify-center md:text-6xl font-bold text-white">
              Our <span className="text-[#FE4136] pl-3 mb-5">Features</span>
            </h1>

            <p className="text-gray-400 flex justify-center mb-15 md:mb-20 mt-4 text-sm md:text-base max-w-5xl mx-auto px-2">
              Discover everything you need to monitor cryptocurrency markets,
analyze trends, and stay informed with real-time updates.
            </p>
          </div>

          <ServiceCards/>

          <div className="  w-full
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
  duration-500">
          
                    <h2 className="flex
items-center
justify-center
md:justify-start
gap-2
text-xl
md:text-2xl
font-semibold
text-[#FE4136]
mb-4">
                      Important Risk Warning <FiAlertOctagon className="mt-1"/>
                    </h2>
          
                    <p className="text-gray-300 leading-8">
                      Cryptocurrency investments are highly volatile and
                      involve significant financial risk. Never invest
                      money you cannot afford to lose. Always research
                      carefully before making investment decisions.
                    </p>
                  </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Features;
