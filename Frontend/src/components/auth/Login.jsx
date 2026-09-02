import React from "react";
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
function Login() {
  const [Showpassword, setShowpassword] = useState(false);

  useEffect(() => {
      scrollTo(0,0);
    }, [])
    
  return (
    <div className=" flex justify-center items-center py-25 px-4">
      <div className="w-full max-w-md bg-[#161B22] border border-white/10 hover:shadow-[0_0_50px_#FE413630] rounded-3xl p-8 shadow-xl transition-all duration-500">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>

          <p className="text-gray-400 mt-2">
            Login to access your crypto dashboard
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label className="text-white block mb-2">Email Address</label>

            <input
              type="email"
              required
              placeholder="Enter your email"
              className="
              w-full
              p-3
              rounded-xl
              bg-[#0D1117]
              border
              border-gray-700
              outline-none
              text-white
              focus:border-[#FE4136]
              transition-all
              duration-300
              "
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-white block mb-2">Password</label>

            <input
              type={Showpassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="
      w-full
      p-3
      pr-12
      rounded-xl
      bg-[#0D1117]
      border
      border-gray-700
      outline-none
      text-white
      focus:border-[#FE4136]
      transition-all
      duration-300
    "
            />

            <button
              type="button"
              onClick={() => setShowpassword(!Showpassword)}
              className="
      absolute
      bottom-[15px]
      right-[14px]
      text-xl
      text-gray-400
      hover:text-white
    "
            >
              {Showpassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" required className="accent-[#FE4136]" />
              <span className="text-gray-300">Remember me</span>
            </div>

            <button type="button" className="text-[#FE4136] hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            className="
            bg-[#FE4136]
            hover:bg-[#d83228]
            text-white
            p-3
            rounded-xl
            font-semibold
            transition-all
            duration-300
            active:scale-95
            "
          >
            Log In
          </button>



{/* Google + Facebook */}
<div className="flex gap-10 justify-center">
  <button
    type="button"
    className=" flex justify-center items-center gap-3 p-3 rounded-xl bg-[#0D1117] border border-gray-700 hover:border-gray-500 transition-all duration-300 cursor-pointer"
  >
    <FcGoogle className="text-2xl" />
  </button>

  <button
    type="button"
    className=" flex justify-center items-center gap-3 p-3 rounded-xl bg-[#0D1117] border border-gray-700 hover:border-gray-500 transition-all duration-300 cursor-pointer"
  >
    <FaFacebook className="text-2xl text-blue-500" />
  </button>
</div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-[1px] bg-gray-700"></div>

            <span className="text-gray-500 text-sm">OR</span>

            <div className="flex-1 h-[1px] bg-gray-700"></div>
          </div>

          {/* Signup */}

          <div className="flex justify-center gap-2">
            <p className="text-center text-gray-400">Don’t have an account?</p>
            <NavLink
              to="/signup"
              className="text-[#FE4136] cursor-pointer hover:underline"
            >
              Sign Up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
