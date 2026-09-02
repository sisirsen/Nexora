import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Premium() {

  const plans = [
    {
      title: "Monthly Plan",
      price: "₹199",
      duration: "/month",
      features: [
        "Ad-Free Experience",
        "Unlimited Watchlist",
        "Real-Time Market Updates",
        "Premium Learning Resources",
        "Priority Customer Support",
      ],
      button: "Get Monthly Plan",
    },
    {
      title: "Yearly Plan",
      price: "₹1,999",
      duration: "/year",
      save: "Save 16%",
      features: [
        "Everything in Monthly Plan",
        "Exclusive Premium Content",
        "Early Access to New Features",
        "Advanced Market Insights",
        "Priority Feature Requests",
      ],
      button: "Get Yearly Plan",
    },
  ];

  useEffect(() => {
    scrollTo(0,0)
  }, [])
  

  return (
     <motion.div
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0}}
    transition={{duration:0.6}}
    className='px-5 md:px-10'
    >

      <section className="min-h-screen bg-gray-950 text-white py-25 md:py-30 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold">
            Upgrade to{" "}
            <span className="text-red-500">Premium</span>
          </h1>

          <p className="text-sm md:text-md text-gray-400 mt-5 max-w-2xl mx-auto">
            Unlock advanced crypto insights, premium learning resources,
            unlimited watchlists, and an ad-free experience with our Premium
            membership.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                index === 1
                  ? "border-red-500 bg-gradient-to-b from-red-500/10 to-gray-900"
                  : "border-gray-700 bg-gray-900"
              }`}
            >
              {plan.save && (
                <span className="absolute top-5 right-5 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  {plan.save}
                </span>
              )}

              <h2 className="text-3xl font-bold">{plan.title}</h2>

              <div className="flex items-end mt-6">
                <span className="text-5xl font-bold text-red-500">
                  {plan.price}
                </span>
                <span className="text-gray-400 ml-2">
                  {plan.duration}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-10 w-full bg-red-500 hover:bg-red-600 transition duration-300 py-3 rounded-xl font-semibold">
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        {/* Extra Features */}
        <div className="mt-24 bg-gray-900 border border-gray-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose{" "}
            <span className="text-red-500">Premium?</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-semibold text-lg">
                Live Analytics
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Access deeper market insights with premium analytics.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-semibold text-lg">
                Premium Courses
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Learn advanced crypto trading and blockchain concepts.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-semibold text-lg">
                Unlimited Watchlist
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Track unlimited cryptocurrencies without restrictions.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-semibold text-lg">
                Early Access
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Be the first to try upcoming features before everyone else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
    
  );
}

export default Premium 