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
        const errors = Object.keys(formData).reduce((acc, prop) => {
            if (formData[prop].trim() === "") {
                acc[prop] = `Field ${prop} is required`;
            }
            return acc;
        }, {});
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
