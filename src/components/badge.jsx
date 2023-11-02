import React from "react";

const Badge = ({ color, name }) => {
    const getClassesColor = (colorBadge) => {
        return `badge m-2 bg-${colorBadge}`;
    };
    return <span className={getClassesColor(color)}>{name}</span>;
};

export default Badge;
