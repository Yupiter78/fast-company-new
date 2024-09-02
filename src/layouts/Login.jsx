import React, { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const handleChange = ({ target }) => {
        const { value, name } = target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
};

export default Login;
