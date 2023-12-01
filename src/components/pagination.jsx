import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ pageSize, totalUsers, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalUsers / pageSize);
    const pages = _.range(1, totalPages + 1);
    return (
        <>
            {totalPages > 1 && (
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item">
                            <a
                                className="page-link btn"
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
                        <li
                            className={`page-item${
                                currentPage === totalPages ? " disabled" : ""
                            }`}
                        >
                            <a
                                className="page-link btn"
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

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    totalUsers: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
