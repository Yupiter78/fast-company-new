import React from "react";
import User from "../User";
import PropTypes from "prop-types";
import TableHead from "./TableHead";

const Table = ({ users, startIndex, ...rest }) => {
    const columns = {
        number: { name: "#" },
        name: {
            iter: "name",
            name: "Name"
        },
        qualities: {
            name: "Qualities"
        },
        profession: {
            iter: "profession.name",
            name: "Profession"
        },
        completedMeetings: {
            iter: "completedMeetings",
            name: "CompletedMeetings"
        },
        rate: {
            iter: "rate",
            name: "Rate"
        },
        favorites: {
            iter: "status",
            name: "Favorites"
        },
        delete: {
            name: "Delete"
        }
    };

    return (
        <table className="table border">
            <TableHead {...{ columns, ...rest }} />
            <tbody>
                {users.map((user, i) => {
                    return (
                        <User key={user._id} index={i + startIndex} {...user} {...rest} />
                    );
                })}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    users: PropTypes.array,
    startIndex: PropTypes.number
};

export default Table;
