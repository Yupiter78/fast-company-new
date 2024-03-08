import React from "react";
import User from "./User";
import PropTypes from "prop-types";

const Users = ({ users, ...rest }) => {
    return (
        <>
            {users.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
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
                        {users.map((user, i) => (
                            <User
                                key={user._id}
                                index={i}
                                {...{ ...user, ...rest }}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array
};

export default Users;
