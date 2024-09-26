import React, { FC } from "react";
import _ from "lodash";

interface PaginationProps {
    pageSize: number;
    totalUsers: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
    pageSize,
    totalUsers,
    currentPage,
    onPageChange
}) => {
    const totalPages = Math.ceil(totalUsers / pageSize);
    const pages = _.range(1, totalPages + 1);
    return (
        <>
            {totalPages > 1 && (
                <nav aria-label="...">
                    <ul className="pagination">
                        {currentPage > 1 && (
                            <li className="page-item">
                                <a
                                    className="page-link btn"
                                    onClick={() =>
                                        onPageChange(currentPage - 1)
                                    }
                                >
                                    Previous
                                </a>
                            </li>
                        )}
                        {pages.map((page) => {
                            return (
                                <li
                                    key={page}
                                    className={`page-item ${
                                        currentPage === page ? "active" : ""
                                    }`}
                                    aria-current={
                                        currentPage === page
                                            ? "page"
                                            : undefined
                                    }
                                    style={{ cursor: "pointer" }}
                                >
                                    <a
                                        className="page-link btn"
                                        onClick={() => onPageChange(page)}
                                    >
                                        {page}
                                    </a>
                                </li>
                            );
                        })}
                        {currentPage < totalPages && (
                            <li className="page-item">
                                <a
                                    className="page-link btn"
                                    onClick={() =>
                                        onPageChange(currentPage + 1)
                                    }
                                >
                                    Next
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Pagination;
