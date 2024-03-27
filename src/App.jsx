import React, { useEffect, useState } from "react";
import Users from "./components/Users";
import api from "./api";

const App = () => {
    const [users, setUsers] = useState(null);
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
        // user.status = !user.status;
    };

    return (
        <>
            {users && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToggleBookmark={handleToggleBookmark}
                />
            )}
        </>
    );
};

export default App;
