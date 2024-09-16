import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, name, type, value, onChange, error }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <p>{error}</p>}
        </div>
    );
};

TextField.defaultProps = { type: "text" };

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default TextField;
