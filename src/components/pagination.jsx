import React from "react";
import _ from "lodash";

const Pagination = ({ pageSize, totalUsers, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalUsers / pageSize);
    const pages = _.range(1, totalPages + 1);
    return (
        <>
            {totalPages > 1 && (
                <nav aria-label="...">
                    <ul className="pagination">
                        <li
                            className={`page-item ${
                                currentPage === 1 ? "disabled" : ""
                            } `}
                        >
                            <a
                                className="page-link"
                                onClick={() => onPageChange(currentPage - 1)}
                            >
                                Previous
                            </a>
                        </li>
                        {pages.map((page) => {
                            return (
                                <li
                                    key={page}
                                    className={`page-item ${
                                        currentPage === page ? "active" : ""
                                    }`}
                                    aria-current={
                                        currentPage === page ? "page" : null
                                    }
                                >
                                    <a
                                        className="page-link"
                                        onClick={() => onPageChange(page)}
                                    >
                                        {page}
                                    </a>
                                </li>
                            );
                        })}
                        <li
                            className={`page-item${
                                currentPage === totalPages ? " disabled" : ""
                            }`}
                        >
                            <a
                                className="page-link"
                                onClick={() => onPageChange(currentPage + 1)}
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Pagination;
