import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./QualitiesList";

const User = ({ id }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        api.users.getUserById(id).then((user) => {
            setUser(user);
        });
    }, []);
    return user ? (
        <div className="ms-5 mt-3">
            <p>
                Name: <span className="fs-4 fw-bold">{user.name}</span>
            </p>
            <p>
                Profession:{" "}
                <span className="fw-bold">{user.profession.name}</span>
            </p>
            <p>
                Qualities: <QualitiesList qualities={user.qualities} />
            </p>
            <p>CompletedMeetings: {user.completedMeetings}</p>
            <p>Rate: {user.rate}</p>
        </div>
    ) : (
        <div>Loading...</div>
    );
};

User.propTypes = {
    id: PropTypes.string.isRequired
};

export default User;
