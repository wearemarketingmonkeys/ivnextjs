// app/blogs/[slug]/page.jsx
import { notFound } from 'next/navigation';
import ShareBarClient from './ShareBarClient';

// Revalidate the list every 10 min; adjust if you want fresher
export const revalidate = 600;

// Helpers
const toPublicBlogImg = (p) => {
  if (!p) return '';
  // If API gives just a filename (e.g., "post.webp"), map to /public
  if (!/^https?:\/\//i.test(p) && !p.startsWith('/')) return `/assets/img/blog/${p}`;
  return p;
};

const slugify = (t = '') =>
  t.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

async function fetchAllBlogs() {
  const res = await fetch('https://iv-blogs.ivhub.com/blogslist/feeds');
  if (!res.ok) return [];
  const data = await res.json();
  const arr = Array.isArray(data?.articlesData) ? data.articlesData : [];
  return arr.map((b) => ({
    ...b,
    img: toPublicBlogImg(b.img),
    _slug: b.slug || slugify(b.title),
  }));
}

function cleanHtml(html = '') {
  // Match your previous behavior: keep <br><br> pairs, strip single <br>
  let cleaned = String(html).replace(/(<br\s*\/?>){2}/gi, '##DOUBLEBR##');
  cleaned = cleaned.replace(/<br\s*\/?>/gi, '');
  cleaned = cleaned.replace(/##DOUBLEBR##/g, '<br><br>');
  return cleaned;
}

/* ---------- Static params (SSG) ---------- */
export async function generateStaticParams() {
  const blogs = await fetchAllBlogs();
  return blogs.slice(0, 200).map((b) => ({ slug: b._slug })); // cap to a reasonable number
}

/* ---------- Metadata per post ---------- */
export async function generateMetadata({ params }) {
  const blogs = await fetchAllBlogs();
  const item =
    blogs.find((b) => b._slug === params.slug) ||
    blogs.find((b) => slugify(b.title) === params.slug);
  if (!item) return {};

  const title = item.title || 'Blog';
  const description = (item.desc || '').replace(/<\/?[^>]+(>|$)/g, '').slice(0, 160);
  const canonical = `https://ivhub.com/blogs/${item._slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      images: [{ url: item.img || 'https://ivhub.com/og.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [item.img || 'https://ivhub.com/og.png'],
    },
  };
}

/* ---------- Page ---------- */
export default async function BlogDetailsPage({ params }) {
  const blogs = await fetchAllBlogs();
  const blog =
    blogs.find((b) => b._slug === params.slug) ||
    blogs.find((b) => slugify(b.title) === params.slug);

  if (!blog) return notFound();

  return (
    <div className="blog-details">
      {/* hero bg image if present */}
      {blog.img ? <img className="hero-bg" src={blog.img} alt={blog.title} /> : null}

      <div className="blog-wrapper">
        <div className="container">
          <div className={blog.img ? 'blog-wrap' : 'blog-wrap-img'}>
            <div className="blog-content">
              <div className="date-wrap">
                <span>{blog.date}</span>

                {/* Share bar (client island) exactly where your share-wrap lived */}
                <div className="share-wrap">
                  <ShareBarClient />
                </div>
              </div>

              <h1>{blog.title}</h1>

              {/* Main description (HTML) */}
              {blog.desc ? (
                <div dangerouslySetInnerHTML={{ __html: cleanHtml(blog.desc) }} />
              ) : null}

              {/* content blocks */}
              {Array.isArray(blog.content) &&
                blog.content.map((x, index) => (
                  <div className="content" key={index}>
                    {x.title ? <h2>{x.title}</h2> : null}
                    {x.content ? <p>{x.content}</p> : null}

                    {Array.isArray(x.decimalPoints) && x.decimalPoints.length > 0 && (
                      <ul className="number-list">
                        {x.decimalPoints.map((y, yIndex) => (
                          <div className="list" key={yIndex}>
                            <li>{y.title}</li>
                            <span className="sub-list-desc">{y.description}</span>
                          </div>
                        ))}
                      </ul>
                    )}

                    {Array.isArray(x.bulletPoints) && x.bulletPoints.length > 0 && (
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
}
