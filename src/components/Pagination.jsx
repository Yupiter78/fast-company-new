import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ pageCount, currentPage, onPageChange }) => {
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

    const handlePage = (page, direction, pageCount) => {
        const newPage = {
            next: (page % pageCount) + 1,
            prev: ((page - 2 + pageCount) % pageCount) + 1
        }[direction];

        newPage
            ? onPageChange(newPage)
            : console.error("Error: Invalid direction provided");
    };

    if (pageCount === 1) return null;
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item">
                    <a
                        className="page-link"
                        onClick={() =>
                            handlePage(currentPage, "prev", pageCount)
                        }
                    >
                        Previous
                    </a>
                </li>
                {pages.map((page) => (
                    <li
                        key={`page_${page}`}
                        className={`page-item ${
                            page === currentPage ? "active" : ""
                        }`}
                        aria-current={page === currentPage ? "page" : ""}
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a
                        className="page-link"
                        onClick={() =>
                            handlePage(currentPage, "next", pageCount)
                        }
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    pageCount: PropTypes.number,
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func
};

export default Pagination;
