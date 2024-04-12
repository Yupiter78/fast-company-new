import React, { useEffect, useState } from "react";
import _ from "lodash";
import Pagination from "./Pagination";
import GroupList from "./GroupList";
import api from "../api";
import PropTypes from "prop-types";
import SearchStatus from "./SearchStatus";
import Table from "./Table/Table";

const Users = ({ users, onProfessionSelect, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState(null);
    const [selectedProf, setSelectedProf] = useState(null);
    const [sortBy, setSortBy] = useState({
        iter: "name",
        order: "asc"
    });
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

    const sortedUsers = _.orderBy(usersFiltered, [sortBy.iter], [sortBy.order]);
    const usersSlice = sortedUsers.slice(startIndex, endIndex);
    const count = usersFiltered.length;
    const handleClearFilter = () => {
        setSelectedProf(null);
    };

    const handleSort = (item) => {
        setSortBy(item);
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
                        <Table
                            users={usersSlice}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            {...rest}
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
};

Users.propTypes = {
    users: PropTypes.array,
    onProfessionSelect: PropTypes.func
};

export default Users;
