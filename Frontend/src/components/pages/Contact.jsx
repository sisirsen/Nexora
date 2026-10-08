import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  FiArrowRight,
  FiPhone,
  FiMail,
} from "react-icons/fi";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


// =========================
// FORM VALIDATION SCHEMA
// =========================

const contactValidationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Full name is required"),

  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email address is required"),

  subject: Yup.string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be less than 100 characters")
    .required("Subject is required"),

  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .required("Message is required"),
});


// =========================
// CONTACT SKELETON
// =========================

function ContactSkeleton() {
  return (
    <div className="min-h-screen animate-pulse px-6 py-25 md:px-10 md:py-30">

      {/* Header */}
      <div className="flex flex-col items-center">
        <div className="h-10 w-64 rounded-lg bg-gray-800 md:h-14 md:w-80" />

        <div className="mt-6 h-4 w-full max-w-[700px] rounded bg-gray-800" />

        <div className="mt-2 h-4 w-4/5 max-w-[550px] rounded bg-gray-800" />
      </div>


      {/* Support Cards */}
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-36 rounded-2xl border border-white/5 bg-gray-800/60 p-6"
          >
            <div className="h-6 w-32 rounded bg-gray-700" />

            <div className="mt-4 h-4 w-full rounded bg-gray-700" />

            <div className="mt-2 h-4 w-4/5 rounded bg-gray-700" />
          </div>
        ))}
      </div>


      {/* Why Contact */}
      <div className="mt-16">
        <div className="mx-auto h-4 w-40 rounded bg-gray-800" />

        <div className="mx-auto mt-5 h-8 w-72 rounded bg-gray-800 md:h-10 md:w-96" />

        <div className="mx-auto mt-4 h-4 w-full max-w-4xl rounded bg-gray-800" />
      </div>


      {/* Contact Cards */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-40 rounded-[30px] bg-gray-800/60 p-8"
          >
            <div className="h-8 w-8 rounded bg-gray-700" />

            <div className="mt-5 h-5 w-32 rounded bg-gray-700" />

            <div className="mt-3 h-4 w-full rounded bg-gray-700" />
          </div>
        ))}
      </div>


      {/* Message Form */}
      <div className="mt-16 md:mt-20">
        <div className="rounded-[30px] bg-gray-800/50 p-5 md:p-10">

          <div className="h-8 w-72 rounded bg-gray-700 md:h-10 md:w-96" />

          <div className="mt-8 space-y-5">
            <div className="h-14 w-full rounded-xl bg-gray-700" />
            <div className="h-14 w-full rounded-xl bg-gray-700" />
            <div className="h-14 w-full rounded-xl bg-gray-700" />
            <div className="h-36 w-full rounded-xl bg-gray-700" />

            <div className="h-12 w-36 rounded-3xl bg-gray-700" />
          </div>

        </div>
      </div>


      {/* FAQ */}
      <div className="mt-16 md:mt-20">

        <div className="mx-auto h-4 w-20 rounded bg-gray-800" />

        <div className="mx-auto mt-5 h-8 w-80 rounded bg-gray-800 md:h-10 md:w-[420px]" />

        <div className="mt-10 space-y-5">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-gray-800/60 p-7"
            >
              <div className="h-5 w-3/5 rounded bg-gray-700" />

              <div className="mt-4 h-4 w-full rounded bg-gray-700" />

              <div className="mt-2 h-4 w-4/5 rounded bg-gray-700" />
            </div>
          ))}
        </div>

      </div>


      {/* Final CTA */}
      <div className="mt-16 md:mt-20">
        <div className="rounded-[35px] bg-gray-800/60 p-8 md:p-14">

          <div className="h-4 w-44 rounded bg-gray-700" />

          <div className="mt-5 h-10 w-full max-w-2xl rounded bg-gray-700" />

          <div className="mt-6 space-y-2">
            <div className="h-4 w-full max-w-2xl rounded bg-gray-700" />
            <div className="h-4 w-5/6 max-w-xl rounded bg-gray-700" />
          </div>

          <div className="mt-8 h-12 w-44 rounded-full bg-gray-700" />
        </div>
      </div>

    </div>
  );
}


// =========================
// CONTACT COMPONENT
// =========================

