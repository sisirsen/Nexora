import React, { useEffect } from "react";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

function CryptoCalender() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const cryptoEvents = [
    {
      id: 1,
      date: "2026-06-05",
      title: "Aethir Exchange Listing",
      coin: "Aethir",
      symbol: "ATH",
      category: "Listing",
      impact: "High",
      description:
        "Aethir is scheduled for a new exchange listing, potentially increasing the token's accessibility, trading activity, and market liquidity.",
      sourceLink: "https://coinmarketcal.com/",
    },
    {
      id: 2,
      date: "2026-06-08",
      title: "Network Upgrade 2.13",
      coin: "NEAR Protocol",
      symbol: "NEAR",
      category: "Network Upgrade",
      impact: "High",
      description:
        "NEAR Protocol is preparing its Network Upgrade 2.13, introducing technical improvements and updates to the blockchain infrastructure.",
      sourceLink: "https://coinmarketcal.com/en/coin/near-protocol",
    },
    {
      id: 3,
      date: "2026-06-11",
      endDate: "2026-06-13",
      title: "BTC Prague 2026",
      coin: "Bitcoin",
      symbol: "BTC",
      category: "Conference",
      impact: "High",
      description:
        "BTC Prague brings together Bitcoin developers, companies, investors, and community members for one of Europe's major Bitcoin-focused events.",
      sourceLink: "https://btcprague.com/",
    },
    {
      id: 4,
      date: "2026-06-15",
      title: "Alpenglow Mainnet",
      coin: "Aethir",
      symbol: "ATH",
      category: "Mainnet",
      impact: "High",
      description:
        "Aethir's Alpenglow Mainnet milestone focuses on expanding the project's decentralized cloud and GPU computing infrastructure.",
      sourceLink: "https://coinmarketcal.com/en/coin/aethir",
    },
    {
      id: 5,
      date: "2026-06-18",
      title: "Protocol Development Update",
      coin: "Ethereum",
      symbol: "ETH",
      category: "Development",
      impact: "Medium",
      description:
        "Ethereum ecosystem developers continue work on protocol improvements focused on scalability, network efficiency, and long-term infrastructure.",
      sourceLink: "https://ethereum.org/en/roadmap/",
    },
    {
      id: 6,
      date: "2026-06-20",
      title: "ZRO Token Unlock",
      coin: "LayerZero",
      symbol: "ZRO",
      category: "Token Unlock",
      impact: "High",
      description:
        "A scheduled LayerZero token unlock releases part of the previously locked ZRO supply into circulation under the project's vesting schedule.",
      sourceLink: "https://tokenomist.ai/",
    },
    {
      id: 7,
      date: "2026-06-20",
      title: "Centrifuge x Stellar",
      coin: "Stellar",
      symbol: "XLM",
      category: "Partnership",
      impact: "Medium",
      description:
        "Centrifuge and Stellar highlight collaboration around blockchain-based financial infrastructure and real-world asset tokenization.",
      sourceLink: "https://coinmarketcal.com/en/coin/stellar",
    },
    {
      id: 8,
      date: "2026-06-22",
      endDate: "2026-06-23",
      title: "Litecoin Summit Amsterdam",
      coin: "Litecoin",
      symbol: "LTC",
      category: "Conference",
      impact: "High",
      description:
        "The Litecoin Summit brings the community together to discuss privacy, financial freedom, censorship resistance, adoption, and Litecoin development.",
      sourceLink: "https://www.litecoin.net/",
    },
    {
      id: 9,
      date: "2026-06-22",
      title: "CROSS Exchange Expansion",
      coin: "CROSS",
      symbol: "CROSS",
      category: "Exchange",
      impact: "Medium",
      description:
        "CROSS expands its market presence through additional exchange activity designed to improve token accessibility and liquidity.",
      sourceLink: "https://coinmarketcal.com/",
    },
    {
      id: 10,
      date: "2026-06-23",
      title: "PoL Next Mainnet",
      coin: "PoL",
      symbol: "POL",
      category: "Mainnet",
      impact: "High",
      description:
        "The PoL Next Mainnet milestone introduces the next stage of the network with updates to infrastructure and ecosystem functionality.",
      sourceLink: "https://coinmarketcal.com/en/highlights",
    },
    {
      id: 11,
      date: "2026-06-24",
      title: "Solstice V0.14.3",
      coin: "Solstice",
      symbol: "SLX",
      category: "Product Update",
      impact: "Low",
      description:
        "Solstice releases version 0.14.3 with platform improvements, fixes, and technical updates for users and ecosystem participants.",
      sourceLink: "https://coinmarketcal.com/en/pastevents",
    },
    {
      id: 12,
      date: "2026-06-25",
      title: "Ecosystem Development Update",
      coin: "Solana",
      symbol: "SOL",
      category: "Development",
      impact: "Medium",
      description:
        "The Solana ecosystem continues infrastructure and performance development aimed at supporting high-throughput blockchain applications.",
      sourceLink: "https://solana.com/news",
    },
    {
      id: 13,
      date: "2026-06-26",
      title: "Governance Proposal Vote",
      coin: "Aave",
      symbol: "AAVE",
      category: "Governance",
      impact: "Medium",
      description:
        "Aave governance participants review and vote on ecosystem proposals that may affect protocol parameters, treasury usage, or future development.",
      sourceLink: "https://governance.aave.com/",
    },
    {
      id: 14,
      date: "2026-06-27",
      title: "Blockchain Impact",
      coin: "Crypto Market",
      symbol: "CRYPTO",
      category: "Conference",
      impact: "Medium",
      description:
        "Blockchain Impact brings together industry participants to discuss blockchain adoption, digital assets, regulation, and emerging Web3 technology.",
      sourceLink: "https://coinmarketcal.com/en/coin/cryptocurrencies",
    },
    {
      id: 15,
      date: "2026-06-28",
      title: "Pi2Day Updates & Releases",
      coin: "Pi Network",
      symbol: "PI",
      category: "Ecosystem Update",
      impact: "High",
      description:
        "Pi2Day focuses on ecosystem milestones across Pi applications, nodes, developer tools, and new features expected to expand the network.",
      sourceLink:
        "https://coinmarketcal.com/en/event/pi2day-updates-and-releases-332504",
    },
    {
      id: 16,
      date: "2026-06-29",
      title: "Developer Ecosystem Update",
      coin: "Cardano",
      symbol: "ADA",
      category: "Development",
      impact: "Medium",
      description:
        "Cardano's ecosystem continues development across governance, scaling, developer tooling, and decentralized application infrastructure.",
      sourceLink: "https://cardano.org/news/",
    },
    {
      id: 17,
      date: "2026-06-30",
      title: "Lightyear Platform Sunset",
      coin: "Velo",
      symbol: "VELO",
      category: "Platform Update",
      impact: "Medium",
      description:
        "The Lightyear platform is scheduled to sunset, with affected users contacted regarding the closure and any required account actions.",
      sourceLink: "https://coinmarketcal.com/en/pastevents",
    },
    {
      id: 18,
      date: "2026-06-30",
      title: "Network Upgrade Deadline",
      coin: "NEAR Protocol",
      symbol: "NEAR",
      category: "Network Upgrade",
      impact: "High",
      description:
        "NEAR Protocol targets completion of its scheduled network upgrade within June, bringing technical improvements to the blockchain.",
      sourceLink: "https://coinmarketcal.com/en/coin/near-protocol",
    },
    {
      id: 19,
      date: "2026-06-30",
      title: "Q2 Ecosystem Milestone",
      coin: "Aster",
      symbol: "ASTER",
      category: "Roadmap",
      impact: "Medium",
      description:
        "Aster reaches a scheduled Q2 roadmap milestone focused on continued product development and ecosystem expansion.",
      sourceLink: "https://coinmarketcal.com/",
    },
    {
      id: 20,
      date: "2026-06-30",
      title: "First NaaP Solutions Milestone",
      coin: "Livepeer",
      symbol: "LPT",
      category: "Roadmap",
      impact: "Medium",
      description:
        "Livepeer advances its Network-as-a-Platform roadmap by integrating and testing early solution providers and their APIs.",
      sourceLink: "https://coinmarketcal.com/en/coin/livepeer",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="min-h-screen bg-[#050914] px-4 py-25 md:py-35 sm:px-6 lg:px-6">
        <div className="mx-auto ">
          {/* Header */}
          <div className="mb-12 ">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FE4136] text-center">
              Crypto Calendar
            </p>

            <h1 className="text-4xl font-bold text-white md:text-5xl text-center">
              Upcoming Crypto Events
            </h1>

            <p className="mt-4 text-slate-400 text-center mb-20">
              Track major listings, token unlocks, network upgrades,
              conferences, governance votes, and ecosystem updates.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cryptoEvents.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0B1120] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE4136]/50 hover:shadow-[0_15px_50px_rgba(254,65,54,0.12)]"
              >
                {/* Top Glow */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#FE4136] transition-all duration-500 group-hover:w-full" />

                {/* Date + Impact */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <FiCalendar className="text-[#FE4136]" />
                    <span>{item.date}</span>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.impact === "High"
                        ? "bg-red-500/10 text-red-400"
                        : item.impact === "Medium"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    {item.impact} Impact
                  </span>
                </div>

                {/* Category */}
                <span className="inline-block rounded-md bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                  {item.category}
                </span>

                {/* Title */}
                <h2 className="mt-4 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#FE4136]">
                  {item.title}
                </h2>

                {/* Coin */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-sm text-slate-400">{item.coin}</span>

                  <span className="rounded bg-[#FE4136]/10 px-2 py-0.5 text-xs font-bold text-[#FE4136]">
                    {item.symbol}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>

                {/* Bottom */}
                <div className="mt-7 border-t border-slate-800 pt-5">
                  <a
                    href={item.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm font-semibold text-white transition-colors hover:text-[#FE4136]"
                  >
                    View Event Source
                    <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default CryptoCalender;
