import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, name, type, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const getInputClasses = (error) =>
        `form-control ${error ? "is-invalid" : ""}`;
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type={type === "password" && showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={getInputClasses(error)}
                />
                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={`bi bi-eye${
                                showPassword ? "-slash" : ""
                            }`}
                        ></i>
                    </button>
                )}

                {error && <div className="invalid-feedback mt-2">{error}</div>}
            </div>
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
