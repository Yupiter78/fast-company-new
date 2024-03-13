import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ pageCount, currentPage, onChangePage }) => {
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
    const handleNextPage = (page) => {
        console.log("page: ", page);
        const nextPage = (page % pageCount) + 1;
        console.log("nextPage: ", nextPage);
        onChangePage(nextPage);
    };

    const handlePrevPage = (page) => {
        console.log("page: ", page);
        const prevPage = ((page - 2 + pageCount) % pageCount) + 1;
        console.log("nextPage: ", prevPage);
        onChangePage(prevPage);
    };
    if (pageCount === 1) return null;
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item">
                    <a
                        className="page-link"
                        onClick={() => handlePrevPage(currentPage)}
                    >
                        Previous
                    </a>
                </li>
                {pages.map((page) => (
                    <li
                        key={page}
                        className={`page-item ${
                            page === currentPage ? "active" : ""
                        }`}
                        aria-current={page === currentPage ? "page" : ""}
                    >
                        <a
                            className="page-link"
                            onClick={() => onChangePage(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a
                        className="page-link"
                        onClick={() => handleNextPage(currentPage)}
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
    onChangePage: PropTypes.func,
    onNextPage: PropTypes.func,
    onPrevPage: PropTypes.func
};

export default Pagination;
