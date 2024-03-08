import React from "react";
import Qualities from "./Qualities";
import Bookmark from "./Bookmark";
import PropTypes from "prop-types";

const User = ({
    index,
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    status,
    onToggleBookmark
}) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td>
                <Qualities qualities={qualities} />
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                <Bookmark
                    status={status}
                    onClick={() => onToggleBookmark(_id)}
                />
            </td>
            <td>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                        onDelete(_id);
                    }}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    index: PropTypes.number,
    _id: PropTypes.string,
    name: PropTypes.string,
    qualities: PropTypes.array,
    profession: PropTypes.object,
    completedMeetings: PropTypes.number,
    rate: PropTypes.number,
    onDelete: PropTypes.func,
    status: PropTypes.bool,
    onToggleBookmark: PropTypes.func
};

export default User;
