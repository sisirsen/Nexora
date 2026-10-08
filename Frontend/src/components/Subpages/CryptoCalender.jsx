import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

function CryptoCalender() {
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
      <section className="min-h-screen bg-[#0A0A0A] text-white px-6 lg:px-10 py-25 md:py-40">
        <div className="text-green-500 text-xl text-center animate-pulse">
          This Page Is Not Made Yet Because Backend Is Not Ready To
          Implement{" "}
        </div>
      </section>
    </motion.div>
  );
}

export default CryptoCalender;
