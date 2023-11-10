import React from "react";

const Pagination = ({ pageSize, totalUsers, currentPages, onPageChange }) => {
    const totalPagesCount = Math.ceil(totalUsers / pageSize);
    return (
        <>
            {totalPagesCount > 1 && (
                <nav aria-label="...">
                    <ul className="pagination">
                        {Array.from({ length: totalPagesCount }, (_, i) => {
                            const number = ++i;
                            return (
                                <li
                                    key={number}
                                    className={`page-item ${
                                        currentPages === number ? "active" : ""
                                    }`}
                                    aria-current={
                                        currentPages === number ? "page" : null
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
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Pagination;
