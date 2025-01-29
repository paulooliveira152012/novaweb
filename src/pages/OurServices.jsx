import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import "../styles/services.css"; // New CSS file for improved styles
import { Link } from "react-router-dom";

// Import images
import development from "../assets/images/services/development.jpg"
import socialMedia from "../assets/images/services/socialMedia.jpg"
import visualIdentity from "../assets/images/services/visualIdentity.jpg"
import webDesign from "../assets/images/services/webDesign.jpg"

 
const OurServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Web Design",
      description:
        "We develop professional and customized websites, including strategic landing pages for specific campaigns. Our focus is on creating intuitive navigation and an attractive visual experience, with responsive design that adapts perfectly to all devices. Additionally, we optimize each project for SEO, helping your company stand out in search engines.",
      image: webDesign, // Image of related equipment
      blogLink: "./blogs"
    },
    {
      name: "Development",
      description:
        "We build custom web applications tailored to your company's specific needs. This includes dynamic platforms, online management systems, and interactive tools that streamline processes and provide a superior user experience.",
      image: development,
    },
    {
      name: "Visual Identity",
      description:
        "We create impactful visual identities that reflect your brand’s values and essence. Our services include designing logos, color palettes, typography, and other graphic elements that ensure consistency and strengthen your company's recognition in the market.",
      image: visualIdentity,
    },
    {
      name: "Social Media",
      description:
        "We plan and create strategic content for social media, including original and creative posts that reinforce your brand’s identity. Our approach aims to build a solid digital presence, engage your audience, and generate real results for your business.",
      equipment: ["Battery Testing Kit", "Alternator Testing Tools"],
      image: socialMedia,
    },
  ];
  

  return (
    <section>
      <Header className="blackHeader" />
      <div className="contentContainer">
        <div className="session padding">
        <article>
          <h2 className="pageTitle">Services</h2>
          {/* <h1>Our Services</h1> */}
          <p>
          At Nova, we transform ideas into reality by offering tailored digital solutions for small and medium-sized businesses. Our services are designed to help your business thrive in the digital world with creative, functional, and high-quality strategies.
          </p>

          {/* Services Section */}
          <div className="listOfItemsContainer">
            {services.map((service, index) => (
                <Link to={`/blogs/${service.name}`}>
              <div key={index} className="serviceCard">
                <div>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
                </div>
                <div>
                <img
                  src={service.image}
                  alt={service.name}
                />
                </div>
              </div>
                </Link>
            ))}
          </div>
        </article>
        {/* Contact Button */}
        <div className="buttonContainer">
          <button
            onClick={() => navigate("/contact-us")}
            className="regularButton"
          >
            Contact Us
          </button>

          <button
            onClick={() => navigate("/portfolio")}
            className="regularButton"
          >
            See our work
          </button>
        </div>
        </div>

      </div>
    </ section>
  );
};

export default OurServices;
