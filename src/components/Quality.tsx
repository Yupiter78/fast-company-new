import React, { FC } from "react";

interface QualityProps {
    color: string;
    name: string;
}

const Quality: FC<QualityProps> = ({ color, name }) => {
    return <span className={`badge mx-2 bg-${color}`}>{name}</span>;
};

export default Quality;
