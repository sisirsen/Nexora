import React from "react";
import { icon } from "../../assets/images";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f1a] text-gray-400 border-t border-white/20">

      <div
        className="
        max-w-7xl
        mx-auto
        flex
        flex-col
        sm:grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-10
        lg:gap-16
        py-16
        px-6
        md:px-10
        "
      >

        {/* Brand */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <img
              className="h-8 w-8"
              src={icon.logo}
              alt="logo"
            />
            <h1 className="text-2xl font-bold text-white">
              NEXORA
            </h1>
          </div>

          <p className="mt-5 text-sm leading-7 max-w-sm mx-auto sm:mx-0">
            Built for precision in a volatile market.
            Stay ahead with reliable crypto intelligence.
          </p>
        </div>

        {/* Company */}
        <div className="text-center sm:text-left">
          <h2 className="text-white font-semibold mb-4">
            Company
          </h2>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              About
            </li>

            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Careers
            </li>

            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Blog
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="text-center sm:text-left">
          <h2 className="text-white font-semibold mb-4">
            Resources
          </h2>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Market
            </li>

            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Watchlist
            </li>

            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              API
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="text-center sm:text-left">
          <h2 className="text-white font-semibold mb-4">
            Connect
          </h2>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Twitter
            </li>

            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              Instagram
            </li>

            <li className="hover:text-white cursor-pointer transition-colors duration-300">
              GitHub
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div
        className="
        border-t
        border-gray-800
        text-center
        py-5
        px-4
        text-xs
        sm:text-sm
        "
      >
        © 2026 NEXORA. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;