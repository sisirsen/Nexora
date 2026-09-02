import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CryptoNews() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const [News, setNews] = useState([]);
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(true);

  const LoadingComponent = () => {
    return (
      <div className="w-full flex justify-center items-center py-40">
        <div className="bg-[#111111] border border-white/10 hover:border-[#FE4136] rounded-xl px-10 py-8 flex flex-col items-center gap-5 transition-all duration-500">
          <div className="w-10 h-10 border-4 border-[#FE4136] rounded-[16px] animate-spin"></div>

          <p className="text-white text-lg">Fetching Top News from Market...</p>
        </div>
      </div>
    );
  };

  const ErrorComponent = () => {
    return (
      <div className="w-full flex justify-center py-40">
        <div className="bg-[#111111] border border-red-500 rounded-xl p-8 text-center">
          <h2 className="text-red-500 text-xl font-bold">
            Failed to load market data
          </h2>

          <p className="text-gray-400 mt-2">
            Please check your internet connection.
          </p>

          <button
            onClick={fetchNews}
            className="mt-6 px-6 py-3 bg-[#FE4136] rounded-lg text-white hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  };

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://abc-uknd.onrender.com/news`,
      );

      if (!response.ok) {
        setError(true);
      }

      const data = await response.json();

      setNews(data.articles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (Loading) {
    return <LoadingComponent />;
  }
  if (Error) {
    return <ErrorComponent />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="min-h-screen bg-[#0A0A0A] text-white px-6 lg:px-10 py-25 md:py-40">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold">
            Crypto <span className="text-[#FE4136]">News</span>
          </h1>

          <p className="text-gray-400 mt-8 max-w-2xl mx-auto">
            Stay ahead of the market with the Top 10 latest cryptocurrency news,
            blockchain innovations, and trending insights from trusted global
            sources.
          </p>
        </div>

        {/* News Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {News.map((item, index) => (
            <div
              key={index}
              className="group bg-[#111111] border border-gray-800 rounded-3xl overflow-hidden hover:border-[#FE4136] transition-all duration-500"
            >
              {/* Image */}

              <div className="overflow-hidden h-60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
              </div>

              {/* Content */}

              <div className="p-6 flex flex-col h-[270px]">
                <h2 className="text-xl group-hover:underline font-bold line-clamp-2">
                  {item.title}...
                </h2>

                <p className="text-gray-400 mt-4 text-sm line-clamp-3">
                  {item.description}...
                </p>

                <div className="flex justify-between items-center text-white text-sm mt-auto">
                  <span>{item.source.name}</span>

                  <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 bg-[#FE4136] text-white py-3 rounded-xl text-center hover:bg-red-600 transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default CryptoNews;
