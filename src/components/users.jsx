import React, { useState } from "react";
import api from "../api";
import Badge from "./badge";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    return (
        <>
            <h1>Users</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Qualities</th>
                        <th scope="col">Professions</th>
                        <th scope="col">CompletedMeetings</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Button</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return (
                            <tr key={user._id}>
                                <th scope="row">{i + 1}</th>
                                <td>{user.name}</td>
                                <td>
                                    {user.qualities.map((quality) => {
                                        return (
                                            <Badge
                                                key={quality._id}
                                                {...quality}
                                            />
                                        );
                                    })}
                                </td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => {
                                            handleDelete(user._id);
                                        }}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Users;
