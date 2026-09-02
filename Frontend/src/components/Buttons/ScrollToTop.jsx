import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#FE4136] text-white flex items-center justify-center shadow-lg hover:bg-red-600 cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <FaArrowUp  className="h-6 w-6"/>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;