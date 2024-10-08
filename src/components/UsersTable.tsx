import React from "react";
import { Link } from "react-router-dom";
import Table from "./Table/Table";
import QualitiesList from "./QualitiesList";
import Bookmark from "./Bookmark";
import TableHead from "./Table/TableHead";
import TableBody from "./Table/TableBody";
import { IUser, IColumns, ISortBy } from "../types/types";

interface UsersTableOwnProps {
    users: IUser[];
    startIndex: number;
    onToggleBookmark: (id: string) => void;
    onDelete: (id: string) => void;
}

export interface TableRestProps {
    onSort: (item: ISortBy) => void;
    selectedSort: ISortBy;
}

type UsersTableProps = UsersTableOwnProps & TableRestProps;

const UsersTable: React.FC<UsersTableProps> = ({
    users,
    startIndex,
    onToggleBookmark,
    onDelete,
    ...rest
}) => {
    const columns: IColumns = {
        number: { _id: 1, name: "#" },
        name: {
            _id: 2,
            iter: "name",
            name: "Name",
            component: ({ _id, name }: IUser) => (
                <Link to={`/users/${_id}`}>{name}</Link>
            )
        },
        qualities: {
            _id: 3,
            name: "Qualities",
            component: ({ qualities }: IUser) => (
                <QualitiesList qualities={qualities} />
            )
        },
        profession: {
            _id: 4,
            iter: "profession.name",
            name: "Profession"
        },
        completedMeetings: {
            _id: 5,
            iter: "completedMeetings",
            name: "Completed Meetings"
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
            component: ({ status, _id }: IUser) => (
                <Bookmark
                    status={status}
                    onClick={() => onToggleBookmark(_id)}
                />
            )
        },
        delete: {
            _id: 8,
            name: "Delete",
            component: ({ _id }: IUser) => (
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(_id)}
                >
                    Delete
                </button>
            )
        }
    };

    return (
        <Table data={users} startIndex={startIndex} columns={columns} {...rest}>
            <TableHead columns={columns} {...rest} />
            <TableBody columns={columns} data={users} startIndex={startIndex} />
        </Table>
    );
};

export default UsersTable;
