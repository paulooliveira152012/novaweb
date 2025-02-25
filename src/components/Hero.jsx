import "../styles/style.css";
import "../styles/hero.css";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/images/heronovaimage.jpg"
import Header from "./Header";
// import video from "../assets/videos/heroVideo.MP4";

const Hero = () => {
  const navigate = useNavigate();
  return (
    // <div className="hero" role="banner" aria-labelledby="motor picture">
    //   <div className="darkHeroOverlay" aria-hidden="true"></div>
    //   <div className="heroContent">
    //     <video 
    //       autoPlay 
    //       loop 
    //       muted 
    //       playsinline 
    //       class="backgroundVideo"
    //       aria-hidden="true"
    //       >
    //       <source src={video} type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //   </div>
    // </div>


    <div className="hero" role="banner" aria-labelledby="motor picture">
  <Header className="blackHeader transparent"/>
   <img className="heroImg" src={heroImg} />
      <div className="darkHeroOverlay" aria-hidden="true"></div>
      <div className="heroContent">
         <h1>
          Your vision, <br />
          our inovation
        </h1>
        <button onClick={() => navigate("/contact-us")}>Contact us</button>
      </div>
    </div>

  );
};

export default Hero;

// <p>Creative and technological solutions to strengthen your online presence</p>
