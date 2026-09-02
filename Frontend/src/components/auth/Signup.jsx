import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Signup() {
  const [showPassword, setshowPassword] = useState(false);
  const [showPassword2, setshowPassword2] = useState(false);

  useEffect(() => {
    scrollTo(0,0);
  }, [])
  
  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-28">
      <div className="w-full max-w-xl bg-[#161B22] border border-white/10 hover:shadow-[0_0_50px_#FE413630] rounded-[30px] p-8 md:p-10 shadow-xl transition-all duration-500">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Create Account</h1>

          <p className="text-gray-400 mt-3">
            Join the future of crypto trading
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-white mb-2">Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="
              w-full
              p-4
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

          {/* Email */}
          <div>
            <label className="block text-white mb-2">Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              required
              className="
              w-full
              p-4
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
            <label className="block text-white mb-2">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              required
              className="
              w-full
              p-4
              rounded-xl
              bg-[#0D1117]
              border
              border-gray-700
              outline-none
              pr-12
              text-white
              focus:border-[#FE4136]
              transition-all
              duration-300
              "
            />

            <div
              onClick={() => setshowPassword(!showPassword)}
              className="
      absolute
      bottom-[19px]
      right-[14px]
      text-xl
      text-gray-400
      hover:text-white
    "
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-white mb-2">Confirm Password</label>

            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm password"
              required
              className="
              w-full
              p-4
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

            <div
              onClick={() => setshowPassword2(!showPassword2)}
              className="
      absolute
      bottom-[19px]
      right-[14px]
      text-xl
      text-gray-400
      hover:text-white
    "
            >
              {showPassword2 ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" required className="accent-[#FE4136] mt-1" />

            <div className="flex items-center gap-1">
              <p className="text-gray-300 leading-6">I agree to the </p>
              <NavLink to='terms' className="text-[#FE4136] cursor-pointer hover:underline">
                Terms & Conditions
              </NavLink>
            </div>
          </div>

          {/* Button */}
          <button
            className="
            bg-[#FE4136]
            hover:bg-[#d83228]
            text-white
            py-4
            rounded-xl
            font-semibold
            transition-all
            duration-300
            active:scale-95
            mt-2
            "
          >
            Create Account
          </button>
          {/* Divider */}
<div className="flex items-center gap-3">
  <div className="flex-1 h-[1px] bg-gray-700"></div>

  <span className="text-gray-500 text-sm">OR</span>

  <div className="flex-1 h-[1px] bg-gray-700"></div>
</div>

{/* Google + Facebook */}
<div className="flex gap-4">
  <button
    type="button"
    className="flex-1 flex justify-center items-center gap-3 p-3 rounded-xl bg-[#0D1117] border border-gray-700 hover:border-gray-500 transition-all duration-300"
  >
    <FcGoogle className="text-2xl" />
    <span className="text-white">Google</span>
  </button>

  <button
    type="button"
    className="flex-1 flex justify-center items-center gap-3 p-3 rounded-xl bg-[#0D1117] border border-gray-700 hover:border-gray-500 transition-all duration-300"
  >
    <FaFacebook className="text-2xl text-blue-500" />
    <span className="text-white">Facebook</span>
  </button>
</div>

          {/* Divider */}
          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 h-[1px] bg-gray-700"></div>

            <span className="text-gray-500 text-sm">OR</span>

            <div className="flex-1 h-[1px] bg-gray-700"></div>
          </div>

          

          {/* Login Redirect */}
          <div className="flex justify-center gap-2">
            <p className="text-center text-gray-400">
              Already have an account?
            </p>
            <NavLink to="/login" className="text-[#FE4136] hover:underline">
              Log In
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
