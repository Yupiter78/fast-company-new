import React, { useEffect, useState } from "react";
import Users from "./components/Users";
import api from "./api";

const App = () => {
    const [users, setUsers] = useState(null);
    const [professions, setProfessions] = useState(null);
    useEffect(() => {
        Promise.all([api.users.fetchAll(), api.professions.fetchAll()]).then(
            ([users, professions]) => {
                setUsers(users);
                setProfessions(professions);
            }
        );
    }, []);

    useEffect(() => {
        console.log("professions: ", professions);
    }, [professions]);

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
                    professions={professions}
                    onDelete={handleDelete}
                    onToggleBookmark={handleToggleBookmark}
                />
            )}
        </>
    );
};

export default App;
