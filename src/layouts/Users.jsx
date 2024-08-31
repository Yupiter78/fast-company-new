import React from "react";
import { useParams } from "react-router-dom";
import User from "../components/User";
import UsersList from "../components/UsersList";

const Users = () => {
    const { userId } = useParams();
    return userId ? <User id={userId} /> : <UsersList />;
};

export default Users;
