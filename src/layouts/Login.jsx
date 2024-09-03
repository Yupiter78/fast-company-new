import React, { useCallback, useEffect, useState } from "react";
import TextField from "../components/TextField";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const handleChange = useCallback(({ target: { name, value } }) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }, []);

    useEffect(() => {
        validate();
    }, [formData]);
    const validate = () => {
        const errors = {};
        for (const key in formData) {
            if (Object.prototype.hasOwnProperty.call(formData, key)) {
                if (formData[key].trim() === "") {
                    errors[key] = `Field ${key} is required`;
                }
            }
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        console.log("errors: ", errors);
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
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
