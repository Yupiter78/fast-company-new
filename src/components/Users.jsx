import React, { useState } from "react";
import User from "./User";
import PropTypes from "prop-types";
import Pagination from "./Pagination";
import { paginate } from "../utils/paginate";
import GroupList from "./GroupList";
import _ from "lodash";

const Users = ({ users, professions, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState({});
    console.log("users: ", users);

    const PAGE_SIZE = 2;
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const filterUsers = (usersList, filterProf) => {
        return usersList.filter((user) => {
            return user.profession === filterProf;
        });
    };

    const handleClearFilter = () => {
        setSelectedProf({});
    };

    const filteredUsers = !_.isEmpty(selectedProf)
        ? filterUsers(users, selectedProf)
        : users;

    console.log("filteredUsers: ", filteredUsers);
    const count = filteredUsers.length;
    const usersSlice = paginate(filteredUsers, currentPage, PAGE_SIZE);
    const pageCount = Math.ceil(filteredUsers.length / PAGE_SIZE);
    console.log("count: ", count);

    return (
        <>
            {professions && (
                <>
                    <GroupList
                        items={professions}
                        selectedItems={selectedProf}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mx-2"
                        onClick={handleClearFilter}
                    >
                        Clear
                    </button>
                </>
            )}

            {count > 0 && (
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
            )}
            <Pagination
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={handleChangePage}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array,
    professions: PropTypes.object
};

export default Users;