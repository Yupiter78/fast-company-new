import React from "react";

import PropTypes from "prop-types";
import Table from "./Table/Table";
import QualitiesList from "./QualitiesList";
import Bookmark from "./Bookmark";
import TableHead from "./Table/TableHead";
import TableBody from "./Table/TableBody";

const UsersTable = ({
    users,
    startIndex,
    onToggleBookmark,
    onDelete,
    ...rest
}) => {
    const columns = {
        number: { _id: 1, name: "#" },
        name: {
            _id: 2,
            iter: "name",
            name: "Name"
        },
        qualities: {
            _id: 3,
            name: "Qualities",
            component: ({ qualities }) => <QualitiesList {...{ qualities }} />
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
            name: "Favorites",
            component: ({ status, _id }) => (
                <Bookmark
                    status={status}
                    onClick={() => onToggleBookmark(_id)}
                />
            )
        },
        delete: {
            _id: 8,
            name: "Delete",
            component: ({ _id }) => (
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                        onDelete(_id);
                    }}
                >
                    delete
                </button>
            )
        }
    };
    return (
        <Table {...{ data: users, startIndex, columns, ...rest }}>
            <TableHead {...{ columns, ...rest }} />
            <TableBody {...{ columns, data: users, startIndex }} />
        </Table>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array,
    startIndex: PropTypes.number,
    onToggleBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UsersTable;
