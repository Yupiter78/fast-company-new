import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";

const User = ({
    index,
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    status = false,
    ...rest
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
                <Bookmark {...rest} id={_id} status={status} />
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

export default User;
