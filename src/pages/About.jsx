import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import developer from "../assets/images/developer.jpg";
import design from "../assets/images/design.png";
import "../styles/style.css";
import "../styles/About.css";
import "../styles/Fonts.css";
import Arrow from "../assets/icons/arrow";
import Logo from "../assets/images/logoHero.png";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="blackWrapper">
      <Header className="blackHeader" />
      <div className="contentContainer">
        <div className="content">
          <div className="shaddowEffectContainer">
            <div className="session" style={{ marginBottom: 0 }}>
              <div className="aboutUsHero">
                {/* padding */}
                <article className="aboutIntro paddingContainer">
                  <h3 className="pageTitle"> About us</h3>
                  <p>
                  Our goal is to provide creative and functional solutions that help businesses stand out in the digital world. We focus on each client’s unique needs to deliver a high-quality and innovative digital presence. Driven by passion, we help businesses thrive and bring creative ideas to life.
                  </p>
                </article>
                <div className="aboutLogoContainer">
                  <img className="aboutLogo" src={Logo}></img>
                </div>
              </div>


              <article className="aboutTeam whiteBg paddingContainer">
                <p>Team</p>
                <div>
                  {/* image div */}
                  <div className="imgContainer">
                    <img src={developer}></img>
                  </div>
                  {/* whriting div */}
                  <div>
                    <div className="flex">
                      <h3>Paulo</h3>
                      <span>Founder, developer and Idealist</span>
                    </div>
                    <p>
                      With a forward-thinking vision, Paulo blends his skills as
                      a developer with a passion for entrepreneurship and
                      creating projects that make a difference. His mission is
                      to build technological solutions that have a positive
                      impact on society.
                    </p>
                  </div>
                </div>
                <div>
                  {/* image div */}
                  <div className="imgContainer">
                    <img src={design}></img>
                  </div>
                  {/* written div */}
                  {/* <div>
                    <div className="flex">
                      <h3>Gabi</h3>
                      <span>Co-founder, Design and Creative</span>
                    </div>
                    <p>
                      A designer fueled by a passion for bringing ideas to life
                      and transforming concepts into unforgettable visual
                      experiences. Her work is driven by creativity, aesthetics,
                      and a constant pursuit of solutions that merge beauty and
                      functionality.
                    </p>
                  </div> */}
                  <div>
                    <div className="flex">
                      <h3>Design Team</h3>
                      <span>Creative, Functional, Impactful</span>
                    </div>
                    <p>
                      A team passionate about bringing ideas to life and
                      transforming concepts into unforgettable visual
                      experiences. Driven by creativity, aesthetics, and the
                      pursuit of solutions that merge beauty and functionality
                    </p>
                  </div>
                </div>
              </article>

              <div className="phrase">
                Building Digital Dreams, One Pixel at a Time.
              </div>

              <div className="buttonContainer">
                <button
                  onClick={() => navigate("/portfolio")}
                  className="regularButton"
                >
                  See our work
                </button>
              </div>
            </div>
          </div>

          {/* <div className="session" style={{marginTop: 0, paddingTop:0}}>
          <h2>Location</h2>

          <p>570 Maple Ave, Elizabeth, NJ 07202, Estados Unidos</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.0638410507795!2d-74.2140532!3d40.650523099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24d4a42597c55%3A0xecff621093733150!2s570%20Maple%20Ave%2C%20Elizabeth%2C%20NJ%2007202!5e0!3m2!1sen!2sus!4v1733440849063!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
