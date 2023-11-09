import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
    return (
        <>
            {users.length > 0 && (
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
                        {users.map((user, i) => {
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
        </>
    );
};

export default Users;
