import React, { FC, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import QualitiesList from "./QualitiesList";
import { User as IUserProps } from "../types/types";

interface UserProps {
    id: string;
}

const User: FC<UserProps> = ({ id }) => {
    const [user, setUser] = useState<IUserProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const history = useHistory();

    const handleReturnAllUsers = useCallback(() => {
        history.push("/users");
    }, []);
    useEffect(() => {
        const fetchData = async (isMounted: boolean) => {
            try {
                const userData = await api.users.getUserById(id);
                isMounted && setUser(userData);
            } catch (error) {
                setError(error as Error);
            } finally {
                isMounted && setLoading(false);
            }
        };
        let isMounted = true;

        fetchData(isMounted);
        return () => {
            isMounted = false;
        };
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
        <>
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
                        <strong>Status:</strong>{" "}
                        {status ? "Active" : "Inactive"}
                    </p>
                </div>
                <button
                    className="btn btn-primary mx-5 mb-3"
                    onClick={handleReturnAllUsers}
                >
                    All users
                </button>
            </div>
        </>
    ) : (
        <div>Loading...</div>
    );
};

export default User;
