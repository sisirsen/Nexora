import React, { useEffect, useState } from "react";
import { FiAlertOctagon } from "react-icons/fi";
import { motion } from "framer-motion";
import ServiceCards from "../Subpages/ServiceCards";

// ============================================================
// Skeleton
// ============================================================

function FeaturesSkeleton() {
  return (
    <div className="min-h-screen animate-pulse px-4 py-25 md:px-10 md:py-30">
      {/* ================= HEADER ================= */}

      <div className="flex flex-col items-center">
        {/* Heading */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-24 rounded-lg bg-gray-800 md:h-14 md:w-36" />

          <div className="h-10 w-36 rounded-lg bg-gray-800 md:h-14 md:w-48" />
        </div>

        {/* Description */}
        <div className="mt-6 flex w-full max-w-5xl flex-col items-center gap-3 px-2">
          <div className="h-4 w-full rounded bg-gray-800" />
          <div className="h-4 w-5/6 rounded bg-gray-800" />
        </div>
      </div>

      {/* ================= SERVICE CARDS ================= */}

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-[260px] rounded-3xl border border-white/5 bg-gray-800/60 p-7"
          >
            <div className="h-12 w-12 rounded-xl bg-gray-700" />

            <div className="mt-6 h-6 w-3/4 rounded bg-gray-700" />

            <div className="mt-4 space-y-2">
              <div className="h-3 w-full rounded bg-gray-700" />
              <div className="h-3 w-5/6 rounded bg-gray-700" />
              <div className="h-3 w-4/6 rounded bg-gray-700" />
            </div>

            <div className="mt-6 h-10 w-32 rounded-lg bg-gray-700" />
          </div>
        ))}
      </div>

      {/* ================= RISK WARNING ================= */}

      <div className="mt-14 rounded-[30px] border-2 border-white/10 bg-gray-800/50 p-6 md:p-8">
        <div className="mx-auto h-7 w-64 rounded bg-gray-700 md:mx-0 md:h-8 md:w-80" />

        <div className="mt-6 space-y-3">
          <div className="h-4 w-full rounded bg-gray-700" />
          <div className="h-4 w-11/12 rounded bg-gray-700" />
          <div className="h-4 w-4/5 rounded bg-gray-700" />
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Features
// ============================================================

function Features() {
  const [pageLoading, setPageLoading] = useState(
    !sessionStorage.getItem("features_visited"),
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!sessionStorage.getItem("features_visited")) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("features_visited", "true");
        setPageLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (pageLoading) {
    return <FeaturesSkeleton />;
  }

  // ==========================================================
  // Page
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
    >
      <section className="px-4 py-25 md:px-10 md:py-30">
        <div>
          {/* ==================================================
              HEADER
          ================================================== */}

          <div className="mx-auto w-full text-center">
            <h1 className="flex justify-center text-4xl font-bold text-white md:text-6xl">
              Our
              <span className="mb-5 pl-3 text-[#FE4136]">Features</span>
            </h1>

            <p className="mx-auto mt-4 mb-15 flex max-w-5xl justify-center px-2 text-sm text-gray-400 md:mb-20 md:text-base">
              Discover everything you need to monitor cryptocurrency markets,
              analyze trends, and stay informed with real-time updates.
            </p>
          </div>

          {/* ==================================================
              SERVICE CARDS
          ================================================== */}

          <ServiceCards />

          {/* ==================================================
              RISK WARNING
          ================================================== */}

          <div className="mt-14 w-full rounded-[30px] border-2 border-white/20 p-6 text-center shadow-[0_0_30px_rgba(254,65,54,0.08)] transition-all duration-500 hover:border-[#FE4136]/30 md:p-8 md:text-left">
            <h2 className="mb-4 flex items-center justify-center gap-2 text-xl font-semibold text-[#FE4136] md:justify-start md:text-2xl">
              Important Risk Warning
              <FiAlertOctagon className="mt-1" />
            </h2>

            <p className="leading-8 text-gray-300">
              Cryptocurrency investments are highly volatile and involve
              significant financial risk. Never invest money you cannot afford
              to lose. Always research carefully before making investment
              decisions.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Features;
