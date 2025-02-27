import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/HomePage.jsx";
import About from "../pages/About.jsx";
import OurServices from "../pages/OurServices.jsx";
import Blogs from "../pages/Blogs.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import AccessibilityStatement from "../pages/AccessibilityStatement.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import Calendar from "../pages/Calendar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../helper/ScrollToTop.jsx";
import "../styles/style.css";

import "../styles/fonts.css"




const ContentWithFooter = () => {
    const location = useLocation();
    const excludedFooterPaths = ["/calendar"];
    const showFooter = !excludedFooterPaths.includes(location.pathname);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollToPosition = window.scrollY;
          const viewportHeight = window.innerHeight;
    
          // Show button when scroll position exceeds 30% of viewport height
          if (scrollToPosition > 0.3 * viewportHeight) {
            setShowScrollButton(true);
          } else {
            setShowScrollButton(false);
          }
        };
    
        // Add scroll listener
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup listener on component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    return (
        <>
            <div className="content">
                  <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/our-services" element={<OurServices />} />
                    <Route path="/blogs/:blogName?" element={<Blogs />} />
                    <Route path="/portfolio" element={<Portfolio/>} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/calendar" element = {<Calendar />}/>
                    <Route path="*" element={<Home />} /> {/* Fallback Route */}          
                </Routes>
                {showScrollButton && (
          <button className="scrollToTopButton" onClick={scrollToTop}>
            ↑
          </button>
        )}
            </div>
            {showFooter && <Footer />}
        </>
    );
};

const Navigator = () => {
    return (
        <Router>
            <ContentWithFooter />
        </Router>
    );
};

export default Navigator;
