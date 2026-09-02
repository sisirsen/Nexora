import React, { useState, useEffect } from "react";
import { icon } from "../../assets/images";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiLock } from "react-icons/fi";
function Navbar() {
  const navItems = [
    { id: 1, item: "Home", path: "/" },
    { id: 2, item: "Markets", path: "/market" },
    { id: 3, item: "Features", path: "/features" },
    { id: 4, item: "Contact", path: "/contact" },
    { id: 5, item: "About Us", path: "/about" },
    { id: 6, item: "Learning Hub", path: "learn" },
     { id: 7, item: "Premium", path: "/premium", icon: <FiLock className="text-yellow-400 text-lg"/> },
  ];

  // const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-slate-900/40 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center cursor-pointer text-white font-bold"
          >
            <img className="h-6 w-6 md:h-8 md:w-8" src={icon.logo} alt="logo" />
            <span className="pl-2 text-lg md:text-2xl">NEXORA</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-end gap-8 text-[17px] text-[#FE4136]">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-400 flex items-center gap-1"
                    : "hover:text-gray-400 hover:underline underline-offset-8 transition-all duration-300 flex items-center gap-1"
                }
              >
                {item.item}
                {item.icon}
              </NavLink>
            ))}
          </div>
         

          
          

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Dark Mode */}      
            {/* <button
              onClick={() => setDark(!dark)}
              className="text-xl text-white"
            >
              {dark ? (
                <FaMoon className="text-yellow-500" />
              ) : (
                <FiSun className="text-yellow-500" />
              )}
            </button> */}

            {/* Desktop Buttons */}
            <div className="hidden lg:flex gap-3">
              <NavLink
                to="/login"
                className="flex items-center hover:bg-[#FE4136] hover:text-white px-4 py-2 rounded-md text-[#FE4136] transition-all duration-300"
              >
                Log In
              </NavLink>

              <NavLink
                to="/signup"
                className="bg-[#FE4136] hover:bg-[#830b05] px-4 py-2 rounded-md text-white transition-all duration-300"
              >
                Sign Up
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-2xl text-[#FE4136]"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-slate-900 z-50 border-l border-white/10 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <h2 className="text-white font-bold text-xl">NEXORA</h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-6 py-4 ${
                  isActive
                    ? "text-white bg-[#FE4136]"
                    : "text-[#FE4136] hover:bg-slate-800"
                }`
              }
            >
              {item.item}
            </NavLink>
          ))}

          <div className="flex flex-col gap-3 px-6 mt-6">
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="border border-[#FE4136] text-[#FE4136] text-center py-3 rounded-md"
            >
              Log In
            </NavLink>

            <NavLink
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="bg-[#FE4136] text-white text-center py-3 rounded-md"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
