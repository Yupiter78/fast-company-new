import React from "react";

const Pagination = ({ currentPages, totalPages, onPagination }) => {
    return (
        <nav aria-label="...">
            <ul className="pagination">
                {Array.from({ length: totalPages }, (_, i) => {
                    const number = i + 1;
                    return (
                        <li
                            key={number}
                            className={`page-item ${
                                currentPages === number ? "active" : ""
                            }`}
                            aria-current={
                                currentPages === number ? "page" : null
                            }
                            onClick={() => onPagination(number)}
                        >
                            <a className="page-link" href="/">
                                {number}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
