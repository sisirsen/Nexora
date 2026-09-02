import {React, useEffect} from "react";
import { FiAlertOctagon } from "react-icons/fi";
import { motion } from "framer-motion";

function Terms() {
  const termsData = [
    {
      title: "Introduction",
      text:
        "Welcome to our crypto platform. By accessing or using our website, services, educational resources, market insights, and trading-related information, you agree to comply with all Terms & Conditions outlined on this page. These terms are established to maintain a safe, transparent, secure, and trustworthy environment for every user who interacts with our platform. Our goal is to provide users with reliable information, a smooth experience, and access to valuable crypto-related resources while maintaining fairness and platform integrity. By continuing to use our services, you acknowledge and accept your responsibilities as a user of this platform. You understand that cryptocurrency-related activities involve risks, changing regulations, and market volatility. We encourage users to perform independent research and make informed decisions before acting on any information available through our platform. These terms may be updated periodically to reflect improvements, legal changes, or platform modifications. Users are encouraged to review this page regularly to remain informed about updated policies. If you disagree with any section of these Terms & Conditions, policies, or guidelines, we strongly recommend discontinuing the use of our platform immediately. Your continued access, browsing, or interaction with our services indicates your acceptance and agreement to these conditions."
    },

    {
      title: "Eligibility",
      text:
        "To access and use our platform, users must be at least 18 years of age or meet the legal age requirement established within their country or jurisdiction. By using our services, educational content, tools, and market-related resources, you confirm that you are legally permitted to participate in cryptocurrency-related activities. Users are solely responsible for ensuring compliance with local laws, financial regulations, internet restrictions, and any government policies applicable to digital assets in their region. Certain services or features may not be available in specific countries due to legal, regulatory, or operational limitations. We reserve the right to restrict or deny access to users if we reasonably believe their activity violates applicable laws or platform policies. By continuing to access our website, you acknowledge that eligibility requirements have been met and that all information provided by you is accurate and lawful. Failure to comply with eligibility standards may result in limited access, temporary suspension, or permanent restriction from the platform."
    },

    {
      title: "Financial Risk",
      text:
        "Cryptocurrency trading and investing involve substantial financial risk due to the highly volatile nature of digital assets. Market prices may rise or fall rapidly within a short period, sometimes resulting in unexpected gains or significant losses. By using our platform, users acknowledge that cryptocurrency investments carry uncertainty and should be approached with caution. We do not guarantee profits, successful outcomes, or protection against financial loss. Any trading decisions, investment strategies, or financial actions taken by users remain entirely their own responsibility. Our platform provides educational content, market insights, and informational resources only, which should not be interpreted as guarantees of performance or future market behavior. Users are strongly encouraged to conduct independent research, evaluate market conditions, and seek professional financial guidance when necessary. Investing funds that users cannot afford to lose is strongly discouraged. By continuing to access our services, you acknowledge and accept all financial risks associated with cryptocurrency-related activities."
    },

    {
      title: "No Investment Advice",
      text:
        "All market information, cryptocurrency prices, charts, educational materials, technical analysis concepts, trading strategies, and related resources provided on this platform are intended strictly for informational and educational purposes only. Nothing available on this website should be interpreted as financial, investment, legal, or tax advice. While we aim to provide useful market insights and educational content to help users better understand cryptocurrency markets, we do not guarantee financial success, investment profitability, or future market performance. Cryptocurrency markets are highly volatile and can change rapidly without notice. Users should independently research projects, evaluate risks, and consider their personal financial circumstances before making investment or trading decisions. We strongly encourage users to consult licensed financial professionals or advisors when necessary. Any actions taken based on the information available through our platform remain entirely the responsibility of the user. By continuing to use our services, you acknowledge that our content is designed to educate and inform rather than provide guaranteed investment recommendations or financial outcomes."
    },

    {
      title: "User Responsibilities",
      text:
        "All market information, cryptocurrency prices, charts, educational materials, technical analysis concepts, and trading-related resources available on this platform are provided strictly for informational and educational purposes only. Nothing presented on this website should be interpreted as financial, investment, legal, or tax advice. While we aim to provide accurate and valuable insights to help users better understand cryptocurrency markets, we do not guarantee the accuracy, completeness, or future reliability of any information available on the platform. Cryptocurrency investments involve risk, and market conditions can change rapidly without notice. Users are strongly encouraged to conduct independent research, evaluate their financial situation, and consult qualified financial professionals before making any investment or trading decisions. Any action taken based on information obtained through our platform remains entirely the responsibility of the user. By continuing to use our services, you acknowledge that our content is intended to support learning and awareness, not to provide guaranteed investment guidance or financial recommendations."
    },

    {
      title: "Market Data Accuracy",
      text:
        "We aim to provide accurate, timely, and reliable cryptocurrency prices, market insights, charts, and trading-related information to enhance the user experience on our platform. However, due to the fast-moving nature of digital asset markets, occasional delays, interruptions, or inaccuracies may occur. Certain data displayed on our platform may rely on third-party APIs, external market providers, or automated systems that are beyond our direct control. As a result, real-time prices, historical charts, technical indicators, and market updates may occasionally contain temporary inconsistencies or outdated information. We do not guarantee the absolute accuracy, completeness, or uninterrupted availability of market data at all times. Users are encouraged to independently verify information and conduct personal research before making trading or investment decisions. By continuing to use our platform, you acknowledge that technical interruptions, server limitations, or external provider issues may occasionally affect the availability and reliability of displayed market information."
    },

    {
      title: "Privacy & Security",
      text:
       "We value user privacy and take reasonable measures to protect personal information shared through our platform. Maintaining security, transparency, and trust remains one of our highest priorities. Certain information may be collected to improve user experience, strengthen platform security, enhance performance, and provide a smoother browsing experience. This may include usage data, device-related information, browsing behavior, and limited account details required for platform functionality. We aim to handle collected information responsibly and implement appropriate safeguards to reduce unauthorized access, misuse, or data breaches. However, while we strive to maintain strong security standards, no online platform or digital system can guarantee complete protection against every cyber threat or technical vulnerability. Users are encouraged to maintain strong passwords, avoid sharing personal credentials, and remain cautious of phishing attempts or suspicious activities. By continuing to use our platform, you acknowledge and agree to the responsible collection and use of information as outlined in our privacy-related practices."
    },

    {
      title: "Restricted Activities",
      text:
        "Users are strictly prohibited from engaging in activities that may harm, disrupt, misuse, or negatively affect the functionality, security, or reliability of our platform. This includes but is not limited to hacking attempts, unauthorized system access, fraudulent behavior, phishing, malware distribution, spam activity, identity impersonation, data manipulation, or attempts to bypass platform security measures. Users must not exploit vulnerabilities, misuse platform resources, or perform actions intended to damage services or interfere with the experience of other users. Any suspicious, abusive, illegal, or harmful behavior that violates applicable laws, regulations, or platform guidelines may result in temporary suspension, restricted access, or permanent termination of platform usage. We reserve the right to investigate suspicious activity and take necessary action to maintain a safe and secure environment for all users. By continuing to use our services, users acknowledge the importance of responsible conduct and agree to comply with all platform policies and security standards."
    },

    {
      title: "Limitation of Liability",
      text:
        "While we strive to provide reliable services, accurate information, and a secure platform experience, we shall not be held responsible for financial losses, trading decisions, investment outcomes, market volatility, or damages resulting from cryptocurrency-related activities. Digital asset markets are highly unpredictable, and prices may fluctuate rapidly without warning. We do not guarantee uninterrupted access to services, complete data accuracy, or protection from technical failures, delays, or server-related interruptions. Users acknowledge that market information, pricing data, educational resources, and trading-related content are provided for informational purposes and may occasionally contain inaccuracies or delays. Any financial actions, investment choices, or trading strategies executed based on information obtained through our platform remain entirely the responsibility of the user. By continuing to use our services, users understand and accept all risks associated with cryptocurrency markets, technical disruptions, and external third-party dependencies that may affect platform performance."
    },

    {
      title: "Contact Us",
      text:
        "If you have any questions, concerns, or require clarification regarding these Terms & Conditions, policies, or any aspect of our platform, please feel free to contact our support team. We are committed to maintaining transparency, trust, and clear communication with all users. Our goal is to ensure that users fully understand the rules, responsibilities, and guidelines associated with using our services. Whether you need assistance regarding account-related concerns, platform usage, educational resources, or policy-related information, we aim to provide helpful and timely support whenever possible. We value user feedback and continuously work to improve the platform experience through better communication and service quality. Please note that response times may vary depending on the nature of the inquiry and support availability. By reaching out to us, users help us maintain a safer, clearer, and more user-friendly environment for everyone using the platform."
    }
  ];

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
<div className="relative min-h-screen py-10 md:py-20 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#FE4136]/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 px-2 md:px-6 py-14">

        {/* Heading */}
        <div className="text-center mb-7 md:mb-14">

          <p className="text-[#FE4136] uppercase tracking-[5px] mb-3 font-medium">
            Legal Information
          </p>

          <h1 className="text-3xl md:text-6xl font-bold mb-5">
            Terms &
            <span className="text-[#FE4136] pl-3">
              Conditions
            </span>
          </h1>

          <p className="text-sm md:text-md text-gray-400 max-w-2xl mx-auto leading-8">
            Please read these terms carefully before using our
            crypto platform. By accessing our services, you agree
            to comply with the rules, responsibilities, and risks
            mentioned below.
          </p>

          <p className="text-gray-300 mt-4">
            Last Updated: June 2026
          </p>
        </div>

        {/* Warning Box */}
        

        {/* Sections */}
        <div className="md:px-10 py-5 flex flex-col gap-8">

          {termsData.map((item, index) => (
            <div
              key={index}
             className="
bg-[#161B22]/50
backdrop-blur-sm
border
border-white/10
rounded-[30px]
p-8
hover:border-[#FE4136]/30
hover:shadow-[0_0_30px_rgba(254,65,54,0.08)]
transition-all
duration-300
"
            >
              <h2 className="text-xl md:text-3xl font-bold mb-4 text-[#FE4136]">
                {index + 1}. {item.title}
              </h2>

              <p className="text-sm md:text-md text-gray-300 leading-6 md:leading-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-9xl mx-auto border-2 border-white/20 hover:border-[#FE4136]/30 rounded-[30px] p-8 mt-10 shadow-[0_0_30px_rgba(254,65,54,0.08)] transition-all duration-500">

          <h2 className="flex items-center gap-2 text-2xl font-semibold text-[#FE4136] mb-4">
            Important Risk Warning <FiAlertOctagon className="mt-1"/>
          </h2>

          <p className="text-gray-300 leading-8">
            Cryptocurrency investments are highly volatile and
            involve significant financial risk. Never invest
            money you cannot afford to lose. Always research
            carefully before making investment decisions.
          </p>
        </div>
      </div>
    </div>

    </motion.div>

    
  );
}

export default Terms;