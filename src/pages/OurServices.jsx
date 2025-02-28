import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import "../styles/style.css";
import "../styles/services.css";
import "../styles/fonts.css";
import { Link } from "react-router-dom";

// Import images
// const websitesImg = new URL("../assets/images/services/webDesign.jpg", import.meta.url).href;
const websitesImg = new URL("../assets/images/services/WebDesign.png", import.meta.url).href;
const socialMediaImg = new URL("../assets/images/services/SocialMedia.png", import.meta.url).href;
const landingPagesImg = new URL("../assets/images/services/landingPages.jpg", import.meta.url).href;
const ecommercesImg = new URL("../assets/images/services/ECommerce.png", import.meta.url).href;

const OurServices = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    {
      name: "Websites",
      description:
        "Nova offers tailored digital solutions for small and medium-sized businesses, focusing on creative, functional, and high-quality strategies. We specialize in website and landing page development, creating attractive, user-friendly designs that engage your audience and drive results. Let’s build something amazing together!",
      image: websitesImg,
      id: "Websites",
    },
    {
      name: "Social Media",
      description:
        "We turn ideas into reality with tailored digital solutions for small and medium businesses. Specializing in website development, landing pages, and social media management, we create engaging, high-quality designs to help your brand thrive online.",
      image: socialMediaImg,
      id: "Social Media",
    },
    
    {
      name: "E-commerce Solutions",
      description:
        "We empower businesses with customized e-commerce solutions that enhance online sales and customer engagement. Our services are designed to create seamless, secure, and high-performing online stores, helping your business grow in the digital marketplace with efficiency and innovation.",
      image: ecommercesImg,
      id: "E-Commerces",
    },
  ];

  // Extract `scrollTo` query parameter and scroll to the corresponding section
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      const targetElement = document.getElementById(scrollTo);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className="blackWrapper ourServicesPage">
      <Header className="blackHeader" />
      <div className="contentContainer">
        <div className="session padding">
          <article>
            <h3 className="pageTitle">Services</h3>
            <p>
            Creative and strategic digital solutions designed to make your business stand out. From websites to branding, every service is tailored to your needs.
            </p>

            {/* Services Section */}
            <div className="listOfItemsContainer">
              {services.map((service, index) => (
                <div key={index} id={service.id} className="serviceCard">
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div>
                    <img src={service.image} alt={service.name} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <session>
          <h2>
            Boost your visibility and results
          </h2>
          <p>
          We focus on maximizing results and visibility by improving Google rankings through advanced SEO strategies. Our goal is to establish a powerful online presence that attracts more traffic, enhances engagement, and drives sustainable business growth.
          </p>

          <button onClick={() => navigate("/portfolio")} className="regularButton">
              See our work
            </button>

          </session>

          {/* Contact Button */}
          <div className="buttonContainer">
            <h2>GET IN TOUCH.</h2>
            <button onClick={() => navigate("/contact-us")} className="regularButton">
              Contact Us
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
