import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
import SearchStatus from "./components/searchStatus";
import Pagination from "./components/pagination";

const App = () => {
    const totalUsers = api.users.fetchAll();
    const [currentPages, setCurrentPages] = useState(1);
    const NUMBER_OF_ELEMENTS = 4;

    const startItem = (currentPages - 1) * NUMBER_OF_ELEMENTS;
    const endItem = NUMBER_OF_ELEMENTS * currentPages;

    const totalPages = Math.ceil(totalUsers.length / NUMBER_OF_ELEMENTS);
    const [users, setUsers] = useState(totalUsers.slice(startItem, endItem));

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookmark = (userId) => {
        setUsers(
            users.map((user) => {
                if (user._id === userId) {
                    return { ...user, status: !user.status };
                    // user.status = !user.status;
                }
                return user;
            })
        );
    };

    const handleChangePages = (numberPages) => {
        setCurrentPages(numberPages);
        setUsers(totalUsers.slice(startItem, endItem));
    };
    return (
        <div>
            <SearchStatus length={users.length} />
            <Users
                users={users}
                onDelete={handleDelete}
                onToggleBookmark={handleToggleBookmark}
            />
            <Pagination
                totalPages={totalPages}
                currentPages={currentPages}
                onChangePages={handleChangePages}
            />
        </div>
    );
};

export default App;
