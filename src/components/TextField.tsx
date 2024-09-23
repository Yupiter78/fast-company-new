import React, { useState } from "react";

interface TextFieldProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const TextField: React.FC<TextFieldProps> = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    error
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const getInputClasses = (error?: string) =>
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

export default TextField;
