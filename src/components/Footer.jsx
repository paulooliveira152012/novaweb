import "../styles/style.css";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import PhoneIcon from "../assets/icons/footer/phone";
import EnvelopIcon from "../assets/icons/footer/envelop";
import LocationIcon from "../assets/icons/footer/location";
import whiteLogo from "../assets/images/logo_white.svg";
import blackLogo from "../assets/images/logo_black.svg";
import blueLogo from "../assets/images/logo_blue.svg";
import FacebookIcon from "../assets/images/icons/facebook";
import InstagramIcon from "../assets/images/icons/instagram";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      {/* flex side by side */}
      {/* section1 */}
      

      <div className="socialMediaIconContainer"></div>

      {/* display flex para 4 divs */}
      <div className="footerContent">
        {/* div 1 */}
        {/* <div className="logoSmallScren">
        <img src={blackLogo} alt="White Logo" />
        </div> */}
        

        <div>
          {/* <div className="logoContainer"> */}
            <img src={blueLogo} alt="Black Logo" className="hideLogo" />
          {/* </div> */}
          
          
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>

        {/* div 2 */}
        <div className="socialMediaContainer">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/nova.solutionsw?igsh=aDc0Nm50dm8zOHhy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="socialIconFooter instagramFooterIcon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1GnVcokyfR/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="socialIconFooter" />
              </a>
            </li>
          </ul>
        </div>

        {/* div 3 */}
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="tel: +1 908-630-8458 ">
                <PhoneIcon className="icon" /> +1 (908) 630-8458
              </a>
            </li>
            <li>
              <a href="mailto: nova.agcontact@gmail.com">
                <EnvelopIcon className="icon" />
                nova.agcontact@gmail.com
              </a>
            </li>
            <li>
              {" "}
              <LocationIcon className="icon" /> NJ{" "}
            </li>
          </ul>
        </div>

        {/* div 4 */}
        <div>
          <h3>Legal</h3>

          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/accessibility-statement">Accessibility Statement</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
      <div className="divLine"></div>
      <p>&copy; {currentYear} Nova Digital Solutions LLC. All rights reserved.</p>
    </div>
  );
};

export default Footer;
