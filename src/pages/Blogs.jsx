import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/style.css";
import "../styles/blog.css";
import blogsList from "../projects/blogs.json";

// Import actual images
import development from "../assets/images/services/development.jpg";
import socialMedia from "../assets/images/services/socialMedia.jpg";
import visualIdentity from "../assets/images/services/visualIdentity.jpg";
import webDesign from "../assets/images/services/WebDesign.png";

// Create a mapping of image keys from JSON to actual imported images
const imageMap = {
  webDesign,
  development,
  socialMedia,
  visualIdentity,

  
};

const Blogs = () => {
  const { blogName } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Find the selected blog based on the URL parameter
  const selectedBlog = blogsList.find((blog) => blog.title === blogName);

  useEffect(() => {
    if (blogName && !selectedBlog) {
      // Redirect to blogs list if the blogName is invalid
      navigate("/blogs");
    }
  }, [blogName, selectedBlog, navigate]);

  // Filter blogs based on search query
  const filteredBlogs = blogsList.filter(
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
    <section className="blackWrapper">
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
                    src={imageMap[selectedBlog.blogImage]} // Use mapped image
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
                              backgroundImage: `url(${imageMap[blog.blogImage]})`,
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
    </section>
  );
};

export default Blogs;
