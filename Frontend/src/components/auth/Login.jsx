import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { icon } from "../../assets/images";
import { Link } from "react-router-dom";

/* ---------------- VALIDATION SCHEMA ---------------- */

const loginSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Enter a valid email address, like name@example.com")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        // TODO: replace with your real login API call
        // const res = await api.post("/auth/login", values);
        console.log("Login values:", values);
      } catch (err) {
        // Example: show a server-side error under the password field
        setFieldError(
          "password",
          err?.response?.data?.message || "Incorrect email or password",
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

  const emailError = touched.email && errors.email;
  const passwordError = touched.password && errors.password;

  // Shared input classes; border switches to red when the field has an error
  const inputBase =
    "w-full h-11 rounded-lg bg-[#111111] border text-white text-sm placeholder:text-gray-700 outline-none transition";
  const inputOk = "border-white/10 focus:border-red-500";
  const inputBad = "border-red-500/70 focus:border-red-500";

  return (
    <div className="min-h-[calc(100vh-88px)] mt-20 bg-black text-white flex items-center justify-center px-4 py-5">
      {/* MAIN CARD */}
      <div className="w-full max-w-[1100px] bg-[#090909] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex">
        {/* ================= LEFT SIDE ================= */}

        <div className="w-1/2 px-10 py-8 flex flex-col justify-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center">
              <img src={icon.logo} alt="logo" />
            </div>

            <span className="text-xl font-bold">Nexora</span>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <p className="text-red-500 text-sm font-semibold mb-1">
              Welcome back
            </p>

            <h1 className="text-4xl font-bold tracking-tight">Log in.</h1>

            <p className="text-gray-500 text-sm mt-3 leading-6 max-w-md">
              Welcome back to Nexora. Sign in to track the crypto market and
              manage your portfolio.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-2"
              >
                Email address
              </label>

              <div className="relative">
                <FiMail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? "email-error" : undefined}
                  className={`${inputBase} pl-11 pr-4 ${
                    emailError ? inputBad : inputOk
                  }`}
                />
              </div>

              {emailError && (
                <p id="email-error" className="text-xs text-red-400 mt-1.5">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm text-gray-400">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-red-500 hover:text-red-400"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <FiLock
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!passwordError}
                  aria-describedby={
                    passwordError ? "password-error" : undefined
                  }
                  className={`${inputBase} pl-11 pr-11 ${
                    passwordError ? inputBad : inputOk
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-300"
                >
                  {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                </button>
              </div>

              {passwordError && (
                <p id="password-error" className="text-xs text-red-400 mt-1.5">
                  {errors.password}
                </p>
              )}
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 rounded-lg bg-red-500 hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition shadow-lg shadow-red-500/10"
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-5">
            <div className="flex-1 h-px bg-white/10" />

            <span className="text-xs text-gray-600">OR</span>

            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* GOOGLE */}
          <button
            type="button"
            className="w-full h-11 py-3 rounded-lg border border-white/10 bg-[#111111] hover:bg-[#171717] flex items-center justify-center gap-3 text-sm font-medium text-gray-300 transition"
          >
            <FcGoogle size={18} />
            Continue with Google
          </button>

          {/* REGISTER */}
          <p className="text-center text-md text-gray-600 mt-5">
            Don't have an account?{" "}
            <Link
              to="/signup"
              type="button"
              className="text-red-500 hover:text-red-400 font-medium"
            >
              Register
            </Link>
          </p>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="w-1/2 relative overflow-hidden bg-[#080808] border-l border-white/10 flex items-center justify-center">
          {/* GRID BACKGROUND */}
          <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* RED GLOW */}
          <div className="absolute w-[350px] h-[350px] bg-red-500/10 blur-[100px] rounded-full" />

          {/* CONTENT */}
          <div className="relative z-10 w-full px-10 text-center">
            {/* CHART CARD */}
            <div className="relative w-[350px] h-[245px] mx-auto mb-8">
              <div className="absolute inset-0 rounded-2xl bg-[#101010] border border-white/10 shadow-2xl p-6 text-left">
                {/* CARD HEADER */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-600">Coin(INR)</p>

                    <p className="text-xl font-bold mt-1">₹ Coin Price</p>
                  </div>

                  <span className="text-xs text-green-500 bg-red-500/10 px-3 py-1 rounded-full">
                    +4.28%
                  </span>
                </div>

                {/* CHART */}
                <div className="mt-7 h-[110px]">
                  <svg
                    viewBox="0 0 400 120"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#ef4444"
                          stopOpacity="0.3"
                        />

                        <stop
                          offset="100%"
                          stopColor="#ef4444"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="
                        M0 105
                        C30 95 40 75 70 80
                        C100 85 110 55 140 65
                        C170 75 185 40 215 50
                        C245 60 260 70 285 42
                        C310 15 330 38 350 25
                        C370 15 390 20 400 5
                        L400 120
                        L0 120
                        Z
                      "
                      fill="url(#chartGradient)"
                    />

                    <path
                      d="
                        M0 105
                        C30 95 40 75 70 80
                        C100 85 110 55 140 65
                        C170 75 185 40 215 50
                        C245 60 260 70 285 42
                        C310 15 330 38 350 25
                        C370 15 390 20 400 5
                      "
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>

              {/* FLOATING MARKET CARD */}
              <div className="absolute -right-7 -top-7 bg-[#151515] border border-white/10 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  ₿
                </div>

                <div className="text-left">
                  <p className="text-[9px] text-gray-600">MARKET</p>

                  <p className="text-xs font-semibold">Live data</p>
                </div>
              </div>

              {/* STATUS */}
              <div className="absolute -left-7 bottom-2 bg-[#151515] border border-white/10 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />

                <span className="text-xs text-gray-400">
                  Market tracking active
                </span>
              </div>
            </div>

            {/* RIGHT TEXT */}
            <h2 className="text-2xl font-bold">Stay ahead of the market.</h2>

            <p className="text-sm text-gray-500 mt-3 max-w-sm mx-auto leading-6">
              Track crypto prices, market movements and the latest trends — All
              from one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
