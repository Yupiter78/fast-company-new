import React, { FC } from "react";
import { useParams } from "react-router-dom";
import User from "../components/User";
import UsersList from "../components/UsersList";

interface Params {
    userId?: string;
}

const Users: FC = () => {
    const { userId } = useParams<Params>();
    return userId ? <User id={userId} /> : <UsersList />;
};

export default Users;
