import React from "react";
import PropTypes from "prop-types";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ users, startIndex, ...rest }) => {
    const columns = {
        number: { _id: 1, name: "#" },
        name: {
            _id: 2,
            iter: "name",
            name: "Name"
        },
        qualities: {
            _id: 3,
            name: "Qualities"
        },
        profession: {
            _id: 4,
            iter: "profession.name",
            name: "Profession"
        },
        completedMeetings: {
            _id: 5,
            iter: "completedMeetings",
            name: "CompletedMeetings"
        },
        rate: {
            _id: 6,
            iter: "rate",
            name: "Rate"
        },
        favorites: {
            _id: 7,
            iter: "status",
            name: "Favorites"
        },
        delete: {
            _id: 8,
            name: "Delete"
        }
    };

    return (
        <table className="table border">
            <TableHead {...{ columns, ...rest }} />
            <TableBody {...{ columns, data: users, startIndex }} />
        </table>
    );
};

Table.propTypes = {
    users: PropTypes.array,
    startIndex: PropTypes.number
};

export default Table;
