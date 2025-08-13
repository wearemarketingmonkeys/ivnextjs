import React from 'react';
import { GoChevronLeft, GoChevronRight  } from "react-icons/go";

const Pagination = ({ totalArticles, articlesPerPage, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <GoChevronLeft /> {/* Left Arrow */}
          </button>
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? "active" : ""}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}

        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
          >
            <GoChevronRight  /> {/* Right Arrow */}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
