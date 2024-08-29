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
        <div className="card ms-5 mt-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    Profession: {user.profession.name}
                </h6>
                <p className="card-text">
                    <strong>Qualities:</strong>{" "}
                    <QualitiesList qualities={user.qualities} />
                    <br />
                    <strong>Completed Meetings:</strong>{" "}
                    {user.completedMeetings}
                    <br />
                    <strong>Rate:</strong> {user.rate}
                    <br />
                    <strong>Status:</strong>{" "}
                    {user.status ? "Active" : "Inactive"}
                </p>
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
};

User.propTypes = {
    id: PropTypes.string.isRequired
};

export default User;
