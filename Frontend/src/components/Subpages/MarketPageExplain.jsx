import React from "react";

function MarketPageExplain() {
  return (
    <div>
      <div className="w-[850px] p-5 bg-[#111111] rounded-2xl border border-white/10 hover:border-[#FE4136] transition-all duration-500  ">
        <div className="flex justify-center mb-5">
          <span className="text-2xl text-white  ">
            About <span className="text-[#FE4136]">Market Page</span>
          </span>
        </div>
        <span className="text-gray-300">
          The Market Page delivers a real-time cryptocurrency monitoring
          experience through a structured and visually clean dashboard. It
          showcases trending digital assets, live <span className="text-red-500">INR</span> pricing, and 24-hour
          market fluctuations, helping users stay updated with ongoing crypto
          activity in a simple and accessible format. The interface is designed
          to make market information easy to scan by emphasizing the most
          relevant metrics without overwhelming the user with excessive details.
          Trending rankings, price movement, and market behavior are presented
          in a way that improves clarity while maintaining a fast and responsive
          experience. Inspired by modern fintech platforms, the design focuses
          on usability, readability, and smooth interaction to create a
          professional dashboard environment. The page is optimized to provide
          consistent performance across different devices, ensuring a clean and
          intuitive cryptocurrency tracking experience.
        </span>
      </div>
    </div>
  );
}

export default MarketPageExplain;
