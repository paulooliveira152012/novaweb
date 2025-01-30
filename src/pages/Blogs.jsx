import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/style.css";
import "../styles/blog.css";

// import blogImages
import development from "../assets/images/services/development.jpg"
import socialMedia from "../assets/images/services/socialMedia.jpg"
import visualIdentity from "../assets/images/services/visualIdentity.jpg"
// import webDesign from "../assets/images/services/webDesign.jpg"
const webDesign = new URL("../assets/images/services/webDesign.jpg", import.meta.url).href;



const blogs = [
  {
    title: "Web Design",
    tip: "Discover how professional web design can transform your business.",
    blogImage: webDesign,
    content: [
      "A professionally designed website is more than just a digital presence—it’s a powerful tool for your business. At Nova, we specialize in creating customized websites tailored to your goals and audience.",
      "**1. Intuitive Navigation**",
      "Our web designs prioritize user experience, ensuring visitors can easily find the information they need. Clear layouts and strategically placed call-to-actions make for a seamless browsing experience.",
      "**2. Responsive Design**",
      "In today’s mobile-first world, your website must look great on all devices. Our responsive designs adapt perfectly to smartphones, tablets, and desktops, providing a consistent and enjoyable experience.",
      "**3. SEO Optimization**",
      "We build websites that are not only visually appealing but also optimized for search engines. By incorporating best practices in SEO, your site will rank higher in search results, increasing visibility and traffic.",
      "Investing in professional web design with Nova means creating a strong online presence that reflects your brand’s values and engages your audience effectively."
    ],
  },
  {
    title: "Development",
    tip: "Explore the advantages of custom web application development.",
    blogImage: development,
    content: [
      "A custom web application can revolutionize the way your business operates. At Nova, we design and develop applications that address your specific needs, delivering solutions that drive efficiency and growth.",
      "**1. Tailored to Your Needs**",
      "Our development services include creating platforms and tools that fit your unique business requirements, whether it's a management system, an e-commerce platform, or a dynamic web application.",
      "**2. Improved Efficiency**",
      "Streamline your operations with tools that automate tasks, reduce manual errors, and improve overall productivity. Custom solutions allow you to focus on what matters most—growing your business.",
      "**3. Superior User Experience**",
      "Our applications are designed with user experience in mind, ensuring intuitive interfaces that enhance customer satisfaction and engagement.",
      "By choosing Nova for your development needs, you gain access to cutting-edge solutions that help your business stand out and succeed in a competitive market."
    ],
  },
  {
    title: "Visual Identity",
    tip: "Understand how a strong visual identity builds brand recognition.",
    blogImage: visualIdentity,
    content: [
      "Your brand’s visual identity is the first impression customers have of your business. At Nova, we craft visual identities that leave a lasting impact and communicate your values effectively.",
      "**1. Logo Design**",
      "Your logo is the cornerstone of your brand. We design memorable logos that represent your company’s mission and resonate with your audience.",
      "**2. Consistent Branding**",
      "A cohesive color palette, typography, and design elements across all platforms ensure a professional and recognizable image for your brand.",
      "**3. Strengthened Market Presence**",
      "A strong visual identity sets you apart from competitors and builds trust with customers. It’s a vital step in establishing credibility and fostering loyalty.",
      "Partnering with Nova for your visual identity needs ensures that your brand is represented with style, consistency, and clarity."
    ],
  },
  {
    title: "Social Media",
    tip: "Learn how strategic social media can grow your business.",
    blogImage: socialMedia,
    content: [
      "Social media is a powerful tool for connecting with your audience and building your brand. At Nova, we specialize in creating impactful social media strategies that deliver real results.",
      "**1. Engaging Content**",
      "We create unique and creative posts that align with your brand’s voice, captivating your audience and encouraging interaction.",
      "**2. Strategic Planning**",
      "Our social media strategies are tailored to your goals, whether it’s increasing brand awareness, driving website traffic, or boosting sales.",
      "**3. Strengthened Online Presence**",
      "A strong presence on platforms like Instagram, Facebook, and LinkedIn helps you reach potential customers where they spend most of their time online.",
      "Nova’s social media services are designed to maximize your digital impact, helping your business thrive in today’s competitive landscape."
    ],
  },
];

const Blogs = () => {
  const { blogName } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Find the selected blog based on the URL parameter
  const selectedBlog = blogs.find((blog) => blog.title === blogName);

  useEffect(() => {
    if (blogName && !selectedBlog) {
      // Redirect to blogs list if the blogName is invalid
      navigate("/blogs");
    }
  }, [blogName, selectedBlog, navigate]);

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tip.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.some((paragraph) =>
        paragraph.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const goBack = () => {
    navigate("/blogs");
  };

  return (
    <>
      <Header className="blackHeader" />
      <div className="pageContainer">
        <div className="contentContainer blogScreen">
          {selectedBlog ? (
            // Display specific blog details
            <div className="blogDetail padding">
              <button onClick={goBack} className="backButton">
                &larr; Back to Blogs
              </button>
              <h1>{selectedBlog.title}</h1>
              <p className="blogTip">{selectedBlog.tip}</p>
              {selectedBlog.blogImage && (
                <div className="blogImageContainer">
                  <img
                    src={selectedBlog.blogImage}
                    alt={selectedBlog.title}
                    className="blogDetailImage"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      margin: "20px 0",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              )}
              {selectedBlog.content.map((paragraph, index) => {
                const formattedParagraph = paragraph
                  .split("**")
                  .map((part, i) =>
                    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                  );
                return <p key={index}>{formattedParagraph}</p>;
              })}
            </div>
          ) : (
            // Display all blogs if no blog is selected
            <div className="session padding">
              <div className="blogHeader">
                <h1>Recent Blogs</h1>
                <input
                  type="text"
                  placeholder="Search blogs..."
                  className="blogSearchBar"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="blogContainer">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog, index) => (
                    <div
                      key={index}
                      className={`blogBlock ${
                        index % 4 === 0 || index % 4 === 3
                          ? "flexLarge"
                          : "flexSmall"
                      }`}
                      onClick={() => navigate(`/blogs/${blog.title}`)}
                    >
                      <div className="blogImage">
                        {blog.blogImage ? (
                          <div
                            style={{
                              backgroundImage: `url(${blog.blogImage})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              width: "100%",
                              height: "auto",
                              borderRadius: "8px",
                            }}
                          ></div>
                        ) : (
                          <div
                            style={{
                              backgroundColor: "#eee",
                              width: "100%",
                              height: "150px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "8px",
                            }}
                          >
                            <p>No Image</p>
                          </div>
                        )}
                      </div>
                      <div className="blogContent">
                        <h3>{blog.title}</h3>
                        <p>{blog.tip}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No blogs found.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;

