import React, { useState } from "react";
import User from "./User";
import PropTypes from "prop-types";
import Pagination from "./Pagination";
import { paginate } from "../utils/paginate";

const Users = ({ users, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const PAGE_SIZE = 4;
    const usersSlice = paginate(users, currentPage, PAGE_SIZE);
    console.log("usersSlice: ", usersSlice);
    const count = usersSlice.length;
    const pageCount = Math.ceil(users.length / PAGE_SIZE);

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    return (
        count > 0 && (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Провфессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {usersSlice.map((user, i) => (
                            <User
                                key={user._id}
                                index={i}
                                {...user}
                                {...rest}
                            />
                        ))}
                    </tbody>
                </table>
                <Pagination
                    pageCount={pageCount}
                    currentPage={currentPage}
                    onChangePage={handleChangePage}
                />
            </>
        )
    );
};

Users.propTypes = {
    users: PropTypes.array
};

export default Users;
