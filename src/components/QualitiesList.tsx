import React, { FC } from "react";
import Quality from "./Quality";
import { IQuality as QualityProps } from "../types/types";

interface QualitiesListProps {
    qualities: QualityProps[];
}

const QualitiesList: FC<QualitiesListProps> = ({ qualities }) => {
    return (
        <>
            {qualities.map((quality) => (
                <Quality key={quality._id} {...quality} />
            ))}
        </>
    );
};

export default QualitiesList;
