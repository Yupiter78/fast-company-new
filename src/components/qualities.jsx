import React from "react";
import Quality from "./quality";

const Qualities = ({ qualities }) => {
    return qualities.map((quality) => {
        return <Quality key={quality._id} {...quality} />;
    });
};

export default Qualities;
