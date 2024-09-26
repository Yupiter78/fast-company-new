import React, { FC } from "react";
import { Quality as QualityProps } from "../types/types";

const Quality: FC<QualityProps> = ({ color, name }) => {
    return <span className={`badge mx-2 bg-${color}`}>{name}</span>;
};

export default Quality;
