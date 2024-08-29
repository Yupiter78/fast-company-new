import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./QualitiesList";

const User = ({ id }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await api.users.getUserById(id);
                setUser(userData);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center">Error: {error.message}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    const {
        name,
        profession: { name: professionName },
        qualities,
        completedMeetings,
        rate,
        status
    } = user;

    return user ? (
        <div className="card ms-5 mt-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    Profession: {professionName}
                </h6>
                <p className="card-text">
                    <strong>Qualities:</strong>{" "}
                    <QualitiesList qualities={qualities} />
                    <br />
                    <strong>Completed Meetings:</strong> {completedMeetings}
                    <br />
                    <strong>Rate:</strong> {rate}
                    <br />
                    <strong>Status:</strong> {status ? "Active" : "Inactive"}
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
