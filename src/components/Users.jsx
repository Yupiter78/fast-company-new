import React, { useEffect, useState } from "react";
import _ from "lodash";
import User from "./User";
import Pagination from "./Pagination";
import GroupList from "./GroupList";
import api from "../api";
import PropTypes from "prop-types";
import SearchStatus from "./SearchStatus";

const Users = ({ users, onProfessionSelect, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState(null);
    const [selectedProf, setSelectedProf] = useState(null);
    const PAGE_SIZE = 4;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = PAGE_SIZE * currentPage;
    const handlePageChange = (numberPage) => {
        setCurrentPage(numberPage);
    };

    const handleProfessionSelect = (profObj) => {
        setSelectedProf(profObj);
    };

    const usersFiltered = selectedProf
        ? users.filter(({ profession }) => _.isEqual(profession, selectedProf))
        : users;
    const usersSlice = usersFiltered.slice(startIndex, endIndex);
    const count = usersFiltered.length;
    const handleClearFilter = () => {
        setSelectedProf(null);
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data);
        });
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);
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
                        <table className="table border">
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
                                {usersSlice.map((user, i) => {
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
};

Users.propTypes = {
    users: PropTypes.array,
    onProfessionSelect: PropTypes.func
};

export default Users;
