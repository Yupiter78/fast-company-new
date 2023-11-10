import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";

const Users = ({ users, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_SIZE = 4;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = PAGE_SIZE * currentPage;
    const handlePageChange = (numberPage) => {
        setCurrentPage(numberPage);
    };
    const newUsers = users.slice(startIndex, endIndex);
    const count = users.length;
    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Qualities</th>
                            <th scope="col">Professions</th>
                            <th scope="col">CompletedMeetings</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Favorites</th>
                            <th scope="col">Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newUsers.map((user, i) => {
                            return (
                                <User
                                    key={user._id}
                                    index={i}
                                    {...user}
                                    {...rest}
                                />
                            );
                        })}
                    </tbody>
                </table>
            )}
            <Pagination
                pageSize={PAGE_SIZE}
                totalUsers={count}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Users;
