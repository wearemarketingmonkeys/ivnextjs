import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import HeroSection from "../components/HeroSection";
import ArticleCard from "../components/ArticleCard";
import blogHero from "../assets/img/blog/blog-hero.webp";

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(40);

  const images = import.meta.glob("../assets/img/blog/*.webp", {
    eager: true,
  }); // Preload local images

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://iv-blogs.ivhub.com/blogslist");

        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }

        const data = await response.json();

        // Map the fetched data with local image imports
        const updatedArticles = data.articlesData.map((article) => ({
          ...article,
          img: images[`../assets/img/blog/${article.img}`]?.default || "",
        }));

        setArticles(updatedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* Blog Hero */}
      <div className="blog-hero">
        <HeroSection
          img={blogHero}
          textLight1="The Wellness Edit"
          textItalic1=" - Health,"
          textLight2="Beauty"
          textItalic2="& Beyond"
        />
      </div>

      {/* Blog Cards */}
      <div className="blog-cards">
        <div className="container">
          <div className="article-wrapper">
            {/* <h1>
              Welcome to the IVHub Blog – your go-to resource for the latest
              updates, expert advice, and wellness inspiration.
            </h1> */}

            {currentArticles.map((x, index) => (
              <ArticleCard
                key={index}
                img={x.img}
                title={x.title}
                desc={x.desc}
                readMoreUrl={`/blogs/${x.title.replace(/\s+/g, "-")}`}
              />
            ))}

            <div className="btn-wrap">
              <Pagination
                totalArticles={articles.length}
                articlesPerPage={articlesPerPage}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;