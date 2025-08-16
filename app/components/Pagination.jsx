// app/components/Pagination.jsx
// Server component (no "use client")
import Link from "next/link";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

/**
 * Supports either:
 *  A) { currentPage, totalPages, basePath }
 *  B) { totalArticles, articlesPerPage, currentPage, basePath }
 */
export default function Pagination({
  // New shape
  currentPage = 1,
  totalPages,
  basePath = "/blogs",
  // Back-compat shape
  totalArticles,
  articlesPerPage = 40,
}) {
  // If totalPages not provided, compute from totalArticles/articlesPerPage
  const computedTotalPages =
    typeof totalPages === "number" && totalPages > 0
      ? totalPages
      : Math.max(1, Math.ceil((totalArticles || 0) / articlesPerPage));

  if (computedTotalPages <= 1) return null;

  const makeHref = (p) => (p === 1 ? basePath : `${basePath}?page=${p}`);
  const pages = Array.from({ length: computedTotalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Pagination">
      <ul className="pagination-list" style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", listStyle: "none" }}>
        {/* Prev */}
        <li>
          {currentPage > 1 ? (
            <Link className="btn btn-stroke" href={makeHref(currentPage - 1)}>
              <GoChevronLeft aria-hidden />
              <span className="sr-only">Previous</span>
            </Link>
          ) : (
            <span className="btn btn-stroke disabled" aria-disabled="true">
              <GoChevronLeft aria-hidden />
              <span className="sr-only">Previous</span>
            </span>
          )}
        </li>

        {/* Page numbers */}
        {pages.map((p) => (
          <li key={p}>
            {p === currentPage ? (
              <span className="btn" aria-current="page">
                {p}
              </span>
            ) : (
              <Link className="btn btn-stroke" href={makeHref(p)}>
                {p}
              </Link>
            )}
          </li>
        ))}

        {/* Next */}
        <li>
          {currentPage < computedTotalPages ? (
            <Link className="btn btn-stroke" href={makeHref(currentPage + 1)}>
              <GoChevronRight aria-hidden />
              <span className="sr-only">Next</span>
            </Link>
          ) : (
            <span className="btn btn-stroke disabled" aria-disabled="true">
              <GoChevronRight aria-hidden />
              <span className="sr-only">Next</span>
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