function Contact() {
  const [pageLoading, setPageLoading] = useState(
    !sessionStorage.getItem("contact_visited")
  );


  // =========================
  // PAGE INITIALIZATION
  // =========================

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!sessionStorage.getItem("contact_visited")) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("contact_visited", "true");
        setPageLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);


  // =========================
  // LOADING STATE
  // =========================

  if (pageLoading) {
    return <ContactSkeleton />;
  }


  // =========================
  // MAIN PAGE
  // =========================

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <section className="px-4 py-24 text-white sm:px-6 md:py-30 lg:px-10">

        {/* =========================
            PAGE HEADER
        ========================= */}

        <div className="text-center">

          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Contact{" "}
            <span className="text-[#FE4136]">
              Us
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[700px] leading-7 text-gray-400">
            Have questions, feedback, or suggestions? We'd love to hear from
            you. Reach out to the Nexora team.
          </p>

        </div>


        {/* =========================
            SUPPORT CARDS
        ========================= */}

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-5 md:grid-cols-3 md:gap-6">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-500 hover:border-[#FE4136]">
            <h2 className="text-xl font-bold text-white">
              Fast Support
            </h2>

            <p className="mt-2 text-gray-400">
              Get quick responses to your crypto-related questions anytime.
            </p>
          </div>


          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-500 hover:border-[#FE4136]">
            <h2 className="text-xl font-bold text-white">
              Secure Guidance
            </h2>

            <p className="mt-2 text-gray-400">
              Learn safe and trusted ways to manage digital assets.
            </p>
          </div>


          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-500 hover:border-[#FE4136]">
            <h2 className="text-xl font-bold text-white">
              Expert Help
            </h2>

            <p className="mt-2 text-gray-400">
              Our team helps you understand trading and crypto services.
            </p>
          </div>

        </div>


        {/* =========================
            WHY CONTACT US
        ========================= */}

        <div className="mt-16 md:mt-20">

          <div className="text-center">

            <span className="animate-pulse uppercase tracking-[3px] text-[#FE4136]">
              Why Contact Us
            </span>

            <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
              We're Here To{" "}
              <span className="text-red-500">
                Help
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-gray-400">
              Whether you have a question, found an issue, or want to share
              your ideas, we're always happy to hear from you.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-[#2A2A2A] bg-[#18181A] p-8 transition-all duration-500 hover:border-[#FE4136]">

              <h3 className="text-xl font-semibold text-white">
                💡 Feature Requests
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Have an idea that could improve Nexora? Share your suggestions
                and help us build a better crypto dashboard.
              </p>

            </div>


            <div className="rounded-3xl border border-[#2A2A2A] bg-[#18181A] p-8 transition-all duration-500 hover:border-[#FE4136]">

              <h3 className="text-xl font-semibold text-white">
                🐞 Report Issues
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Found incorrect market data, a UI issue, or a bug? Let us know
                and we'll fix it as quickly as possible.
              </p>

            </div>


            <div className="rounded-3xl border border-[#2A2A2A] bg-[#18181A] p-8 transition-all duration-500 hover:border-[#FE4136]">

              <h3 className="text-xl font-semibold text-white">
                🤝 Collaborations
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Interested in partnerships, collaborations, or working
                together? We'd love to connect.
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            CONNECT WITH US
        ========================= */}

        <div className="mt-16 rounded-[30px] border border-white/5 bg-[#18181A] p-5 transition-all duration-500 hover:shadow-[0_0_50px_#FE413630] md:mt-20 md:p-10">

          <div className="mb-5 text-center md:mb-10 md:text-left">

            <span className="text-2xl font-bold text-white md:text-4xl">
              <span className="text-red-500">
                Connect
              </span>{" "}
              To Us
            </span>

          </div>


          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">

            {/* Email */}
            <div className="w-full rounded-[30px] border border-[#252525] bg-[#18181A] p-8 transition-all duration-500 hover:border-[#FE4136]">

              <FiMail className="mb-4 text-3xl text-[#FE4136]" />

              <h3 className="text-xl font-semibold text-white">
                Email Support
              </h3>

              <p className="mt-2 break-words text-gray-400">
                worksisir01@gmail.com
              </p>

            </div>


            {/* Phone */}
            <div className="rounded-[30px] border border-[#252525] bg-[#18181A] p-8 transition-all duration-500 hover:border-[#FE4136]">

              <FiPhone className="mb-4 text-3xl text-[#FE4136]" />

              <h3 className="text-xl font-semibold text-white">
                Phone Support
              </h3>

              <p className="mt-2 text-gray-400">
                +91 9807XX7110
              </p>

            </div>


            {/* Location */}
            <div className="rounded-[30px] border border-[#252525] bg-[#18181A] p-8 transition-all duration-500 hover:border-[#FE4136]">

              <HiOutlineLocationMarker className="mb-4 text-3xl text-[#FE4136]" />

              <h3 className="text-xl font-semibold text-white">
                Office Address
              </h3>

              <p className="mt-2 text-gray-400">
                Headquartered In Kolkata, India
              </p>

            </div>


            {/* Live Support */}
            <div className="rounded-[30px] border border-[#252525] bg-[#18181A] p-8 transition-all duration-500 hover:border-[#FE4136]">

              <BsChatDots className="mb-4 text-3xl text-[#FE4136]" />

              <h3 className="text-xl font-semibold text-white">
                Live Support
              </h3>

              <p className="mt-2 text-gray-400">
                Usually replies within 24 hours.
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            CONTACT FORM
        ========================= */}

        <div className="mx-auto mt-16 md:mt-20">

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={contactValidationSchema}
            onSubmit={async (
              values,
              { setSubmitting, resetForm }
            ) => {
              try {

                // =========================
                // BACKEND WILL GO HERE
                // =========================

                console.log("Contact form submitted:", values);

                // Simulate API request
                await new Promise((resolve) =>
                  setTimeout(resolve, 800)
                );

                alert(
                  "Your message has been submitted successfully."
                );

                resetForm();

              } catch (error) {

                console.error(
                  "Form submission failed:",
                  error
                );

                alert(
                  "Something went wrong. Please try again."
                );

              } finally {

                setSubmitting(false);

              }
            }}
          >
            {({
              errors,
              touched,
              isSubmitting,
            }) => (

              <Form className="rounded-[30px] border border-[#252525] bg-[#18181A] p-5 transition-all duration-500 hover:shadow-[0_0_50px_#FE413630] md:p-10">

                <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-left md:text-4xl">
                  Send Us a{" "}
                  <span className="text-red-500">
                    Message
                  </span>
                </h2>


                <div className="space-y-5">

                  {/* =========================
                      FULL NAME
                  ========================= */}

                  <div>

                    <label
                      htmlFor="fullName"
                      className="sr-only"
                    >
                      Full Name
                    </label>

                    <Field
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      autoComplete="name"
                      className={`w-full rounded-xl border bg-[#222225] p-4 text-white outline-none transition-all ${
                        touched.fullName && errors.fullName
                          ? "border-red-500"
                          : "border-transparent focus:border-[#FE4136]"
                      }`}
                    />

                    <ErrorMessage
                      name="fullName"
                      component="p"
                      className="mt-2 text-sm text-red-400"
                    />

                  </div>


                  {/* =========================
                      EMAIL
                  ========================= */}

                  <div>

                    <label
                      htmlFor="email"
                      className="sr-only"
                    >
                      Email Address
                    </label>

                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      autoComplete="email"
                      className={`w-full rounded-xl border bg-[#222225] p-4 text-white outline-none transition-all ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-transparent focus:border-[#FE4136]"
                      }`}
                    />

                    <ErrorMessage
                      name="email"
                      component="p"
                      className="mt-2 text-sm text-red-400"
                    />

                  </div>


                  {/* =========================
                      SUBJECT
                  ========================= */}

                  <div>

                    <label
                      htmlFor="subject"
                      className="sr-only"
                    >
                      Subject
                    </label>

                    <Field
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      className={`w-full rounded-xl border bg-[#222225] p-4 text-white outline-none transition-all ${
                        touched.subject && errors.subject
                          ? "border-red-500"
                          : "border-transparent focus:border-[#FE4136]"
                      }`}
                    />

                    <ErrorMessage
                      name="subject"
                      component="p"
                      className="mt-2 text-sm text-red-400"
                    />

                  </div>


                  {/* =========================
                      MESSAGE
                  ========================= */}

                  <div>

                    <label
                      htmlFor="message"
                      className="sr-only"
                    >
                      Message
                    </label>

                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Write your message..."
                      className={`w-full resize-none rounded-xl border bg-[#222225] p-4 text-white outline-none transition-all ${
                        touched.message && errors.message
                          ? "border-red-500"
                          : "border-transparent focus:border-[#FE4136]"
                      }`}
                    />

                    <ErrorMessage
                      name="message"
                      component="p"
                      className="mt-2 text-sm text-red-400"
                    />

                  </div>


                  {/* =========================
                      SUBMIT BUTTON
                  ========================= */}

                  <div className="flex w-full justify-center md:justify-start">

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center gap-3 rounded-3xl bg-[#FE4136] px-8 py-4 text-white transition-all duration-300 ${
                        isSubmitting
                          ? "cursor-not-allowed opacity-60"
                          : "hover:scale-105"
                      }`}
                    >

                      {isSubmitting
                        ? "Sending..."
                        : "Send Message"}

                      {!isSubmitting && (
                        <FiArrowRight />
                      )}

                    </button>

                  </div>

                </div>

              </Form>

            )}
          </Formik>

        </div>


        {/* =========================
            FAQ
        ========================= */}

        <div className="mt-16 md:mt-20">

          <div className="text-center">

            <span className="animate-pulse uppercase tracking-[3px] text-[#FE4136]">
              FAQ
            </span>

            <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
              Frequently Asked{" "}
              <span className="text-red-500">
                Questions
              </span>
            </h2>

          </div>


          <div className="mt-10 space-y-6">

            {/* FAQ 1 */}
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#18181A] p-7">

              <h3 className="text-lg font-semibold text-white">
                How long does it take to receive a response?
              </h3>

              <p className="mt-3 text-gray-400">
                We usually respond to all emails within 24 hours.
              </p>

            </div>


            {/* FAQ 2 */}
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#18181A] p-7">

              <h3 className="text-lg font-semibold text-white">
                Where does Nexora get market data?
              </h3>

              <p className="mt-3 text-gray-400">
                We collect live cryptocurrency information from trusted public
                APIs and reliable market data providers.
              </p>

            </div>


            {/* FAQ 3 */}
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#18181A] p-7">

              <h3 className="text-lg font-semibold text-white">
                Can I request new dashboard features?
              </h3>

              <p className="mt-3 text-gray-400">
                Absolutely. User feedback helps us improve Nexora continuously.
              </p>

            </div>


            {/* FAQ 4 */}
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#18181A] p-7">

              <h3 className="text-lg font-semibold text-white">
                Does Nexora support crypto trading?
              </h3>

              <p className="mt-3 text-gray-400">
                No. Nexora is a cryptocurrency dashboard designed for market
                tracking, news, analytics, and learning.
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            FINAL CTA
        ========================= */}

        <div className="mt-16 rounded-[35px] border border-white/10 bg-[#18181A] p-8 text-center transition-all duration-500 hover:border-[#FE4136] md:mt-20 md:p-14 lg:p-14 md:text-left">

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            {/* Left Content */}
            <div className="max-w-2xl">

              <span className="text-sm font-medium uppercase tracking-[3px] text-[#FE4136]">
                Thank You For Visiting
              </span>

              <h2 className="mt-4 text-2xl font-bold text-white lg:text-5xl">
                Continue Exploring the{" "}
                <span className="text-[#FE4136]">
                  Crypto Market
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                Thanks for reaching out to Nexora. While we review your
                message, discover live cryptocurrency prices, market trends,
                breaking news, and valuable insights from across the crypto
                ecosystem.
              </p>

            </div>


            {/* Right Button */}
            <NavLink to="/market">
              <button
                type="button"
                className="flex items-center gap-3 whitespace-nowrap rounded-full bg-[#FE4136] px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_35px_rgba(254,65,54,0.35)]"
              >
                Explore Markets
                <FiArrowRight />
              </button>
            </NavLink>

          </div>

        </div>

      </section>
    </motion.div>
  );
}


export default Contact;