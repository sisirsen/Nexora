import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { icon } from "../../assets/images";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Full name is required"),

      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),

      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .required("Password is required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Please confirm your password"),

      terms: Yup.boolean().oneOf(
        [true],
        "You must accept the Terms & Conditions",
      ),
    }),

    onSubmit: (values) => {
      console.log("Signup data:", values);
    },
  });

  return (
    <div className="min-h-[calc(100vh-88px)] bg-black text-white flex items-center justify-center px-4 py-20">
      {/* ================= MAIN CARD ================= */}

      <div
        className="
          w-full
          max-w-[1100px]
          bg-[#090909]
          border border-white/10
          rounded-2xl
          overflow-hidden
          shadow-2xl
          flex
        "
      >
        {/* ================= LEFT SIDE ================= */}

        <div className="w-1/2 px-10 py-7 flex flex-col justify-center">
          {/* LOGO */}

          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center">
              <img src={icon.logo} alt="logo" />
            </div>

            <span className="text-xl font-bold">Nexora</span>
          </div>

          {/* HEADING */}

          <div className="mb-5">
            <p className="text-red-500 text-sm font-semibold mb-1">
              Get started
            </p>

            <h1 className="text-4xl font-bold tracking-tight">
              Create account.
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              Join Nexora and start tracking the crypto market.
            </p>
          </div>

          {/* ================= FORM ================= */}

          <form onSubmit={formik.handleSubmit} className="space-y-3">
            {/* NAME */}

            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-400 mb-1.5"
              >
                Full name
              </label>

              <div className="relative">
                <FiUser
                  size={16}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-600
                  "
                />

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`
                    w-full
                    h-10
                    pl-11
                    pr-4
                    rounded-lg
                    bg-[#111111]
                    border
                    text-sm
                    text-white
                    placeholder:text-gray-700
                    outline-none
                    transition
                    ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-500"
                        : "border-white/10 focus:border-red-500"
                    }
                  `}
                />
              </div>

              {formik.touched.name && formik.errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-1.5"
              >
                Email address
              </label>

              <div className="relative">
                <FiMail
                  size={16}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-600
                  "
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`
                    w-full
                    h-10
                    pl-11
                    pr-4
                    rounded-lg
                    bg-[#111111]
                    border
                    text-sm
                    text-white
                    placeholder:text-gray-700
                    outline-none
                    transition
                    ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-white/10 focus:border-red-500"
                    }
                  `}
                />
              </div>

              {formik.touched.email && formik.errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-400 mb-1.5"
              >
                Password
              </label>

              <div className="relative">
                <FiLock
                  size={16}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-600
                  "
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`
                    w-full
                    h-10
                    pl-11
                    pr-11
                    rounded-lg
                    bg-[#111111]
                    border
                    text-sm
                    text-white
                    placeholder:text-gray-700
                    outline-none
                    transition
                    ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-white/10 focus:border-red-500"
                    }
                  `}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-600
                    hover:text-gray-300
                  "
                >
                  {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>

              {formik.touched.password && formik.errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm text-gray-400 mb-1.5"
              >
                Confirm password
              </label>

              <div className="relative">
                <FiLock
                  size={16}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-600
                  "
                />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`
                    w-full
                    h-10
                    pl-11
                    pr-11
                    rounded-lg
                    bg-[#111111]
                    border
                    text-sm
                    text-white
                    placeholder:text-gray-700
                    outline-none
                    transition
                    ${
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "border-red-500"
                        : "border-white/10 focus:border-red-500"
                    }
                  `}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword2((prev) => !prev)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-600
                    hover:text-gray-300
                  "
                >
                  {showPassword2 ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                </button>
              </div>

              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>

            {/* TERMS */}

            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formik.values.terms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 accent-red-500"
                />

                <span className="text-xs text-gray-500 leading-5">
                  I agree to the{" "}
                  <NavLink
                    to="/signup/terms"
                    className="text-red-500 hover:underline"
                  >
                    Terms & Conditions
                  </NavLink>
                </span>
              </label>

              {formik.touched.terms && formik.errors.terms && (
                <p className="text-xs text-red-500 mt-1">
                  {formik.errors.terms}
                </p>
              )}
            </div>

            {/* CREATE ACCOUNT */}

            <button
              type="submit"
              className="
                w-full
                h-10
                rounded-lg
                bg-red-500
                hover:bg-red-600
                text-white
                text-sm
                font-semibold
                transition
                shadow-lg
                shadow-red-500/10
              "
            >
              Create Account
            </button>

            {/* DIVIDER */}

            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-xs text-gray-600">OR</span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* SOCIAL LOGIN */}

            <div className="flex gap-3">
              <button
                type="button"
                className="
                  flex-1
                  h-10
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border border-white/10
                  bg-[#111111]
                  hover:bg-[#171717]
                  transition
                  text-xs
                "
              >
                <FcGoogle size={17} />
                <span>Continue with Google</span>
              </button>
            </div>

            {/* LOGIN */}

            <div className="flex justify-center gap-2 pt-1">
              <p className="text-md text-gray-600">Already have an account?</p>

              <NavLink
                to="/login"
                className="text-md text-red-500 hover:text-red-400"
              >
                Log In
              </NavLink>
            </div>
          </form>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            w-1/2
            relative
            overflow-hidden
            bg-[#080808]
            border-l border-white/10
            flex
            items-center
            justify-center
          "
        >
          {/* GRID */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
              bg-[size:40px_40px]
            "
          />

          {/* RED GLOW */}

          <div
            className="
              absolute
              w-[380px]
              h-[380px]
              bg-red-500/10
              blur-[110px]
              rounded-full
            "
          />

          {/* CONTENT */}

          <div className="relative z-10 w-full px-10 text-center">
            {/* MAIN VISUAL */}

            <div className="relative w-[350px] h-[245px] mx-auto mb-8">
              {/* DASHBOARD */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  bg-[#101010]
                  border border-white/10
                  shadow-2xl
                  p-6
                  text-left
                "
              >
                {/* HEADER */}

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-600">NEXORA</p>

                    <p className="text-xl font-bold mt-1">
                      Your crypto journey
                    </p>
                  </div>

                  <img
                    src={icon.logo}
                    alt="logo"
                    className="w-7 h-7 rounded-lgflex items-center justify-center font-black"
                  />
                </div>

                {/* STATS */}

                <div className="grid grid-cols-2 gap-3 mt-7">
                  <div className="bg-[#171717] rounded-xl p-4">
                    <p className="text-[10px] text-gray-600">PORTFOLIO</p>

                    <p className="text-lg font-bold mt-1">₹24,892</p>

                    <p className="text-xs text-green-500 mt-1">+8.42%</p>
                  </div>

                  <div className="bg-[#171717] rounded-xl p-4">
                    <p className="text-[10px] text-gray-600">WATCHLIST</p>

                    <p className="text-lg font-bold mt-1">18</p>

                    <p className="text-xs text-gray-600 mt-1">coins tracked</p>
                  </div>
                </div>

                {/* MINI CHART */}

                <div className="mt-4 h-8">
                  <svg
                    viewBox="0 0 400 40"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="
                        M0 35
                        C30 30 40 20 70 25
                        C100 30 120 10 150 18
                        C180 25 200 12 230 15
                        C260 18 280 5 310 10
                        C340 15 370 3 400 5
                      "
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* FLOATING CARD */}

              <div
                className="
                  absolute
                  -right-8
                  -top-7
                  bg-[#151515]
                  border border-white/10
                  rounded-xl
                  px-4
                  py-3
                  shadow-xl
                  flex
                  items-center
                  gap-3
                "
              >
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  +
                </div>

                <div className="text-left">
                  <p className="text-[9px] text-gray-600">ACCOUNT</p>

                  <p className="text-xs font-semibold">Successfully created</p>
                </div>
              </div>

              {/* STATUS */}

              <div
                className="
                  absolute
                  -left-7
                  bottom-2
                  bg-[#151515]
                  border border-white/10
                  rounded-xl
                  px-4
                  py-2.5
                  shadow-xl
                  flex
                  items-center
                  gap-2
                "
              >
                <span className="w-2 h-2 bg-red-500 rounded-full" />

                <span className="text-xs text-gray-400">Welcome to Nexora</span>
              </div>
            </div>

            {/* RIGHT TEXT */}

            <h2 className="text-2xl font-bold">
              Your crypto journey starts here.
            </h2>

            <p className="text-sm text-gray-500 mt-3 max-w-sm mx-auto leading-6">
              Create your Nexora account and keep everything you need to follow
              the market in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
