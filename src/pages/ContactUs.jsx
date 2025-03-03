import "../styles/style.css";
import "../styles/ContactUs.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

// Environment variables
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [caseContent, setCaseContent] = useState("");
  const [businessName, setBusinessName] = useState("");

  useEffect(() => {

    // Debug log for environment variables
    console.log("✅ Service ID:", serviceID);
    console.log("✅✅ Template ID:", templateID);
    console.log("✅✅✅ Public Key:", publicKey);
    })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Making backend request...");

    // Form data including attorneyName
    const formData = {
      fullName,
      email,
      phone,
      caseContent,
      businessName,
    };

    try {
      

      // Send email
      await emailjs.send(serviceID, templateID, formData, publicKey);

      window.alert("Inquiry submitted successfully!");
      console.log("Inquiry submitted successfully!");

      // Clear form fields
      setFullName("");
      setPhone("");
      setEmail("");
      setCaseContent("");
      setBusinessName("");
    } catch (error) {
      console.error("Error submitting form:", error);
      window.alert("Failed to submit inquiry. Please try again later.");
    }
  };

  return (
    <section className="blackWrapper">
      <Header className={"blackHeader"} />
      <div className="contentContainer padding">
        {/* contact wrapper should display column */}
        {/* rows to display two side sections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={pageVariants}
          className="motionWrapper"
        >
        {/* top left */}
        <div className="row">
          <div className="square topLeft">
            <h3>CONTACT US</h3>
          </div>

          {/* top right */}
          <div className="square topRight">
            <p>
              Have a project in mind? Need a stunning website, an engaging
              social media strategy, or a custom digital solution for your
              business? We're here to help!
            </p>
          </div>
        </div>
        {/* bottom */}

        {/* bottom left */}
        <div className="row">
          <div className="square bottomRight left">
            <h2>REACH OUT TO US</h2>
            <p>
              Feel free to reach out—we’re here to assist with any inquiries or
              provide more information
            </p>
          </div>

          <div className="square topRight">
            <div className="row">
              <div className="square bottomRight">
                <form onSubmit={handleSubmit}>
                  <input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                    required
                  />

                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    required
                  />

                  <input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />

                  <input
                    id="businessName"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    type="text"
                    placeholder="Business Name"
                  ></input>

                  <textarea
                    id="caseDescription"
                    value={caseContent}
                    onChange={(e) => setCaseContent(e.target.value)}
                    placeholder="Provide a brief description of your business"
                    className="caseDescriptionInput"
                    rows="4"
                    required
                  ></textarea>
                  <button className="regularButton" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
