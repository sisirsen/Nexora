import React from "react";
import {icons} from '../../utils/constants'

const Footer = () => {
  return (
    <footer className="bg-[#0b0f1a] text-gray-400 border-t border-gray-800 mt-10">
      <div className="flex gap-50 p-10 justify-evenly">

        {/* Brand */}
        <div>
         <div className="flex items-center gap-4"><img className="h-10 w-10" src={icons.logo} alt="" srcset="" /> <h1 className="text-2xl font-bold text-orange-500">NEXORA</h1></div>
          <p className="mt-5 p- text-sm">
            <div className="text-md">

          Built for precision in a volatile market. <br/>
          Stay ahead with reliable crypto intelligence.

            </div>
           
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-white font-semibold mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-white font-semibold mb-3">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Market</li>
            <li className="hover:text-white cursor-pointer">Watchlist</li>
            <li className="hover:text-white cursor-pointer">API</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-white font-semibold mb-3">Connect</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Twiter</li>
            <li className="hover:text-white cursor-pointer">Instragram</li>
            <li className="hover:text-white cursor-pointer">GitHub</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © 2026 NEXORA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;