import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, name, type, value, onChange, error }) => {
    const getInputClasses = (error) =>
        `form-control ${error ? "is-invalid" : ""}`;
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={getInputClasses(error)}
            />
            {error && <div className="invalid-feedback mt-2">{error}</div>}
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
