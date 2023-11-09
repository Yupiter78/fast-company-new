import React from "react";

const Quality = ({ color, name }) => {
    return <span className={`badge m-2 bg-${color}`}>{name}</span>;
};

export default Quality;
