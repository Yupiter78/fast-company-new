import React, { useCallback, useState } from "react";
import TextField from "../components/TextField";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const handleChange = useCallback(({ target: { name, value } }) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }, []);
    return (
        <form action="">
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
        </form>
    );
};

export default Login;
