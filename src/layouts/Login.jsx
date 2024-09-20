import React, { useCallback, useEffect, useState } from "react";
import TextField from "../components/TextField";
import { validator } from "../utils/validator";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const handleChange = useCallback(({ target: { name, value } }) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }, []);

    useEffect(() => {
        validate();
    }, [formData]);
    const validateConfig = {
        email: {
            isRequired: {
                message: "Email is required"
            },
            isEmail: {
                message: "Email entered incorrectly"
            }
        },
        password: {
            isRequired: {
                message: "Password is required"
            },
            hasUpperCase: {
                message: "Password must contain at least one uppercase letter"
            },
            hasDigit: {
                message: "Password must contain at least one digit"
            },
            minLength: {
                message: "Password must contain at least 8 characters",
                value: 8
            }
        }
    };

    const validate = () => {
        const errors = validator(formData, validateConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log("formData: ", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
