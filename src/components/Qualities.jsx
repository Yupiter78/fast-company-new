import React from "react";
import Quality from "./Quality";
import PropTypes from "prop-types";

const Qualities = ({ qualities }) => {
    return qualities.map((quality) => {
        return <Quality key={quality._id} {...quality} />;
    });
};

Qualities.propTypes = {
    qualities: PropTypes.array
};

export default Qualities;
