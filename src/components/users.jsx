import React, { useEffect, useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import ListGroup from "./listGroup";
import api from "../api";
import PropTypes from "prop-types";

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
        console.log(profObj);

        setSelectedProf(profObj);
    };

    const usersFiltered = selectedProf
        ? users.filter(({ profession }) => profession === selectedProf)
        : users;
    const usersSlice = usersFiltered.slice(startIndex, endIndex);
    const count = users.length;
    const handleClearFilter = () => {
        setSelectedProf(null);
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    return (
        <>
            {professions && (
                <ListGroup
                    items={professions}
                    selectedItem={selectedProf}
                    onProfessionSelect={handleProfessionSelect}
                    onClearFilter={handleClearFilter}
                />
            )}
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

Users.propTypes = {
    users: PropTypes.array,
    onProfessionSelect: PropTypes.func
};

export default Users;
