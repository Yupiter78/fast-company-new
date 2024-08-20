import React, { useEffect, useState } from "react";
import _ from "lodash";
import Pagination from "./Pagination";
import GroupList from "./GroupList";
import api from "../api";
import PropTypes from "prop-types";
import SearchStatus from "./SearchStatus";
import UsersTable from "./UsersTable";

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState(null);
    const [professions, setProfessions] = useState(null);
    const [selectedProf, setSelectedProf] = useState(null);
    const [sortBy, setSortBy] = useState({
        iter: "name",
        order: "asc"
    });
    const PAGE_SIZE = 4;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = PAGE_SIZE * currentPage;

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookmark = (userId) => {
        setUsers(
            users.map((user) =>
                user._id === userId
                    ? {
                          ...user,
                          status: !user.status
                      }
                    : user
            )
        );
    };

    const handlePageChange = (numberPage) => {
        setCurrentPage(numberPage);
    };

    const handleProfessionSelect = (profObj) => {
        setSelectedProf(profObj);
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data);
        });
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleClearFilter = () => {
        setSelectedProf(null);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };
    if (users) {
        const filteredUsers = selectedProf
            ? users.filter(({ profession }) =>
                  _.isEqual(profession, selectedProf)
              )
            : users;

        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.iter],
            [sortBy.order]
        );
        const usersSlice = sortedUsers.slice(startIndex, endIndex);
        const count = filteredUsers.length;

        return (
            <>
                <div className="d-flex justify-content-center">
                    <SearchStatus length={count} />
                </div>

                <div className="row justify-content-center">
                    {professions && (
                        <div className="col-1 ms-2">
                            <GroupList
                                items={professions}
                                selectedItem={selectedProf}
                                onProfessionSelect={handleProfessionSelect}
                                onClearFilter={handleClearFilter}
                            />
                        </div>
                    )}
                    {count > 0 && (
                        <div className="col-9 me-2">
                            <UsersTable
                                users={usersSlice}
                                startIndex={startIndex}
                                onSort={handleSort}
                                selectedSort={sortBy}
                                onDelete={handleDelete}
                                onToggleBookmark={handleToggleBookmark}
                            />
                        </div>
                    )}
                </div>

                <div className="d-flex justify-content-center">
                    <Pagination
                        pageSize={PAGE_SIZE}
                        totalUsers={count}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </>
        );
    }
    return "loading...";
};

Users.propTypes = {
    users: PropTypes.array,
    onProfessionSelect: PropTypes.func
};

export default Users;
