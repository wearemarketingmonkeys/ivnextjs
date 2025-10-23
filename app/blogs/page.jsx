"use client";

import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Pagination from "../components/Pagination";
import ArticleCard from "../components/ArticleCard";

export default function BlogsPage() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("https://iv-blogs.ivhub.com/blogslist/feeds");
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data = await res.json();
        setArticles(Array.isArray(data?.articlesData) ? data.articlesData : []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(true);
      }
    }

    fetchBlogs();
  }, []);

  if (error) {
    return (
      <>
        <div className="blog-hero">
          <HeroSection
            img="/assets/img/blog/blog-hero.webp"
            textLight1="The Wellness Edit"
            textItalic1=" - Health,"
            textLight2="Beauty"
            textItalic2="& Beyond"
          />
        </div>
        <div className="blog-cards">
          <div className="container">
            <p>Unable to load blog posts right now. Please try again later.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="blog-hero">
        <HeroSection
          img="/assets/img/blog/blog-hero.webp"
          textLight1="The Wellness Edit"
          textItalic1=" - Health,"
          textLight2="Beauty"
          textItalic2="& Beyond"
        />
      </div>

      <div className="blog-cards">
        <div className="container">
          <div className="article-wrapper">
            {articles.map((x, i) => (
              <ArticleCard key={i} article={x} />
            ))}
          </div>

          {articles.length > 40 && (
            <Pagination
              totalArticles={articles.length}
              articlesPerPage={40}
              currentPage={1}
              basePath="/blogs"
            />
          )}
        </div>
      </div>
    </>
  );
}
