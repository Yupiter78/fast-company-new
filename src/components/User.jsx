import React from "react";
import PropTypes from "prop-types";

const User = ({ id }) => {
    return <div>User ID: {id}</div>;
};

User.propTypes = {
    id: PropTypes.string.isRequired
};

export default User;
