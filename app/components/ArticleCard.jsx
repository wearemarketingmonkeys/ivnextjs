// app/components/ArticleCard.jsx
// Server component (no "use client")

import Link from "next/link";

// Strip HTML tags safely on server (no document usage)
function stripHtmlAndTruncate(htmlString = "", wordLimit = 30) {
  // remove tags
  const text = String(htmlString).replace(/<\/?[^>]+(>|$)/g, " ");
  // collapse whitespace
  const clean = text.replace(/\s+/g, " ").trim();
  if (!wordLimit) return clean;

  const words = clean.split(" ");
  if (words.length <= wordLimit) return clean;
  return words.slice(0, wordLimit).join(" ") + "...";
}

export default function ArticleCard(props) {
  // Support both shapes:
  // 1) <ArticleCard img title desc readMoreUrl />
  // 2) <ArticleCard article={{ img, title, desc, slug/readMoreUrl }} />
  const a = props.article ?? props;

  const img = a.img;
  const title = a.title || "";
  const desc = a.desc || a.description || "";
  const href =
    a.readMoreUrl ||
    a.href ||
    (a.slug ? `/blogs/${a.slug}` : "#");

  return (
    <article className="articleWrap">
      <div className="content">
        {/* Uncomment if you want the thumbnail visible */}
        {/* {img ? <img src={img} alt={title || "article"} /> : null} */}

        <h2>
          <Link href={href}>{title}</Link>
        </h2>

        <hr />

        {desc ? <p>{stripHtmlAndTruncate(desc)}</p> : null}
      </div>

      <Link href={href} className="read-more-link">
        Read article
      </Link>
    </article>
  );
}
