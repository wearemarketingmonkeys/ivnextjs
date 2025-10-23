// app/blogs/page.jsx
import HeroSection from '../components/HeroSection';
import Pagination from "../components/Pagination";
import ArticleCard from "../components/ArticleCard";

// SEO
export const metadata = {
  title: 'Blogs | IV Wellness Lounge Clinic in Dubai',
  description:
    'The Wellness Edit – Health, Beauty & Beyond. Expert advice, updates, and wellness inspiration from IV Wellness Lounge Clinic in Dubai.',
  alternates: { canonical: 'https://ivhub.com/blogs' },
  openGraph: {
    title: 'Blogs | IV Wellness Lounge Clinic in Dubai',
    description:
      'The Wellness Edit – Health, Beauty & Beyond. Expert advice, updates, and wellness inspiration.',
    url: 'https://ivhub.com/blogs',
    type: 'website',
    images: [{ url: 'https://ivhub.com/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs | IV Wellness Lounge Clinic in Dubai',
    description:
      'The Wellness Edit – Health, Beauty & Beyond. Expert advice, updates, and wellness inspiration.',
    images: ['https://ivhub.com/og.png'],
  },
};



// Helper: image path mapping
const toBlogImg = (file) =>
  file ? (file.startsWith("/") ? file : `/assets/img/blog/${file}`) : "";

function slugifyTitle(t = "") {
  return t.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default async function BlogsPage({ searchParams }) {
  const pageParam = parseInt(searchParams?.page || "1", 10);
  const articlesPerPage = 40;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://ivhub.com'}/api/blogs`, {
    cache: "no-store",
  });


  if (!res.ok) {
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

  const data = await res.json();
  const articlesData = Array.isArray(data?.articlesData) ? data.articlesData : [];

  // Map data
  const articles = articlesData.map((a) => ({
    ...a,
    img: toBlogImg(a.img),
    slug: a.slug || slugifyTitle(a.title),
  }));

  // Pagination logic
  const totalPages = Math.max(1, Math.ceil(articles.length / articlesPerPage));
  const startIndex = (pageParam - 1) * articlesPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

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
            {currentArticles.map((x, i) => (
              <ArticleCard key={i} article={x} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              totalArticles={articles.length}
              articlesPerPage={40}
              currentPage={pageParam}
              basePath="/blogs"
            />

          )}
        </div>
      </div>
    </>
  );
}
