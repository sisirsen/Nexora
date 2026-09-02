import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Common/navbar";
import Footer from "./components/Common/footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import AboutUs from "./components/pages/AboutUs";
import LearningHub from "./components/pages/Learning Hub";
import Features from "./components/pages/Features";
import Markets from "./components/pages/Markets";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Terms from "./components/Subpages/Terms";
import ScrollToTop from "./components/Buttons/ScrollToTop";
import BeginnerDetail from "./components/DetailPages/BeginnerDetail";
import IntermediateDetail from "./components/DetailPages/IntermediateDetail";
import AdvDetail from "./components/DetailPages/AdvDetail";
import AllVideos from "./components/DetailPages/AllVideos";
import CryptoNews from "./components/Subpages/CryptoNews";
import CoinDetail from "./components/DetailPages/CoinDetail";
import CryptoCalendar from "./components/Subpages/CryptoCalender";
import Quiz from "./components/Subpages/Quiz";
import Watchlist from "./components/Subpages/Watchlist";
import Premium from "./components/pages/Premium";
function App() {
  return (
    <>
      <Navbar />

      <Routes>


        {/* Page Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/premium" element={<Premium />}/>

        {/* Learning Page Routes */}
        <Route path="/learn">
          <Route index element={<LearningHub />} />
          <Route path="beginnerDetail" element={<BeginnerDetail />} />
          <Route path="intermediateDetail" element={<IntermediateDetail />} />
          <Route path="advDetail" element={<AdvDetail />} />
          <Route path="allVideos" element={<AllVideos />} />
        </Route>

        {/* features Page Routes */}
        <Route path="/features">
          <Route index element={<Features />} />
          <Route path="cryptoNews" element={<CryptoNews />} />
          <Route path="cryptocalender" element={<CryptoCalendar />}/>
          <Route path="quiz" element={<Quiz />}/>
          <Route path="watchlist" element={<Watchlist />}/>
        </Route>

        {/* Market Page Routes */}
        <Route path="/market">
          <Route index element={<Markets />} />
          <Route path="coin/:id" element={<CoinDetail />} />
        </Route>

        {/* Auth Routes */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" >
         <Route index element={<Signup />} />
         <Route path="terms" element={<Terms />} />
         </Route>
       
      </Routes>

      <ScrollToTop />

      <Footer />
    </>
  );
}

export default App;
