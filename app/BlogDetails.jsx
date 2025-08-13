import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaFacebookF, FaLink, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Helmet } from "react-helmet"; // <-- Import Helmet


const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const { blogTitle } = useParams();

  // Load local images
  const images = import.meta.glob("../assets/img/blog/*.webp", {
    eager: true,
  });

  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("https://iv-blogs.ivhub.com/blogslist");
        if (!response.ok) throw new Error("Failed to fetch blog list");

        const data = await response.json();

        // Find the blog that matches the slugified title
        const currentBlog = data.articlesData.find(
          (b) => b.title.replace(/\s+/g, "-") === blogTitle
        );

        if (currentBlog) {
          // Map image from local assets
          const imageModule = images[`../assets/img/blog/${currentBlog.img}`];
          const blogWithImage = {
            ...currentBlog,
            img: imageModule?.default || "",
          };
          setBlog(blogWithImage);
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Error loading blog:", error);
        setBlog(null);
      }
    };

    fetchBlog();
  }, [blogTitle]);

  const cleanHtml = (html) => {
    // Replace all <br><br> and <br/><br/> with a placeholder to preserve them
    let cleaned = html.replace(/(<br\s*\/?>){2}/gi, "##DOUBLEBR##");
  
    // Remove any remaining single <br> or <br/>
    cleaned = cleaned.replace(/<br\s*\/?>/gi, "");
  
    // Restore the preserved <br><br>
    cleaned = cleaned.replace(/##DOUBLEBR##/g, "<br><br>");
  
    return cleaned;
  };
  

  if (!blog) return <div className="blog-loading">Loading...</div>;

  return (
    <div className="blog-details">

      {/* --- META TAGS --- */}
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.desc?.slice(0, 160)} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.desc?.slice(0, 160)} />
        <meta property="og:url" content={currentUrl} />
        {blog.img && <meta property="og:image" content={blog.img} />}
      </Helmet>
      
      {blog.img && <img className="hero-bg" src={blog.img} alt={blog.title} />}

      <div className="blog-wrapper">
        <div className="container">
          <div className={blog.img ? "blog-wrap" : "blog-wrap-img"}>
            <div className="blog-content">
              <div className="date-wrap">
                <span>{blog.date}</span>
                <div className="share-wrap">
                  <div className="share-wrap">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF />
                      </a>

                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter />
                      </a>

                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>

                      <button onClick={copyToClipboard} className="copy-link-button">
                        <FaLink />
                      </button>
                    </div>
                </div>
              </div>

              <h1>{blog.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: cleanHtml(blog.desc) }}></div>


              {blog.content?.map((x, index) => (
                <div className="content" key={index}>
                  <h2>{x.title}</h2>
                  <p>{x.content}</p>

                  {x.decimalPoints && (
                    <ul className="number-list">
                      {x.decimalPoints.map((y, yIndex) => (
                        <div className="list" key={yIndex}>
                          <li>{y.title}</li>
                          <span className="sub-list-desc">{y.description}</span>
                        </div>
                      ))}
                    </ul>
                  )}

                  {x.bulletPoints && (
                    <ul className="bullet-list">
                      {x.bulletPoints.map((y, yIndex) => (
                        <div className="list" key={yIndex}>
                          <li>{y.title}</li>
                          <span className="sub-list-desc">{y.description}</span>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
