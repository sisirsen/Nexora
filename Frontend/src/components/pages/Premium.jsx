import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ============================================================
// Skeleton
// ============================================================

function PremiumSkeleton() {
  return (
    <div className="min-h-screen animate-pulse bg-gray-950 px-6 py-25 text-white md:py-30">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="flex flex-col items-center text-center">
          <div className="h-10 w-72 rounded-lg bg-gray-800 md:h-14 md:w-[420px]" />

          <div className="mt-6 w-full max-w-2xl space-y-3">
            <div className="mx-auto h-4 w-full rounded bg-gray-800" />
            <div className="mx-auto h-4 w-5/6 rounded bg-gray-800" />
            <div className="mx-auto h-4 w-4/6 rounded bg-gray-800" />
          </div>
        </div>

        {/* ================= PRICING CARDS ================= */}

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="h-[500px] rounded-3xl border border-gray-800 bg-gray-900 p-8"
            >
              {/* Card title */}
              <div className="h-8 w-48 rounded bg-gray-800" />

              {/* Price */}
              <div className="mt-8 flex items-end gap-3">
                <div className="h-14 w-32 rounded bg-gray-800" />
                <div className="h-5 w-16 rounded bg-gray-800" />
              </div>

              {/* Features */}
              <div className="mt-10 space-y-5">
                {[1, 2, 3, 4, 5].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-gray-700" />
                    <div className="h-4 w-4/5 rounded bg-gray-800" />
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="mt-10 h-12 w-full rounded-xl bg-gray-800" />
            </div>
          ))}
        </div>

        {/* ================= EXTRA FEATURES ================= */}

        <div className="mt-24 rounded-3xl border border-gray-800 bg-gray-900 p-10">
          {/* Heading */}
          <div className="mx-auto h-10 w-72 rounded-lg bg-gray-800" />

          {/* Feature cards */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex flex-col items-center text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-gray-800" />

                <div className="mt-5 h-5 w-32 rounded bg-gray-800" />

                <div className="mt-4 w-full space-y-2">
                  <div className="h-3 w-full rounded bg-gray-800" />
                  <div className="mx-auto h-3 w-4/5 rounded bg-gray-800" />
                  <div className="mx-auto h-3 w-3/5 rounded bg-gray-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Premium Page
// ============================================================

function Premium() {
  // ==========================================================
  // State
  // ==========================================================

  const [pageLoading, setPageLoading] = useState(
    !sessionStorage.getItem("premium_visited"),
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!sessionStorage.getItem("premium_visited")) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("premium_visited", "true");
        setPageLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (pageLoading) {
    return <PremiumSkeleton />;
  }

  // ==========================================================
  // Plans
  // ==========================================================

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

  // ==========================================================
  // Actual Page
  // ==========================================================

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="px-5 md:px-10"
    >
      <section className="min-h-screen bg-gray-950 px-6 py-25 text-white md:py-30">
        <div className="mx-auto max-w-7xl">
          {/* ==================================================
              HEADING
          ================================================== */}

          <div className="mb-16 text-center">
            <h1 className="text-3xl font-bold md:text-5xl">
              Upgrade to <span className="text-red-500">Premium</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm text-gray-400 md:text-base">
              Unlock advanced crypto insights, premium learning resources,
              unlimited watchlists, and an ad-free experience with our Premium
              membership.
            </p>
          </div>

          {/* ==================================================
              PRICING CARDS
          ================================================== */}

          <div className="grid gap-10 md:grid-cols-2">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  index === 1
                    ? "border-red-500 bg-gradient-to-b from-red-500/10 to-gray-900"
                    : "border-gray-700 bg-gray-900"
                }`}
              >
                {/* Save Badge */}
                {plan.save && (
                  <span className="absolute right-5 top-5 rounded-full bg-red-500 px-3 py-1 text-xs text-white">
                    {plan.save}
                  </span>
                )}

                {/* Title */}
                <h2 className="text-3xl font-bold">{plan.title}</h2>

                {/* Price */}
                <div className="mt-6 flex items-end">
                  <span className="text-5xl font-bold text-red-500">
                    {plan.price}
                  </span>

                  <span className="ml-2 text-gray-400">{plan.duration}</span>
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-red-500" />

                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  type="button"
                  className="mt-10 w-full rounded-xl bg-red-500 py-3 font-semibold transition duration-300 hover:bg-red-600 active:scale-95"
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>

          {/* ==================================================
              EXTRA FEATURES
          ================================================== */}

          <div className="mt-24 rounded-3xl border border-gray-800 bg-gray-900 p-10">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Why Choose <span className="text-red-500">Premium?</span>
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Live Analytics */}
              <div className="text-center">
                <div className="mb-3 text-4xl">📈</div>

                <h3 className="text-lg font-semibold">Live Analytics</h3>

                <p className="mt-2 text-sm text-gray-400">
                  Access deeper market insights with premium analytics.
                </p>
              </div>

              {/* Premium Courses */}
              <div className="text-center">
                <div className="mb-3 text-4xl">🎓</div>

                <h3 className="text-lg font-semibold">Premium Courses</h3>

                <p className="mt-2 text-sm text-gray-400">
                  Learn advanced crypto trading and blockchain concepts.
                </p>
              </div>

              {/* Unlimited Watchlist */}
              <div className="text-center">
                <div className="mb-3 text-4xl">⭐</div>

                <h3 className="text-lg font-semibold">Unlimited Watchlist</h3>

                <p className="mt-2 text-sm text-gray-400">
                  Track unlimited cryptocurrencies without restrictions.
                </p>
              </div>

              {/* Early Access */}
              <div className="text-center">
                <div className="mb-3 text-4xl">🚀</div>

                <h3 className="text-lg font-semibold">Early Access</h3>

                <p className="mt-2 text-sm text-gray-400">
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

export default Premium;
