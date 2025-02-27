import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import "../styles/style.css";
import "../styles/services.css";
import { Link } from "react-router-dom";

// Import images
const websitesImg = new URL("../assets/images/services/webDesign.jpg", import.meta.url).href;
const socialMediaImg = new URL("../assets/images/services/socialMedia.jpg", import.meta.url).href;
const landingPagesImg = new URL("../assets/images/services/landingPages.jpg", import.meta.url).href;
const ecommercesImg = new URL("../assets/images/services/ecommerces.jpg", import.meta.url).href;

const OurServices = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    {
      name: "Websites",
      description:
        "We create stunning, high-performance websites tailored to your business needs. From corporate sites to personal portfolios, we focus on responsive design and user experience to enhance your online presence.",
      image: websitesImg,
      id: "Websites",
    },
    {
      name: "Social Media",
      description:
        "Our social media services include content creation, branding strategies, and engagement techniques to help you grow your online audience and build a strong brand presence.",
      image: socialMediaImg,
      id: "Social Media",
    },
    {
      name: "Landing Pages",
      description:
        "We design conversion-focused landing pages optimized for marketing campaigns, lead generation, and promotions. Our approach ensures seamless integration with your advertising strategy.",
      image: landingPagesImg,
      id: "Landing Pages",
    },
    {
      name: "E-Commerces",
      description:
        "We develop high-quality e-commerce websites that provide seamless shopping experiences. Whether you're selling physical or digital products, we build secure and scalable online stores tailored to your needs.",
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
    <section>
      <Header className="blackHeader" />
      <div className="contentContainer">
        <div className="session padding">
          <article>
            <h2 className="pageTitle">Services</h2>
            <p>
              At Nova, we transform ideas into reality by offering tailored digital solutions for small and medium-sized businesses. Our services are designed to help your business thrive in the digital world with creative, functional, and high-quality strategies.
            </p>

            {/* Services Section */}
            <div className="listOfItemsContainer">
              {services.map((service, index) => (
                <div key={index} id={service.id} className="serviceCard">
                  <div>
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                  </div>
                  <div>
                    <img src={service.image} alt={service.name} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Contact Button */}
          <div className="buttonContainer">
            <button onClick={() => navigate("/contact-us")} className="regularButton">
              Contact Us
            </button>
            <button onClick={() => navigate("/portfolio")} className="regularButton">
              See our work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
