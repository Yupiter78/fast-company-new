import React from "react";

const Pagination = ({ pageSize, totalUsers, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalUsers / pageSize);
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
                        {Array.from({ length: totalPages }, (_, i) => {
                            const number = ++i;
                            return (
                                <li
                                    key={number}
                                    className={`page-item ${
                                        currentPage === number ? "active" : ""
                                    }`}
                                    aria-current={
                                        currentPage === number ? "page" : null
                                    }
                                >
                                    <a
                                        className="page-link"
                                        onClick={() => onPageChange(number)}
                                    >
                                        {number}
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
