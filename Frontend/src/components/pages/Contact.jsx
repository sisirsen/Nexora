import { React, useEffect } from "react";
import { FiArrowRight, FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Contact() {
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
      <section className="py-25 md:py-30 px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Contact <span className="text-[#FE4136]">Us</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-[700px] mx-auto leading-7">
            Have questions, feedback, or suggestions? We'd love to hear from
            you. Reach out to the Nexora team.
          </p>
        </div>

        <div className="mt-5 md:mt-5">
          <div className="text-3xl text-white font-semibold md:mb-10 flex justify-center">
          </div>
          <div className="space-y-3 md:flex justify-between">
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-[#FE4136] transition-all duration-500">
              <h2 className="text-xl font-bold text-white">Fast Support</h2>
              <p className="text-gray-400 mt-2">
                Get quick responses to your crypto-related questions anytime.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-[#FE4136] transition-all duration-500">
              <h2 className="text-xl font-bold text-white">Secure Guidance</h2>
              <p className="text-gray-400 mt-2">
                Learn safe and trusted ways to manage digital assets.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-[#FE4136] transition-all duration-500">
              <h2 className="text-xl font-bold text-white">Expert Help</h2>
              <p className="text-gray-400 mt-2">
                Our team helps you understand trading and crypto services.
              </p>
            </div>
          </div>
        </div>

        {/* why contact us */}

        <div className="mt-10 md:mt-20">
          <div className="text-center">
            <span className="text-[#FE4136] uppercase tracking-[3px] animate-pulse">
              Why Contact Us
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-white mt-4">
              We're Here To <span className="text-red-500">Help</span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-4xl mx-auto">
              Whether you have a question, found an issue, or want to share your
              ideas, we're always happy to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-[#18181A] rounded-3xl p-8 border border-[#2A2A2A] hover:border-[#FE4136] transition-all duration-500">
              <h3 className="text-white text-xl font-semibold">
                💡 Feature Requests
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Have an idea that could improve Nexora? Share your suggestions
                and help us build a better crypto dashboard.
              </p>
            </div>

            <div className="bg-[#18181A] rounded-3xl p-8 border border-[#2A2A2A] hover:border-[#FE4136] transition-all duration-500">
              <h3 className="text-white text-xl font-semibold">
                🐞 Report Issues
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Found incorrect market data, a UI issue, or a bug? Let us know
                and we'll fix it as quickly as possible.
              </p>
            </div>

            <div className="bg-[#18181A] rounded-3xl p-8 border border-[#2A2A2A] hover:border-[#FE4136] transition-all duration-500">
              <h3 className="text-white text-xl font-semibold">
                🤝 Collaborations
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Interested in partnerships, collaborations, or working together?
                We'd love to connect.
              </p>
            </div>
          </div>
        </div>

        {/* connect with us */}

        

        <div className="mt-10 md:mt-20 bg-[#18181A] p-5 md:p-10 rounded-4xl border border-white/5 hover:shadow-[0_0_50px_#FE413630] transition-all duration-500">
          
          <div className="text-center md:text-left mb-5 md:mb-10">
            <span className="text-white text-2xl md:text-4xl font-bold ">
              <span className="text-red-500 ">Connect</span> To Us
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5  ">
            <div className="bg-[#18181A] w-full p-8 rounded-[30px] border border-[#252525] hover:border-[#FE4136] transition-all duration-500">
              <FiMail className="text-[#FE4136] text-3xl mb-4" />
              <h3 className="text-white text-xl font-semibold">
                Email Support
              </h3>
              <p className="text-gray-400 mt-2">worksisir01@gmail.com</p>
            </div>

            <div className="bg-[#18181A]  p-8 rounded-[30px] border border-[#252525] hover:border-[#FE4136] transition-all duration-500">
              <FiPhone className="text-[#FE4136] text-3xl mb-4" />
              <h3 className="text-white text-xl font-semibold">
                Phone Support
              </h3>
              <p className="text-gray-400 mt-2">+91 9807XX7110</p>
            </div>

            <div className="bg-[#18181A]   p-8 rounded-[30px] border border-[#252525] hover:border-[#FE4136] transition-all duration-500">
              <HiOutlineLocationMarker className="text-[#FE4136] text-3xl mb-4" />
              <h3 className="text-white text-xl font-semibold">
                Office Address
              </h3>
              <p className="text-gray-400 mt-2">
                Headquatered In Kolkata, India
              </p>
            </div>

            <div className="bg-[#18181A]  p-8 rounded-[30px] border border-[#252525] hover:border-[#FE4136] transition-all duration-500">
              <BsChatDots className="text-[#FE4136] text-3xl mb-4" />
              <h3 className="text-white text-xl font-semibold">Live Support</h3>
              <p className="text-gray-400 mt-2">
                Usually replies within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* message box */}

        <div className=" mx-auto gap-10 mt-10 md:mt-20 ">
          <form className="bg-[#18181A] p-5 md:p-10 rounded-[30px] border border-[#252525] hover:shadow-[0_0_50px_#FE413630] transition-all duration-500">
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-8 text-center md:text-left ">
              Send Us a <span className="text-red-500">Message</span>
            </h2>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-[#222225] text-white p-4 rounded-xl outline-none border border-transparent focus:border-[#FE4136]"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-[#222225] text-white p-4 rounded-xl outline-none border border-transparent focus:border-[#FE4136]"
              />

              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full bg-[#222225] text-white p-4 rounded-xl outline-none border border-transparent focus:border-[#FE4136]"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                required
                className="w-full bg-[#222225] text-white p-4 rounded-xl outline-none border border-transparent focus:border-[#FE4136]"
              ></textarea>

              <div className="flex justify-center md:justify-normal w-full">
                <button className="bg-[#FE4136] px-8 py-4 rounded-3xl text-white flex items-center gap-3 hover:scale-105 transition-all duration-300">
                Send Message
                <FiArrowRight />
              </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-10 md:mt-20">
          <div className="text-center">
            <span className="text-[#FE4136] uppercase tracking-[3px] animate-pulse">FAQ</span>

            <h2 className="text-white text-2xl md:text-4xl font-bold mt-4">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            <div className="bg-[#18181A] rounded-2xl p-7 border border-[#2A2A2A]">
              <h3 className="text-white text-lg font-semibold">
                How long does it take to receive a response?
              </h3>

              <p className="text-gray-400 mt-3">
                We usually respond to all emails within 24 hours.
              </p>
            </div>

            <div className="bg-[#18181A] rounded-2xl p-7 border border-[#2A2A2A]">
              <h3 className="text-white text-lg font-semibold">
                Where does Nexora get market data?
              </h3>

              <p className="text-gray-400 mt-3">
                We collect live cryptocurrency information from trusted public
                APIs and reliable market data providers.
              </p>
            </div>

            <div className="bg-[#18181A] rounded-2xl p-7 border border-[#2A2A2A]">
              <h3 className="text-white text-lg font-semibold">
                Can I request new dashboard features?
              </h3>

              <p className="text-gray-400 mt-3">
                Absolutely. User feedback helps us improve Nexora continuously.
              </p>
            </div>

            <div className="bg-[#18181A] rounded-2xl p-7 border border-[#2A2A2A]">
              <h3 className="text-white text-lg font-semibold">
                Does Nexora support crypto trading?
              </h3>

              <p className="text-gray-400 mt-3">
                No. Nexora is a cryptocurrency dashboard designed for market
                tracking, news, analytics, and learning.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-20 bg-[#18181A] rounded-[35px] border border-white/10 p-10 lg:p-14 hover:border-[#FE4136] transition-all duration-500 text-center md:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl">
              <span className="text-[#FE4136] uppercase tracking-[3px] text-sm font-medium">
                Thank You For Visiting
              </span>

              <h2 className="text-white text-2xl lg:text-5xl font-bold mt-4 ">
                Continue Exploring the
                <span className="text-[#FE4136]"> Crypto Market</span>
              </h2>

              <p className="text-gray-400 mt-6 leading-8">
                Thanks for reaching out to Nexora. While we review your message,
                discover live cryptocurrency prices, market trends, breaking
                news, and valuable insights from across the crypto ecosystem.
              </p>
            </div>

            {/* Right Button */}

            <NavLink to="/market">
              <button className="bg-[#FE4136] whitespace-nowrap px-8 py-4 rounded-full text-white font-medium flex items-center gap-3 hover:scale-105 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(254,65,54,0.35)]">
                Explore Markets
                <FiArrowRight />
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
